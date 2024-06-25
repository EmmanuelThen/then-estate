import React from 'react';
import { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import CurvedArrow from '../components/svg/CurvedArrow';
import ArrowUp from '../components/svg/ArrowUp';
import ArrowDown from '../components/svg/ArrowDown';
import Cancel from '../components/svg/Cancel';
import Xmark from '../components/svg/Xmark';
import Reply from './Reply';
import TextArea from '../components/ui/text-area';


type Props = {
    username: any,
    comment: string,
    upvoteCount: any,
    downvoteCount: any
}

const Comments = ({ username, comment, upvoteCount, downvoteCount }: Props) => {
    const [upvoteColor, setUpvoteColor] = useState('currentColor');
    const [downvoteColor, setDownvoteColor] = useState('currentColor');
    const [clicked, setClicked] = useState(false);
    const [replyBox, setReplyBox] = useState('hidden');
    const [hideReplies, setHideReplies] = useState('');


    const handleUpvoteColor = () => {
        setClicked(!clicked);
        setUpvoteColor(clicked ? 'currentColor' : 'rgb(0 144 255)')
        setDownvoteColor('currentColor');
    }
    const handleDownvoteColor = () => {
        setClicked(!clicked);
        setDownvoteColor(clicked ? 'rgb(229 72 77)' : 'currentColor')
        setUpvoteColor('currentColor');

    }

    return (
        <div className='flex p-2 '>
            {/* <div className=''>
                <Avatar.Root className="AvatarRootSmaller">
                    <Avatar.Image
                        className="AvatarImage"
                        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                        alt="Colm Tuite"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        CT
                    </Avatar.Fallback>
                </Avatar.Root>
            </div> */}
            <div className='flex flex-col px-20'>
                <div className='flex items-center gap-2'>
                    <Avatar.Root className="AvatarRootSmaller">
                        <Avatar.Image
                            className="AvatarImage"
                            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                            alt="Colm Tuite"
                        />
                        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                            CT
                        </Avatar.Fallback>
                    </Avatar.Root>
                    <p className='text-xs font-semibold whitespace-nowrap'>{username}:</p>
                </div>
                <div className='text-xs ml-[33px]'>
                    <p>{comment}</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <button
                                onClick={() => setReplyBox('')}
                                className='flex items-center gap-2 hover-button rounded'
                            >
                                <CurvedArrow />
                                <span>Reply</span>
                            </button>
                            <button
                                onClick={() => setHideReplies('')}
                                className='flex items-center gap-2 hover-button rounded'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>View replies</span>
                            </button>
                            <p className={`${replyBox} flex items-center rounded py-[2px] px-1 bg-blackA6`}>
                                <span className='text-[10px] whitespace-nowrap'>
                                    Replying to {username}
                                </span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={handleUpvoteColor}
                                className='text-pop-up-top  flex items-center gap-2 hover-button rounded '
                            >
                                <ArrowUp
                                    fillColor={upvoteColor}
                                />
                            </button>
                            <div className='flex items-center justify-center w-[45px] rounded-full px-2.5 h-[20px] bg-blackA3'>
                                <span className='text-[10px]'>{upvoteCount}</span>
                            </div>
                            <button
                                onClick={handleDownvoteColor}
                                className='arrow-down flex items-center gap-2 hover-button rounded'
                            >
                                <ArrowDown
                                    fillColor={downvoteColor}
                                />
                            </button>
                            <div className='flex items-center justify-center w-[45px] rounded-full px-2.5 h-[20px] bg-blackA3'>
                                <span className='text-[10px]'>{downvoteCount}</span>
                            </div>
                        </div>
                    </div>
                    <hr className='w-full h-[0.5px] bg-red-500 my-2' />
                </div>

                {/* Reply box only visible when reply is clicked */}
                <div className={`${replyBox} flex gap-2 ml-[33px] my-3`}>
                    <button
                        onClick={() => setReplyBox('hidden')}
                        className='btn bg-red9 inline-flex font-medium items-center justify-center  h-[35px] px-[15px] leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out  text-sm'
                    >
                        <Xmark />
                    </button>
                    <TextArea />
                    <form action="">
                        <button
                            onClick={() => setReplyBox('hidden')}
                            className='btn bg-blue9 inline-flex font-medium items-center justify-center  h-[35px] px-[15px] leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out  text-sm'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke='white' className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                        </button>
                    </form>
                </div>

                {/* reply */}
                <div className='flex flex-col gap-3'>
                    <div className={`flex flex-col gap-1 ${hideReplies}`}>
                        <Reply
                            avatarSrc='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
                            username={'John Smitth'}
                            comment='this is my reply to you because i want to reply to you because fdf
                            becaue i want to reply to u because i want to reply to u because i want
                            to reply to u'
                            upvoteCount={234}
                            downvoteCount={2}
                        />
                        <Reply
                            avatarSrc='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
                            username={'Jessica Peterson'}
                            comment='this is my reply to you because i want to reply to you because fdf
                            becaue i want to reply to u because i want to reply to u because i want
                            to reply to u'
                            upvoteCount={17}
                            downvoteCount={200}
                        />
                    </div>
                    <div className={`pl-20 ml[35px] ${hideReplies}`}>
                        <button
                            onClick={() => setHideReplies('hidden')}
                            className='flex items-center gap-1 rounded w-fit hover-button p-2'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            <span className='text-xs'>Hide replies</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments