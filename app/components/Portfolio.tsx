import React from 'react'
import TrendingUpArrow from './svg/TrendingUpArrow'
import * as Accordion from '@radix-ui/react-accordion';
import AccordionDemo from '../ui/AccordionDemo';
import Watchlist from './svg/Watchlist';

type Props = {}

const Portfolio = (props: Props) => {
    const states = [
        { name: "Alabama", abbreviation: "AL" },
        { name: "Alaska", abbreviation: "AK" },
        { name: "Arizona", abbreviation: "AZ" },
        { name: "Arkansas", abbreviation: "AR" },
        { name: "California", abbreviation: "CA" },
        { name: "Colorado", abbreviation: "CO" },
        { name: "Connecticut", abbreviation: "CT" },
        { name: "Delaware", abbreviation: "DE" },
        { name: "Florida", abbreviation: "FL" },
        { name: "Georgia", abbreviation: "GA" },
        { name: "Hawaii", abbreviation: "HI" },
        { name: "Idaho", abbreviation: "ID" },
        { name: "Illinois", abbreviation: "IL" },
        { name: "Indiana", abbreviation: "IN" },
        { name: "Iowa", abbreviation: "IA" },
        { name: "Kansas", abbreviation: "KS" },
        { name: "Kentucky", abbreviation: "KY" },
        { name: "Louisiana", abbreviation: "LA" },
        { name: "Maine", abbreviation: "ME" },
        { name: "Maryland", abbreviation: "MD" },
        { name: "Massachusetts", abbreviation: "MA" },
        { name: "Michigan", abbreviation: "MI" },
        { name: "Minnesota", abbreviation: "MN" },
        { name: "Mississippi", abbreviation: "MS" },
        { name: "Missouri", abbreviation: "MO" },
        { name: "Montana", abbreviation: "MT" },
        { name: "Nebraska", abbreviation: "NE" },
        { name: "Nevada", abbreviation: "NV" },
        { name: "New Hampshire", abbreviation: "NH" },
        { name: "New Jersey", abbreviation: "NJ" },
        { name: "New Mexico", abbreviation: "NM" },
        { name: "New York", abbreviation: "NY" },
        { name: "North Carolina", abbreviation: "NC" },
        { name: "North Dakota", abbreviation: "ND" },
        { name: "Ohio", abbreviation: "OH" },
        { name: "Oklahoma", abbreviation: "OK" },
        { name: "Oregon", abbreviation: "OR" },
        { name: "Pennsylvania", abbreviation: "PA" },
        { name: "Rhode Island", abbreviation: "RI" },
        { name: "South Carolina", abbreviation: "SC" },
        { name: "South Dakota", abbreviation: "SD" },
        { name: "Tennessee", abbreviation: "TN" },
        { name: "Texas", abbreviation: "TX" },
        { name: "Utah", abbreviation: "UT" },
        { name: "Vermont", abbreviation: "VT" },
        { name: "Virginia", abbreviation: "VA" },
        { name: "Washington", abbreviation: "WA" },
        { name: "West Virginia", abbreviation: "WV" },
        { name: "Wisconsin", abbreviation: "WI" },
        { name: "Wyoming", abbreviation: "WY" }
    ];


    return (
        <div className='flex justify-between w-full'>
            {/* Heading */}
            <div className='flex flex-col gap-2 w-full'>
                <h1 className='flex justify-start font-medium mt-5 tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                    Holdings
                </h1>
                {/* Dollar amount of holdings */}
                <div className='flex flex-col'>
                    <h2 className='text-[45px]'>
                        $275,474.39
                    </h2>
                    {/* Percentage change and dollar amount change */}
                    <div className='flex items-center gap-2'>
                        <TrendingUpArrow
                            stroke={'rgb(34 197 94)'}
                        />
                        <p className='font-light text-sm text-green-500'>
                            $21.06
                        </p>
                        <p className='font-light text-sm text-green-500'>
                            (0.35%)
                        </p>
                        <p className='text-xs'>
                            Today
                        </p>
                    </div>
                    <div className='flex gap-5 w-full'>
                        <div className='w-[70%]'>
                            {states.map((states, i) => (
                                <AccordionDemo
                                    key={i}
                                    accordionTrigger={`${states.name}, ${states.abbreviation}`}
                                />
                            ))}
                        </div>
                        {/* Watchlist */}
                        <aside className='border-l-[0.8px] border-slate6 w-[30%]'>
                            <div className='flex items-center w-full justify-between'>
                                <h1 className='flex justify-start font-medium tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11 px-3'>
                                    Watchlist
                                </h1>
                                <div>
                                    <Watchlist />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Portfolio