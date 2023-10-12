import React from 'react'
import TrendingUpArrow from '../components/svg/TrendingUpArrow'

type Props = {}

const TickerBadge = (props: Props) => {
    return (
        <div className='flex items-center gap-2 w-fit rounded-full px-2 py-0.5 bg-green-500/10'>
            <TrendingUpArrow
                stroke={'green'}
            />
            <p className='text-xs text-green-500'>2.71%</p>
        </div>
    )
}

export default TickerBadge