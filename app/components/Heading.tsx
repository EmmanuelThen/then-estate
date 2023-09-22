import React from 'react'

type Props = {
    children: any
}

const Heading = ({ children }: Props) => {
    return (
        <h1 className='z-50 py-2 font-bold mt-5 tracking-[-0.03em] md:leading-[1.10] md:text-[55px] inline-flex bg-clip-text text-4xl text-mint11'>
            {children}
        </h1>
    )
}

export default Heading