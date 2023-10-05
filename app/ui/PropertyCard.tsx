import Image from 'next/image'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';


import Button from './Button';
import Tooltips from './Tooltips';
import Xmark from '../components/svg/Xmark';
import ChevronLeft from '../components/svg/ChevronLeft';
import ChevronRight from '../components/svg/ChevronRight';


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
    photoCount }: Props) => {
    // For high quality images, jpg were giving low quality
    const customLoader = () => {
        return `${imageSrc.replace('.jpg', `-w${width}_h${height}_x2.webp?w=${width}&q=75`)}`;
    };

    return (
        <Dialog.Root >
            <div className='flex flex-col rounded shadow-blackA9 shadow-[0_4px_7px]' key={key}>
                <div className={`h-[${height}px] w-[${width}px] rounded-t border-b border-slate10 text-blue9 transition duration-150 ease-in-out lg:hover:opacity-80 inline-flex  items-center justify-center font-medium leading-none {shadow-[0_2px_10px]} focus:outline-none`}>
                    {/* Property cover image */}
                    <div className={`h-[${height}px] w-[${width}px]`}>
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

                            <div className='text-lg md:text-xl font-bold text-mint11'>
                                {price}
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
                        <Button
                            text={`More info`}
                            bgColor={'bg-mint11 w-full'}
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
                            <Image
                                className={`h-[${height}px] w-[${width}px] object-cover`}
                                alt='property-image'
                                loader={customLoader}
                                src={imageSrc}
                                width={width}
                                height={height}
                            />
                            <div className='absolute top-[50%] flex justify-between w-full px-2'>
                                <div className='rounded-full p-2 bg-blackA9 hover:bg-blackA12 hover:cursor-pointer shadow-blackA9 shadow-[0px_4px_7px]'>
                                    <ChevronLeft />
                                </div>
                                <div className='rounded-full p-2 bg-blackA9 hover:bg-blackA12 hover:cursor-pointer shadow-blackA9 shadow-[0px_4px_7px]'>
                                    <ChevronRight />
                                </div>
                            </div>
                            {/* Photo count */}
                            <div>
                                Photo count: {photoCount}
                            </div>
                            {/* Seller info */}
                            <div>
                                Property ID: {propertyID}
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

                                <div className='text-lg md:text-xl font-bold text-mint11'>
                                    {price}
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
                            </div>
                        </div>

                    </div>
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        dialogTitle
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-sm lg:text-2xl font-semibold leading-normal">
                        dialogDesc
                    </Dialog.Description>
                    <div className='flex justify-center'>
                        content
                    </div>


                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default PropertyCard;