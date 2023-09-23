import React from 'react'

type Props = {}

const GradientBlur = (props: Props) => {
    return (
        <div
            className=" md:left-[max(-7rem,calc(50%-52rem))] md:top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
        >
            <div
                className="mt-20 aspect-[577/310] w-[25rem] h-[35rem] md:w-[46.0625rem] bg-gradient-to-r from-mint9 to-sky9 opacity-80"
                style={{
                    clipPath:
                        'polygon(74.8% 41.9%, 97.2% 73.2%, 10% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                }}
            />
        </div>
    )
}

export default GradientBlur