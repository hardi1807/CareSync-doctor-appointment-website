import React from 'react'
import appointment_img from '../assets/appointment_img.png'
import { Navigate, useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className='flex bg-blue-500 rounded-lg px-6 sm:px-10 md:px-16 lg:px-12 my-20 md:mx-20 justify-between'>
                              {/*left side*/}

         <div className='flex flex-col items-start py-8 px-5 md:py-20 gap-3'>
           <h1 className='text-white text-xl sm:text-2xl md:text-4xl font-semibold  '>Book Appointment <br /> With 100+ Trusted Doctors</h1>
            <button onClick={()=> {navigate('/login'),scrollTo(0,0)}} className='bg-white rounded-full py-2.5 px-10 text-gray-600 mt-4 hover:scale-105 transform-all duration-300 hover:text-black cursor-pointer'> Create account</button>

         </div>

                               {/*right side*/}

         <div className='hidden md:block md:w-1/2 relative'>
            <img className='w-90% absolute bottom-0 right-0  max-w-md  h-4/3' src={appointment_img} alt="" />
         </div>





    </div>
  )
}

export default Banner