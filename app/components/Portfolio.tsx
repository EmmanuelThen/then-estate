import React, { useEffect, useState } from 'react'
import TrendingUpArrow from './svg/TrendingUpArrow'
import * as Accordion from '@radix-ui/react-accordion';
import AccordionDemo from '../ui/AccordionDemo';
import Watchlist from './svg/Watchlist';
import { usePortfolioContext } from '../context/PortfolioContext';
import Image from 'next/image';
import OpenFolder from './svg/OpenFolder';
import Button from '../ui/Button';
import ActionButton from '../ui/ActionButton';
import { useRouter } from 'next/navigation'
import Seperator from '../ui/Seperator';
import Popup from '../ui/Popup';
import Warning from './svg/Warning';
import TrendingDownArrow from './svg/TrendingDownArrow';
import WatchlistEmpty from './svg/WatchlistEmpty';
import * as Tabs from '@radix-ui/react-tabs';
import Cancel from './svg/Cancel';
import RemovePortfolio from './svg/RemovePortfolio';


type Props = {}

const Portfolio = (props: Props) => {
    // const [propertyHoldingsArray, setPropertyHoldingsArray] = useState([]);
    const [dailyChanges, setDailyChanges] = useState(0);
    const [percentageChange, setPercentageChange] = useState(0);
    const { totalValue, portfolioHoldings, watchlist, setWatchlist, setPortfolioHoldings, setTotalValue } = usePortfolioContext();
    const router = useRouter()

    // For high quality images, jpg were giving low quality
    const primaryPhotoCustomLoader = () => {
        return portfolioHoldings.image?.replace('.jpg', `-w${30}_h${30}_x2.webp?w=${30}&q=75`);
    };

    // To format total portfolio value
    const formattedTotalValue: any = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(totalValue.reduce((acc, value) => acc + value, 0));

    // USD formatter
    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    // To get state codes that havent been added to portfolio
    const uniqueStateCodes = Array.from(new Set(portfolioHoldings.map(holding => holding['state_code'])));


    useEffect(() => {
        const getDailyAndPercentageChange = () => {
            // Calculate all the numbers in totalValue and sum them up
            const cumulativeSum = totalValue.reduce((acc, value) => {
                acc.push(acc.length > 0 ? acc[acc.length - 1] + value : value);
                return acc;
            }, []);

            // To calculate the daily change and percentage change based on the cumulative sum of totalValue
            if (cumulativeSum.length >= 2) {
                const todayIndex = cumulativeSum.length - 1;
                const yesterdayIndex = todayIndex - 1;

                const todayTotal = cumulativeSum[todayIndex];
                const yesterdayTotal = cumulativeSum[yesterdayIndex];

                const todayChange = todayTotal - yesterdayTotal;
                const todayPercentageChange = ((todayChange / yesterdayTotal) * 100).toFixed(2);

                setDailyChanges(todayChange);
                setPercentageChange(todayPercentageChange);
            }
        };

        getDailyAndPercentageChange();
    }, [totalValue]);

    useEffect(() => {
        console.log(totalValue);
    }, [totalValue]);

    return (
        <div className='flex justify-between w-full'>
            {/* Heading */}
            <div className='flex flex-col gap-2 w-full mt-20 px-2'>
                <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                    Total Portfolio Value
                </h1>
                {/* Dollar amount of holdings */}
                <div className='flex flex-col'>
                    <h2 className='text-[45px]'>
                        {totalValue.length > 0 ?
                            (
                                <span className='font-medium'>
                                    {formattedTotalValue}
                                </span>
                            )
                            :
                            (
                                <div>
                                    $0.00
                                </div>
                            )
                        }
                    </h2>
                    {/* Percentage change and dollar amount change */}
                    <div className={`${dailyChanges === 0 ? 'hidden' : 'flex items-center gap-2'}`}>
                        {dailyChanges && (
                            <div className='flex items-center gap-2'>
                                {dailyChanges > 0 ? (
                                    <TrendingUpArrow
                                        stroke={'rgb(34 197 94)'}
                                    />
                                ) :
                                    (
                                        <TrendingDownArrow
                                            stroke={'rgb(239 68 68)'}
                                        />
                                    )}
                                <div className='flex gap-2 text-xs'>
                                    <span className={`${dailyChanges > 0 ? 'text-green-500' : 'text-red-500'} `}>
                                        {usdFormatter.format(dailyChanges)}
                                    </span>
                                    <span className={`${dailyChanges > 0 ? 'text-green-500' : 'text-red-500'} `}>
                                        {`(${percentageChange}%)`}
                                    </span>
                                    <span>
                                        Today
                                    </span>
                                </div>
                            </div>
                        )
                        }
                        {/* to clear localstorage if needed */}
                        <button
                            className='bg-red-500 text-white rounded p-2'
                            onClick={() => localStorage.clear()}
                        >
                            Clear local storage
                        </button>
                    </div>
                    {/* <div className='md:w-[50%]'>
                        <Seperator text={`Portfolio`} />
                    </div> */}
                    <Tabs.Root
                        className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2 mt-5 border border-blackA5 rounded h-full"
                        defaultValue="tab1"
                    >
                        <Tabs.List className="shrink-0 flex shadow-blackA3 shadow-[0px_2px_4px]" aria-label="portfolio-tabs">
                            <Tabs.Trigger
                                className="border-r-[1px] border-blackA3 whitespace-nowrap px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-500 data-[state=active]:text-green-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                value="tab1"
                            >
                                Portfolio
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                className="whitespace-nowrap px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-500 data-[state=active]:text-green-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  outline-none hover:cursor-pointer"
                                value="tab2"
                            >
                                Watchlist
                            </Tabs.Trigger>
                        </Tabs.List>

                        <Tabs.Content
                            className="grow p-5 rounded-b-md outline-none  "
                            value="tab1"
                        >
                            <div className={portfolioHoldings.length > 0 ? 'flex items-center gap-2 p-2' : 'hidden'}>
                                <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-xl md:text-3xl'>
                                    My portfolio
                                </h1>
                                <span className='rounded py-[2px] px-1 bg-green-500/30'>
                                    <p className='text-xs text-green-500'>
                                        {portfolioHoldings.length} <span>{portfolioHoldings.length > 1 ? 'Properties' : 'Property'}</span>
                                    </p>
                                </span>
                            </div>
                            <div className='p-2'>
                                {portfolioHoldings.length > 0 ? (
                                    uniqueStateCodes.map((stateCode, i) => {
                                        // To find all holdings with the current state code on accordion
                                        const holdingsWithStateCode = portfolioHoldings.filter(holding => holding['state_code'] === stateCode);
                                        // To render the accordionTrigger only once if state code has already been added, so we dont have multiple accordions with the same state
                                        const accordionTrigger = (
                                            <h1 key={i} className='font-medium'>
                                                {holdingsWithStateCode[0].state}, {holdingsWithStateCode[0]['state_code']}
                                            </h1>
                                        );
                                        // to render the property badge for each holding with the same state code, so they are all grouped together under the same accordion
                                        const accordionContent = holdingsWithStateCode.map((holding, j) => (
                                            <div className='p-2 md:py-5 md:px-20 w-full' key={j}>
                                                {/* Property badge container */}
                                                <div id='dark-mode' className={`flex flex-col md:flex-row relative rounded text-xs shadow-blackA9 shadow-[0px_4px_7px] overflow-hidden md:h-[200px]`}>
                                                    <div className='md:min-w-[25%]'>
                                                        <Image
                                                            className={`object-cover border-t-rounded w-full`}
                                                            alt='property-image'
                                                            src={holding.image}
                                                            width={100}
                                                            height={100}
                                                            style={{ maxWidth: '100%', minHeight: '200px' }}
                                                        />
                                                    </div>
                                                    <div className='flex flex-col gap-2 p-2 whitespace-nowrap md:w-[75%]'>
                                                        <div className='flex justify-between leading-[8px]'>
                                                            <div>
                                                                <p className='text-sm md:text-lg font-medium'>
                                                                    {holding.address}
                                                                </p>
                                                                <p className=''>
                                                                    {holding.city}, {holding['state_code']} {holding.zip}
                                                                </p>
                                                            </div>
                                                            <button className='transition duration-150 ease-in-out'>
                                                                <Popup
                                                                    icon={
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:opacity-70">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                                        </svg>
                                                                    }
                                                                    content={
                                                                        <div className='flex flex-col gap-1 text-xs'>
                                                                            {/* Actions */}
                                                                            <div>
                                                                                {/* Remove from portfolio */}
                                                                                <span className='flex items-center gap-2 p-1 rounded hover:bg-blackA3 hover:cursor-pointer'>
                                                                                    <RemovePortfolio />
                                                                                    <button
                                                                                        className=''
                                                                                        onClick={() => {
                                                                                            const propertyIDToRemove = holding['property_id'];
                                                                                            const propertyValueToRemove = holding['listing_price'];
                                                                                            // Update portfolioHoldings state
                                                                                            setPortfolioHoldings((prevHoldings) =>
                                                                                                prevHoldings.filter((holding) => holding['property_id'] !== propertyIDToRemove)
                                                                                            );
                                                                                            // Update totalValue state
                                                                                            setTotalValue((prevTotalValue) =>
                                                                                                prevTotalValue.filter((holding) => parseFloat(holding['listing_price']) !== parseFloat(propertyValueToRemove))
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        Remove from portfolio
                                                                                    </button>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    popUpBgColor={''}
                                                                />
                                                            </button>
                                                        </div>
                                                        <p className='capitalize'>
                                                            {holding.type}
                                                        </p>
                                                        <div className='flex gap-2 text-slate10'>

                                                            <p className='border-r pr-1 border-blackA5'>
                                                                {holding.beds}
                                                            </p>

                                                            <p className='border-r pr-1 border-blackA5'>
                                                                {holding.baths}
                                                            </p>

                                                            <p className='border-r pr-1 border-blackA5'>
                                                                {holding.sqft.toLocaleString()}
                                                            </p>
                                                        </div>
                                                        <div className=''>
                                                            <div className='flex gap-1'>
                                                                <p className=''>
                                                                    Current price:
                                                                </p>
                                                                <p className='font-medium'>
                                                                    {usdFormatter.format(holding['listing_price'])}
                                                                </p>
                                                                <div className={holding['price_reduction'] > 0 ? ' flex gap-1 items-center' : 'hidden'}>
                                                                    <Warning />
                                                                    <p className='text-[8px] text-red9 font-light'>- {usdFormatter.format(holding['price_reduction'])}</p>
                                                                </div>
                                                            </div>
                                                            <div className='flex gap-1'>
                                                                <p className=''>
                                                                    Last sold price:
                                                                </p>
                                                                <span className='font-medium'>
                                                                    {holding['last_sold_price']}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        ));
                                        return (
                                            <AccordionDemo
                                                key={i}
                                                accordionTrigger={accordionTrigger}
                                                accordionContent={
                                                    <div className='overflow-y-scroll'>
                                                        {accordionContent}
                                                    </div>
                                                }
                                            />
                                        );
                                    })
                                ) : (
                                    <div className='flex justify-center w-full p-10'>
                                        <div className='flex flex-col items-center gap-5'>
                                            <h1 className='flex flex-col items-center gap-2 text-slate10'>
                                                <span>
                                                    <OpenFolder />
                                                </span>
                                                <span className='text-3xl font-light'>
                                                    Portfolio is empty
                                                </span>
                                            </h1>
                                            <ActionButton
                                                text={`Search for properties`}
                                                bgColor='bg-mint11'
                                                onClick={() => {
                                                    router.push('/search');
                                                    router.refresh();
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                        </Tabs.Content>
                        <Tabs.Content
                            className="grow p-5 rounded-b-md outline-none  "
                            value="tab2"
                        >
                            <div className='flex flex-col gap-[20px] p-2 '>

                                {watchlist.length > 0 ? (
                                    watchlist.map((item, j) => (
                                        <>
                                            {/* Property badge container */}
                                            <div className={`flex relative bg-blackA6 rounded-full text-xs shadow-blackA9 shadow-[0px_4px_7px] overflow-hidden`}>
                                                <Image
                                                    className={`object-cover border border-mint11 rounded-full`}
                                                    alt='property-image'
                                                    src={item.image}
                                                    width={50}
                                                    height={50}
                                                />
                                                <div className='p-2 text-white whitespace-nowrap w-full'>
                                                    <div className=''>
                                                        <p className='font-bold'>
                                                            {item.address}, {item['state_code']}
                                                        </p>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <p className='font-light'>
                                                            {item.beds}
                                                        </p>
                                                        <div className='h-full w-[1px] bg-white' />
                                                        <p className='font-light'>
                                                            {item.baths}
                                                        </p>
                                                        <div className='h-full w-[1px] bg-white' />
                                                        <p className='font-light'>
                                                            {item.sqft.toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button className='flex items-center justify-center border border-blackA5 rounded-full min-w-[50px] transition duration-150 ease-in-out'>
                                                    <Popup
                                                        content={
                                                            <div className='flex flex-col gap-2.5 text-xs text-white'>
                                                                {/* Price container */}
                                                                <div className='flex gap-1'>
                                                                    <p className='font-medium'>
                                                                        Current price:
                                                                    </p>
                                                                    <p className='font-light'>
                                                                        {usdFormatter.format(item['listing_price'])}
                                                                    </p>
                                                                    <div className={item['price_reduction'] > 0 ? ' flex gap-1 items-center' : 'hidden'}>
                                                                        <Warning />
                                                                        <p className='text-[8px] text-red9 font-light'>- {usdFormatter.format(item['price_reduction'])}</p>
                                                                    </div>
                                                                </div>
                                                                {/* Last sold price */}
                                                                <div className='flex gap-1'>
                                                                    <p className='font-medium'>
                                                                        Last sold price:
                                                                    </p>
                                                                    <span className='font-light'>
                                                                        {item['last_sold_price']}
                                                                    </span>
                                                                </div>
                                                                {/* Action buttons */}
                                                                <div className='flex justify-center'>
                                                                    <ActionButton
                                                                        text={`Remove`}
                                                                        bgColor={'bg-red9 text-xs w-full'}
                                                                        onClick={() => {
                                                                            const propertyIDToRemove = item['property_id'];

                                                                            // To create a new array without the property that im removing
                                                                            const newArray = setWatchlist(() => watchlist.filter(item => item['property_id'] !== propertyIDToRemove));

                                                                            console.log(newArray);
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        }
                                                        popUpBgColor={'bg-blackA9'}
                                                    />
                                                </button>
                                            </div>
                                        </>
                                    ))

                                ) : (
                                    <div className='flex justify-center w-full p-10'>
                                        <div className='flex flex-col items-center gap-5'>
                                            <h1 className='flex flex-col items-center gap-2 text-slate10'>
                                                <span>
                                                    <WatchlistEmpty />
                                                </span>
                                                <span className='text-3xl font-light'>
                                                    Watchlist is empty
                                                </span>
                                            </h1>
                                            <ActionButton
                                                text={`Search for properties`}
                                                bgColor='bg-sky12'
                                                onClick={() => {
                                                    router.push('/search');
                                                    router.refresh();
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Tabs.Content>

                    </Tabs.Root>
                </div>
            </div>
        </div>


    )
}

export default Portfolio