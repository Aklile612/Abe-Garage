import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { MdKeyboardArrowRight } from 'react-icons/md'
import service from "../../assets/service-hero.jpeg"
import map from "../../assets/map.png"
import { CiLocationOn } from 'react-icons/ci'
import { TfiEmail } from 'react-icons/tfi'
import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { IoArrowForwardOutline } from 'react-icons/io5'
const Contact = () => {
  return (
    <>
        <Header/>

        {/* hero image */}
        <div className='w-full relative mb-8' >
            <img src={service} alt="Hero Section" className='w-full object-cover h-[300px]  '/>
            <div className='absolute top-1/3 left-[200px]  text-white  '>
                <div className='flex flex-col gap-5'>
                    
                    <span className='text-5xl font-bold  break-words'>Contact Us</span>
                </div>
                <div className='flex gap-5'>
                    <div className='pt-5 text-xs pl-2 flex gap-1'>
                    <span className='text-red-600 '>Home </span>
                    <MdKeyboardArrowRight className='pt text-[17px]'/>
                    <span>Contact Us</span>
                    </div >
                    
                </div>
            </div>
        </div>

        {/* our address */}
        <div className='my-7 flex  gap-15'>
            <div className='pl-[200px]'>
                <img src={map} alt="map image" />
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-col '>
                    <span className='text-lg text-blue-950 font-bold'>Our Address</span>
                    <span className='text-gray-500'>Completely synergize resource taxing relationships <br />via premier niche markets. Professionally cultivate <br />one-to-one customer service</span>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className=' flex gap-5'>
                        <div className=''> 
                            <CiLocationOn className='text-red-800 text-5xl ' />
                        </div>
                        <div className='flex flex-col '>

                            <span className='text-blue-950 text-lg font-bold'>Address</span>
                            <span className='pt-2 font-bold text-sm -mt-1.5 '> 54B, Tailstoi Town 5238 MT, La city, IA 522364</span>
                        </div>
                        
                    </div>
                    <div className='flex  gap-7'>
                        <div className=' '>
        
                            <TfiEmail className='text-red-800 text-4xl  '  />
                        </div>
                        <div className='flex flex-col'>
                        <span className=' text-blue-950 text-lg font-bold '>Email us:</span>
                        <span className=' text-sm font-bold'>Contact us@autorex.com</span>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <div className=''>
                            <FiPhone className='text-red-800 text-4xl ' />
                        </div>
                        <div className='flex flex-col'>
                            <span className=' text-blue-950  text-lg font-bold'>call us on:</span>
                            <span className=' text-md font-bold'>+1908 2442 9042</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        {/* schedule appointment */}
        <div className='w-[870px] h-[130px] ml-[250px] mt-30 mb-20 bg-red-600'>
          <div className='flex gap-9'>
            <div className='font-bold text-white flex flex-col pt-8 pl-9'>
              <span className='text-2xl'>Schedule Your Appointment Today</span>
              <span className='text-sm'>Your automotive Repair & Maintainace service specialist</span>
            </div>
            <div className='pt-8 flex'>
              <span className='font-bold text-3xl text-white'>1800.358.2340</span>
              <Link to="/contactus" className=' group hover:scale-110 ease-out transition-all ml-7 w-[160px]  bg-red-50 text-sm flex justify-center items-center h-14 -mt-2'>
                <span className='font-bold -ml-5'> CONTACT US </span>
                <div className=' pl-3 text-[17px] '>
                  <IoArrowForwardOutline className=''/>
                </div>
              </Link>
            </div>
          </div>
        </div>










        <Footer/> 
    </>
  )
}

export default Contact
