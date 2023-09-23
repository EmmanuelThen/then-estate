import React from 'react'

type Props = {
    text: any
    outline: string
}

const Button = ({ text, outline }: Props) => {
  return (
    <button className={`${outline} z-50 inline-flex font-medium items-center justify-center rounded-md bg-sky12 h-[35px] px-[15px] leading-none hover:opacity-80 transition duration-150 text-white text-sm`}>
        {text}
    </button>
  )
}

export default Button