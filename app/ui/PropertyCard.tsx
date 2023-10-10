import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import Button from './Button';
import Tooltips from './Tooltips';
import Xmark from '../components/svg/Xmark';
import ChevronLeft from '../components/svg/ChevronLeft';
import ChevronRight from '../components/svg/ChevronRight';
import { useForm, SubmitHandler } from "react-hook-form";
import Sparkles from '../components/svg/Sparkles';
import List from '../components/svg/List';
import Warning from '../components/svg/Warning';
import ActionButton from './ActionButton';

type Props = {
    imageSrc: any
    beds: any
    baths: any
    squareFeet: any
    streetAddress: any
    cityStateZip: any
    price: any
    key: any
    width: any
    height: any
    status: any
    branding: any
    type: any
    propertyID: any
    photoCount: any
    agent: any
    agentEmail: any
    advertiserType: any
    newListing: boolean
    listDate: any
    priceReduction: any
    newConstruction: boolean
    fullBaths: number
    halfBaths: number
    lastSoldDate: any
    lastSoldPrice: string

}

const PropertyCard = ({
    imageSrc,
    beds,
    baths,
    squareFeet,
    streetAddress,
    cityStateZip,
    price,
    key,
    width,
    height,
    status,
    branding,
    type,
    propertyID,
    photoCount,
    agent,
    agentEmail,
    advertiserType,
    newListing,
    listDate,
    priceReduction,
    newConstruction,
    fullBaths,
    halfBaths,
    lastSoldDate,
    lastSoldPrice,
}: Props) => {

    const [imageIndex, setImageIndex] = useState<any>(0);
    // const [imageList, setImageList] = useState<any>([]);
    const [propertyImages, setPropertyImages] = useState<any>([])

    // Too keep imageIndex within range
    // useEffect(() => {
    //     if (imageIndex < 0) {
    //         setImageIndex(0);
    //     } else if (imageIndex >= propertyImages.length) {
    //         setImageIndex(propertyImages.length - 1);
    //     }
    // }, [imageIndex, propertyImages]);

    const apiKey = process.env.NEXT_PUBLIC_REAL_ESTATE_API_KEY as string
    // Get property images 
    const getPropertyImages = async () => {
        const url = `https://realty-in-us.p.rapidapi.com/properties/v3/get-photos?property_id=${propertyID}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            console.log(result.data['home_search'].results[0].photos)
            // This sets propertyImges to an array with all the photo's href
            if (result.data['home_search'].results[0].photos.length > 0) {
                setPropertyImages(result.data['home_search'].results[0].photos)
                console.log(propertyImages)
                console.log(propertyID)
            } else {
                console.log('No property image list')
            }
            // setImageList(propertyImages)
        } catch (error) {
            console.error(error);
        }
    }

    const showPreviousImage = () => {
        setImageIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex 
        });
    };

    const showNextImage = () => {
        setImageIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex
        });
    };

    // For high quality images, jpg were giving low quality
    const customLoader = () => {
        return `${imageSrc.replace('.jpg', `-w${width}_h${height}_x2.webp?w=${width}&q=75`)}`;
    };

    // For contact agent button on property card modal
    const handleContactAgent = (e: any) => {
        e.preventDefault();
        const subject = encodeURIComponent('I am interested in your listing on ThenEstate')
        window.location.href = `mailto:${agentEmail}?subject=${subject}`;
    };

    // Date formatter
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    // USD formatter
    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Dialog.Root >
            <div className='flex flex-col rounded shadow-blackA9 shadow-[0_4px_7px]' key={key}>
                <div className={`h-[${height}px] w-[${width}px] rounded-t border-b border-slate10 transition duration-150 ease-in-out lg:hover:opacity-80 inline-flex  items-center justify-center font-medium leading-none {shadow-[0_2px_10px]} focus:outline-none`}>
                    {/* Property cover image */}
                    <div className={`h-[${height}px] w-[${width}px] relative`}>
                        <div>
                            <div className={newListing ? 'absolute flex gap-1 rounded-full bg-blueA8 w-fit top-2 left-2 px-2 py-0.5 shadow-blackA9 shadow-[0px_4px_7px]' : 'hidden'}>
                                <Sparkles />
                                <p className='text-xs font-semibold text-white'>New listing</p>
                            </div>
                        </div>
                        <Image
                            className={`h-[${height}px] w-[${width}px] object-cover`}
                            alt='property-image'
                            loader={customLoader}
                            src={imageSrc}
                            width={width}
                            height={height}
                        />
                        {/* Price */}
                    </div>
                </div>
                {/* Property info and button div */}
                <div className='flex justify-between p-4 w-full'>
                    <div className=' w-[70%]'>
                        <div className="flex flex-col gap-2 w-full ">
                            <div className="text-sm md:text-md font-medium whitespace-nowrap">
                                {streetAddress}
                            </div>
                            <div className="text-sm md:text-md text-slate10">
                                {cityStateZip}
                            </div>

                            <div className='flex gap-1 text-lg md:text-xl font-bold text-mint11'>
                                <p>{price}</p>
                                <div className={priceReduction > 0 ? 'mb-5 flex gap-1 items-center' : 'hidden'}>
                                    <Warning />
                                    <p className='text-xs text-red9 font-light'>Price reduction</p>
                                </div>
                            </div>
                            <Separator.Root className="data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mt-[15px]" />
                            <div className="flex h-5 items-center">
                                <div className="text-sm md:text-md leading-5">{beds}</div>
                                <Separator.Root
                                    className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                    decorative
                                    orientation="vertical"
                                />
                                <div className="text-sm md:text-md leading-5">{baths}</div>
                                <Separator.Root
                                    className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                    decorative
                                    orientation="vertical"
                                />
                                <div className="text-sm md:text-md leading-5">{squareFeet}</div>

                            </div>
                        </div>
                    </div>
                    <div className=''>
                        {/* Status badge */}
                        <div className='flex items-center gap-2 w-fit rounded-full px-2 py-0.5 bg-slate10/30'>
                            <div className={
                                (() => {
                                    switch (status) {
                                        case 'For sale':
                                            return 'rounded-full bg-green-500 w-2 h-2';
                                        case 'Ready to build':
                                            return 'rounded-full bg-yellow-500 w-2 h-2';
                                        case 'For rent':
                                            return 'rounded-full bg-purple-500 w-2 h-2';
                                        case 'Sold':
                                            return 'rounded-full bg-red-500 w-2 h-2';
                                        case 'Off market':
                                            return 'rounded-full bg-gray-500 w-2 h-2';
                                        case 'N/A':
                                            return 'rounded-full bg-black w-2 h-2';
                                        case 'New community':
                                            return 'rounded-full bg-sky-500 w-2 h-2';
                                        default:
                                            return '';
                                    }
                                })()
                            }
                            />
                            <p className='text-xs'>{status}</p>
                        </div>
                    </div>

                </div>
                {/* Add to portfolio button and more info button */}
                <div className='{border border-red-500} flex items-center justify-between w-full mb-4 px-4'>
                    <div className='flex gap-5 w-[70%]'>
                        <Tooltips
                            button={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="text-mint11 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            }
                            tooltipContent={`Add to watchlist`}
                        />
                        <Tooltips
                            button={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="text-mint11 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                            }
                            tooltipContent={`Add to portfolio`}
                        />
                    </div>
                    <Dialog.Trigger className='w-[30%] ' >
                        <ActionButton
                            text={`More info`}
                            bgColor={'bg-mint11 w-full'}
                            onClick={getPropertyImages}
                        />
                    </Dialog.Trigger>
                </div>
            </div>
            {/* Popup content */}
            <Dialog.Portal>
                <Dialog.Overlay className="z-[9999] bg-blackA5 backdrop-blur-md data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content id='dark-mode' className="z-[9999] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[95vw] max-w-[950px] translate-x-[-50%] translate-y-[-50%] rounded-md p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Close asChild>
                        <button
                            className="text-slate10 hover:bg-slate2 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                            aria-label="Close"
                        >
                            <Xmark />
                        </button>
                    </Dialog.Close>
                    {/* Full container */}
                    <div className='md:flex w-full'>
                        {/* Property image */}
                        <div className='relative md:w-[50%]'>
                            <div className={newListing ? 'absolute flex gap-1 rounded-full bg-blueA8 w-fit top-2 left-2 px-2 py-0.5 shadow-blackA9 shadow-[0px_4px_7px]' : 'hidden'}>
                                <Sparkles />
                                <p className='text-xs font-semibold text-white'>New listing</p>
                            </div>
                            {/* All property images */}
                            {propertyImages.length > 0 && (

                                <Image
                                    key={propertyID}
                                    className={`h-[${height}px] w-[${width}px] object-cover`}
                                    alt={`Image ${imageIndex + 1}`}
                                    loader={customLoader}
                                    src={propertyImages[imageIndex].href}
                                    width={width}
                                    height={height}
                                />
                            )}
                            {/* Prev image and next image buttons */}
                            <div className='z-[9999] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-2'>
                                <button
                                    onClick={showPreviousImage}
                                    disabled={imageIndex === 0}
                                    className='z-[9999] rounded-full p-2 bg-blackA9 hover:bg-blackA12 hover:cursor-pointer shadow-blackA9 shadow-[0px_4px_7px]'
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    onClick={showNextImage}
                                    disabled={imageIndex === propertyImages.length - 1}
                                    className='z-[9999] rounded-full p-2 bg-blackA9 hover:bg-blackA12 hover:cursor-pointer shadow-blackA9 shadow-[0px_4px_7px]'
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                            {/* Under photo section */}
                            <div className='flex flex-col gap-5'>
                                {/* Photo count */}
                                <div>
                                    Photo count: {photoCount}
                                </div>
                                {/* Seller info */}
                                <div className='text-sm'>
                                    <p>Property ID: {propertyID}</p>
                                    <p className='capitalize'>
                                        <span className='text-medium text-slate10'>{advertiserType}:</span> {agent}
                                    </p>
                                    <p className=''>
                                        <span className='text-medium text-slate10'>Email:</span> {agentEmail}
                                    </p>
                                </div>
                                {/* Contact button */}
                                <form onSubmit={handleContactAgent} className={agentEmail === 'N/A' ? 'hidden' : ''}>
                                    <button className='bg-blue9/30 border border-blue9 text-blue8 hover:bg-blue9/50 z-50 inline-flex font-medium items-center justify-center rounded-md h-[35px] px-[15px] leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out  text-sm'>
                                        Contact {agent}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className='md:ml-5 md:w-[50%]'>
                            <div className="flex flex-col gap-2 w-full ">
                                <div className="text-sm md:text-md font-medium whitespace-nowrap">
                                    {streetAddress}
                                </div>
                                <div className="text-sm md:text-md text-slate10">
                                    {cityStateZip}
                                </div>

                                <div className='flex gap-1 text-lg md:text-xl font-bold text-mint11'>
                                    <p>{price}</p>
                                    <div className={priceReduction > 0 ? 'mb-5 flex gap-1 items-center' : 'hidden'}>
                                        <Warning />
                                        <p className='text-xs text-red9 font-light'>- {usdFormatter.format(priceReduction)}</p>
                                    </div>
                                </div>
                                {/* Status badge */}
                                <div className='flex items-center gap-2 w-fit rounded-full px-2 py-0.5 bg-slate10/30'>
                                    <div className={
                                        (() => {
                                            switch (status) {
                                                case 'For sale':
                                                    return 'rounded-full bg-green-500 w-2 h-2';
                                                case 'Ready to build':
                                                    return 'rounded-full bg-yellow-500 w-2 h-2';
                                                case 'For rent':
                                                    return 'rounded-full bg-purple-500 w-2 h-2';
                                                case 'Sold':
                                                    return 'rounded-full bg-red-500 w-2 h-2';
                                                case 'Off market':
                                                    return 'rounded-full bg-gray-500 w-2 h-2';
                                                case 'N/A':
                                                    return 'rounded-full bg-black w-2 h-2';
                                                case 'New community':
                                                    return 'rounded-full bg-sky-500 w-2 h-2';
                                                default:
                                                    return '';
                                            }
                                        })()
                                    }
                                    />
                                    <p className='text-xs'>{status}</p>
                                </div>
                                <div>
                                    <p className='text-xs text-mint11 capitalize'>{type}</p>
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-slate10'>{branding}</p>
                                </div>
                                <Separator.Root className="data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mt-[10px]" />
                                <div className="flex h-5 items-center">
                                    <div className="text-sm md:text-md leading-5">{beds}</div>
                                    <Separator.Root
                                        className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                        decorative
                                        orientation="vertical"
                                    />
                                    <div className="text-sm md:text-md leading-5">{baths}</div>
                                    <Separator.Root
                                        className="bg-mint11 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                                        decorative
                                        orientation="vertical"
                                    />
                                    <div className="text-sm md:text-md leading-5">{squareFeet}</div>

                                </div>
                                {/* Seperator */}
                                <div className='flex justify-center w-full mt-5'>
                                    <div className='flex items-center justify-center gap-8 w-full'>
                                        <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                                        <span className='text-xs text-blue9'>Details</span>
                                        <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                                    </div>
                                </div>
                                {/* Details */}
                                <ul className='flex flex-col gap-1 text-sm'>
                                    <li className={newConstruction ? 'block' : 'hidden'}>
                                        <p className='font-medium text-yellow-500'>
                                            New construction
                                        </p>
                                    </li>
                                    <li className=''>
                                        <p className='flex gap-2'>
                                            <span className='text-medium text-slate10'>Date listed:</span>
                                            {listDate.toLocaleDateString("en-US", options)}
                                        </p>
                                    </li>
                                    <li>
                                        <p className='flex gap-2'>
                                            <span className='text-medium text-slate10'>Full baths:</span>
                                            {fullBaths}
                                        </p>
                                    </li>
                                    <li>
                                        <p className='flex gap-2'>
                                            <span className='text-medium text-slate10'>Half baths:</span>
                                            {halfBaths}
                                        </p>
                                    </li>
                                    <li>
                                        <p className='flex gap-2'>
                                            <span className='text-medium text-slate10'>Last sold date:</span>
                                            {lastSoldDate}
                                        </p>
                                    </li>
                                    <li>
                                        <p className='flex gap-2'>
                                            <span className='text-medium text-slate10'>Last sold price:</span>
                                            {lastSoldPrice}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default PropertyCard;