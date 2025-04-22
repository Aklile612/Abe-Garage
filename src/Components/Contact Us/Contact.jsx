import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { MdKeyboardArrowRight } from 'react-icons/md'
import service from "../../assets/service-hero.jpeg"
import map from "../../assets/map.png"
import { CiLocationOn } from 'react-icons/ci'
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
                <div>
                <div className=' flex'>
                    <div> 
                        <CiLocationOn className='text-red-800 text-5xl ' />
                    </div>
                    <div className='flex flex-col gap-1'>

                        <span>Address</span>
                        <span className='pt-2 font-bold text-sm '> 54B, Tailstoi Town 5238 MT, La city, IA 522364</span>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>











        <Footer/> 
    </>
  )
}

export default Contact
