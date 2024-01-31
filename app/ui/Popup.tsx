import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon, ArrowRightIcon } from '@radix-ui/react-icons';

const Popup = ({ content, popUpBgColor, icon }: any) => (
    <Popover.Root>
        <Popover.Trigger asChild>
            <button
                className="hover:opacity-80 hover:cursor-pointer"
                aria-label="Update dimensions"
            >
                {icon}
            </button>
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content
                className={`rounded p-2 w-[260px] ${popUpBgColor} shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.slate7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade`}
                sideOffset={5}
                id='dark-mode'
            >
                <div className="flex flex-col gap-2.5">
                    {content}
                </div>
                {/* <Popover.Close
                    className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:cursor-pointer hover:opacity-80 transition duration-150 ease-in-out  outline-none"
                    aria-label="Close"
                >
                    <Cross2Icon />
                </Popover.Close> */}
                <Popover.Arrow className='fill-blackA3' />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default Popup;
