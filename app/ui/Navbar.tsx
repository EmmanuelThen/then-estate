'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Button from './Button'

type Props = {}

const Navbar = (props: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav id='dark-mode' className="flex item-center max-h-[65px] fixed w-full shrink-0 z-[999] justify-between shadow-blackA3 shadow-[0px_2px_4px]" aria-label="Nav bar">
            <div className='flex'>
                {/* Logo div */}
                <div className='flex items-center mx-5'>
                    <img
                    className='text-xs text-mint11'
                    src="/app/images/SummitLogoSolo.png"
                    alt="Logo"
                    />
                </div>
                <Link
                    className="hidden  px-5 h-[65px]  flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md   data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    href='/'
                // value="tab1"
                >
                    <span className='hidden md:block hover:bg-green-500/70 rounded p-3 hover:cursor-pointer transition duration-150 ease-in-out'>
                        Home
                    </span>
                </Link>
                <Link
                    className="hidden  px-5 h-[65px]  flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md   data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    href='/search'
                // value="tab2"
                >
                    <span className='hidden md:block hover:bg-green-500/70 rounded p-3 hover:cursor-pointer transition duration-150 ease-in-out'>
                        Search
                    </span>
                </Link>
                <Link
                    className="hidden  px-5 h-[65px]  flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md   data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    href='/portfolio'
                // value="tab3"
                >
                    <span className='hidden md:block hover:bg-green-500/70 rounded p-3 hover:cursor-pointer transition duration-150 ease-in-out'>
                        Portfolio
                    </span>
                    <span className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>
                    </span>
                </Link>
                <Link
                    className="hidden  px-5 h-[65px]  flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md   data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    href='/calculators'
                // value="tab4"
                >
                    <span className='hidden md:block hover:bg-green-500/70 rounded p-3 hover:cursor-pointer transition duration-150 ease-in-out'>
                        Tools
                    </span>
                    <span className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                        </svg>
                    </span>
                </Link>
            </div>
            {/* My portfolio button and search button */}
            <div className='hidden md:flex items-center gap-3 mx-5'>
                <Button
                    bgColor='border border-mint11'
                    text={
                        <Link
                            className='whitespace-nowrap text-mint11'
                            href='/portfolio'
                        >
                            My portfolio
                        </Link>
                    }
                />
                <Button
                    bgColor='bg-mint11'
                    text={
                        <Link
                            className='whitespace-nowrap text-white'
                            href='/search'
                        >
                            Search properties
                        </Link>
                    }
                />
            </div>

            <h1 className='flex items-center font-semibold text-mint11 md:hidden'>ThenEstate</h1>
            <button
                className='flex items-center md:hidden px-2 '
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
                                className='flex items-center gap-3  hover:opacity-80'
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
                                className='flex items-center gap-3  hover:opacity-80'
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
                                className='flex items-center gap-3  hover:opacity-80'
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
                                className='flex items-center gap-3  hover:opacity-80'
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
                                className='flex items-center gap-3  hover:opacity-80'
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