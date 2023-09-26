import React from 'react'
import ListItem from './ListItem'
import Button from '../ui/Button'

type Props = {
    description: any
    title: string
}

const OppositeLandingPageSection = ({ description, title }: Props) => {
    return (
        <div className='p-5'>
            <div className='flex flex-col justify-between md:flex-row gap-5 w-full'>
                {/* Feature Image */}
                <div className='md:w-[60%] px-20 flex justify-center'>
                    <div className='bg-slate4 rounded flex justify-center items-center w-full h-full shadow-sky12 shadow-[0px_8px_15px]'>
                        Feature Image
                    </div>
                </div>
                <div className='flex flex-col gap-5 md:w-[40%]'>
                    <h1 className='capitalize text-mint11 md:text-2xl font-bold'>
                        {title}
                    </h1>
                    <p className='text-sm md:text-base leading-7'>
                        {description}
                    </p>
                    <div className='flex flex-col gap-5'>
                        <ListItem text={'Comprehensive data'} />
                        <ListItem text={'Risk assessment'} />
                        <ListItem text={'Portfolio management'} />
                        <ListItem text={'Real-time updates'} />
                        <ListItem text={'User friendly interface'} />
                    </div>
                    <div className='w-[50%] mt-5'>
                        <Button
                            text={`Get started`}
                            bgColor='bg-mint11'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OppositeLandingPageSection