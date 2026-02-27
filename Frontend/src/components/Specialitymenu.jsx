import React from 'react'
import { SpecialityData } from '../assets/assets'
import {Link} from 'react-router-dom'

const Specialitymenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-14 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <h3 className='sm:w-1/3 text-center text-sm'>Browse medical specialities and schedule appointments with experts</h3>
        <div className='flex sm:justify-center gap-5.5 pt-6 w-full overflow-scroll'>
            {SpecialityData.map((item,index)=>(
                <Link className='flex flex-col items-center cursor-pointer flex-shrik-0 hover:translate-y-1.5 transition-all duration-500 ' key={index} to={`/doctors/${item.speciality}`} >
                  <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                  <p className=''>{item.speciality}</p>
                </Link>


            ))}
        </div>
    </div>
  )
}

export default Specialitymenu