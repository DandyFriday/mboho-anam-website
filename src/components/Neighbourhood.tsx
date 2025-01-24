//import React from 'react'
import { BsArrowRight } from "react-icons/bs"
 import { Button } from "../components/Button" 
 import { assets } from "../assets/assets"

const Neighbourhood = () => {
  return (
    <div className='bg-white min-h-screen'>
        <div className='flex items-center shadow-lg'>
            <div className='px-14 w-full flex mt-20 pb-4'>
              <img src={assets.gallery} alt="" className="w-[33rem] h-[30rem] rounded-t-full border-primary-100 border-2 "/>

            </div>
            <div className='text-orange flex flex-col pt-8 items-end justify-end gap-4 w-full pl-3'>
              <h2><b className='text-3xl px-[12rem]'>Our Objectives </b><br /> 
                <span className=" text-2xl px-1">
                  The aim for the establishment of Mboho Anam among other things includes;                 
                </span>
              </h2> 
              <p className=''>
                To foster unity , promote peace, love and respect among the Anam people.<br/>Mboho Anam has also dedicated to the human capital development of the Anam people through sponsoring scholarships, and payments of bursary to her students in the tertiary institusions ! 🏡✨ 
              </p>
              <div className="pr-[18rem] pb-4">
              <Button 
                className="text-orange bg-primary flex py-3 font-bold pr-4"
                text="Read More" 
                icon={<BsArrowRight className="ml-2 mt-1"/>}
              />
              </div>         

            </div>

        </div>
    </div>
  )
}

export default Neighbourhood;



