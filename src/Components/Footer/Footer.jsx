import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialGooglePlusCircular } from "react-icons/ti";



const Footer = () => {
  return (
    <div className='bg-[#08163b]   h-[400px]'>
      <div>
        {/* above the line */}
        <div className='flex flex-row '>
            <div className=' flex w-[50px] h-[60px] gap-2 mt-4 ml-[150px]'>
                <div> 
                    <CiLocationOn className='text-red-800 text-5xl ' />
                </div>
                <div className='flex flex-col'>

                    <span className='text-white font-bold text-sm min-w-[200px]'> 54B, Tailstoi Town 5238 MT, </span>
                    <span className='text-white text-sm font-bold '> La city, IA 522364  </span>
                </div>
            </div>
            <div className='border-gray-400 pl-[250px] border-r-1 h-[80px] '></div>
            <div className=' flex gap-3 mt-4'>
                <div className='pl-[70px] '>

                    <TfiEmail className='text-red-800 text-5xl  '  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-white text-sm font-bold '>Email us:</span>
                  <span className='text-white text-sm font-bold'>Contact us@autorex.com</span>
                </div>
            </div>
            <div  className='border-gray-400 ml-16 border-r-1 h-[80px] '></div>
            <div className='flex gap-3 mt-4'>
              <div className='pl-[60px]'>
                <FiPhone className='text-red-800 text-5xl ' />
              </div>
              <div className='flex flex-col'>
                <span className='text-white text-xs font-bold'>call us on:</span>
                <span className='text-white text-md font-bold'>+1908 2442 9042</span>
              </div>
            </div>
            <div className='border-gray-400 ml-16 border-r-1 h-[80px] '></div>
        </div>
        <div className='border-gray-400  border-b-1'></div>





        {/* below the line */}

        <div className='mt-[50px] flex gap-16'>
          <div className=' ml-[150px] mt-[50px] max-w-[400px] break-words'>
            <span className='text-white text-sm '>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide additional clickthroughs</span>
          </div>
          <div>
            <h2 className='text-white font-bold'>Usefull Links</h2>
            <div className='flex flex-col text-white text-sm gap-3 '>
              <Link className='pt-[30px]'>Home</Link>
              <Link>About Us</Link>
              <Link>Appointment</Link>
              <Link>Testimonials</Link>
              <Link>Contact Us</Link>
            </div>
          </div>
          <div>
            <h2 className='text-white font-bold'>Our Services</h2>
            <div className='flex flex-col text-white text-sm gap-3'>
              <Link className='pt-[30px]'>Performance Upgrade </Link>
              <Link>Transmission Service </Link>
              <Link>Break Repair & Service </Link>
              <Link>Engine Service & Repair </Link>
              <Link>Trye & Wheels </Link>
            </div>
          </div>
          <div>
            <h2 className='text-white font-bold'>Newsletter</h2>
            <div className='pt-[30px]'>

              <span className='text-white text-sm '>Get Letest Update And Offer</span>
            </div>
            <div className='flex pt-[10px] gap-5 text-white text-4xl'>
              <CiFacebook />
              <CiLinkedin />
              <TiSocialTwitterCircular />
              <TiSocialGooglePlusCircular />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
