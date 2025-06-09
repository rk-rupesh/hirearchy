import React from 'react'
import { SlEnergy } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

const Topbar = ({ pageHeading='Dashboard',pageDesc =`Welcome back! Here's your recruitment overview.`}) => {
    return (
        <div className='flex max-w-full justify-between px-6 border-[#D9D9D9] border h-[85px] items-center '>
            <div>
                <h1 className='font-bold text-2xl'>{pageHeading}</h1>
                <p className='font-semibold text-base text-[#737A84]'>{pageDesc}</p>
            </div>
            <div className="buttons flex gap-3 items-center">
                <button className='cursor-pointer gap-2.5 rounded-3xl px-2 py-1.5 items-center bg-[#DCFCE7] text-[#16A34A] font-medium text-sm flex'><SlEnergy size={18} />AI Active </button>
                <button className='cursor-pointer py-2.5 px-3 bg-[#305EEB] flex rounded-lg text-white gap-2.5 items-center font-medium text-sm'><FiSearch size={18} />New Search</button>
            </div>
        </div>
    )
}

export default Topbar
