import React from 'react'

type Props = {
    count: any
}

const Count = ({count}: Props) => {
    return (
        <div className='flex items-center w-fit rounded-full px-2.5 py-[0.5px] bg-blackA9'>
            <span className='text-[10px] text-white'>{count}</span>
        </div>
    )
}

export default Count