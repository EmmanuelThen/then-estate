import React from 'react'
import { useState } from 'react'
import * as Avatar from '@radix-ui/react-avatar'
import ArrowDown from '../components/svg/ArrowDown'
import ArrowUp from '../components/svg/ArrowUp'
import CurvedArrow from '../components/svg/CurvedArrow'
import Xmark from '../components/svg/Xmark'
import TextArea from '../components/ui/text-area'

type Props = {
    username: any,
    comment: any,
    upvoteCount: any,
    downvoteCount: any,
    avatarSrc: string
}

const Reply = ({ username, comment, upvoteCount, downvoteCount, avatarSrc }: Props) => {
    const [upvoteColor, setUpvoteColor] = useState('currentColor');
    const [downvoteColor, setDownvoteColor] = useState('currentColor');
    const [clicked, setClicked] = useState(false);
    const [replyBox, setReplyBox] = useState('hidden')

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
        <div className='flex flex-col pl-20 ml[35px] w-full'>
            <div className='flex items-center gap-2'>
                <Avatar.Root className="AvatarRootSmaller">
                    <Avatar.Image
                        className="AvatarImage"
                        src={avatarSrc}
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
            </div>
            {/* Reply box only visible when reply is clicked */}
            <div className={`${replyBox} flex gap-1 ml-[33px] my-3`}>
                <button
                    onClick={() => setReplyBox('hidden')}
                    className='btn bg-red9 inline-flex font-medium items-center justify-center h-[35px] px-[15px] leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out  text-sm'
                >
                    <Xmark />
                </button>
                <TextArea />
                <form action="">
                    <button
                        onClick={() => setReplyBox('hidden')}
                        className='btn bg-blue9 inline-flex font-medium items-center justify-center h-[35px] px-[15px] leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out  text-sm'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke='white' className="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                </form>
            </div>
            <hr className='w-full h-[0.5px] my-2' />
        </div>
    )
}

export default Reply