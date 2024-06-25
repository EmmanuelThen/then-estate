import React from 'react'

type Props = {
    fillColor: string,
}

const ArrowUp = ({ fillColor }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke={fillColor} className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
    )
}

export default ArrowUp