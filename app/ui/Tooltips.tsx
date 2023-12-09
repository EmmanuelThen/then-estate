import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip';

type Props = {
    button: any
    tooltipContent: any
}

const Tooltips = ({ button, tooltipContent }: Props) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                    <div className='hover:cursor-pointer w-fit rounded-full shadow-blackA6 shadow-[0px_4px_7px] bg-blackA2 p-2 h-fit'>
                        {button}
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="text-white data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade  select-none rounded-[4px] bg-mint11 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] z-[9999]"
                        sideOffset={5}
                        side='top'

                    // id='custom-text'
                    >
                        {tooltipContent}
                        <Tooltip.Arrow className="fill-mint11" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>


    )
}

export default Tooltips;