import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Feedback from '../Pages/Feedback'
import Blogs from '../Pages/Blogs'
import Pricing from '../Pages/Pricing'

function Navbar() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar
