import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";






const Footer = () => {
  return (
    <div className='bg-[#08163b]   h-[300px]'>
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
            <div className='border-gray-400 p-[100px] border-r-1 h-[10px] '></div>
            <div className='mr-[90vh]'>
                <div className=''>

                    <TfiEmail className='text-red-800 text-5xl '  />
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            
        </div>





        {/* below the line */}
      </div>
    </div>
  )
}

export default Footer
