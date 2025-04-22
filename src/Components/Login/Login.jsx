import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Header/>
      <div className='h-[400px] ml-[250px] '>
        <div className='flex gap-3 mt-[60px] mb-17'>
            <span className='text-blue-950 text-3xl font-bold'>Login to your account </span>
            <div className='border-red-500 border-b-2 w-10'></div>
        </div>

        <form className='flex flex-col gap-10'>
            <div className=''>
            
                <input className='border-gray-700  border-[1px] w-[500px] h-10 pl-4 pt-2'
                type="email"
                name='email'
                
                placeholder='Email adrress'
                
                />
            </div>
            
            <div className=''>
            
                <input className='border-gray-700 border-[1px] w-[500px] h-10 pl-4 pt-2'
                type="password"
                placeholder='Password'/>
            
            </div>
            
            <Link to='/home' className='ml-50 group hover:scale-110 ease-out transition-all w-[80px] h-12 bg-red-600 text-center pt-3 text-sm text-white font-semibold'>
                <span>LOGIN</span>
            </Link>
        
      </form>
      </div>














    <Footer/>
    </>
  )
}

export default Login
