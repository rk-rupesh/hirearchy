import React from 'react'
import { TbBrain } from 'react-icons/tb'

const AiAgentCard = ({ heading, candidates, successPer, isActive }) => {
    return (
        <div className=" shadow-lg rounded-lg border border-[#D9D9D9] px-2 py-3.5 flex justify-between items-center mb-4.5">
            <div className='flex gap-2.5'>
                <div className='bg-[#F1F5F9] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <TbBrain size={24} color='#305EEB' />
                </div>
                <div>
                    <h2 className='text-base font-semibold'>{heading}</h2>
                    <div className='flex gap-2.5'>
                        <span className='font-semibold text-sm text-[#737A84]'>{candidates} candidates</span>
                        <span className='font-semibold text-sm text-[#737A84]'>{successPer}% success</span>
                    </div>
                </div>
            </div>
            <span className={`font-semibold text-xs ${isActive ? 'text-[#16A34A]' : 'text-[#737A84]'} px-2.5 py-1.5 rounded-2xl bg-[#F1F5F9]`}>{isActive ? 'active' : 'paused'}</span>

        </div>
    )
}

export default AiAgentCard
