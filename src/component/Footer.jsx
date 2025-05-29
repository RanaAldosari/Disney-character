import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#ff69a0]/60 text-white py-10 px-5'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10'>
 <div className='flex flex-col gap-4 md:w-1/2'>
          <h1 className='text-lg font-semibold'>© 2025 All rights reserved by <span className='font-bold'>Disney Characters</span></h1>

          <div>
            <h2 className='mb-2 font-medium'>Subscribe to our newsletter:</h2>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input type="email" placeholder='Enter your email' className='px-4 py-2 rounded border border-white text-black w-full sm:w-auto'/>
              <button className='bg-white text-[#ff69a0] px-4 py-2 rounded font-medium hover:bg-pink-100 transition'>Subscribe</button>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 items-center md:items-end'>
          <h2 className='font-medium'>Follow us:</h2>
          <div className='flex gap-4 text-[1.5rem]'>
            <a href="#" className='hover:text-white/80 transition duration-300'><BsTwitterX /></a>
            <a href="#" className='hover:text-white/80 transition duration-300'><FaSquareFacebook /></a>
            <a href="#" className='hover:text-white/80 transition duration-300'><FaSquareInstagram /></a>
            <a href="#" className='hover:text-white/80 transition duration-300'><FaYoutube /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
