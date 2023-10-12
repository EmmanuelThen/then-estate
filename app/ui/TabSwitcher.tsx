import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'


type Props = {
    mortgageData: any
}

const TabSwitcher = ({ mortgageData }: Props) => {
    return (
        <div>

            <Tabs.Root
                className="border rounded border-slate4"
                defaultValue="tab1"
            >
                {/* Navbar */}
                <Tabs.List className="max-h-[25px] bg-slate2 border-b items-center shrink-0 flex z-[999]" aria-label="Nav bar">
                    <Tabs.Trigger
                        className="hover:cursor-pointer px-5 h-[25px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                        value="tab1"
                    >
                        Mortgage
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="hover:cursor-pointer px-5 h-[25px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                        value="tab2"
                    >
                        Details
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="hover:cursor-pointer px-5 h-[25px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                        value="tab3"
                    >
                        Rates
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="hover:cursor-pointer px-5 h-[25px] flex-1 flex items-center justify-center text-xs leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                        value="tab4"
                    >
                        Investment analysis
                    </Tabs.Trigger>
                </Tabs.List>
                {/* Home Content */}
                <Tabs.Content
                    className="transition duration-150 ease-in-out "
                    value="tab1"
                >
                    {mortgageData}
                </Tabs.Content>
                {/* Dashboard Content */}
                <Tabs.Content
                    className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow py-5 rounded-b-md outline-none "
                    value="tab2"
                >
                    tab 2 content

                </Tabs.Content>
                {/* Portfolio */}
                <Tabs.Content
                    className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                    value="tab3"
                >

                    tab 3 content
                </Tabs.Content>
                <Tabs.Content
                    className="transition duration-150 ease-in-out flex flex-col items-center justify-center grow p-5 rounded-b-md outline-none "
                    value="tab4"
                >

                    tab 4 content
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export default TabSwitcher