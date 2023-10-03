import React from 'react'


type Props = {
    status: any
    checked: any
    handleChange: any
}

const CheckBox = ({ status, checked, handleChange }: Props) => {
    return (
    <label className='flex gap-2 items-center hover:cursor-pointer text-sm' htmlFor="for_rent">
        <input onChange={handleChange} checked={checked} className='hover:cursor-pointer' type="checkbox"/>
        {status}
    </label>

  )
}

export default CheckBox