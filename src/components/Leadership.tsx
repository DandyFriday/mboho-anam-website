



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Leadership = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      caption: "Board Of Trustees (BOT)",
      imgSrc: assets.Sir_Udo3,
      path: "/bot",
    },
    {
      id: 2,
      caption: "National Executive Committee (NEC)",
      imgSrc: assets.Nat_excos,
      path: "/nec",
    },
    {
      id: 3,
      caption: "General Members",
      imgSrc: assets.gen_member,
      path: "/members",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-6">
      <h1 className="flex items-center justify-center py-8 text-primary text-[4rem]">
        Leadership Structure of the Mboho Anam
      </h1>

      <div className="flex flex-wrap justify-between items-center w-full px-36">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => navigate(card.path)}
            className={`relative flex flex-col w-[30%] h-[20rem] shadow-lg cursor-pointer overflow-hidden transform transition-all duration-1000 ease-in-out 
              ${animate ? "opacity-100 scale-100" : "opacity-0 scale-75"} delay-${index * 300}`}
            style={{
              backgroundImage: `url(${card.imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Text Content */}
            <div className="relative text-center py-[8rem] text-yellow2">
              <h2 className="text-3xl font-semibold mb-[6rem] font-stylish">
                {card.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;






