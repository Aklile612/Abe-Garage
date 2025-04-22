import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import service from "../../assets/service-hero.jpeg"
import { MdKeyboardArrowRight } from "react-icons/md";
import left1 from "../../assets/tire1.png"
import { Link } from 'react-router-dom';
import left from "../../assets/about-us.png"
import right from "../../assets/about-us1.png"
import { IoArrowForwardOutline } from 'react-icons/io5';
import seven from "../../assets/7.png"
import eight from "../../assets/8.png"
import nine from "../../assets/9.png"
import ten from "../../assets/10.png"
import tires from "../../assets/tires.png"

import oldies from "../../assets/oldies.png"
import { FaPlayCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
    <Header/>


     {/* hero image */}
            <div className='w-full relative mb-8' >
                        <img src={service} alt="Hero Section" className='w-full object-cover h-[300px]  '/>
                        <div className='absolute top-1/3 left-[200px]  text-white  '>
                            <div className='flex flex-col gap-5'>
                                
                                <span className='text-5xl font-bold  break-words'>About Us</span>
                            </div>
                            <div className='flex gap-5'>
                              <div className='pt-5 text-xs pl-2 flex gap-1'>
                                <span className='text-red-600 '>Home </span>
                                <MdKeyboardArrowRight className='pt text-[17px]'/>
                                <span>About Us</span>
                              </div >
                              
                            </div>
                        </div>
            </div>
     {/* Experiance */}
     <div className='flex gap-12 my-[100px] mx-[200px]'>
          <div className='flex flex-col gap-3'>
           
            <h1 className='text-3xl font-bold text-blue-950'>We are highly skilled mechanics   <br />for your car repair </h1>
            
            <span className='text-gray-500 text-sm max-w-[500px]'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.  <br />
            <br />
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information heading towards a streamlined cloud solution. User generated content in real-time will have multiple </span>

            
          </div>
          <div className='flex gap-3  h-[250px]'>
            <img src={left1} alt="desil oil" />
            
          </div>
     </div>

     {/* about us */}
    <div className='flex gap-12 my-[100px] mx-[100px]'>
        <div className='flex gap-3 ml-[100px]'>
            <img src={left} alt="desil oil" />
            <img src={right} alt=" experiance" className='' />
        </div>
        <div className='flex flex-col gap-3'>
            <span className='text-blue-950 text-[15px]'>Welcome to Our workshop</span>
            <h1 className='text-4xl font-bold text-blue-950'>We have 24 years experience </h1>
            <div className='border-red-600 border-b-2 w-17'></div>
            <span className='text-gray-500 text-sm max-w-[500px]'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. <br />
            <br />
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing. </span>

            <Link  className='group hover:scale-110 transition-all ease-out w-[120px] flex text-center justify-center h-10 mt-2 bg-[#EE0D09] text-white font-bold text-xs'>
            <h2 className='text-center mt-3'>
                <span className=''>ABOUT US</span>
            </h2>
            <div className='pt-2.5 pl-3 text-[17px] '>
                <IoArrowForwardOutline className=''/>
            </div>
            </Link>
        </div>
    </div>


    {/* why choose us */}
    <div className='h-[500px] flex gap-16'>
        <div className='pl-[190px] pt-[60px]'>
        <div className=' flex gap-4 font-bold text-blue-950'>
            <span className='text-3xl'>Why Choose Us</span>
            <div className='border-red-600 border-b-2 w-10'></div>
            
        </div>
        <div className='mt-6 text-sm text-gray-600'>
            <span className='pt-7'>Bring to the table win-win surviaval stratagies to insure proactive domination. <br />At the end of the day,going forward, a new normal that has evolved from <br /> generation heading towards. </span>
        </div>
        <div className='pt-7'>
            <div className='flex gap-5'>
            <img src={seven} alt="icons" />
            <span className='pt-3 text-xl font-bold text-blue-900'>Certified Expert Mechanics</span>
            </div>
            <div className='border-gray-400 border-b-[1px] pt-3 w-[420px]'></div>
            <div className='flex gap-5'>
            <img src={eight} alt="icons " className='pt-0.5' />
            <span className='pt-3  text-xl font-bold text-blue-900'>Fast and Quality Srvices</span>
            </div>
            <div className='border-gray-400 border-b-[1px] pt-3 w-[420px]'></div>
            <div className='flex gap-5'>
            <img src={nine} alt="icons" />
            <span className='pt-3 text-xl font-bold text-blue-900'>Best Price in Town</span>
            </div>
            <div className='border-gray-400 border-b-[1px] pt-3 w-[420px]'></div>
            <div className='flex gap-5'>
            <img src={ten} alt="icons" />
            <span className='pt-3 text-xl font-bold text-blue-900'>Awarded Workshop</span>
            </div>
            
        </div>
        </div>
        <div>
        <div className='pt-[60px]'>
            <div className='flex gap-4'>
            <span className='text-3xl font-bold text-blue-950'>Additional services</span>
            <div className='border-red-600 border-b-2 w-10'></div>
            </div>
            <div className='flex pt-7 '>
            <div>
                <img src={oldies} alt=" cars " />
            </div>
            <div className='pl-10 text-sm text-gray-500 '>
                <ul className='list-disc '>
                <li >General Auto Repair & Maintenance </li>
                <li>Transmission Repair & Replacement </li>
                <li>Tire Repair and Replacement </li>
                <li>State Emissions Inspection </li>
                <li>Break Job / Break Services </li>
                <li>Electrical Diagnostics </li>
                <li>Fuel System Repairs </li>
                
                <li>Starting and Charging Repair </li>
                <li>Steering and Suspension Work </li>
                <li>Emission Repair Facility </li>
                <li>Wheel Alignment </li>
                <li>Computer Diagaonstic Testing</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    
    
    {/* we are leader */}
    <div className='w-full relative my-8' >
        <img src={tires} alt="Hero Section" className='w-full object-cover h-[400px] -z-40  '/>
        <div className='absolute top-1/3 left-[100px]  text-white  '>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-4'>
                    <span className='text-sm'>Working Since 1992 </span>
                    <div className='border-red-600 border-b-2 -pt-7 w-7' ></div>
                </div>
                <span className='text-5xl font-bold  break-words'>We are leader <br /> in Car Mechanichal Work</span>
            </div>
            <div className='flex gap-5'>
                <div className='pt-5 text-6xl text-red-600 pl-2 '>
                <FaPlayCircle  />
                </div >
                <div className='pt-5'>
                <span className='text-xs font-semibold'>WATCH INTO VIDEO <br /> ABOUT US</span>
                </div>
            </div>
        </div>
    </div>
    
    
    {/* schedule appointment */}
    <div className='w-[870px] h-[130px] ml-[250px] my-10 mb-20 bg-red-600'>
        <div className='flex gap-9'>
        <div className='font-bold text-white flex flex-col pt-8 pl-9'>
            <span className='text-2xl'>Schedule Your Appointment Today</span>
            <span className='text-sm'>Your automotive Repair & Maintainace service specialist</span>
        </div>
        <div className='pt-8 flex'>
            <span className='font-bold text-3xl text-white'>1800.358.2340</span>
            <Link className=' group hover:scale-110 ease-out transition-all ml-7 w-[160px]  bg-red-50 text-sm flex justify-center items-center h-14 -mt-2'>
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

export default AboutUs
