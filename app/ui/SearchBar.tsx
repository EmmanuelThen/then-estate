import React, { use, useEffect, useState } from 'react';
import Button from './Button';
import ActionButton from './ActionButton';
import PropertyCard from './PropertyCard';
import SelectDropdown from './SelectDropdown';
import CheckBox from './CheckBox';
import LoaderRing from './LoaderRing';
import Toggle from './Toggle';
import SearchIcon from '../components/svg/SearchIcon';
import List from '../components/svg/List';

const SearchBar = () => {
    const [search, setSearch] = useState<any>('');
    const [autoCompleteResults, setAutoCompleteResults] = useState<any>([])
    const [searchMetric, setSearchMetric] = useState<any>('')
    const [searchMetricValue, setSearchMetricValue] = useState<any>('')
    const [isloading, setIsLoading] = useState<any>(false)
    const [propertiesList, setPropertiesList] = useState<any>([])
    const [searchStatus, setSearchStatus] = useState<any>([])
    const [searchCount, setSearchCount] = useState<any>('')
    const [propertyID, setPropertyID] = useState<any>('')
    const [propertyImages, setPropertyImages] = useState<any>([])
    // For amount of properties listed
    const [limit, setLimit] = useState<any>(50);

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

    const [uniqueSearchStatus, setUniqueSearchStatus] = useState(new Set());

    const handleToggleStatus = (status: any) => {
        setUniqueSearchStatus((prevStatusSet) => {
            const newStatusSet = new Set(prevStatusSet);

            if (newStatusSet.has(status)) {
                // If the status is already in the set, remove it
                newStatusSet.delete(status);
            } else {
                // If the status is not in the set, add it
                newStatusSet.add(status);
            }

            return newStatusSet;
        });
    };

    useEffect(() => {
        // Convert the set back to an array when needed (for API request)
        const statusArray = Array.from(uniqueSearchStatus);
        console.log(statusArray);
    }, [uniqueSearchStatus]);



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
                limit: limit,
                offset: 0,
                [searchMetric]: search,
                status: Array.from(uniqueSearchStatus),
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
            setSearchCount(result.data['home_search'])
            setPropertyID(result.data['home_search'].results['property_id'])
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    // Load more button functionality to add 50 more than previous amount
    const handleLoadMoreButton = () => {
        setLimit((prevLimit: number) => prevLimit + 50);
        getPropertiesList();
    };

    // Get property images api call
    // useEffect(() => {
    //     const getPropertyImages = async () => {
    //         const url = `https://realty-in-us.p.rapidapi.com/properties/v3/get-photos?property_id=${propertyID}`;
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': apiKey,
    //                 'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    //             }
    //         };

    //         try {
    //             const response = await fetch(url, options);
    //             const result = await response.json();
    //             console.log(result);
    //             // This sets propertyImges to an array with all the photo's href
    //             setPropertyImages(result.data['home_search'].results[0].photos)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     getPropertyImages();
    // },[propertyID])

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
                {/* Toggles to filter property search */}
                <div className='mt-10'>
                    <div className='grid grid-cols-2 gap-5'>
                        <Toggle
                            label={`For sale`}
                            onCheckedChange={() => handleToggleStatus('for_sale')}
                            // checked={searchStatus.includes('for_sale')}
                            value={`for_sale`}
                        />
                        <Toggle
                            label={`Ready to build`}
                            onCheckedChange={() => handleToggleStatus('ready_to_build')}
                            // checked={searchStatus.includes('ready_to_build')}
                            value={`ready_to_build`}

                        />
                        <Toggle
                            label={`For rent`}
                            onCheckedChange={() => handleToggleStatus('for_rent')}
                            // checked={searchStatus.includes('for_rent')}
                            value={`for_rent`}

                        />
                        <Toggle
                            label={`Sold`}
                            onCheckedChange={() => handleToggleStatus('sold')}
                            // checked={searchStatus.includes('sold')}
                            value={`sold`}

                        />
                        <Toggle
                            label={`Off market`}
                            onCheckedChange={() => handleToggleStatus('off_market')}
                            // checked={searchStatus.includes('off_market')}
                            value={`off_market`}

                        />
                        <Toggle
                            label={`Active`}
                            onCheckedChange={() => handleToggleStatus('active')}
                            // checked={searchStatus.includes('active')}
                            value={'active'}

                        />
                    </div>
                    {/* Search button */}
                    <div className='flex justify-center mt-10'>
                        <ActionButton
                            text={isloading ?
                                (<span className='flex items-center gap-2'> <LoaderRing /> Search properties</span>)
                                :
                                (<span className='flex items-center gap-2'> <SearchIcon /> Search properties</span>)
                            }
                            bgColor={`${isloading ? 'bg-slate10 hover:cursor-not-allowed' : 'bg-mint11'}`}
                            onClick={getPropertiesList}
                        />
                    </div>
                </div>
            </div>

            {/* Search count & dropdown filters */}
            <div className={`${propertiesList.length > 0 ? '' : 'hidden'} flex justify-between items-center p-5`}>
                <div>
                    <h1 className='font-2xl text-slate10'>
                        <span className='font-medium'>Showing on page:</span> {searchCount.count}
                    </h1>
                    <h1 className='font-2xl text-slate10'>
                        <span className='font-medium'>Results:</span> {searchCount.total}
                    </h1>
                </div>
                <div>
                    <SelectDropdown
                        searchStatus={searchStatus}
                    />
                </div>
            </div>
            {/* Properties grid */}
            <div className='grid-container w-full p-5'>
                {propertiesList.map((properties: any, i: any) => (
                    <PropertyCard
                        key={i}
                        width={800}
                        height={300}
                        imageSrc={properties['primary_photo'] === null ? '/fallback-img.svg' : properties['primary_photo'].href}
                        // propertyImages={propertyImages}
                        beds={properties.description.beds === null ? '-- beds' : `${properties.description.beds} beds`}
                        baths={properties.description.baths === null ? '-- baths' : `${properties.description.baths} baths`}
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
                        branding={properties.branding[0].name}
                        type={properties.description.type === null ? '-- type' : (properties.description.type).replace(/_/g, ' ')}
                        propertyID={properties['property_id']}
                        photoCount={properties['photo_count']}
                        agent={properties.advertisers[0].name}
                        agentEmail={properties.advertisers[0].email === null ? 'N/A' : properties.advertisers[0].email}
                        advertiserType={properties.advertisers[0].type}
                        newListing={properties.flags['is_new_listing']}
                        listDate={new Date(properties['list_date'])}
                        priceReduction={properties['price_reduced_amount']}
                        newConstruction={properties.flags['is_new_construction']}
                        fullBaths={properties.description['baths_full'] === null ? 0 : properties.description['baths_full']}
                        halfBaths={properties.description['baths_half'] === null ? 0 : properties.description['baths_half']}
                        lastSoldDate={properties['last_sold_date'] === null ? 'N/A' : properties['last_sold_date']}
                        lastSoldPrice={properties['last_sold_price'] === null ? 'N/A' : usdFormatter.format(properties['last_sold_price'])}
                    />
                ))}
            </div>
            <div className={propertiesList.length > 0 ? `flex justify-center w-full mt-20` : `hidden`}>
                <ActionButton
                    text={isloading ?
                        (<span className='flex items-center gap-2'> <LoaderRing /> Load more</span>)
                        :
                        (<span className='flex items-center gap-2'> <List /> Load more</span>)
                    }
                    bgColor={`${isloading ? 'bg-slate10 hover:cursor-not-allowed' : 'bg-blue9/30 border border-blue9 text-blue8 hover:bg-blue9/50'}`}
                    onClick={handleLoadMoreButton}
                />
            </div>
        </div>
    );
};

export default SearchBar;


