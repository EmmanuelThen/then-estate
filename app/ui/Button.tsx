import React from 'react'

type Props = {
    text: any
}

const Button = ({ text }: Props) => {
  return (
    <button className='rounded-full bg-sky12 h-[35px] px-4 hover:bg-mint11 transition duration-150 text-white text-sm w-full'>
        {text}
    </button>
  )
}

export default Button