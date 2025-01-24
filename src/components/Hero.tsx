//import React from 'react'
import { assets } from "../assets/assets";
import { Button } from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { Link} from "react-router-dom";


const Hero = () => {
  return (
    <div className="bg-primary pt-7 px-10">
      <div className="flex fle-col items-center md:flex-row justify-between">
        <div className="flex flex-col px-4">
          <h1 className="text-white text-2xl size-10/12 md:text-5xl lg:text-7xl">
            <b className="text-white2 text-[60px] font-stylish ">Welcome to Mboho Anam,</b> <br />
            <span className="text-[20px]">We are Committed to Growth and Development</span>,
          </h1>
          <p className="flex items-start text-white2 text-sm py-4">Giving a bright future to our people is a non-negotiable task we must achieve.
            <br />We give our students hope for a brighter future, as we all know they are the leaders of tomorrow.
            <br />Our bursary exercise is to promote diligence and hard work amongst the students of Anam.
          </p>
          <div className="mt-2 pb-4">
            <Link to="/Form" className=''>
            <Button
              className="bg-opacity-100 shadow-lg text-primary bg-yellow2 hover:bg-primary flex
               hover:text-white items-center py-3 font-bold w-fit px-9 hover:border-2"
              text="Apply"
              icon={<BsArrowRight className="ml-3 " />}
            />
            </Link>
          </div>
        </div>
        <div className="hidden md:block "> 
          <img src={assets.Sir_Udo1} alt="Mr. Udo" />
        </div>
      </div>
    </div>
  )
}

export default Hero