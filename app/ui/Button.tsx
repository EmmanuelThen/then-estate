import React from 'react'

type Props = {
    text: any
    bgColor: string
}

const Button = ({ text, bgColor }: Props) => {
  return (
    <button className={`${bgColor} z-50 inline-flex font-medium items-center justify-center rounded-full h-[35px] px-[15px] leading-none tracking-wide hover:bg-opacity-80 transition duration-150 ease-in-out text-white text-sm`}>
        {text}
    </button>
  )
}

export default Button