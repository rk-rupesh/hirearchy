import React from 'react'


const OverviewCard = ({iconColor,Icon,heading,totalSearcrh,totalSearchPer}) => {
    return (
        <div className='shadow-lg flex gap-3 items-center p-4 rounded-lg border border-[#D9D9D9]'>
            <Icon size={18} color={iconColor} />
            <div>
                <h2 className='text-[#737A84] text-sm font-bold'>{heading}</h2>
                <div className='flex items-center gap-1'>
                    <h2 className='text-2xl font-semibold'> {totalSearcrh}</h2> <span className='align-middle text-[#16A34A] rounded-4xl px-1.5 py-0.5 text-xs bg-[#F1F5F9] font-semibold'>+{totalSearchPer}%</span>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard
