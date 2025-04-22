import { useState } from 'react'
import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Service from './Components/ServicesPage/Service'

function App() {
  

  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/service' element={<Service/>}/>
        </Routes>
      </>
   
  )
}

export default App
