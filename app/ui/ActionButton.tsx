import React from 'react'

type Props = {
  text: any
  bgColor: string
  onClick: any
  disabled: any
}

const ActionButton = ({ text, bgColor, onClick, disabled }: Props) => {
  return (
    <button
      className={`btn whitespace-nowrap z-50 ${bgColor} inline-flex font-medium items-center justify-center h-[35px] px-[15px] leading-none hover:opacity-80 transition duration-150 ease-in-out text-white text-sm`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default ActionButton