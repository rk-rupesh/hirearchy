import './App.css'
import Sidebar from './components/common/Sidebar'
import { Route, Routes } from 'react-router'
import Dashboard from './components/pages/dashboard/Dashboard'
import TalentSearch from './components/pages/talent-search/TalentSearch'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/talent-search' element={<TalentSearch />} />
      </Routes>
    </div>
  )
}

export default App
