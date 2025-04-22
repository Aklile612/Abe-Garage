import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import service from "../../assets/service-hero.jpeg"
import { MdKeyboardArrowRight } from "react-icons/md";
import one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
import five from "../../assets/5.png"
import six from "../../assets/6.png"
import seven from "../../assets/7.png"
import eight from "../../assets/8.png"
import nine from "../../assets/9.png"
import ten from "../../assets/10.png"
import tires from "../../assets/tires.png"
import radar from "../../assets/radar.png"
import oldies from "../../assets/oldies.png"
import { FaPlayCircle } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
        <Header/>



        {/* hero image */}
        <div className='w-full relative mb-8' >
                    <img src={service} alt="Hero Section" className='w-full object-cover h-[300px]  '/>
                    <div className='absolute top-1/3 left-[200px]  text-white  '>
                        <div className='flex flex-col gap-5'>
                            
                            <span className='text-5xl font-bold  break-words'>Our Service</span>
                        </div>
                        <div className='flex gap-5'>
                          <div className='pt-5 text-xs pl-2 flex gap-1'>
                            <span className='text-red-600 '>Home </span>
                            <MdKeyboardArrowRight className='pt text-[17px]'/>
                            <span>Services</span>
                          </div >
                          
                        </div>
                    </div>
                </div>
        
        
        
        {/* our services */}
        <div className='bg-[#756b6b2c] w-full h-[700px] my-9 '>
                    <div className='ml-60 pt-25 flex gap-3'>
                      <h2 className='text-3xl font-bold text-blue-950'>Our Services</h2>
                      <div className='border-red-600 border-b-2 w-7 '></div>
                    </div>
                    <div className='ml-60 pt-7  max-w-[950px] break-words '> 
                      <span className='text-sm text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </span>
                    </div>
                    <div className='ml-60 pt-7 grid grid-rows-2 grid-cols-3 gap-5 max-w-[920px] '>
                      <div className='group hover:scale-110 hover:border-blue-700 hover:border-b-2 transition-all w-[280px] h-[150px] bg-white border-b-2 border-red-700'>
                        <div className='flex flex-col pt-7 pl-4'>
                          <span className='text-xs text-blue-950'>SERVICE AND REPAIRS </span>
                          <span className='font-bold text-blue-950'>Performance Upgrade </span>
                        </div>
                        <div>
                          <div className='pt-10 flex gap-28'>
                            <span className='text-xs pl-5 text-red-600' >READ MORE +</span>
                            <img src={one} alt="images" className='-mt-6' />
                          </div>
                        </div>
                        
                      </div>
                      <div className='group hover:scale-110 hover:border-blue-700 hover:border-b-2 transition-all w-[280px] h-[150px] bg-white border-b-2 border-red-700'>
                        <div className='flex flex-col pt-7 pl-4'>
                          <span className='text-xs text-blue-950'>SERVICE AND REPAIRS </span>
                          <span className='font-bold text-blue-950'>Transmission Services  </span>
                        </div>
                        <div>
                          <div className='pt-10 flex gap-28'>
                            <span className='text-xs pl-5 text-red-600' >READ MORE +</span>
                            <img src={two} alt="images" className='-mt-6' />
                          </div>
                        </div>
                        
                      </div>
                      <div className='group hover:scale-110 hover:border-blue-700 hover:border-b-2 transition-all w-[280px] h-[150px] bg-white border-b-2 border-red-700'>
                        <div className='flex flex-col pt-7 pl-4'>
                          <span className='text-xs text-blue-950'>SERVICE AND REPAIRS </span>
                          <span className='font-bold text-blue-950'>Break Repair & Service  </span>
                        </div>
                        <div>
                          <div className='pt-10 flex gap-28'>
                            <span className='text-xs pl-5 text-red-600' >READ MORE +</span>
                            <img src={three} alt="images" className='-mt-6' />
                          </div>
                        </div>
                        
                      </div>
                      <div className='group hover:scale-110 hover:border-blue-700 hover:border-b-2 transition-all w-[280px] h-[150px] bg-white border-b-2 border-red-700'>
                        <div className='flex flex-col pt-7 pl-4'>
                          <span className='text-xs text-blue-950'>SERVICE AND REPAIRS </span>
                          <span className='font-bold text-blue-950'>Engine Service & Repair  </span>
                        </div>
                        <div>
                          <div className='pt-10 flex gap-28'>
                            <span className='text-xs pl-5 text-red-600' >READ MORE +</span>
                            <img src={four} alt="images" className='-mt-6' />
                          </div>
                        </div>
                        
                      </div>
                      <div className='group hover:scale-110 hover:border-blue-700 hover:border-b-2 transition-all w-[280px] h-[150px] bg-white border-b-2 border-red-700'>
                        <div className='flex flex-col pt-7 pl-4'>
                          <span className='text-xs text-blue-950'>SERVICE AND REPAIRS </span>
                          <span className='font-bold text-blue-950'>Tyre & Wheels  </span>
                        </div>
                        <div>
                          <div className='pt-10 flex gap-28'>
                            <span className='text-xs pl-5 text-red-600' >READ MORE +</span>
                            <img src={five} alt="images" className='-mt-6' />
                          </div>
                        </div>
                        
                      </div>
                      <div className='group hover:scale-110 hover:border-blue-700 hover:border-b-2 transition-all w-[280px] h-[150px] bg-white border-b-2 border-red-700'>
                        <div className='flex flex-col pt-7 pl-4'>
                          <span className='text-xs text-blue-950'>SERVICE AND REPAIRS </span>
                          <span className='font-bold text-blue-950'>Denting & Painting  </span>
                        </div>
                        <div>
                          <div className='pt-10 flex gap-28'>
                            <span className='text-xs pl-5 text-red-600' >READ MORE +</span>
                            <img src={six} alt="images" className='-mt-6' />
                          </div>
                        </div>
                        
                      </div>
        
                    </div>
        
        
        
                </div>

        {/* Quality service */}
        <div className='h-[360px] bg-red-600 -mt-9 mb-7'>
          <div className='pt-[50px] pl-[250px] flex'>
            <div className='flex flex-col'>
              <span className='text-white text-3xl font-bold'>Quality Service And <br /> customer Satisfaction  !!</span>
              <span className='max-w-[500px] text-white pt-6 text-sm break-words'>We utlize the most recent symtomatic gear to ensur your vechile is fixed or adjusted appropriatley and in an opportune manner. We are an individual from Proffesional Auto servoce, a first classs excution of arrange, where free assistance offices share objective of being world-class car adminstration focuses.</span>
            </div>
            <div className='-mt-12.5'>
              <img src={radar} alt="radar image" />
            </div>
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

export default Service
