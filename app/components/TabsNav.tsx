'use client'
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import Heading from './Heading'
import Button from '../ui/Button'
import Image from 'next/image'
import GradientBlur from './GradientBlur'
import Stats from './Stats'
import Checkmark from './svg/Checkmark'
import ListItem from './ListItem'

type Props = {}

const TabsNav = (props: Props) => {
    return (
        <Tabs.Root
            className="rounded-lg flex flex-col w-full"
            defaultValue="tab1"
        >
            <Tabs.List className="max-h-[45px] fixed w-full backdrop-blur-2xl shadow-blackA9 shadow-[0px_4px_7px] items-center shrink-0 flex z-[999]" aria-label="Nav bar">
                {/* Logo div */}
                <div className=''>
                    <svg width="70" height="70" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                        <rect width="500" height="500" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_0_1" transform="scale(0.002)" />
                            </pattern>
                            <image id="image0_0_1" width="10" height="10" href="data:image/png;base64,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" />
                        </defs>
                    </svg>
                </div>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab1"
                >
                    Home
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab2"
                >
                    Buy
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab3"
                >
                    Rent
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab4"
                >
                    Tools & Calculators
                </Tabs.Trigger>

            </Tabs.List>
            <Tabs.Content
                className="transition duration-150 ease-in-out "
                value="tab1"
            >
                <div className='flex justify-center items-center mt-20'>
                    {/* Heading and Button */}
                    <div className='xl:px-[500px]'>
                        <h1 className='z-[999] flex justify-center py-2 font-bold mt-5 tracking-[-0.03em] md:leading-[1.10] md:text-[55px] bg-clip-text text-center text-4xl text-mint11'>
                            Home for all of your
                            real <br /> estate needs.
                        </h1>
                        <h2 className='flex justify-center items-center text-slate10 mt-10 md:text-xl font-light mx-10 text-center'>
                            Experience Real Estate at its Best – Welcome to ThenEstate.
                        </h2>
                        <div className='flex flex-col justify-center md:flex-row gap-3 mt-5 md:mt-10 mx-20 md:mx-0'>
                            <Button
                                text={`Get started`}
                                outline=''
                            />
                            <Button
                                text={`Pricing`}
                                outline='border-[0.5px] border-mint9 bg-mint11/80'
                            />
                        </div>
                        <div className='flex isolate justify-center mt-10'>
                            <GradientBlur />
                        </div>
                    </div>
                </div>
                {/* Dashboard Image */}
                <div className='flex justify-center'>
                    <div className='bg-slate4 rounded flex justify-center items-center absolute top-[500px] md:top-[600px] border border-sky12 w-[400px] h-[300px] md:w-[800px] md:h-[500px]'>
                        dahsboard image
                    </div>
                </div>
                {/* Stats */}
                <div className='mt-[100px] md:mt-[300px]'>
                    <Stats />
                </div>
                {/* Features */}
                <div className='p-5 bg-sky12'>
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <div className='md:w-[50%]'>
                            <h1 className='capitalize font-medium text-mint11 mb-5'>
                                property search
                            </h1>
                            <p className=''>
                                Welcome to our Property Search Feature – Your Gateway to the Perfect Home!

                                Looking for your dream property has never been easier. Explore an extensive database of homes,

                                apartments, and real estate listings, tailored to your preferences. Whether you're searching

                                for a cozy family home, a trendy city apartment, or an investment opportunity, our Property Search Feature

                                is your one-stop solution.
                            </p>
                        </div>
                        {/* Features list */}
                        <div className='w-[50%]'>
                            <div className='flex flex-col gap-3'>
                                <ListItem text={'Personalized search'} />
                                <ListItem text={'Real time updates'} />
                                <ListItem text={'Interactive maps'} />
                                <ListItem text={'Comprehensive information'} />
                                <ListItem text={'Investment information and ratings'} />
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content
                className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                value="tab2"
            >
                <Heading>
                    Buy
                </Heading>
            </Tabs.Content>
            <Tabs.Content
                className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                value="tab3"
            >

                tabs3
            </Tabs.Content>
            <Tabs.Content
                className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                value="tab4"
            >

                tabs4
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default TabsNav;