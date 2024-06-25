import React from 'react';
import { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import Clock from '../components/svg/Clock';
import Bookmark from '../components/svg/Bookmark';
import Popup from '../ui/Popup';
import Image from 'next/image';
import ThumbsUp from '../components/svg/ThumbsUp';
import ThumbsDown from '../components/svg/ThumbsDown';
import Comment from '../components/svg/Comment';
import Share from '../components/svg/Share';
import Comments from './Comments';
import ArrowDown from '../components/svg/ArrowDown';
import ArrowUp from '../components/svg/ArrowUp';



type Props = {
    username: string,
    timestamp: any,
    title: string,
    postText: string,
    image: any,
    downvoteCount: number,
    upvoteCount: number,
    commentCount: number,
    shareCount: number
}

const CommunityPost = ({ username, timestamp, title, postText, image, downvoteCount, upvoteCount, commentCount, shareCount }: Props) => {
    const [upvoteColor, setUpvoteColor] = useState('currentColor');
    const [downvoteColor, setDownvoteColor] = useState('currentColor');
    const [clicked, setClicked] = useState(false);

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
        <section className='flex flex-col gap-3 border-[0.5px] border-blackA9 p-3 h-fit rounded'>
            <header className='flex justify-between'>
                {/* Avatar and username w/ timestamp */}
                <div className='flex items-center gap-2'>
                    <Avatar.Root className="AvatarRootSmall">
                        <Avatar.Image
                            className="AvatarImage"
                            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                            alt="Colm Tuite"
                        />
                        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                            CT
                        </Avatar.Fallback>
                    </Avatar.Root>
                    <div className='leading-tight'>
                        <span className='text-sm'>{username}</span>
                        <span className='flex items-center gap-[2px] text-xs text-slate10'>
                            <Clock />
                            <span>{timestamp} ago</span>
                        </span>
                    </div>
                </div>
                <div>
                    <span className='flex gap-1 cursor-pointer'>
                        <Bookmark />
                        <Popup
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5 hover:opacity-70">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            }
                            content={
                                undefined
                            }
                            popUpBgColor={'bg-blackA2'}
                        />
                    </span>
                </div>
            </header>
            <main className='flex flex-col gap-3'>
                {/* Post title */}
                <h1 className='font-semibold text-2xl'>{title}</h1>
                <p className='text-sm font-light'>{postText}</p>
                {/* Post photo if applicable */}
                <div className='flex justify-center w-full h-full'>
                    {image}
                </div>
                {/* Likes, comments, and share */}
                <div className='flex justify-around items-center gap-3 mx-20 border-b-[0.5px] border-blackA9 pb-3'>
                    {/* Like & dislike buttons */}
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={handleUpvoteColor}
                            className='text-pop-up-top  flex items-center gap-2 hover-button rounded '
                        >
                            <ArrowUp
                                fillColor={upvoteColor}
                            />
                        </button>
                        <span className=''>{upvoteCount}</span>
                        <button
                            onClick={handleDownvoteColor}
                            className='arrow-down flex items-center gap-2 hover-button rounded'
                        >
                            <ArrowDown
                                fillColor={downvoteColor}
                            />
                        </button>
                        <span className=''>{downvoteCount}</span>
                    </div>
                    <button className='text-sm flex items-center gap-2 hover:opacity-80 rounded'>
                        <Comment />
                        <span>Comment</span>
                        <div className='flex items-center justify-center w-[45px] rounded-full px-2.5 h-[20px] bg-blackA3'>
                            <span className='text-[10px]'>{commentCount}</span>
                        </div>
                    </button>
                    <button className='text-sm flex items-center gap-2 hover:opacity-80 rounded'>
                        <Share />
                        <span>Share</span>
                        <div className='flex items-center justify-center w-[45px] rounded-full px-2.5 h-[20px] bg-blackA3'>
                            <span className='text-[10px]'>{shareCount}</span>
                        </div>
                    </button>
                </div>
            </main>
            <footer className='flex justify-center w-full'>
                <Comments
                    username={'Emmanuel Then'}
                    comment='This is a test comment to see how i can comment on any post.
                    I love this community so much fhdjkfhdkjfhdkjfhdjfhdkjfhkdjfhdjkfhdkhfjkdhfjkdfhjdkhfdkjfhdf!
                    dkhfsbdkhfbsdkhfbsdkhfbsdhjfbdshjkfbdskhfbsdkjfbdsjkfbsd,fbsd,jfd'
                    upvoteCount={220}
                    downvoteCount={35}
                />
            </footer>
        </section>
    )
}

export default CommunityPost