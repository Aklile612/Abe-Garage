import { useState } from 'react'
import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Service from './Components/ServicesPage/Service'
import AboutUs from './Components/About Us/AboutUs'
import Contact from './Components/Contact Us/Contact'

function App() {
  

  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<Contact/>}/>
        </Routes>
      </>
   
  )
}

export default App
