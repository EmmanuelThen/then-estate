import React from 'react'

type Props = {}

const CheckBox = (props: Props) => {
    return (
    <label className='flex gap-2 items-center hover:cursor-pointer text-sm' htmlFor="for_rent">
        <input className='hover:cursor-pointer' type="checkbox" name="For rent" id="for_rent" />
        For rent
    </label>

  )
}

export default CheckBox