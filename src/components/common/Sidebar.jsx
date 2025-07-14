import React, { useState } from 'react'
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
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';


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


const sectionLabels = {
  'Company Profile': 'Company',
  'Approved Users': 'Talent',
  'All Integrations': 'Integration',
  'Subscription Plans': 'Billing'
};


const Sidebar = ({sidebarshowMobile}) => {
  const [sidebar, setMobileSidebar] = useState(true);

  let sidebarshowMobileCalss = sidebarshowMobile ? 'translate-x-0' : 'translate-x-[-100%] sm:translate-x-0 ';
  return (
    <div>
      <div className={`${sidebarshowMobileCalss} absolute z-20 md:relative bg-white transition-all duration-500 ${sidebar ? 'w-[260px]' : 'w-[100px]'}`}>

        <div className="logo h-[85px] flex justify-center items-center border-b-[#D9D9D9] border-b sticky top-0 z-10 bg-white">
          <button className='shadow p-2 me-2' onClick={() => setMobileSidebar(!sidebar)}><GiHamburgerMenu /></button>
          <img src={getImgaes[sidebar ? 'logo' : 'smallLogo']} alt="main" />
        </div>
        <div className="sideNavigation px-5 py-2 pt-7 shadow h-[calc(100vh-168px)] overflow-y-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {
            sidebarMenus.map((menu, index) => {
              const Icon = menu.icon;
              const sectionLabel = sectionLabels[menu.pathName];
              return (
                <React.Fragment key={index}>
                  {sectionLabel && (
                    <p className="font-semibold text-[12px] text-[#737A84] uppercase mb-2 text-ellipsis line-clamp-1">
                      {sectionLabel}
                    </p>
                  )}
                  <NavLink className={({ isActive }) => [
                    'text-[16px] font-semibold flex items-center gap-3 py-3 px-2 w-full max-w-full transition-all mb-4 whitespace-nowrap', sidebar ? '' : 'justify-center',
                    isActive ? 'bg-[#305EEB] rounded-lg text-white shadow-md'
                      : 'hover:bg-[#305EEB] hover:rounded-lg hover:text-white'].join(' ')
                  }

                    to={`${menu.path}`}> <Icon size={18} /> {`${sidebar ? `${menu.pathName}` : ''}`}
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
          {sidebar && <div>
            <p className='text-sm font-medium'>User</p>
            <p className='font-medium text-xs text-[#737A84]'>user@company.com</p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
