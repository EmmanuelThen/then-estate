import React from 'react'

type Props = {}

const Bath = (props: Props) => {
	return (
		<svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bathroom">
			<g fill="none" className='stroke-color' stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" strokeWidth='1.5'>
				<path d="M17.5 15.5h-11a5.491 5.491 0 002.855 4.817c.29.16.331.541.104.78A3.48 3.48 0 008.5 23.5h7a3.48 3.48 0 00-.959-2.402c-.227-.24-.185-.622.104-.78A5.491 5.491 0 0017.5 15.5zM17.5 15.5h-11a1 1 0 110-2h11a1 1 0 110 2zM9.806 5.494C9.01 6.287 8.5 7.43 8.5 8.452">
				</path>
				<path d="M15.287 13.5c1.341-1.318 2.213-3.291 2.213-5.048C17.5 5.494 15.038 2.5 12 2.5S6.5 5.494 6.5 8.452c0 1.757.872 3.73 2.213 5.048">
				</path>
				<circle cx="17" cy="2.5" r=".5">
				</circle>
				<path d="M18.5 2.5h-1M16.727 11.5H18.2a1.5 1.5 0 001.485-1.288l.79-5.528c.017-.122.026-.246.026-.37V3.118A2.618 2.618 0 0017.882.5H6.118A2.618 2.618 0 003.5 3.118v1.196c0 .124.009.248.026.37l.79 5.528A1.5 1.5 0 005.801 11.5h1.471">
				</path>
			</g>
		</svg>
	)
}

export default Bath