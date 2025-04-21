import React from 'react'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import engine from "../../assets/home-engine.jpg"
import left from "../../assets/about-us.png"
import right from "../../assets/about-us1.png"
import { Link } from "react-router-dom";
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

import radar from "../../assets/radar.png"
import oldies from "../../assets/oldies.png"
const Home = () => {
  return (
    <>
      <Header/>
      <div className=' '>

        {/* hero section */}
        <div className='w-full relative' >
            <img src={engine} alt="Hero Section" className='w-full object-cover h-[500px] -z-40  '/>
            <div className='absolute top-1/3 left-[100px]  text-white  '>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-4'>
                      <span className='text-sm'>Working Since 1992 </span>
                      <div className='border-red-600 border-b-2 -pt-7 w-7' ></div>
                    </div>
                    <span className='text-5xl font-bold max-w-[400px] break-words'>Tune up Your Car to next level</span>
                </div>
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

            <div className='w-[120px] flex text-center justify-center h-10 mt-2 bg-[#EE0D09] text-white font-bold text-xs'>
              <Link className='text-center mt-3'>
                <span className=''>ABOUT US</span>
              </Link>
            </div>
          </div>
        </div>


        {/* our service */}
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

      </div>
      <Footer/>
    </>
  )
}

export default Home
