import React, { useState } from 'react'
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

type Props = {}

const Portfolio = (props: Props) => {
    const [propertyHoldingsArray, setPropertyHoldingsArray] = useState([]);
    const { addToPortfolio, addToWatchlist, addToTotalValue, totalValue, portfolioHoldings, watchlist } = usePortfolioContext();
    const router = useRouter()

    // For high quality images, jpg were giving low quality
    const primaryPhotoCustomLoader = () => {
        return portfolioHoldings.image?.replace('.jpg', `-w${30}_h${30}_x2.webp?w=${30}&q=75`);
    };

    // To format total portfolio value
    const formattedTotalValue = new Intl.NumberFormat('en-US', {
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

    return (
        <div className='flex justify-between w-full'>
            {/* Heading */}
            <div className='flex flex-col gap-2 w-full mt-20'>
                <h1 className='flex justify-start font-medium tracking-[-0.03em] md:leading-[1.10] bg-clip-text text-center text-3xl text-mint11'>
                    Holdings
                </h1>
                {/* Dollar amount of holdings */}
                <div className='flex flex-col'>
                    <h2 className='text-[45px]'>
                        {totalValue.length > 0 ?
                            (
                                <span>
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
                        {/* to clear localstorage if needed */}
                        <button
                            className='bg-red-500 text-white rounded p-2'
                            onClick={() => localStorage.clear()}
                        >
                            Clear local storage
                        </button>
                    </div>
                    <div className='md:flex gap-5 w-full'>
                        <div className='md:w-[70%]'>
                            {portfolioHoldings.length > 0 ? (
                                uniqueStateCodes.map((stateCode, i) => {
                                    // To find all holdings with the current state code
                                    const holdingsWithStateCode = portfolioHoldings.filter(holding => holding['state_code'] === stateCode);

                                    // To render the accordionTrigger only once if state code has already been added, so we dont have multiple accordions with the same state
                                    const accordionTrigger = (
                                        <h1 key={i} className='text-mint11 font-medium'>
                                            {holdingsWithStateCode[0].state}, {holdingsWithStateCode[0]['state_code']}
                                        </h1>
                                    );

                                    // to render the property badge for each holding with the same state code, so they are all grouped together under the same accordion
                                    const accordionContent = holdingsWithStateCode.map((holding, j) => (
                                        <div key={j}>
                                            {/* Property badge container */}
                                            <div className='flex bg-mint11/80 rounded-full w-full text-xs shadow-blackA9 shadow-[0px_4px_7px] overflow-hidden'>
                                                <Image
                                                    className={`object-cover border border-mint11 rounded-full`}
                                                    alt='property-image'
                                                    src={holding.image}
                                                    width={50}
                                                    height={50}
                                                />
                                                <div className='p-2 text-white whitespace-nowrap w-full'>
                                                    <div className='flex justify-between w-full'>
                                                        <p className='font-bold'>
                                                            {holding.address}
                                                        </p>
                                                        <p className='font-bold'>
                                                            {usdFormatter.format(holding.listing_price)}
                                                        </p>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <p className='font-light'>
                                                            {holding.beds}
                                                        </p>
                                                        <div className='h-full w-[1px] bg-white' />
                                                        <p className='font-light'>
                                                            {holding.baths}
                                                        </p>
                                                        <div className='h-full w-[1px] bg-white' />
                                                        <p className='font-light'>
                                                            {holding.sqft.toLocaleString()}
                                                        </p>
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
                                                <div className='property-badge-grid'>
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
                                            text={`Search now`}
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
                        {/* Watchlist */}
                        <aside className='md:border-l-[0.8px] border-slate6 w-[30%]'>
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