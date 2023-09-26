import React from 'react'
import Checkmark from './svg/Checkmark'

type Props = {
    text: any
}

const ListItem = ({ text }: Props) => {
    return (
        <div className='flex items-center gap-2'>
            <Checkmark />
            <span className='text-mint11 font-medium'>
                {text}
            </span>
        </div>
    )
}

export default ListItem