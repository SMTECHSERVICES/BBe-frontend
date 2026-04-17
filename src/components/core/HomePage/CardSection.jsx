
import { useState, useEffect , useRef} from "react";

import switchImg from '../../../assets/Images/sheetmetalbg.jpg';
import bbLogo from '../../../assets/Images/sheetmetalbg.jpg'
import pcpImg from "../../../assets/Images/pcp.webp";
import delkart from "../../../assets/Images/delkart.svg";
import mskh from "../../../assets/Images/mskh.jpeg";
import talbros from "../../../assets/Images/talbros.jpeg";
import sm from "../../../assets/Images/SM.png";
import taco from "../../../assets/Images/taco.jpeg";
import Active from "../../../assets/Images/active.jpeg";
import das from "../../../assets/Images/das.png";
import autotech from "../../../assets/Images/autotech.png";
import dsc from "../../../assets/Images/dsc.jpeg";

import llproducts from "../../../assets/Images/llproducts.jpg";

import sharda from "../../../assets/Images/sharda.jpeg";


import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const CARDS = [
  { id: 1, title: "Mountain Escape", desc: "Serene peaks await", bg: "bg-blue-700", emoji: "https://bbengineers.co.in/image/21.png" },
  { id: 2, title: "Ocean Breeze", desc: "Feel the waves", bg: "bg-teal-700", emoji: "https://bbengineers.co.in/image/20.jpg" },
  { id: 3, title: "City Lights", desc: "Urban adventures", bg: "bg-violet-700", emoji: "https://bbengineers.co.in/image/19.png" },
  { id: 4, title: "Desert Sun", desc: "Golden horizons", bg: "bg-amber-700", emoji: "https://bbengineers.co.in/image/12.jpg" },
  { id: 5, title: "Forest Walk", desc: "Nature's embrace", bg: "bg-green-700", emoji: "https://bbengineers.co.in/image/15.png" },

  { id: 6, title: "Snowy Peaks", desc: "Winter wonderland", bg: "bg-sky-700", emoji: "https://bbengineers.co.in/image/18.png" },
  { id: 7, title: "Sunset Cove", desc: "Golden hour magic", bg: "bg-orange-700", emoji: "https://bbengineers.co.in/image/14.jpg" },

  { id: 8, title: "Cherry Blossom", desc: "Spring in full bloom", bg: "bg-pink-700", emoji: "https://bbengineers.co.in/image/11.jpg" },
  { id: 9, title: "Starry Night", desc: "Infinite cosmos", bg: "bg-indigo-900", emoji: "https://bbengineers.co.in/image/13.jpg" },
  { id: 10, title: "Tropical Isle", desc: "Paradise found", bg: "bg-emerald-700", emoji: "https://bbengineers.co.in/image/16.png" },
  
];

export default function CardSection() {
  const [active, setActive] = useState(4);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const prev = () => setActive((i) => (i - 1 + CARDS.length) % CARDS.length);
  const next = () => setActive((i) => (i + 1) % CARDS.length);

  const getPos = (i) => {
    let diff = i - active;
    if (diff > CARDS.length / 2) diff -= CARDS.length;
    if (diff < -CARDS.length / 2) diff += CARDS.length;
    return diff;
  };

  const visibleRange = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
  
    if (ref.current) observer.observe(ref.current);
  
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
   
   

    <div className="w-full bg-[#f6f6f6] py-24 md:py-40 px-4 flex justify-center" ref={ref}>
    <div className="relative w-full max-w-7xl  py-20 md:py-28 px-4 md:px-12 mb-10 md:mb-20 rounded-2xl">
  
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 gap-4 md:gap-6 opacity-10 pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="border border-gray-200 rounded-xl"></div>
        ))}
      </div>
  
      <div className="hidden md:block absolute top-0 left-0 w-full h-[360px] pointer-events-none">
  
        <div className="animate-fadeUp  flex w-full h-full relative">
  
          <img style={{ animationDelay: "0.1s" }} src={pcpImg} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-[12%] left-[4%] w-28 h-28 object-cover rounded-2xl shadow-lg border border-white bg-white p-1  `} />
  
          <img style={{ animationDelay: "0.2s" }} src={delkart} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-[5%] left-[18%] w-28 h-24 object-contain rounded-2xl shadow-lg border border-white bg-white p-1 `} />
  
  
          <img style={{ animationDelay: "0.3s" }} src={mskh} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-[66%] left-[8%] w-24 h-24 object-cover rounded-2xl shadow-md `} />
  
          <img style={{ animationDelay: "0.4s" }} src={dsc} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-20 left-[32%] w-24 h-20 object-cover rounded-2xl shadow-md `} />

          <img style={{ animationDelay: "0.4s" }} src={llproducts} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-36 lg:top-20 left-[44%]  w-24 h-20 object-cover rounded-2xl shadow-md `} />  

          <img style={{ animationDelay: "0.4s" }} src={sharda} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-36  lg:top-40 right-[30%]  w-24 h-20 object-cover rounded-2xl shadow-md `} />


          <img style={{ animationDelay: "0.5s" }} src={talbros} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-14 left-[56%] w-24 h-20 object-cover rounded-2xl shadow-md `} />
  
          <img style={{ animationDelay: "0.6s" }} src={sm} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-2 right-[24%] md:right-[20%] w-24 h-24 object-cover rounded-2xl shadow-md `} />
  
          <img style={{ animationDelay: "0.7s" }} src={taco} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-32 right-[16%] w-28 h-24 object-cover rounded-2xl shadow-md `} />
  
          <img style={{ animationDelay: "0.8s" }} src={Active} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-[45%] left-[18%] w-24 h-28 object-cover rounded-2xl shadow-md `} />
  
          <img style={{ animationDelay: "0.9s" }} src={autotech} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-[5%] right-[6%] w-24 h-24  md: object-cover rounded-2xl shadow-md `} />
  
          <img style={{ animationDelay: "1s" }} src={das} className={`absolute ${visible ? "animate-fadeUp" : "opacity-0"} top-[66%] right-[8%] w-38 h-10 object-cover rounded-2xl shadow-md `} />
  
        </div>
      </div>
  
      <div className="grid grid-cols-3 gap-4 md:hidden mb-10">
        {[pcpImg, delkart, mskh, talbros, sm, taco, Active, das,sharda ].map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-20 object-cover rounded-xl shadow-md animate-fadeUp"
          />
        ))}
      </div>
  
      <div className="relative z-10 text-center max-w-xl mx-auto md:top-40 sm:top-10 k animate-fadeUp">
  
        <span className="text-xs md:text-sm text-[#EB9A38] px-4 py-1 rounded-full border-2 border-[#EB9A38] shadow-sm  ">
          Testimonials
        </span>
  
        <h2 className="mt-6 text-2xl sm:text-3xl  md:text-4xl font-semibold text-[#EB9A38] leading-snug">
          Trusted by leaders
          <br />
          <span className="text-gray-400">from various industries</span>
        </h2>
  
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Learn why professionals trust our solutions to complete their customer journeys.
        </p>
  
        <NavLink to='/about ' 
         onClick={() => {
              setTimeout(() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}>

           <button  className="mt-6 inline-flex items-center gap-2 bg-black text-[#EB9A38] px-6 py-3 rounded-full text-sm hover:scale-105 transition">
              About us <FaArrowRight />
           </button>
        </NavLink>
       
  
      </div>
    </div>
  
  

        <style>{`
          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
             opacity: 0;
          }

          @keyframes fadeUp {
            from {
              transform: translateY(60px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>


  </div>
  

  );

}