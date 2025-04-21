import { useState } from 'react'
import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home/Home'

function App() {
  

  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </>
   
  )
}

export default App
