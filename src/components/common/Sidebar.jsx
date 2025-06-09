import React from 'react'
import { getImgaes } from '../../utils/getImages'
import { FiHome, FiSearch } from "react-icons/fi";
import { TbBrain } from "react-icons/tb";
import { LuMessageSquare } from "react-icons/lu";
import { LiaFileAltSolid } from "react-icons/lia";
import { AiOutlineBarChart } from "react-icons/ai";
import { GoLightBulb } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import { PiSubtitles, PiBuildingApartment } from "react-icons/pi";
import { NavLink } from 'react-router';


const sidebarMenus = [
  { path: '/', icon: FiHome, pathName: 'Dashboard' },
  { path: '/talent-search', icon: FiSearch, pathName: 'Talent Search' },
  { path: '/ai-agents', icon: TbBrain, pathName: 'AI Agents' },
  { path: '/messaging', icon: LuMessageSquare, pathName: 'Messaging' },
  { path: '/contracts', icon: LiaFileAltSolid, pathName: 'Contracts' },
  { path: '/reports', icon: AiOutlineBarChart, pathName: 'Reports' },
  { path: '/idea-box', icon: GoLightBulb, pathName: 'Idea Box' },
  { path: '/company-profile', icon: PiBuildingApartment, pathName: 'Company Profile' },
  { path: '/approved-users', icon: IoMdCheckmarkCircleOutline, pathName: 'Approved Users' },
  { path: '/all-integrations', icon: SlEnergy, pathName: 'All Integrations' },
  { path: '/subscription-plans', icon: PiSubtitles, pathName: 'Subscription Plans' },
]


const Sidebar = () => {
  return (
    <div>
      <div className="w-[260px] ">
        <div className="logo h-[85px] flex justify-center items-center border-b-[#D9D9D9] border-b">
          <img src={getImgaes.logo} alt="main" />
        </div>
        <div className="sideNavigation px-5 py-2 shadow">
          <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2 ">Main</p>
          {
            sidebarMenus.map((menu, index) => {
              const Icon = menu.icon;
              return (
                <React.Fragment key={index}>
                  {menu.pathName == "Company Profile" && (
                    <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2">
                      Company
                    </p>
                  )}
                  {menu.pathName == "Approved Users" && (
                    <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2">
                      Talent
                    </p>
                  )}
                  {menu.pathName == "Integrations" && (
                    <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2">
                      Integration
                    </p>
                  )}
                  {menu.pathName == "Subscription Plans" && (
                    <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2">
                      Billing
                    </p>
                  )}
                  <NavLink className={({ isActive }) =>
                    `text-[16px] font-semibold flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4
                      ${isActive ? 'bg-[#305EEB] rounded-lg text-white shadow-md'
                      : 'hover:bg-[#305EEB] hover:rounded-lg hover:text-white'}`}
                    to={`${menu.path}`}> <Icon size={18} /> {`${menu.pathName}`}
                  </NavLink>
                </React.Fragment>
              );
            })
          }
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
