import React from 'react'
import ListItem from './ListItem'
import Button from '../ui/Button'
import Image from 'next/image'

type Props = {
    description: any
    title: any
}

const LandingPageSection = ({ description, title }: Props) => {
    return (
        <div className='p-5'>
            <div className='flex flex-col justify-between md:flex-row gap-5 w-full'>
                <div className='flex flex-col gap-5 md:w-[40%]'>
                    <h1 className='capitalize text-mint11 md:text-2xl font-bold'>
                        {title}
                    </h1>
                    <p className='text-sm md:text-base leading-7'>
                        {description}
                    </p>
                    <div className='flex flex-col gap-5'>
                        <ListItem text={'Personalized search'} />
                        <ListItem text={'Real time updates'} />
                        <ListItem text={'Interactive maps'} />
                        <ListItem text={'Comprehensive information'} />
                        <ListItem text={'Investment information and ratings'} />
                    </div>
                    <div className='w-[50%] mt-5'>
                        <Button
                            text={`Get started`}
                            bgColor='bg-mint11'
                        />
                    </div>
                </div>
                {/* Feature Image */}
                <div className='md:w-[60%] px-20 flex justify-center'>
                    <Image
                        alt='fallback'
                        src='/app/images/PropertySearch.png'
                        width={900}
                        height={900}
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingPageSection