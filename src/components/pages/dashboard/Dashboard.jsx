import React from 'react'
import Topbar from '../../common/Topbar'
import OverviewCard from './OverviewCard'
import { FaUserFriends } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';
import { LuCalendar } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbBrain } from 'react-icons/tb';
import { MdAccessTime } from 'react-icons/md';
import ProgressBar from '../../common/ProgressBar';





const overviewCardInfo = [
  { iconColor: '#2764EB', Icon: FiSearch, heading: 'Active Searches', totalSearcrh: 12, totalSearchPer: 20 },
  { iconColor: '#16A34A', Icon: FaUserFriends, heading: 'Candidates Found', totalSearcrh: 248, totalSearchPer: 15 },
  { iconColor: '#305EEB', Icon: LuCalendar, heading: 'Interviews Scheduled', totalSearcrh: 18, totalSearchPer: 8 },
  { iconColor: '#EE7534', Icon: IoDocumentTextOutline, heading: 'Contracts Sent', totalSearcrh: 6, totalSearchPer: 33 },
]

const Dashboard = () => {
  return (
    <div className='w-full'>
      <Topbar />
      <div className='grid grid-cols-12 gap-4 px-6 py-7'>
        <div className='col-span-9'>

          <div className='grid grid-cols-4 gap-4 '>
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

          <div className='grid grid-cols-2 gap-4 col-span-9 my-11'>

            <div className='px-3.5 py-6 shadow-lg border border-[#D9D9D9] rounded-lg'>
              <h1 className='font-semibold text-2xl flex items-center gap-2.5'><TbBrain className='inline' /> AI Agents Status</h1>
              <p className='font-semibold text-sm text-[#737A84] pt-3 pb-8'>Your active Hirearchy.ai agents and their performance</p>


              <div className=" shadow-lg rounded-lg border border-[#D9D9D9] px-2 py-3.5 flex justify-between items-center mb-4.5">
                <div className='flex gap-2.5'>
                  <div className='bg-[#F1F5F9] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <TbBrain size={24} color='#305EEB' />
                  </div>
                  <div>
                    <h2 className='text-base font-semibold'>Senior Engineer Hunter</h2>
                    <div className='flex gap-2.5'>
                      <span className='font-semibold text-sm text-[#737A84]'>45 candidates</span>
                      <span className='font-semibold text-sm text-[#737A84]'>78% success</span>
                    </div>
                  </div>
                </div>

                {true ? <span className='font-semibold text-xs text-[#16A34A] px-2.5 py-1.5 rounded-2xl bg-[#F1F5F9]'>active</span> : <span className='font-semibold text-xs text-[#737A84] px-2.5 py-1.5 rounded-2xl bg-[#F1F5F9]'>paused</span>}
              </div>

              <div className=" shadow-lg rounded-lg border border-[#D9D9D9] px-2 py-3.5 flex justify-between items-center mb-4.5">
                <div className='flex gap-2.5'>
                  <div className='bg-[#F1F5F9] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <TbBrain size={24} color='#305EEB' />
                  </div>
                  <div>
                    <h2 className='text-base font-semibold'>Product Manager Scout</h2>
                    <div className='flex gap-2.5'>
                      <span className='font-semibold text-sm text-[#737A84]'>32 candidates</span>
                      <span className='font-semibold text-sm text-[#737A84]'>85% success</span>
                    </div>
                  </div>
                </div>

                {true ? <span className='font-semibold text-xs text-[#16A34A] px-2.5 py-1.5 rounded-2xl bg-[#F1F5F9]'>active</span> : <span className='font-semibold text-xs text-[#737A84] px-2.5 py-1.5 rounded-2xl bg-[#F1F5F9]'>paused</span>}
              </div>

              <div className=" shadow-lg rounded-lg border border-[#D9D9D9] px-2 py-3.5 flex justify-between items-center">
                <div className='flex gap-2.5'>
                  <div className='bg-[#F1F5F9] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <TbBrain size={24} color='#305EEB' />
                  </div>
                  <div>
                    <h2 className='text-base font-semibold'>Designer Finder</h2>
                    <div className='flex gap-2.5'>
                      <span className='font-semibold text-sm text-[#737A84]'>28 candidates</span>
                      <span className='font-semibold text-sm text-[#737A84]'>72% success</span>
                    </div>
                  </div>
                </div>

                {false ? <span className='font-semibold text-xs text-[#16A34A] px-2.5 py-1.5 rounded-2xl bg-[#F1F5F9]'>active</span> : <span className='font-semibold text-xs text-[#737A84] px-2.5 py-1.5 rounded-2xl bg-[#F1F5F9]'>paused</span>}
              </div>

            </div>

            <div className='px-3.5 py-6 shadow-lg border border-[#D9D9D9] rounded-lg'>
              <h1 className='font-semibold text-2xl flex items-center gap-2.5'><MdAccessTime className='inline' /> Recent Activity </h1>
              <p className='font-semibold text-sm text-[#737A84] pt-3 pb-5'>Latest updates from your recruitment activities</p>

              <div className="px-2  flex justify-between items-center mb-6">
                <div className='flex gap-2.5'>
                  <div className='bg-[#F3F4F6] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <TbBrain size={24} />
                  </div>
                  <div>
                    <h2 className='text-sm font-semibold'>AI found 5 new candidates for Senior Engineer role</h2>
                    <span className='font-semibold text-xs text-[#737A84]'>2 hours ago</span>
                  </div>
                </div>
              </div>

              <div className="px-2  flex justify-between items-center mb-6">
                <div className='flex gap-2.5'>
                  <div className='bg-[#F3F4F6] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <LuCalendar size={24} />
                  </div>
                  <div>
                    <h2 className='text-sm font-semibold'>Interview scheduled with Sarah Chen</h2>
                    <span className='font-semibold text-xs text-[#737A84]'>4 hours ago</span>
                  </div>
                </div>
              </div>

              <div className="px-2  flex justify-between items-center mb-6">
                <div className='flex gap-2.5'>
                  <div className='bg-[#F3F4F6] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <IoDocumentTextOutline size={24} />
                  </div>
                  <div>
                    <h2 className='text-sm font-semibold'>Contract sent to Michael Rodriguez</h2>
                    <span className='font-semibold text-xs text-[#737A84]'>6 hours ago</span>
                  </div>
                </div>
              </div>

              <div className="px-2 flex justify-between items-center mb-6">
                <div className='flex gap-2.5'>
                  <div className='bg-[#F3F4F6] w-[42px] h-[42px] flex items-center justify-center rounded-full'>
                    <FiSearch size={24} />
                  </div>
                  <div>
                    <h2 className='text-sm font-semibold'>AI search completed for Product Manager role</h2>
                    <span className='font-semibold text-xs text-[#737A84]'>8 hours ago</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='p-6 rounded-xl shadow-lg border border-[#D9D9D9]'>
            <div className='flex mb-6'>
              <TbBrain className='mt-1 me-3' size={24} />
              <div>
                <h1 className='font-semibold text-2xl flex items-center gap-2.5'> Performance Overview</h1>
                <p className='font-semibold text-sm text-[#737A84]'>Your recruitment metrics and progress</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className='flex justify-between mb-3.5'>
                  <h3 className='font-semibold text-sm'>Search Success Rate
                  </h3><span className='text-[#737A84] font-semibold text-sm'>78%</span>

                </div>
                <ProgressBar percentage={78} />
              </div>
              <div>
                <div className='flex justify-between mb-3.5'>
                  <h3 className='font-semibold text-sm'>Response Rate
                  </h3><span className='text-[#737A84] font-semibold text-sm'>65%</span>

                </div>
                <ProgressBar percentage={65} />
              </div>
              <div>
                <div className='flex justify-between mb-3.5'>
                  <h3 className='font-semibold text-sm'>Conversion Rate
                  </h3><span className='text-[#737A84] font-semibold text-sm'>42%</span>

                </div>
                <ProgressBar percentage={42} />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4 col-span-3 shadow-lg rounded-lg border border-[#D9D9D9] px-5 py-5' >
          {/* Add content here */}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
