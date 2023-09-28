import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState<any>('');
    const [autoCompleteResults, setAutoCompleteResults] = useState<any>([])

    const getAutoComplete = async (e: any) => {
        const url = `https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=${encodeURIComponent(search)}&limit=10`;
        setSearch(e.target.value)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5510b530b3mshfee80ac9ad31df0p1f3566jsn18e8846960e7',
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
    }

    

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
                        placeholder='Enter address, ZIP, or city'
                        id='autocomplete'
                        value={search}
                        onChange={getAutoComplete}
                    />
                </div>
                <div className={`${search.length > 0 ? '' : 'hidden'} flex flex-col border-t-0 rounded-t-md rounded-b bg-blackA5 h-fit shadow-md p-2 w-full`}>
                    {autoCompleteResults.map((results: any, i: any) => (
                        <div
                            className='transition duration-0 rounded ease-in-out hover:bg-mint11 hover:cursor-pointer text-[15px]'
                            key={i}
                        // onClick={setSearch(search)}
                        >
                            {(() => {
                                if (results['full_address']) {
                                    return (
                                        <div className='flex flex-col'>
                                            {results['full_address'][0]}
                                        </div>
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
                                    return <div>Default Content</div>;
                                }
                            })()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
