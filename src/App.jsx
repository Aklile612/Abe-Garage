import { useState } from 'react'
import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

function App() {
  

  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </>
   
  )
}

export default App
