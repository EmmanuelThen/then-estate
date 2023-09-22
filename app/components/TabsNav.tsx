'use client'
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import Heading from './Heading'
import Button from '../ui/Button'

type Props = {}

const TabsNav = (props: Props) => {
    return (
        <Tabs.Root
            className="rounded-lg flex flex-col w-full px-10"
            defaultValue="tab1"
        >
            <Tabs.List className="shrink-0 flex" aria-label="Manage your account">
                <div className='flex items-center justify-center'>
                    Logo
                </div>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab1"
                >
                    Home
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab2"
                >
                    Buy
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab3"
                >
                    Rent
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="hover:cursor-pointer px-5 h-[45px] flex-1 flex items-center justify-center text-xs md:text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-blue9 data-[state=active]:text-blue9 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    value="tab4"
                >
                    Mortgage & Finance Tools
                </Tabs.Trigger>
                <div className='flex items-center justify-center'>
                    Icon
                </div>
            </Tabs.List>
            <Tabs.Content
                className="md:p-10"
                value="tab1"
            >
                <div className='flex justify-center items-center mt-10'>
                    {/* Heading and Button */}
                    <div className='md:w-[50%]'>
                        <Heading>
                            Welcome to ThenEstate, <br />
                            your home for <br /> everything real <br /> estate.
                        </Heading>
                        <div className='flex gap-2 md:w-[80%] mt-5 md:mt-10 z-[999]'>
                            <Button  text={`Get started`}/>
                            <Button  text={`Pricing`}/>
                        </div>
                    </div>
                    {/* Circles */}
                    <div className='relative flex justify-center items-center w-[50%] mt-20 z-0'>
                        <div className="absolute border border-mint9 rounded-full h-[200px] w-[200px]" />
                        <div className="absolute border border-mint9 rounded-full h-[300px] w-[300px]" />
                        <div className="absolute border border-mint9 rounded-full h-[400px] w-[400px]" />
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content
                className="flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                value="tab2"
            >
                <Heading>
                    Buy
                </Heading>
            </Tabs.Content>
            <Tabs.Content
                className="flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                value="tab3"
            >

                tabs3
            </Tabs.Content>
            <Tabs.Content
                className="flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                value="tab4"
            >

                tabs4
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default TabsNav;