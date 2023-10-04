import React, { useEffect, useState } from 'react';
import Button from './Button';
import ActionButton from './ActionButton';
import PropertyCard from './PropertyCard';
import SelectDropdown from './SelectDropdown';
import CheckBox from './CheckBox';
import LoaderRing from './LoaderRing';
import Toggle from './Toggle';

const SearchBar = () => {
    const [search, setSearch] = useState<any>('');
    const [autoCompleteResults, setAutoCompleteResults] = useState<any>([])
    const [searchMetric, setSearchMetric] = useState<any>('')
    const [searchMetricValue, setSearchMetricValue] = useState<any>('')
    const [isloading, setIsLoading] = useState<any>(false)
    const [propertiesList, setPropertiesList] = useState<any>([])
    const [searchStatus, setSearchStatus] = useState<any>([])
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [checked, setChecked] = useState<any>(false)

    // regex patterns
    const usAddressRegex = /^[0-9]{1,5}\s[a-zA-Z0-9\s,'-]*,\s[a-zA-Z]+\s[0-9]{5}$/;
    const zipCodeRegex = /^[0-9]+$/;
    const stateCodeRegex = /^[A-Z]{2}$/;
    const cityRegex = /^[A-Za-z\s'-]+$/;

    // search metrics
    const postalCode = 'postal_code';
    const fullAddress = 'address';
    const state = 'state_code';
    const city = 'city';

    // USD formatter
    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const handleToggleStatus = (status: any) => {
        if (searchStatus.includes(status)) {
          // If the status is already in the searchStatus array, remove it
          setSearchStatus(searchStatus.filter((s: any) => s !== status));
        } else {
          // If the status is not in the searchStatus array, add it
          setSearchStatus([...searchStatus, status]);
        }
        console.log(searchStatus);
        // console.log(status);
      };



    // minimum search character limit
    const minimumCharacterLimit = 500;

    const apiKey = process.env.NEXT_PUBLIC_REAL_ESTATE_API_KEY as string

    const getAutoComplete = async (e: any) => {
        setSearch(e.target.value)

        if (search.length >= minimumCharacterLimit) {
            const url = `https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=${encodeURIComponent(search)}&limit=10`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                if (result.autocomplete.length > 0) {
                    setAutoCompleteResults(result.autocomplete)
                } else {
                    console.log('No results returned')
                }
                console.log(result.autocomplete);
                console.log(autoCompleteResults)
            } catch (error) {
                console.error(error);
            }
        } else {

        }
    }

    useEffect(() => {
        if (usAddressRegex.test(search)) {
            setSearchMetric(fullAddress);
        } else if (zipCodeRegex.test(search)) {
            setSearchMetric(postalCode);
        } else if (stateCodeRegex.test(search)) {
            setSearchMetric(state);
        } else if (cityRegex.test(search)) {
            setSearchMetric(city);
        } else {
            // Handle the case where none of the regex patterns match
            setSearchMetric('defaultMetric');
        }
    }, [search]);


    const getPropertiesList = async () => {
        setIsLoading(true);

        console.log(searchMetric)

        const url = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
            },
            body: JSON.stringify({
                limit: 200,
                offset: 0,
                [searchMetric]: search,
                status: searchStatus,
                sort: {
                    direction: 'desc',
                    field: 'list_date',
                },
            }),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            setPropertiesList(result.data['home_search'].results);
            // console.log(propertiesList);
            console.log(searchStatus);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='mt-7 w-full h-full'>
            <div className='flex flex-col items-center justify-center mt-10 px-10 md:px-20 lg:px-[250px] xl:px-[500px]'>
                <div className='inline-block relative w-full'>
                    <svg style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                    }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.2"
                        stroke="currentColor"
                        className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        className="box-border w-full bg-blackA5 shadow-mint11 inline-flex h-[35px] appearance-none items-center justify-center font-light rounded-md px-[40px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                        type="text"
                        required
                        placeholder='Enter address, city, or ZIP code'
                        id='dark-mode'
                        value={search}
                        onChange={getAutoComplete}
                    />
                </div>

                <ul className={`${search.length > 0 ? '' : 'hidden'} flex flex-col border-t-0 rounded-t-md rounded-b bg-blackA5 h-fit shadow-md p-2 w-full`}>
                    {autoCompleteResults.map((results: any, i: any) => (
                        <li
                            className='transition duration-0 rounded ease-in-out hover:bg-mint11 hover:cursor-pointer text-[15px]'
                            key={i}
                        // onClick={setSearch(search)}
                        >
                            {(() => {
                                if (results['full_address']) {
                                    return (
                                        <span className='flex flex-col'>
                                            {results['full_address'][0]}
                                        </span>
                                    );
                                }
                                else if (results['postal_code']) {
                                    <span>{results.city} {results['state_code']}</span>
                                }
                                else if (results.city) {
                                    return (
                                        <span>
                                            {results.city}, {results['state_code']} {results['postal_code']}
                                        </span>
                                    );
                                } else {
                                    return <span>Default Content</span>;
                                }
                            })()}
                        </li>
                    ))}
                </ul>
                {/* Search button */}
                <div className='mt-10'>
                    {/* <div className='flex justify-evenly gap-5  w-full'>
                        <CheckBox
                            checked={checked}
                            handleChange={handleCheckboxChange('for_sale')}
                            status={`For sale`}
                        />
                        <CheckBox
                            checked={checked}
                            handleChange={handleCheckboxChange('ready_to_build')}
                            status={`Ready to build`}
                        />
                        <CheckBox
                            checked={checked}
                            handleChange={handleCheckboxChange('for_rent')}
                            status={`For rent`}
                        />
                        <CheckBox
                            checked={checked}
                            handleChange={handleCheckboxChange('sold')}
                            status={`Sold`}
                        />
                        <CheckBox
                            checked={checked}
                            handleChange={handleCheckboxChange('off_market')}
                            status={`Off market`}
                        />
                        <CheckBox
                            checked={checked}
                            handleChange={handleCheckboxChange('active')}
                            status={`Active`}
                        />
                    </div> */}
                    <div className='grid grid-cols-2 gap-5'>
                        <Toggle
                            label={`For sale`}
                            onCheckedChange={() => handleToggleStatus('for_sale')}
                            checked={searchStatus.includes('for_sale')}
                            value={`for_sale`}
                        />
                        <Toggle
                            label={`Ready to build`}
                            onCheckedChange={() => handleToggleStatus('ready_to_build')}
                            checked={searchStatus.includes('ready_to_build')}
                            value={`ready_to_build`}

                        />
                        <Toggle
                            label={`For rent`}
                            onCheckedChange={() => handleToggleStatus('for_rent')}
                            checked={searchStatus.includes('for_rent')}
                            value={`for_rent`}

                        />
                        <Toggle
                            label={`Sold`}
                            onCheckedChange={() => handleToggleStatus('sold')}
                            checked={searchStatus.includes('sold')}
                            value={`sold`}

                        />
                        <Toggle
                            label={`Off market`}
                            onCheckedChange={() => handleToggleStatus('off_market')}
                            checked={searchStatus.includes('off_market')}
                            value={`off_market`}

                        />
                        <Toggle
                            label={`Active`}
                            onCheckedChange={() => handleToggleStatus('active')}
                            checked={searchStatus.includes('active')}
                            value={'active'}

                        />
                    </div>
                    <div className='flex justify-center mt-10'>
                        <ActionButton
                            text={isloading ? <LoaderRing /> : 'Search properties'}
                            bgColor={`${isloading ? 'bg-slate10 hover:cursor-not-allowed' : 'bg-mint11'}`}
                            onClick={getPropertiesList}
                        />
                    </div>
                </div>
            </div>
            {/* Dropdown */}
            <div className='flex justify-end w-full p-20'>
                <SelectDropdown
                    searchStatus={searchStatus}
                />
            </div>
            <div className='grid-container w-full mt-20 p-5'>
                {propertiesList.map((properties: any, i: any) => (
                    <PropertyCard
                        key={i}
                        width={800}
                        height={300}
                        imageSrc={properties['primary_photo'] === null ? '/fallback-img.svg' : properties['primary_photo'].href}
                        beds={`${properties.description.beds} beds`}
                        baths={`${properties.description.baths} baths`}
                        squareFeet={properties.description.sqft === null ? '-- sqft' : `${properties.description.sqft} sqft.`}
                        streetAddress={properties.location.address.line}
                        cityStateZip={`${properties.location.address.city}, ${properties.location.address['state_code'].toUpperCase()} ${properties.location.address['postal_code']}`}
                        price={usdFormatter.format(properties['list_price'])}
                        status={
                            (() => {
                                switch (properties.status) {
                                    case 'for_sale':
                                        return 'For sale';
                                    case 'ready_to_build':
                                        return 'Ready to build';
                                    case 'for_rent':
                                        return 'For rent';
                                    case 'sold':
                                        return 'Sold';
                                    case 'off_market':
                                        return 'Off market';
                                    case 'other':
                                        return 'N/A';
                                    case 'active':
                                        return 'Active';
                                    default:
                                        return '--';
                                }
                            })()
                        }
                    />
                ))}
            </div>
            <div className='flex justify-center w-full'>
                <Button
                    text={`Load more`}
                    bgColor={'bg-slate10/50'}
                />
            </div>
        </div>
    );
};

export default SearchBar;
