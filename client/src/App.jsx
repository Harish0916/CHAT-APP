import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-gray-800 bg-[url('./src/assets/bgImage1.pn')] bg-contain">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App