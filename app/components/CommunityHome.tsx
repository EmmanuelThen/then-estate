'use client'
import React from 'react'
import SelectDropdown from '../ui/SelectDropdown'
import Heading from './Heading'

type Props = {}

const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
];


const CommunityHome = (props: Props) => {
    return (
        <div className='flex justify-between gap-8 items-center p-2 border-b-[0.5px] border-slate9 w-full'>
            <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                Home
            </h1>
            {/* Searchbar */}
            <form className='inline-flex justify-center items-center relative w-full' action="/search" method="GET">
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
                    className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                    className="truncate w-full bg-blackA2 inline-flex h-[35px] appearance-none items-center justify-center font-light rounded-full px-[40px] text-sm leading-none shadow-md border border-blackA9 outline-none transition duration-150 ease-in-out"
                    type="search"
                    name="query"
                    placeholder="Search community"
                />

            </form>
            {/* Button nav */}
            <div className='flex items-center rounded gap-3 bg-blackA5 p-1'>
                <button className='px-[15px] text-[13px] leading-none h-[30px] gap-[5px] hover:rounded-[2px] hover:transition hover:duration-150 hover:ease-in-out hover:shadow-md hover:bg-blackA6'>
                    <span className='text-white whitespace-nowrap'>Community feed</span>
                </button>
                <button className='px-[15px] text-[13px] leading-none h-[30px] gap-[5px] hover:rounded-[2px] hover:transition hover:duration-150 hover:ease-in-out hover:shadow-md hover:bg-blackA6'>
                    <span className='text-white'>Explore</span>
                </button>
                {/* <label htmlFor="states">Select a community</label> */}
                <div>
                    <select
                        className='inline-flex items-center justify-center rounded-[2px] px-[15px] text-[13px] text-white leading-none h-[30px] gap-[5px] hover:opacity-70 transition duration-150 ease-in-out shadow-md bg-mint11 cursor-pointer outline-none'
                        id="states"
                        name="states"
                    >
                        {states.map((state, i) => (
                            <option key={i} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CommunityHome