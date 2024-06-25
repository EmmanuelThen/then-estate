import React from 'react'

type Props = {
    fillColor: string
}

const ArrowDown = ({fillColor}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke={fillColor} className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
    )
}

export default ArrowDown