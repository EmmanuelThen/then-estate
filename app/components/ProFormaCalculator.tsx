'use client'
import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';


type Props = {}

const ProFormaCalculator = (props: Props) => {
   

    return (
        <div className='flex flex-col gap-2 w-full px-2 py-20'>
            <header>
                <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                    Tools
                </h1>
            </header>
            <Tabs.Root
                className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA2"
                defaultValue="tab1"
            >
                <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
                    <Tabs.Trigger
                        className="whitespace-nowrap px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mint11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                        value="tab1"
                    >
                        Pro forma analysis
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className=" px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mint11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                        value="tab2"
                    >
                        Password
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                    className="grow p-5  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                    value="tab1"
                >

                </Tabs.Content>
                <Tabs.Content
                    className="grow p-5  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                    value="tab2"
                >

                </Tabs.Content>
            </Tabs.Root>
        </div>


    )
}

export default ProFormaCalculator