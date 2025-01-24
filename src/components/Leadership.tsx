// import React from "react";
import { assets } from "../assets/assets";

const Leadership = () => {
  const cards = [
    { id: 1, letter: "MBO", color: "bg-yellow2", caption: "Board Of Trustees (BOT)",  imgSrc: assets.Dr_Ikim },
    { id: 2, letter: "HO", color: "bg-light", caption: "National Executive Committee (NEC)", imgSrc: assets.Sir_Udo },
    { id: 3, letter: "ANAM", color: "bg-yellow2", caption: "Members", imgSrc: assets.gen_member },

  ];

  return (
    <div>
          <h1 className="flex items-center justify-center py-8 text-primary text-[4rem]">
            Leadership Structure of the Mboho Anam
        </h1>
    
    <div className="flex flex-wrap justify-between items-center w-full px-36">
      
      {cards.map((card) => (
        <div
          key={card.id}
          className={`relative flex flex-col justify-end items-center w-[33.33%] h-64 shadow-lg px-8 ${card.color} text-dark p-5`}
        >
          {/* Large Letter Background */}
          <span className="absolute inset-0 flex justify-center items-center text-[7.5rem] font-extrabold font-stylish opacity-25 pb-8">
            {card.letter}
          </span>
          
          {/* Text Content */}
          <div className="relative text-center py-15 text-white">
            <h2 className="text-3xl font-semibold mb-2 font-stylish">{card.caption}</h2>
          
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Leadership;
