import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
        {/* first part */}
     <div className='bg-[#07194A] flex'>
        <div>
            <div className=' top-0 left-0'>
                <div className='w-[300px] h-[40px] bg-red-600 '>
                    <p className='flex text-white font-bold text-sm  justify-center pt-2.5 '>Enjoy the Beso while we fix your car</p>
                </div>
            </div>
        </div>
        <div className='flex gap-[620px]'>
            <p className='text-white text-xs font-bold pt-2.5 ml-11'>Monday-Saturday 7:00AM -6:00PM</p>   
            <p className='text-white  pt-2.5 '><span className='text-xs font-bold'>Call Abe:         </span>1800-8972-28</p>
        </div>
    </div> 
        




        {/* second part */}
        <div className='shadow-sm shadow-gray-400 gap-[500px] z-50 h-[110px] flex'>
            <div>
                <img src={logo} alt="logo image" />

            </div>
            <div className='flex gap-3.5 mt-10'>
               <Link to="/"> <span className='font-extrabold text-sm cursor-pointer'>HOME</span></Link>
                <Link to="/aboutus">
                <span className='font-extrabold text-sm cursor-pointer'>ABOUT US</span></Link>
                <Link to="/service"><span className='font-extrabold text-sm cursor-pointer'>SERVICES</span></Link>
                <Link to="/contactus"><span className='font-extrabold text-sm cursor-pointer'>CONTACT US</span></Link>
                <div className='border-gray-400 border-l-2 h-4 mx-7 cursor-pointer'></div>
                <Link to="/signin" className="-mt-4.5 font-bold text-xs text-center bg-red-600 w-[90px] h-[50px] flex items-center justify-center text-white cursor-pointer">
                    SIGN IN
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
