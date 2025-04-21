import React from 'react'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import engine from "../../assets/home-engine.jpg"
import left from "../../assets/about-us.png"
import right from "../../assets/about-us1.png"
import { Link } from "react-router-dom";


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
        <div className='bg-[#756b6b2c] w-full h-[600px] my-9 '>
            <div className='ml-60 pt-25 flex gap-3'>
              <h2 className='text-3xl font-bold text-blue-950'>Our Services</h2>
              <div className='border-red-600 border-b-2 w-7 '></div>
            </div>
            <div className='ml-60 pt-7  max-w-[950px] break-words '> 
              <span className='text-sm text-gray-500'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </span>
            </div>
            <div className='ml-60 pt-7 grid grid-rows-2 grid-cols-3 gap-5 max-w-[920px] '>
              <div className='w-[280px] h-[150px] bg-white border-b-2 border-red-700'>

              </div>
              <div className='w-[280px] h-[150px] bg-white border-b-2 border-red-700'>

              </div>
              <div className='w-[280px] h-[150px] bg-white border-b-2 border-red-700'>

              </div>
              <div className='w-[280px] h-[150px] bg-white border-b-2 border-red-700'>

              </div>
              <div className='w-[280px] h-[150px] bg-white border-b-2 border-red-700'>

              </div>
              <div className='w-[280px] h-[150px] bg-white border-b-2 border-red-700'>

              </div>

            </div>



        </div>


      </div>
      <Footer/>
    </>
  )
}

export default Home
