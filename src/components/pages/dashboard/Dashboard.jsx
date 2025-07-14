import React from 'react'
import Topbar from '../../common/Topbar'
import OverviewCard from './children/OverviewCard'
import { FaUserFriends } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';
import { LuCalendar } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbArrowGuideFilled, TbBrain } from 'react-icons/tb';
import { MdAccessTime } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import SelectTalentCard from './children/SelectTalentCard';
import PerformanceBar from './children/PerformanceBar';
import AiAgentCard from './children/AiAgentCard';
import RecentActivityCard from './children/RecentActivityCard';
import { LiaFileAltSolid } from 'react-icons/lia';


const overviewCardInfo = [
  { iconColor: '#2764EB', Icon: FiSearch, heading: 'Active Searches', totalSearcrh: 12, totalSearchPer: 20 },
  { iconColor: '#16A34A', Icon: FaUserFriends, heading: 'Candidates Found', totalSearcrh: 248, totalSearchPer: 15 },
  { iconColor: '#305EEB', Icon: LuCalendar, heading: 'Interviews Scheduled', totalSearcrh: 18, totalSearchPer: 8 },
  { iconColor: '#EE7534', Icon: IoDocumentTextOutline, heading: 'Contracts Sent', totalSearcrh: 6, totalSearchPer: 33 },
]

const aiAgentsStatus = [
  { heading: 'Senior Engineer Hunter', candidates: 45, successPer: 78, isActive: true },
  { heading: 'Product Manager Scout', candidates: 32, successPer: 85, isActive: true },
  { heading: 'Designer Finder', candidates: 28, successPer: 72, isActive: false },
]

const recentActivities = [
  { heading: 'AI found 5 new candidates for Senior Engineer role', time: 2, Icon: TbBrain },
  { heading: 'Interview scheduled with Sarah Chen', time: 4, Icon: LuCalendar },
  { heading: 'Contract sent to Michael Rodriguez', time: 6, Icon: IoDocumentTextOutline },
  { heading: 'AI search completed for Product Manager role', time: 8, Icon: FiSearch },
]

const performances = [
  { heading: 'Search Success Rate', percentage: 78 },
  { heading: 'Response Rate', percentage: 65 },
  { heading: 'Conversion Rate', percentage: 42 },
]

const talents = [
  { name: 'Sarah Chen', desination: 'Senior Software Engineer', company: 'Google', match: 92, status: 'approved' },
  { name: 'Michael Rodriguez', desination: 'Product Manager', company: 'Meta', match: 83, status: 'contract' },
  { name: 'Emily Johnson', desination: 'UX Designer', company: 'Apple', match: 78, status: 'pending' },
]


const Dashboard = ({handleSideBarShowOnMobile,sidebarshowMobile}) => {

  return (
    <div className='w-full'>
      <Topbar handleSideBarShowOnMobile={handleSideBarShowOnMobile}  sidebarshowMobile={sidebarshowMobile}/>
      <div className="grid grid-cols-12 gap-4 px-6 py-7 h-[calc(100vh-146px)]  sm:h-[calc(100vh-85px)] overflow-y-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className='col-span-12 md:col-span-9'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
            {overviewCardInfo.map((item, index) => (
              <OverviewCard
                key={index}
                iconColor={item.iconColor}
                Icon={item.Icon}
                heading={item.heading}
                totalSearcrh={item.totalSearcrh}
                totalSearchPer={item.totalSearchPer}
              />
            ))}
          </div>

          <div className='grid md:grid-cols-2 gap-4 col-span-9 my-11'>

            <div className='px-3.5 py-6 shadow-lg border border-[#D9D9D9] rounded-lg'>
              <h1 className='font-semibold text-2xl flex items-center gap-2.5'><TbBrain className='inline' /> AI Agents Status</h1>
              <p className='font-semibold text-sm text-[#737A84] pt-3 pb-8'>Your active Hirearchy.ai agents and their performance</p>
              {
                aiAgentsStatus.map((agent, index) => (
                  <AiAgentCard key={index} heading={agent.heading} candidates={agent.candidates} successPer={agent.successPer} isActive={agent.isActive} />
                ))
              }

            </div>

            <div className='px-3.5 py-6 shadow-lg border border-[#D9D9D9] rounded-lg'>
              <h1 className='font-semibold text-2xl flex items-center gap-2.5'><MdAccessTime className='inline' /> Recent Activity </h1>
              <p className='font-semibold text-sm text-[#737A84] pt-3 pb-5'>Latest updates from your recruitment activities</p>
              {
                recentActivities.map((activity, index) => (
                  <RecentActivityCard key={index} heading={activity.heading} time={activity.time} Icon={activity.Icon} />
                ))
              }

            </div>
          </div>
          <div className='p-6 rounded-xl shadow-lg border border-[#D9D9D9]'>
            <div className='flex mb-6'>
              <TbArrowGuideFilled className='mt-1 me-3' size={24} />
              <div>
                <h1 className='font-semibold text-2xl flex items-center gap-2.5'> Performance Overview</h1>
                <p className='font-semibold text-sm text-[#737A84]'>Your recruitment metrics and progress</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {
                performances.map((performance, index) => (
                  <PerformanceBar key={index} heading={performance.heading} percentage={performance.percentage} />
                ))
              }
            </div>
          </div>
        </div>


        <div className='col-span-12 md:col-span-3 shadow-lg rounded-lg border border-[#D9D9D9] px-5 py-5 items-start' >
          <h1 className='font-semibold text-lg flex items-center gap-2 mb-10'><GoPeople size={20} strokeWidth={1} /> Select Talent ({talents.length})</h1>
          {
            talents.map((talent, index) => (
              <SelectTalentCard key={index} name={talent.name} desination={talent.desination} company={talent.company} match={talent.match} status={talent.status} />
            ))
          }
          <button className='cursor-pointer py-2.5 px-3 bg-[#305EEB] flex rounded-lg text-white gap-2.5 items-center font-medium text-sm mx-auto'><LiaFileAltSolid size={18} />Bulk Actions</button>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
