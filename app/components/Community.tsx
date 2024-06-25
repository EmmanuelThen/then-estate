'use client'
import React from 'react'
import SearchIcon from './svg/SearchIcon'
import Home from './svg/Home'
import Envelope from './svg/Envelope'
import Network from './svg/Network'
import News from './svg/News'
import CommunityHome from './CommunityHome'
import { useState } from 'react'
import * as Avatar from '@radix-ui/react-avatar';
import ActionButton from '../ui/ActionButton'
import Photo from './svg/Photo'
import Paperclip from './svg/Paperclip'
import Maplocation from './svg/Maplocation'
import CommunityPost from '../ui/CommunityPost'
import Image from 'next/image'
import ProMember from './svg/ProMember'
import Dropdown from './ui/dropdown'
import InputBar from './ui/input'

type Props = {}


const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
];

const Community = (props: Props) => {
    const [state, setState] = useState('Community');
    const [selected, setSelected] = useState(0);
    const [buttonSelected, setButtonSelected] = useState(null);


    const handleClick = (index) => {
        setSelected(index);
    };
    const handleButtonClick = (index) => {
        setButtonSelected(index);
    };

    return (
        // <div className='flex pt-20'>
        //     {/* Side menu */}
        //     <nav className='fixed left-0 flex flex-col gap-5 border-r-[0.5px] border-slate9 w-[13.67%] h-full overflow-y-auto shadow-md shadow-blackA6'>
        //         <ul className='flex flex-col gap-3 whitespace-nowrap p-2'>
        //             <h1 className='flex justify-start font-light tracking-[-0.03em] md:leading-[1.10] mb-1 bg-clip-text text-center text-3xl text-blue9'>
        //                 {state}
        //             </h1>
        //             {[
        //                 { icon: <Home />, label: 'Home' },
        //                 { icon: <Envelope />, label: 'Inbox' },
        //                 { icon: <Network />, label: 'Network' },
        //                 { icon: <News />, label: 'News Feed' },
        //                 { icon: <ProMember />, label: 'Elite membership' },
        //             ].map((item, index) => (
        //                 <li
        //                     key={index}
        //                     className={`${item.label === 'Elite membership' ? 'bg-blue9 text-white' : ''} flex gap-2 items-center rounded-lg  p-2 hover:cursor-pointer transition duration-150 ease-in-out ${selected  === index ? 'selected' : ''} ${item.label === 'Elite membership' ? 'btn' : ''}`}
        //                     onClick={() => handleClick(index)}
        //                 >
        //                     {item.icon}
        //                     <span>{item.label}</span>
        //                 </li>
        //             ))}
        //         </ul>
        //     </nav>

        //     {/* Community side container */}
        //     <div className='flex-1 ml-[13.67%]'>
        //         {/* Top nav */}
        //         <nav className='fixed left-[13.67%] z-10 bg-white' style={{ width: 'calc(100% - 13.67%)' }}>
        //             <div className='flex justify-between gap-8 items-center p-2 border-b-[0.5px] border-slate9'>

        //                 {/* Searchbar */}
        //                 <form className='inline-flex justify-center items-center relative w-full' action="/search" method="GET">
        //                     <div className='w-full'>
        //                         <InputBar
        //                             placeholder={'Search community'}
        //                         />
        //                     </div>
        //                 </form>
        //                 {/* Button nav */}
        //                 <div className='flex items-center rounded gap-3 bg-blackA2 p-1 border border-blackA9'>
        //                     {[
        //                         { button: 'Community feed' },
        //                         { button: 'Explore' }
        //                     ].map((item, index) => (
        //                         <button
        //                             key={index}
        //                             className={`px-[15px] text-[13px] leading-none h-[30px] gap-[5px] hover:rounded-[2px] hover:transition hover:duration-150 hover:ease-in-out hover:shadow-md hover:bg-blackA6 ${buttonSelected === index ? 'button-selected' : ''}`}
        //                             onClick={() => handleButtonClick(index)}
        //                         >
        //                             <span className=' whitespace-nowrap'>{item.button}</span>
        //                         </button>
        //                     ))}
        //                     <Dropdown />
        //                 </div>
        //             </div>
        //         </nav>

        //         {/* Community content */}
        //         <section className='flex mt-[60px] p-5 overflow-y-auto h-[calc(100vh-80px)]'>
        //             {/* Container */}
        //             <div className='flex flex-col gap-5 w-[70%] h-fit rounded mr-5'>
        //                 {/* Create a post box */}
        //                 <div className='flex flex-col gap-3 border-[0.5px] border-blackA9 bg-blackA2 p-3 h-fit rounded'>
        //                     <div className='flex items-center gap-5  rounded'>
        //                         <Avatar.Root className="AvatarRoot">
        //                             <Avatar.Image
        //                                 className="AvatarImage"
        //                                 src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        //                                 alt="Colm Tuite"
        //                             />
        //                             <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        //                                 CT
        //                             </Avatar.Fallback>
        //                         </Avatar.Root>
        //                         <InputBar
        //                             placeholder={'Create a post'}
        //                         />
        //                     </div>
        //                     {/* Post button */}
        //                     <div className='flex items-center w-full justify-between'>
        //                         {/* Action icons */}
        //                         <div className='flex items-center gap-3 cursor-pointer'>
        //                             <button className='hover-button rounded'>
        //                                 <Photo />
        //                             </button>
        //                             <button className='hover-button rounded'>
        //                                 <Paperclip />
        //                             </button>
        //                             <button className='hover-button rounded'>
        //                                 <Maplocation />
        //                             </button>
        //                         </div>
        //                         <ActionButton
        //                             text={'Create post'}
        //                             bgColor={'bg-blue9 z-[0]'}
        //                             onClick={undefined}
        //                             disabled={undefined}
        //                         />
        //                     </div>
        //                 </div>
        //                 {/* Community post */}
        //                 <div>
        //                     <CommunityPost
        //                         username={'Emmanuel Then'}
        //                         timestamp={'12 minutes'}
        //                         title='Post title'
        //                         postText='Nestled in the heart of the picturesque countryside, this stunning four-bedroom, three-bathroom estate offers a perfect blend of modern luxury and rustic charm. 
        //                         The expansive property spans over 15 acres of rolling hills, lush meadows, and mature woodlands, providing an idyllic setting for outdoor enthusiasts and nature lovers alike.'
        //                         image={
        //                             // <Image
        //                             //     src={'https://ap.rdcpix.com/56e8cf89aadf05c10a617a3d9db46a89l-m902084864s.jpg'}
        //                             //     alt=''
        //                             //     width={300}
        //                             //     height={300}
        //                             // />
        //                             undefined
        //                         }
        //                         upvoteCount={375}
        //                         downvoteCount={57}
        //                         commentCount={173}
        //                         shareCount={302}
        //                     />
        //                 </div>
        //             </div>
        //             {/* Side boxes */}
        //             <div className='border-[0.5px] border-slate9 w-[30%]'>
        //                 <div>
        //                     {/* Dropdown iss suppose to go here */}
        //                     <Dropdown />
        //                 </div>
        //             </div>
        //         </section>
        //     </div>
        // </div>

        <div className='w-full flex'>
            

            {/* Community side container */}
            <div className='flex-1 '>
                {/* Top nav */}
                <nav className=' w-full z-10 bg-white'>
                    <div className='flex justify-between gap-8 items-center p-2 border-b-[0.5px] border-slate9'>

                        {/* Searchbar */}
                        <form className='inline-flex justify-center items-center relative w-full' action="/search" method="GET">
                            <div className='w-full'>
                                <InputBar
                                    placeholder={'Search community'}
                                />
                            </div>
                        </form>
                        {/* Button nav */}
                        {/* <div className='flex items-center rounded gap-3 bg-blackA2 p-1 border border-blackA9'>
                            {[
                                { button: 'Community feed' },
                                { button: 'Explore' }
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    className={`px-[15px] text-[13px] leading-none h-[30px] gap-[5px] hover:rounded-[2px] hover:transition hover:duration-150 hover:ease-in-out hover:shadow-md hover:bg-blackA6 ${buttonSelected === index ? 'button-selected' : ''}`}
                                    onClick={() => handleButtonClick(index)}
                                >
                                    <span className='whitespace-nowrap'>{item.button}</span>
                                </button>
                            ))}

                        </div> */}
                    </div>
                </nav>

                {/* Community content */}
                <section className='flex p-5 overflow-y-auto h-[calc(100vh-80px)]'>
                    {/* Container */}
                    <div className='flex flex-col gap-5 w-[70%] h-fit rounded mr-5'>
                        {/* Create a post box */}
                        <div className='flex flex-col gap-3 border-[0.5px] border-blackA9 bg-blackA2 p-3 h-fit rounded'>
                            <div className='flex items-center gap-5 rounded'>
                                <Avatar.Root className="AvatarRoot">
                                    <Avatar.Image
                                        className="AvatarImage"
                                        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                                        alt="Colm Tuite"
                                    />
                                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                                        CT
                                    </Avatar.Fallback>
                                </Avatar.Root>
                                <InputBar
                                    placeholder={'Create a post'}
                                />
                            </div>
                            {/* Post button */}
                            <div className='flex items-center w-full justify-between'>
                                {/* Action icons */}
                                <div className='flex items-center gap-3 cursor-pointer'>
                                    <button className='hover-button rounded'>
                                        <Photo />
                                    </button>
                                    <button className='hover-button rounded'>
                                        <Paperclip />
                                    </button>
                                    <button className='hover-button rounded'>
                                        <Maplocation />
                                    </button>
                                </div>
                                <ActionButton
                                    text={'Create post'}
                                    bgColor={'bg-blue9 z-[0]'}
                                    onClick={undefined}
                                    disabled={undefined}
                                />
                            </div>
                        </div>
                        {/* Community post */}
                        <div>
                            <CommunityPost
                                username={'Emmanuel Then'}
                                timestamp={'12 minutes'}
                                title='Post title'
                                postText='Nestled in the heart of the picturesque countryside, this stunning four-bedroom, three-bathroom estate offers a perfect blend of modern luxury and rustic charm. 
                                The expansive property spans over 15 acres of rolling hills, lush meadows, and mature woodlands, providing an idyllic setting for outdoor enthusiasts and nature lovers alike.'
                                image={
                                    // <Image
                                    //     src={'https://ap.rdcpix.com/56e8cf89aadf05c10a617a3d9db46a89l-m902084864s.jpg'}
                                    //     alt=''
                                    //     width={300}
                                    //     height={300}
                                    // />
                                    undefined
                                }
                                upvoteCount={375}
                                downvoteCount={57}
                                commentCount={173}
                                shareCount={302}
                            />
                            <CommunityPost
                                username={'Emmanuel Then'}
                                timestamp={'12 minutes'}
                                title='Post title'
                                postText='Nestled in the heart of the picturesque countryside, this stunning four-bedroom, three-bathroom estate offers a perfect blend of modern luxury and rustic charm. 
                                The expansive property spans over 15 acres of rolling hills, lush meadows, and mature woodlands, providing an idyllic setting for outdoor enthusiasts and nature lovers alike.'
                                image={
                                    // <Image
                                    //     src={'https://ap.rdcpix.com/56e8cf89aadf05c10a617a3d9db46a89l-m902084864s.jpg'}
                                    //     alt=''
                                    //     width={300}
                                    //     height={300}
                                    // />
                                    undefined
                                }
                                upvoteCount={375}
                                downvoteCount={57}
                                commentCount={173}
                                shareCount={302}
                            />
                            <CommunityPost
                                username={'Emmanuel Then'}
                                timestamp={'12 minutes'}
                                title='Post title'
                                postText='Nestled in the heart of the picturesque countryside, this stunning four-bedroom, three-bathroom estate offers a perfect blend of modern luxury and rustic charm. 
                                The expansive property spans over 15 acres of rolling hills, lush meadows, and mature woodlands, providing an idyllic setting for outdoor enthusiasts and nature lovers alike.'
                                image={
                                    // <Image
                                    //     src={'https://ap.rdcpix.com/56e8cf89aadf05c10a617a3d9db46a89l-m902084864s.jpg'}
                                    //     alt=''
                                    //     width={300}
                                    //     height={300}
                                    // />
                                    undefined
                                }
                                upvoteCount={375}
                                downvoteCount={57}
                                commentCount={173}
                                shareCount={302}
                            />
                        </div>
                    </div>
                    {/* Side boxes */}
                    <div className=' border-[0.5px] border-slate9 w-[30%]'>
                        <div>
                            {/* Dropdown iss suppose to go here */}
                            <Dropdown />
                        </div>
                    </div>
                </section>
            </div>
        </div>


    )
}



export default Community