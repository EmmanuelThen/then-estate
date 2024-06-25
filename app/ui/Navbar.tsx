'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav id='dark-mode' className="flex item-center max-h-[65px] fixed w-full shrink-0 z-[999] justify-between shadow-blackA3 shadow-[0px_2px_4px]" aria-label="Nav bar">
            <div className='flex'>
                {/* Logo div */}
                <div className='flex items-center justify-center w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="125" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="125" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g /><clipPath id="5e6d82f778"><path d="M 78.335938 156.003906 L 128.585938 156.003906 L 128.585938 208 L 78.335938 208 Z M 78.335938 156.003906 " clip-rule="nonzero" /></clipPath></defs><path fill="#027864" d="M 96.769531 185.359375 L 110.140625 185.359375 L 110.140625 200.605469 L 96.769531 200.605469 Z M 96.769531 185.359375 " fill-opacity="1" fill-rule="nonzero" /><g clip-path="url(#5e6d82f778)"><path fill="#027864" d="M 103.464844 156.578125 L 78.316406 176.5 L 78.316406 207.574219 L 103.464844 207.574219 L 96.769531 200.621094 L 85.285156 200.621094 L 85.285156 179.875 L 103.464844 165.457031 L 121.644531 179.875 L 121.644531 200.621094 L 110.160156 200.621094 L 103.464844 207.574219 L 128.613281 207.574219 L 128.613281 176.5 Z M 103.464844 156.578125 " fill-opacity="1" fill-rule="nonzero" /></g><g fill="#027864" fill-opacity="1"><g transform="translate(141.088354, 197.866979)"><g><path d="M 18.390625 -19.6875 L 10.6875 -19.6875 L 10.6875 0 L 8.171875 0 L 8.171875 -19.6875 L 0.46875 -19.6875 L 0.46875 -22.09375 L 18.390625 -22.09375 Z M 18.390625 -19.6875 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(159.938603, 197.866979)"><g><path d="M 4.671875 -23.359375 L 4.671875 -14.078125 C 5.273438 -14.878906 6.007812 -15.554688 6.875 -16.109375 C 7.738281 -16.671875 8.726562 -16.953125 9.84375 -16.953125 C 10.957031 -16.953125 11.914062 -16.796875 12.71875 -16.484375 C 13.519531 -16.171875 14.21875 -15.703125 14.8125 -15.078125 C 16.195312 -13.722656 16.890625 -11.9375 16.890625 -9.71875 L 16.890625 0 L 14.390625 0 L 14.390625 -9.640625 C 14.390625 -11.179688 13.953125 -12.40625 13.078125 -13.3125 C 12.210938 -14.226562 11.09375 -14.6875 9.71875 -14.6875 C 8.3125 -14.6875 7.117188 -14.21875 6.140625 -13.28125 C 5.160156 -12.320312 4.671875 -11.097656 4.671875 -9.609375 L 4.671875 0 L 2.171875 0 L 2.171875 -23.359375 Z M 4.671875 -23.359375 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(178.822223, 197.866979)"><g><path d="M 9.609375 -2 C 11.859375 -2 13.472656 -2.9375 14.453125 -4.8125 L 17.1875 -4.8125 C 16.613281 -3.289062 15.695312 -2.0625 14.4375 -1.125 C 13.175781 -0.195312 11.554688 0.265625 9.578125 0.265625 C 7.066406 0.265625 5.019531 -0.566406 3.4375 -2.234375 C 1.90625 -3.859375 1.140625 -5.894531 1.140625 -8.34375 C 1.140625 -10.8125 1.875 -12.847656 3.34375 -14.453125 C 4.894531 -16.117188 6.914062 -16.953125 9.40625 -16.953125 C 11.90625 -16.953125 13.929688 -16.117188 15.484375 -14.453125 C 16.953125 -12.847656 17.6875 -10.8125 17.6875 -8.34375 L 17.6875 -7.34375 L 3.703125 -7.34375 C 3.878906 -5.8125 4.492188 -4.539062 5.546875 -3.53125 C 6.609375 -2.507812 7.960938 -2 9.609375 -2 Z M 9.40625 -14.6875 C 7.875 -14.6875 6.585938 -14.207031 5.546875 -13.25 C 4.566406 -12.332031 3.960938 -11.140625 3.734375 -9.671875 L 15.078125 -9.671875 C 14.859375 -11.140625 14.257812 -12.332031 13.28125 -13.25 C 12.238281 -14.207031 10.945312 -14.6875 9.40625 -14.6875 Z M 9.40625 -14.6875 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(197.405573, 197.866979)"><g><path d="M 4.671875 -16.6875 L 4.671875 -14.078125 C 5.273438 -14.878906 6.007812 -15.554688 6.875 -16.109375 C 7.738281 -16.671875 8.726562 -16.953125 9.84375 -16.953125 C 10.957031 -16.953125 11.914062 -16.796875 12.71875 -16.484375 C 13.519531 -16.171875 14.21875 -15.703125 14.8125 -15.078125 C 16.195312 -13.722656 16.890625 -11.9375 16.890625 -9.71875 L 16.890625 0 L 14.390625 0 L 14.390625 -9.640625 C 14.390625 -11.179688 13.953125 -12.40625 13.078125 -13.3125 C 12.210938 -14.226562 11.09375 -14.6875 9.71875 -14.6875 C 8.3125 -14.6875 7.117188 -14.21875 6.140625 -13.28125 C 5.160156 -12.320312 4.671875 -11.097656 4.671875 -9.609375 L 4.671875 0 L 2.171875 0 L 2.171875 -16.6875 Z M 4.671875 -16.6875 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(216.289193, 197.866979)"><g><path d="M 5.203125 -19.6875 L 5.203125 -12.28125 L 17.484375 -12.28125 L 17.484375 -9.84375 L 5.203125 -9.84375 L 5.203125 -2.40625 L 18.953125 -2.40625 L 18.953125 0 L 2.703125 0 L 2.703125 -22.09375 L 18.953125 -22.09375 L 18.953125 -19.6875 Z M 5.203125 -19.6875 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(236.574074, 197.866979)"><g><path d="M 11.984375 -12.21875 C 11.753906 -13.945312 10.351562 -14.8125 7.78125 -14.8125 C 5.21875 -14.8125 3.9375 -14.015625 3.9375 -12.421875 C 3.9375 -11.753906 4.207031 -11.242188 4.75 -10.890625 C 5.300781 -10.546875 5.988281 -10.265625 6.8125 -10.046875 C 7.632812 -9.828125 8.53125 -9.617188 9.5 -9.421875 C 10.46875 -9.234375 11.363281 -8.96875 12.1875 -8.625 C 13.007812 -8.28125 13.691406 -7.804688 14.234375 -7.203125 C 14.773438 -6.609375 15.046875 -5.785156 15.046875 -4.734375 C 15.046875 -3.109375 14.429688 -1.867188 13.203125 -1.015625 C 11.984375 -0.160156 10.332031 0.265625 8.25 0.265625 C 6.019531 0.265625 4.25 -0.289062 2.9375 -1.40625 C 1.738281 -2.382812 1.09375 -3.660156 1 -5.234375 L 3.609375 -5.234375 C 3.765625 -3.703125 4.628906 -2.671875 6.203125 -2.140625 C 6.785156 -1.960938 7.359375 -1.875 7.921875 -1.875 C 8.492188 -1.875 9.023438 -1.90625 9.515625 -1.96875 C 10.003906 -2.03125 10.484375 -2.15625 10.953125 -2.34375 C 12.015625 -2.757812 12.546875 -3.476562 12.546875 -4.5 C 12.546875 -5.195312 12.269531 -5.726562 11.71875 -6.09375 C 11.175781 -6.457031 10.492188 -6.753906 9.671875 -6.984375 C 8.847656 -7.222656 7.953125 -7.4375 6.984375 -7.625 C 6.023438 -7.8125 5.132812 -8.070312 4.3125 -8.40625 C 3.488281 -8.738281 2.800781 -9.191406 2.25 -9.765625 C 1.707031 -10.347656 1.4375 -11.15625 1.4375 -12.1875 C 1.4375 -13.695312 1.984375 -14.867188 3.078125 -15.703125 C 4.179688 -16.535156 5.816406 -16.953125 7.984375 -16.953125 C 10.023438 -16.953125 11.632812 -16.460938 12.8125 -15.484375 C 13.789062 -14.660156 14.359375 -13.570312 14.515625 -12.21875 Z M 11.984375 -12.21875 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(252.655173, 197.866979)"><g><path d="M 3.96875 0 L 3.96875 -14.484375 L 0.5625 -14.484375 L 0.5625 -16.6875 L 3.96875 -16.6875 L 3.96875 -22.65625 L 6.46875 -22.65625 L 6.46875 -16.6875 L 10.3125 -16.6875 L 10.3125 -14.484375 L 6.46875 -14.484375 L 6.46875 0 Z M 3.96875 0 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(263.531603, 197.866979)"><g><path d="M 15.1875 -2.671875 C 13.851562 -0.710938 11.863281 0.265625 9.21875 0.265625 C 6.8125 0.265625 4.851562 -0.566406 3.34375 -2.234375 C 1.875 -3.878906 1.140625 -5.914062 1.140625 -8.34375 C 1.140625 -10.769531 1.875 -12.804688 3.34375 -14.453125 C 4.851562 -16.117188 6.863281 -16.953125 9.375 -16.953125 C 11.894531 -16.953125 13.832031 -15.960938 15.1875 -13.984375 L 15.1875 -16.6875 L 17.6875 -16.6875 L 17.6875 0 L 15.1875 0 Z M 9.546875 -2 C 11.347656 -2 12.769531 -2.625 13.8125 -3.875 C 14.8125 -5.050781 15.3125 -6.539062 15.3125 -8.34375 C 15.3125 -10.144531 14.8125 -11.632812 13.8125 -12.8125 C 12.769531 -14.0625 11.347656 -14.6875 9.546875 -14.6875 C 7.765625 -14.6875 6.316406 -14.0625 5.203125 -12.8125 C 4.160156 -11.632812 3.640625 -10.144531 3.640625 -8.34375 C 3.640625 -6.539062 4.160156 -5.050781 5.203125 -3.875 C 6.316406 -2.625 7.765625 -2 9.546875 -2 Z M 9.546875 -2 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(283.382752, 197.866979)"><g><path d="M 3.96875 0 L 3.96875 -14.484375 L 0.5625 -14.484375 L 0.5625 -16.6875 L 3.96875 -16.6875 L 3.96875 -22.65625 L 6.46875 -22.65625 L 6.46875 -16.6875 L 10.3125 -16.6875 L 10.3125 -14.484375 L 6.46875 -14.484375 L 6.46875 0 Z M 3.96875 0 " /></g></g></g><g fill="#027864" fill-opacity="1"><g transform="translate(294.259182, 197.866979)"><g><path d="M 9.609375 -2 C 11.859375 -2 13.472656 -2.9375 14.453125 -4.8125 L 17.1875 -4.8125 C 16.613281 -3.289062 15.695312 -2.0625 14.4375 -1.125 C 13.175781 -0.195312 11.554688 0.265625 9.578125 0.265625 C 7.066406 0.265625 5.019531 -0.566406 3.4375 -2.234375 C 1.90625 -3.859375 1.140625 -5.894531 1.140625 -8.34375 C 1.140625 -10.8125 1.875 -12.847656 3.34375 -14.453125 C 4.894531 -16.117188 6.914062 -16.953125 9.40625 -16.953125 C 11.90625 -16.953125 13.929688 -16.117188 15.484375 -14.453125 C 16.953125 -12.847656 17.6875 -10.8125 17.6875 -8.34375 L 17.6875 -7.34375 L 3.703125 -7.34375 C 3.878906 -5.8125 4.492188 -4.539062 5.546875 -3.53125 C 6.609375 -2.507812 7.960938 -2 9.609375 -2 Z M 9.40625 -14.6875 C 7.875 -14.6875 6.585938 -14.207031 5.546875 -13.25 C 4.566406 -12.332031 3.960938 -11.140625 3.734375 -9.671875 L 15.078125 -9.671875 C 14.859375 -11.140625 14.257812 -12.332031 13.28125 -13.25 C 12.238281 -14.207031 10.945312 -14.6875 9.40625 -14.6875 Z M 9.40625 -14.6875 " /></g></g></g></svg>
                </div>
                <Link
                    className="hidden  px-5 h-[65px]  flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md   data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    href='/'
                // value="tab1"
                >
                    <span className='hidden md:block hover:bg-blackA2 rounded p-2 hover:cursor-pointer transition duration-150 ease-in-out'>
                        Home
                    </span>
                </Link>
                <Link
                    className="hidden  px-5 h-[65px]  flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md   data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    href='/search'
                // value="tab2"
                >
                    <span className='hidden md:block hover:bg-blackA2 rounded p-2 hover:cursor-pointer transition duration-150 ease-in-out'>
                        Search
                    </span>
                </Link>
                <Link
                    className="hidden  px-5 h-[65px]  flex-1 md:flex items-center justify-center text-xs md:text-[15px] leading-none select-none first:rounded-tl-md last:rounded-tr-md   data-[state=active]:text-mint11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
                    href='/community'
                // value="tab3"
                >
                    <span className='hidden md:block hover:bg-blackA2 rounded p-2 hover:cursor-pointer transition duration-150 ease-in-out'>
                        Community
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
                    <span className='hidden md:block hover:bg-blackA2 rounded p-2 hover:cursor-pointer transition duration-150 ease-in-out'>
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

            {/* <h1 className='flex items-center font-semibold text-mint11 md:hidden'>ThenEstate</h1> */}
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
                    <ul id='dark-mode' className='scale-in-tr absolute flex flex-col gap-20 p-2 top-12 right-0 transition-all duration-75 ease-in-out  w-screen h-screen' >
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
                                href='/community'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>

                                <span className='text-4xl font-light'>Community</span>
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