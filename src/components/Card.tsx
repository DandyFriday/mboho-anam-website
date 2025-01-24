// //import React from "react";
// import { assets } from "../assets/assets";

// const Card = () => {
//   const cards = [
//     { id: 1, caption: "Dr. Prince IKim ", imgSrc: assets.Dr_Ikim },
//     { id: 2, caption: "Card 2", imgSrc:assets.Sir_Udo },
//     { id: 3, caption: "General Member", imgSrc:assets.gen_member},
//     { id: 4, caption: "Card 4", imgSrc:assets.gameboy_office },
//     { id: 5, caption: "Card 5", imgSrc:assets.dan },
//   ];

//   return (
//     <div className="flex justify-center items-center flex-wrap w-full bg-orange opacity-80 shadow-2xl">
//       {cards.map((card) => (
//         <div
//           key={card.id}
//           className={`flex flex-col items-center p-20 rounded-lg shadow-lg ${
//             card.id === 3 ? "w-64 h-80" : "w-60 h-78"
//           } bg-white`}
//         >
//           <img
//             src={card.imgSrc}
//             alt={card.caption}
//             className={`rounded-lg ${card.id === 3 ? "h-46 w-54" : "h-32 w-32"} object-cover`}
//           />
//           <p className=" text-center font-medium text-gray-700">{card.caption}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;






// import React from "react";
import { assets } from "../assets/assets";

const Card = () => {
  const cards = [
    { id: 1, letter: "M", color: "bg-yellow2", caption: "Motivation", description: "Empowering students through motivation.", imgSrc: assets.Dr_Ikim },
    { id: 2, letter: "B", color: "bg-light", caption: "Bursary", description: "Providing financial aid for education.", imgSrc: assets.Sir_Udo },
    { id: 3, letter: "O", color: "bg-yellow2", caption: "Opportunity", description: "Creating opportunities for growth.", imgSrc: assets.gen_member },
    { id: 4, letter: "H", color: "bg-light", caption: "Hope", description: "Building a brighter future with hope.", imgSrc: assets.gameboy_office },
    { id: 5, letter: "O", color: "bg-yellow2", caption: "Organization", description: "A united effort for student success.", imgSrc: assets.dan },
  ];

  return (
    <div className="flex flex-wrap justify-between items-center w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`relative flex flex-col justify-end items-center w-[20%] h-64 shadow-lg ${card.color} text-dark p-5`}
        >
          {/* Large Letter Background */}
          <span className="absolute inset-0 flex justify-center items-center text-[18rem] font-extrabold font-stylish opacity-25 pb-8">
            {card.letter}
          </span>
          
          {/* Text Content */}
          <div className="relative text-center py-15 text-white">
            <h2 className="text-3xl font-semibold mb-2 font-stylish">{card.caption}</h2>
            <p className="text-2xl ">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
