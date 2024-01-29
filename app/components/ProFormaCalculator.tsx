'use client'
import React, { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Seperator from '../ui/Seperator';
import { useProformaContext } from '../context/ProFormaContext';
import Button from '../ui/Button';
import LoaderRing from '../ui/LoaderRing';
import ActionButton from '../ui/ActionButton';


type Props = {}

const ProFormaCalculator = (props: Props) => {
    // for testing
    const [rates, setRates] = useState([]);
    const [calculateMortgage, setCalculateMortgage] = useState([])
    const [monthlyPaymentDetails, setMonthlyPaymentDetails] = useState([])
    // These 3 are for testing ^^^^^
    const [loading, setLoading] = useState(false);
    const [homeInsurance, setHomeInsurance] = useState('')
    const [propertyTaxRate, setPropertyTaxRate] = useState('')
    const [downPayment, setDownPayment] = useState('')
    const [price, setPrice] = useState('')
    const [term, setTerm] = useState('')
    const [rate, setRate] = useState('')
    const [hoaFees, setHoaFees] = useState('')

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

    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    function formatType(type) {
        // To replace underscores with spaces and capitalize each word
        const formattedType = type.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

        return formattedType;
    }

    //Test
    const checkRatesApiCall: any = {
        "data": {
            "loan_analysis": {
                "__typename": "LoanAnalysis",
                "market": {
                    "__typename": "Market",
                    "mortgage_data": {
                        "__typename": "MortgageData",
                        "insurance_rate": 0.003,
                        "property_tax_rate": 0.0124,
                        "average_rates": [
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "thirty_year_fix",
                                    "term": 30,
                                    "display_name": "30-year fixed",
                                    "is_va_loan": null,
                                    "is_fixed": true
                                },
                                "rate": 0.06917
                            },
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "twenty_year_fix",
                                    "term": 20,
                                    "display_name": "20-year fixed",
                                    "is_va_loan": null,
                                    "is_fixed": true
                                },
                                "rate": 0.06658
                            },
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "fifteen_year_fix",
                                    "term": 15,
                                    "display_name": "15-year fixed",
                                    "is_va_loan": null,
                                    "is_fixed": true
                                },
                                "rate": 0.06177
                            },
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "ten_year_fix",
                                    "term": 10,
                                    "display_name": "10-year fixed",
                                    "is_va_loan": null,
                                    "is_fixed": true
                                },
                                "rate": 0.06131
                            },
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "thirty_year_fha",
                                    "term": 30,
                                    "display_name": "30-year fixed FHA",
                                    "is_va_loan": null,
                                    "is_fixed": true
                                },
                                "rate": 0.06114
                            },
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "thirty_year_va",
                                    "term": 30,
                                    "display_name": "30-year fixed VA",
                                    "is_va_loan": true,
                                    "is_fixed": true
                                },
                                "rate": 0.0616
                            },
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "five_one_arm",
                                    "term": 30,
                                    "display_name": "5-year ARM",
                                    "is_va_loan": null,
                                    "is_fixed": false
                                },
                                "rate": 0.07205
                            },
                            {
                                "__typename": "Rate",
                                "loan_type": {
                                    "__typename": "LoanType",
                                    "loan_id": "seven_one_arm",
                                    "term": 30,
                                    "display_name": "7-year ARM",
                                    "is_va_loan": null,
                                    "is_fixed": false
                                },
                                "rate": 0.0708
                            }
                        ]
                    }
                }
            }
        }
    }
    //Test
    const calculateMortgageApiCall: any = {
        "data": {
            "loan_mortgage": {
                "__typename": "LoanMortgage",
                "loan_amount": 179920,
                "rate": 3.827,
                "term": 30,
                "monthly_payment": 80835,
                "monthly_payment_details": [
                    {
                        "__typename": "MonthlyOwnershipExpense",
                        "type": "principal_and_interest",
                        "amount": 57379,
                        "display_name": null
                    },
                    {
                        "__typename": "MonthlyOwnershipExpense",
                        "type": "hoa_fees",
                        "amount": 0,
                        "display_name": null
                    },
                    {
                        "__typename": "MonthlyOwnershipExpense",
                        "type": "mortgage_insurance",
                        "amount": 0,
                        "display_name": null
                    },
                    {
                        "__typename": "MonthlyOwnershipExpense",
                        "type": "property_tax",
                        "amount": 23400,
                        "display_name": null
                    },
                    {
                        "__typename": "MonthlyOwnershipExpense",
                        "type": "home_insurance",
                        "amount": 56,
                        "display_name": null
                    }
                ],
                "total_payment": 20656615
            }
        }
    }

    const calculateMortgageApiReal = async () => {
        const url = `https://realty-in-us.p.rapidapi.com/mortgage/v2/calculate?home_insurance=${homeInsurance}&property_tax_rate=${propertyTaxRate}&down_payment=${downPayment}&price=${price}&term=${term}&rate=${rate}&hoa_fees=${hoaFees}&apply_veterans_benefits=false`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bfe3b112a2mshd066685ec635a3dp135ceejsnaecff3296ecb',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            setLoading(true);
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setCalculateMortgage(result.data['loan_mortgage']);
            setMonthlyPaymentDetails(result.data['loan_mortgage']['monthly_payment_details'])
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getRates = async () => {
            // const url = 'https://realty-in-us.p.rapidapi.com/mortgage/v2/check-rates?postal_code=28269';
            // const options = {
            //     method: 'GET',
            //     headers: {
            //         'X-RapidAPI-Key': 'bfe3b112a2mshd066685ec635a3dp135ceejsnaecff3296ecb',
            //         'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            //     }
            // };

            try {
                // const response = await fetch(url, options);
                // const result = await response.text();
                // console.log(result);
                setRates(checkRatesApiCall.data['loan_analysis'].market['mortgage_data']['average_rates']);
                setCalculateMortgage(calculateMortgageApiCall.data['loan_mortgage']);
                setMonthlyPaymentDetails(calculateMortgageApiCall.data['loan_mortgage']['monthly_payment_details']);
            } catch (error) {
                console.error(error);
            }
        }
        getRates()
    }, [])
    return (
        <div className='flex flex-col gap-2 w-full px-2 py-20'>
            <header>
                <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                    Tools & Calculators
                </h1>
            </header>
            <div className='py-10 md:p-10'>
                <Tabs.Root
                    className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
                    defaultValue="tab2"
                >
                    <Tabs.List className="shrink-0 flex border-b border-sky12" aria-label="Calculators">
                        <Tabs.Trigger
                            className="whitespace-nowrap px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                            value="tab1"
                        >
                            Check rates
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className=" px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                            value="tab2"
                        >
                            Mortgage
                        </Tabs.Trigger>
                        {/* <Tabs.Trigger
                            className=" px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                            value="tab3"
                        >
                            Affordability
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className=" px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                            value="tab4"
                        >
                            Check equity rates
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className=" px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                            value="tab5"
                        >
                            Pro forma analysis
                        </Tabs.Trigger> */}
                    </Tabs.List>
                    <Tabs.Content
                        className="grow p-5 rounded-b-md outline-none  "
                        value="tab1"
                    >
                        <header>
                            <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl'>
                                Check rates
                            </h1>
                        </header>
                        <div className='flex items-center gap-3 mt-5 text-sm'>
                            <input
                                className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                type="number"
                                placeholder='Enter ZIP code'
                            />
                            <ActionButton
                                text={'Check rates'}
                                bgColor={'bg-mint11'}
                                onClick={undefined}
                            />
                        </div>
                        <div className='property-badge-grid mt-10'>
                            {loading ? (
                                <div className='flex items-center justify-center'>
                                    <LoaderRing />
                                </div>
                            ) : rates.map((rate, i) => (
                                <div className='rounded bg-blackA2 p-2' key={i}>
                                    <label className='font-medium text-2xl'>
                                        {rate['loan_type']['display_name']}
                                    </label>
                                    <p className='font-light'>
                                        {(rate.rate * 100).toFixed(2)} %
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Tabs.Content>
                    {/* Mortgage calculator */}
                    <Tabs.Content
                        className="grow p-5 rounded-b-md outline-none  "
                        value="tab2"
                    >
                        <header>
                            <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text md:text-center text-3xl'>
                                Calculate mortgage
                            </h1>
                        </header>
                        <div className='lg:flex gap-5'>
                            {/* Mortgage calulator inputs */}
                            <div className='flex flex-col gap-3 mt-5 text-sm md:px-20 lg:px-0 lg:w-[30%]'>
                                <label className='font-medium' htmlFor='price'>
                                    Price
                                </label>
                                <input
                                    className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                    id='price'
                                    value={price}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(inputValue)) {
                                            setPrice(inputValue);
                                        } else {
                                            //
                                        }
                                    }}
                                    type="text"
                                    pattern="\d*\.?\d*"
                                    placeholder='Enter price'
                                />
                                <label className='font-medium' htmlFor='down-payment'>
                                    Down payment
                                </label>
                                <input
                                    className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                    id='down-payment'
                                    value={downPayment}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(inputValue)) {
                                            setDownPayment(inputValue);
                                        } else {
                                            //
                                        }
                                    }}
                                    type="text"
                                    pattern="\d*\.?\d*"
                                    placeholder='Enter down payment'
                                />
                                <label className='font-medium' htmlFor='term'>
                                    Term (years)
                                </label>
                                <input
                                    className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                    id='term'
                                    value={term}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(inputValue)) {
                                            setTerm(inputValue);
                                        } else {
                                            //
                                        }
                                    }}
                                    type="text"
                                    pattern="\d*\.?\d*"
                                    placeholder='Enter loan term'
                                />
                                <label className='font-medium' htmlFor='int-rate'>
                                    Interest rate (%)
                                </label>
                                <input
                                    className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                    id='int-rate'
                                    value={rate}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(inputValue)) {
                                            setRate(inputValue);
                                        } else {
                                        }
                                    }}
                                    type="text"
                                    pattern="\d*\.?\d*"
                                    placeholder='Enter interest rate'
                                />
                                <label className='font-medium' htmlFor='hoa'>
                                    HOA fee
                                </label>
                                <input
                                    className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                    id='hoa'
                                    value={hoaFees}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(inputValue)) {
                                            setHoaFees(inputValue);
                                        } else {
                                            //
                                        }
                                    }}
                                    type="text"
                                    pattern="\d*\.?\d*"
                                    placeholder='Enter HOA fee'
                                />
                                <label className='font-medium' htmlFor='property-tax-rate'>
                                    Property tax rate
                                </label>
                                <input
                                    className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                    id='property-tax-rate'
                                    value={propertyTaxRate}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(inputValue)) {
                                            setPropertyTaxRate(inputValue);
                                        } else {
                                            //
                                        }
                                    }}
                                    type="text"
                                    pattern="\d*\.?\d*"
                                    placeholder='Enter property tax rate'
                                />
                                <label className='font-medium' htmlFor='home-insurance'>
                                    Home insurance
                                </label>
                                <input
                                    className='rounded-full p-3 bg-blackA2 font-light h-[35px] hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
                                    id='home-insurance'
                                    value={homeInsurance}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        if (/^\d*\.?\d*$/.test(inputValue)) {
                                            setHomeInsurance(inputValue);
                                        } else {
                                            //
                                        }
                                    }}
                                    type="text"
                                    pattern="\d*\.?\d*"
                                    placeholder='Enter home insurance'
                                />
                                <ActionButton
                                    text={'Calculate mortgage'}
                                    bgColor={!(price && downPayment && term && rate && hoaFees && propertyTaxRate && homeInsurance) ? 'bg-slate10 hover:cursor-not-allowed hover:opacity-100' : 'bg-mint11'}
                                    onClick={calculateMortgageApiReal}
                                    disabled={(price && downPayment && term && rate && hoaFees && propertyTaxRate && homeInsurance) ? false : true}
                                />
                            </div>
                            {/* Results when calculate button is clicked */}
                            <div className='mt-10 md:mt-0 lg:w-[70%]'>
                                {loading ? (
                                    <div className='flex items-center justify-center h-full w-full'>
                                        <LoaderRing />
                                    </div>
                                ) : (
                                    <>
                                        <div className='property-badge-grid'>
                                            {/* Loan amount */}
                                            <div className='rounded bg-blackA2 p-2' >
                                                <label className='font-medium text-2xl'>
                                                    Loan Amount
                                                </label>
                                                <p className='font-light'>
                                                    {usdFormatter.format(calculateMortgage['loan_amount'])}
                                                </p>
                                            </div>
                                            {/* Interest paid */}
                                            <div className='rounded bg-blackA2 p-2' >
                                                <label className='font-medium text-2xl'>
                                                    Interest Paid
                                                </label>
                                                <p className='font-light'>
                                                    {usdFormatter.format(((calculateMortgage['total_payment'] / 100)) - ((calculateMortgage['loan_amount'])))}
                                                </p>
                                            </div>
                                            {/* Total payment */}
                                            <div className='rounded bg-blackA2 p-2' >
                                                <label className='font-medium text-2xl'>
                                                    Total Payment
                                                </label>
                                                <p className='font-light'>
                                                    {usdFormatter.format(calculateMortgage['total_payment'] / 100)}
                                                </p>
                                            </div>
                                            {/* Monthly payment */}
                                            <div className='rounded bg-blackA2 p-2' >
                                                <label className='font-medium text-2xl'>
                                                    Monthly Payment
                                                </label>
                                                <p className='font-light'>
                                                    {usdFormatter.format(calculateMortgage['monthly_payment'] / 100)}
                                                </p>
                                            </div>
                                        </div>
                                        <Seperator text={'Monthly payment breakdown'} />
                                        {/* Monthly payment breakdown */}
                                        <div className='flex flex-col gap-3 mt-5'>
                                            {monthlyPaymentDetails.map((details, i) => (
                                                <div className='rounded bg-blackA2 p-2 slide-in-blurred-top' key={i}>
                                                    <label className='font-medium text-2xl'>
                                                        {formatType(details.type)}
                                                    </label>
                                                    <p className='font-light'>
                                                        {usdFormatter.format(details.amount / 100)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content
                        className="grow p-5 rounded-b-md outline-none  "
                        value="tab5"
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
                                                className='rounded p-2 bg-blackA2 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
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
                                            <input className='rounded p-2 bg-blackA2  hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
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
                                            <input className='rounded p-2 bg-blackA2  hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
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
                                            <input className='rounded p-2 bg-blackA2  hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
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
                                            <input className='rounded p-2 bg-blackA2  hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out'
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
                                        <td><input className='rounded p-2 bg-blackA2 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  transition duration-150 ease-in-out' id="monthly-rent" type="number" min="0" placeholder="Enter monthly rent" /></td>
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
                        className="grow p-5  rounded-b-md outline-none  "
                        value="tab2"
                    >
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div >


    )
}

export default ProFormaCalculator