'use client'
import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Seperator from '../ui/Seperator';
import { useProformaContext } from '../context/ProFormaContext';
import Button from '../ui/Button';


type Props = {}

const ProFormaCalculator = (props: Props) => {
    const { monthlyRentInput,
        salePriceInput,
        setSalePriceInput,
        propTaxInput,
        propInsuranceInput,
        propUtilitiesInput,
        propManagementInput,
        propVacancyInput,
        propMaintenanceInput,
        grossRentOutput,
        propManagementOutput,
        propTaxOutput,
        propVacancyOutput,
        propMaintenanceOutput,
        propInsuranceOutput,
        propUtilitiesOutput,
        totalOpexOutput,
        monthlyNoiOutput,
        annualNoiOutput,
        capRateOutput } = useProformaContext();




    return (
        <div className='flex flex-col gap-2 w-full px-2 py-20'>
            <header>
                <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                    Tools & Calculators
                </h1>
            </header>
            <Tabs.Root
                className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
                defaultValue="tab1"
            >
                <Tabs.List className="shrink-0 flex border-b border-sky12" aria-label="Calculators">
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
                        Mortgage
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content
                    className="grow p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                    value="tab1"
                >
                    <div className="main-input-table">

                        <table className="table table-sm table-dark table-striped ">
                            <thead>
                                <tr>
                                    <th>
                                        <Seperator text={`Sale price`} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-sm'>
                                <tr>
                                    <td>
                                        <label className="font-light">Sale price</label>
                                        <input
                                            className='rounded p-2 bg-blackA2'
                                            type="number"
                                            pattern='/[^0-9]/g'
                                            value={salePriceInput}
                                            onChange={(e) => setSalePriceInput(e.target.value)}
                                            min="0"
                                            placeholder="Enter Sale Price"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className='mt-3' />
                    </div>
                    <div className="main-input-exp">
                        <table className="table table-sm table-dark table-striped">
                            <thead>
                                <th className="fw-normal" id="exp-header">
                                    <Seperator text={`Mortgage`} />
                                </th>
                            </thead>
                            <tbody className='text-sm'>
                                <tr>
                                    <td>
                                        <label className="font-light" >Downpayment (%) </label>
                                        <input className='rounded p-2 bg-blackA2 focus:shadow-[0_0_0_2px] focus:shadow-mint11'
                                            type="number"
                                            pattern='/[^0-9]/g'
                                            min="0"
                                            placeholder="Enter Downpayment"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="font-light" >Interest Rate (%) </label>
                                        <input className='rounded p-2 bg-blackA2 focus:shadow-[0_0_0_2px] focus:shadow-mint11'
                                            type="number"
                                            pattern='/[^0-9]/g'
                                            min="0"
                                            placeholder="Enter Interest Rate"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="font-light" >Loan Term (Years) </label>
                                        <input className='rounded p-2 bg-blackA2 focus:shadow-[0_0_0_2px] focus:shadow-mint11'
                                            type="number"
                                            pattern='/[^0-9]/g'
                                            min="0"
                                            placeholder="Enter Loan Term"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="font-light" >Closing Cost </label>
                                        <input className='rounded p-2 bg-blackA2 focus:shadow-[0_0_0_2px] focus:shadow-mint11'
                                            type="number"
                                            pattern='/[^0-9]/g'
                                            min="0"
                                            placeholder="Enter Closing Cost"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-sm">

                        <table className="table table-sm table-dark table-striped ">
                            <thead>
                                <th className="fw-normal" id="exp-header">
                                    <Seperator text={`Total rent/mo.`} />
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className='rounded p-2 bg-blackA2' id="monthly-rent" type="number" min="0" placeholder="Enter monthly rent" /></td>
                                </tr>
                            </tbody>
                        </table>

                        <hr />

                        <div className="main-input-exp">
                            <table className="table table-sm table-dark table-striped ">
                                <thead>
                                    <th className="fw-normal" id="exp-header">
                                        <Seperator text={`Expenses`} />
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label >Property Tax Per Year</label>
                                            <input className='rounded p-2 bg-blackA2' type="number" id="prop-tax" min="0" placeholder="Enter Property Tax" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label >Insurance Per Month</label>
                                            <input className='rounded p-2 bg-blackA2' type="number" id="prop-ins" min="0" placeholder="Enter Insurance" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label >Utilities Per Month</label>
                                            <input className='rounded p-2 bg-blackA2' type="number" id="prop-utilities" min="0" placeholder="Enter Utilities" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label >Property Management (%) </label>
                                            <input className='rounded p-2 bg-blackA2' type="number" id="prop-mngmt" min="0" placeholder="Enter Management" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label >Vacancy (%)</label>
                                            <input className='rounded p-2 bg-blackA2' type="number" id="prop-vacancy" min="0" placeholder="Enter Vacancy" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label >Maintenance (%)</label>
                                            <input className='rounded p-2 bg-blackA2' type="number" id="prop-maintenance" min="0" placeholder="Enter Maintenance" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <Button
                        bgColor='bg-mint11'
                        text={`Calculate Pro Forma Analysis`}
                    />


                </Tabs.Content>
                <Tabs.Content
                    className="grow p-5  rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                    value="tab2"
                >

                </Tabs.Content>
            </Tabs.Root>
        </div >


    )
}

export default ProFormaCalculator