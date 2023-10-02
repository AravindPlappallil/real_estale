
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Sign-in' element={<Signin />} />
      <Route path='/Sign-up' element={<SignUp />} />
      <Route path='/About' element={<About />} />
      <Route path='/Profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
