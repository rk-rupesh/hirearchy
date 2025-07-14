import './App.css'
import Sidebar from './components/common/Sidebar'
import { Route, Routes } from 'react-router'
import Dashboard from './components/pages/dashboard/Dashboard'
import TalentSearch from './components/pages/talent-search/TalentSearch'
import { useState } from 'react'

function App() {
  const [sidebarshowMobile, setSidebarshowMobile] = useState(false)
  const handleSideBarShowOnMobile = () => {
    setSidebarshowMobile(!sidebarshowMobile)
  }
  return (
    <div className='flex'>
      <Sidebar sidebarshowMobile={sidebarshowMobile} />
      <Routes>
        <Route path='/' element={<Dashboard handleSideBarShowOnMobile={handleSideBarShowOnMobile} sidebarshowMobile={sidebarshowMobile} />} />
        <Route path='/talent-search' element={<TalentSearch />} />
      </Routes>
    </div>
  )
}

export default App
