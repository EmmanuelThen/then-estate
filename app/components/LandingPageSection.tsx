import React from 'react'
import ListItem from './ListItem'
import Button from '../ui/Button'

type Props = {
    description: any
}

const LandingPageSection = ({ description }: Props) => {
    return (
        <div className='p-5'>
            <div className='flex flex-col justify-between md:flex-row gap-5 w-full'>
                <div className='flex flex-col gap-5 md:w-[40%]'>
                    <h1 className='capitalize font-medium text-mint11'>
                        property search
                    </h1>
                    <p className=''>
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
                            outline='bg-mint11/80'
                        />
                    </div>
                </div>
                {/* Feature Image */}
                <div className='md:w-[60%] flex justify-center'>
                    <div className='bg-slate4 rounded flex justify-center items-center border border-sky12 w-full h-full'>
                        Feature Image
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageSection