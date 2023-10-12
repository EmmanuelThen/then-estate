import React from 'react'

type Props = {
    text: any
}

const Seperator = ({ text }: Props) => {
    return (
        <div className='flex justify-center w-full mt-5'>
            <div className='flex items-center justify-center gap-8 w-full'>
                <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
                <span className='text-xs text-blue9'>{text}</span>
                <hr className='block w-full h-[1px] border-0 bg-[#e8e8e8]' />
            </div>
        </div>
    )
}

export default Seperator