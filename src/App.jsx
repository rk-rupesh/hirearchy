import './App.css'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
