import React from 'react'
import { SlEnergy } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from 'react-icons/gi';

const Topbar = ({ pageHeading='Dashboard',pageDesc =`Welcome back! Here's your recruitment overview.` , handleSideBarShowOnMobile ,sidebarshowMobile}) => {
    return (
        <div className='flex flex-col md:flex-row max-w-full justify-between px-6 border-[#D9D9D9] border h-auto md:h-[85px] items-center sticky top-0 z-10 bg-white'>
            <div >
                 <button className='shadow p-2 me-2 absolute top-1 end-1 block sm:hidden' onClick={() => handleSideBarShowOnMobile(!sidebarshowMobile)}><GiHamburgerMenu /></button>

                <h1 className='font-bold text-2xl'>{pageHeading}</h1>
                <p className='font-semibold text-base text-[#737A84]'>{pageDesc}</p>
            </div>
            <div className="buttons flex gap-3 items-center py-3 md:py-0">
                <button className='cursor-pointer gap-2.5 rounded-3xl px-2 py-1.5 items-center bg-[#DCFCE7] text-[#16A34A] font-medium text-sm flex'><SlEnergy size={18} />AI Active </button>
                <button className='cursor-pointer py-2.5 px-3 bg-[#305EEB] flex rounded-lg text-white gap-2.5 items-center font-medium text-sm'><FiSearch size={18} />New Search</button>
            </div>
        </div>
    )
}

export default Topbar
