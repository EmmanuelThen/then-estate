import React, { useEffect, useState } from 'react';

const Dashboard = () => {
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
            <div className='md:px-[300px]'>
                <label htmlFor="email">Search address:</label>
                <input
                    className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-md px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
                    type="text"
                    required
                    placeholder='Enter address'
                    id='autocomplete'
                    value={search}
                    onChange={getAutoComplete}
                />
                <div className={`${search.length > 0 ? '' : 'hidden'} flex flex-col border-t-0 rounded-t-md rounded-b bg-blackA5 h-fit shadow-md p-2`}>
                    {autoCompleteResults.map((results: any, i: any) => (
                        <div
                            className='transition duration-75 rounded ease-in-out hover:bg-mint11 hover:cursor-pointer'
                            key={i}
                        // onClick={setSearch(search)}
                        >
                            {/* {results.city ?
                                (<span>
                                    {results.city}, {results['state_code']}
                                </span>) :
                                (<span>
                                    {results.state}
                                </span>)
                            } */}
                            {
                                (() => {
                                    switch (results) {
                                        case results.city:
                                            return <span>{results.city}, {results['state_code']} {results['postal_code']}</span>;

                                        case results['full_address']:
                                            return <div>
                                                {results['full_address'].map((address: any, i: any) => (
                                                    <span key={i}>
                                                        {address}
                                                    </span>
                                                ))}
                                            </div>;

                                        case results['postal_code']:
                                            return <div>{results.city}</div>;

                                        default:
                                            return <div>Default Content</div>;
                                    }
                                })()
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
