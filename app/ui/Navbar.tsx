'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav id='dark-mode' className="flex item-center max-h-[45px] fixed w-full shrink-0 border-b-[0.5px] z-[999] justify-between shadow-blackA9  shadow-[0px_2px_4px]" aria-label="Nav bar">
            {/* Logo div */}
            <svg width="35" height="35" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                <rect width="500" height="500" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_0_1" transform="scale(0.002)" />
                    </pattern>
                    <image id="image0_0_1" width="10" height="10" href="data:image/png;base64,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" />
                </defs>
            </svg>
            <Link
                className="hidden hover:cursor-pointer px-5 h-[45px] flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                href='/'
            // value="tab1"
            >
                <span className='hidden md:block'>
                    Home
                </span>

            </Link>
            <Link
                className="hidden hover:cursor-pointer px-5 h-[45px] flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                href='/search'
            // value="tab2"
            >
                <span className='hidden md:block'>
                    Search
                </span>

            </Link>
            <Link
                className="hidden hover:cursor-pointer px-5 h-[45px] flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                href='/portfolio'
            // value="tab3"
            >
                <span className='hidden md:block'>
                    Portfolio
                </span>
                <span className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                </span>
            </Link>
            <Link
                className="hidden hover:cursor-pointer px-5 h-[45px] flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md transition duration-150 ease-in-out hover:text-mint11 data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                href='/calculators'
            // value="tab4"
            >
                <span className='hidden md:block'>
                    Tools & Calculators
                </span>
                <span className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>
                </span>
            </Link>
            {/* Log in/Sign up */}
            <div className='hidden md:flex items-center gap-2 h-[45px] mr-2'>
                <Link
                    className='rounded border border-mint11 bg-mint11 z-50 inline-flex items-center justify-center leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out text-white text-sm py-1 px-2'
                    href='/'
                >
                    Sign up
                </Link>
                <Link
                    className='rounded border border-mint11 z-50 inline-flex items-center justify-center leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out text-sm py-1 px-2'
                    href='/'
                >
                    Log in
                </Link>
            </div>
            <h1 className='flex items-center font-semibold text-mint11 md:hidden'>ThenEstate</h1>
            <button
                className='flex items-center md:hidden px-2 transition duration-150 ease-in-out'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )
                    : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    )
                }
            </button>
            {
                isMobileMenuOpen && (
                    <ul id='dark-mode' className='scale-in-tr absolute flex flex-col gap-20 p-2 top-8 right-0 transition-all duration-75 ease-in-out  w-screen h-screen' >
                        <li className='mt-10'>
                            <Link
                                className='flex items-center gap-3 transition duration-150 ease-in-out hover:opacity-80'
                                onClick={() => setIsMobileMenuOpen(false)}
                                href='/'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <span className='text-4xl font-light'>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='flex items-center gap-3 transition duration-150 ease-in-out hover:opacity-80'
                                onClick={() => setIsMobileMenuOpen(false)}
                                href='/search'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <span className='text-4xl font-light'>Search</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='flex items-center gap-3 transition duration-150 ease-in-out hover:opacity-80'
                                onClick={() => setIsMobileMenuOpen(false)}
                                href='/portfolio'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                </svg>
                                <span className='text-4xl font-light'>Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='flex items-center gap-3 transition duration-150 ease-in-out hover:opacity-80'
                                onClick={() => setIsMobileMenuOpen(false)}
                                href='/calculators'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                </svg>
                                <span className='text-4xl font-light'>Tools & Calculators</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='flex items-center gap-3 transition duration-150 ease-in-out hover:opacity-80'
                                href='/auth'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8 text-red9">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                {/* Account will be ready when back end is complete */}
                                <span className='text-4xl font-light text-red9'>Account</span>

                            </Link>
                        </li>
                    </ul >
                )}
        </nav >
    )
}

export default Navbar