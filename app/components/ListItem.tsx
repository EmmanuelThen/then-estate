import React from 'react'
import Checkmark from './svg/Checkmark'

type Props = {
    text: any
}

const ListItem = ({ text }: Props) => {
    return (
        <div className='flex items-center gap-3'>
            <Checkmark />
            <span className='font-medium'>
                {text}
            </span>
        </div>
    )
}

export default ListItem