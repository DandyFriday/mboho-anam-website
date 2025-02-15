// //import React from 'react'
// import { assets } from "../assets/assets";
// import { Button } from "./Button";
// import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div
//       className="bg-yellow pt-7 px-10 relative bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${assets.Akwa_imge})` }}
//     >
//       {/* Overlay for background image opacity */}
//       <div className="absolute inset-0 bg-light bg-opacity-60"></div>

//       {/* Content Section */}
//       <div className="relative z-10 flex flex-col items-center md:flex-row justify-between">
//         <div className="flex flex-col px-4">
//           {/* Motion-enabled h1 */}
//           <motion.h1
//             className="text-white text-2xl size-10/12 md:text-5xl lg:text-7xl"
//             initial={{ x: "100%", opacity: 1 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 2, ease: "easeOut" }}
//           >
//             <b className="text-white2 text-[70px] font-stylish">Welcome to Mboho Anam,</b> <br />
//           </motion.h1>
//           <span className="text-[28px] text-white2 ">We are Committed to Growth and Development</span>
//           <p className="flex items-start text-white2 text-sm py-4">
//             Giving a bright future to our people is a non-negotiable task we must achieve.
//             <br />
//             We give our students hope for a brighter future, as we all know they are the leaders of tomorrow.
//             <br />
//             Our bursary exercise is to promote diligence and hard work amongst the students of Anam.
//           </p>
//           <div className="mt-2 pb-4">
//             <Link to="/Form">
//               <Button
//                 className="bg-opacity-100 shadow-lg text-primary bg-yellow2 hover:bg-primary flex
//                  hover:text-white items-center py-3 font-bold w-fit px-9 hover:border-2"
//                 text="Apply"
//                 icon={<BsArrowRight className="ml-3" />}
//               />
//             </Link>
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <img src={assets.Sir_Udo1} alt="Mr. Udo" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import { assets } from "../assets/assets";
import { Button } from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="bg-yellow px-5 sm:px-10 py-10 relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.Akwa_imge})` }}
    >
      {/* Overlay for background image opacity */}
      <div className="absolute inset-0 bg-light bg-opacity-60"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full">
        <div className="flex flex-col text-center md:text-left px-4 max-w-2xl">
          {/* Motion-enabled h1 */}
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <b className="text-white2 font-stylish">Welcome to Mboho Anam,</b>
          </motion.h1>
          <span className="text-lg sm:text-xl text-white2 mt-2">
            We are Committed to Growth and Development
          </span>
          <p className="text-white2 text-sm sm:text-base mt-4">
            Giving a bright future to our people is a non-negotiable task we must achieve.
            <br />
            We give our students hope for a brighter future, as we all know they are the leaders of tomorrow.
            <br />
            Our bursary exercise is to promote diligence and hard work amongst the students of Anam.
          </p>
          <div className="mt-4">
            <Link to="/Form">
              <Button
                className="bg-yellow2 text-primary hover:bg-primary hover:text-white flex items-center py-3 px-9 font-bold rounded-lg shadow-lg"
                text="Apply"
                icon={<BsArrowRight className="ml-3" />}
              />
            </Link>
          </div>
        </div>
        {/* Image section */}
        <div className="mt-6 md:mt-0 md:ml-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img src={assets.Sir_Udo1} alt="Mr. Udo" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;




