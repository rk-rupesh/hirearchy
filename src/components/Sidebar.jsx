import React from 'react'
import { getImgaes } from '../utils/getImages'
import { FiHome, FiSearch } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";
import { LuMessageSquare } from "react-icons/lu";
import { LiaFileAltSolid } from "react-icons/lia";
import { AiOutlineBarChart } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import { PiSubtitles, PiBuildingApartment } from "react-icons/pi";




const Sidebar = () => {
  return (
    <div>
      <div className="max-w-[260px] ">
        <div className="logo h-[85px] flex justify-center items-center border-b-[#D9D9D9] border-b">
          <img src={getImgaes.logo} alt="main" />
        </div>
        <div className="sideNavigation px-5 py-2 shadow">
          <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2 ">Main</p>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <FiHome size={18} /> Dashboard</a>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <FiSearch size={18} /> Talent Search</a>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <TbBrain size={18} /> AI Agents</a>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'><LuMessageSquare size={18} />  Messaging</a>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <LiaFileAltSolid size={18} /> Contracts</a>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <AiOutlineBarChart size={18} /> Reports</a>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <GoLightBulb size={18} /> Idea Box</a>
          <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2 ">Company</p>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <PiBuildingApartment size={18} /> Company Profile</a>
          <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2 ">Talent</p>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <IoMdCheckmarkCircleOutline size={18} /> Approved Users</a>
          <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2 ">Integration</p>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <SlEnergy size={18} /> All Integrations</a>
          <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2 ">Billing</p>
          <a className='text-[16px] font-semibold  flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 hover:bg-[#305EEB] hover:rounded-lg hover:text-white' href='/dashboard'> <PiSubtitles size={18} /> Subscription Plans</a>
        </div>
        <div className="flex items-center justify-center gap-1 h-[83px] border-t border-t-[#D9D9D9] shadow">
          <div className="flex items-center justify-center text-[#9333EA] bg-[#F6EEFF] rounded-full h-9 w-9 text-sm font-medium">
            U
          </div>
          <div>
            <p className='text-sm font-medium'>User</p>
            <p className='font-medium text-xs text-[#737A84]'>user@company.com</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
