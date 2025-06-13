import React from 'react'
const RecentActivityCard = ({ heading, time, Icon }) => {
    return (
        <div className="px-2  flex justify-between items-center mb-6">
            <div className='flex gap-2.5'>
                <div className='bg-[#F3F4F6] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <Icon size={24} />
                </div>
                <div>
                    <h2 className='text-sm font-semibold'>{heading}</h2>
                    <span className='font-semibold text-xs text-[#737A84]'>{time} hours ago</span>
                </div>
            </div>
        </div>
    )
}

export default RecentActivityCard
