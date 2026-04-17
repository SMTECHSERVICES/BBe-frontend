

import comb from "../assets/Images/comb.jpg";

import React, { useState, useEffect, useRef } from "react";
import industry from "../assets/Images/industry.webp";

import industry2 from "../assets/Images/industry2.jpeg";
import { useParams, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";


const ServicesItem = () => {
  const location = useLocation();
  
  const { id } = useParams();

  const services = location.state;

  const title = decodeURIComponent(id);
  const sectionId = services.sectionId;


  const [started, setStarted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStarted(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = services?.images?.length || 0;

  const autoPlayRef = useRef(null);

  useEffect(() => {
    if (totalSlides === 0) return;
    autoPlayRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(autoPlayRef.current);
  }, [totalSlides]);

  const handleSlide = (dir) => {
    setSlideIndex((prev) => (prev + dir + totalSlides) % totalSlides);
  };

  
    useEffect(() => {
      if (totalSlides === 0) return;
      autoPlayRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % totalSlides);
      }, 3000);
      return () => clearInterval(autoPlayRef.current);
    }, [totalSlides]);


  const PAGE_SIZE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const allImages = services?.images || [];
  const totalPages = Math.ceil(allImages.length / PAGE_SIZE);
  const visibleImages = allImages.slice(0, (currentPage + 1) * PAGE_SIZE);
  const isAllShown = currentPage + 1 >= totalPages;
  const shownCount = Math.min((currentPage + 1) * PAGE_SIZE, allImages.length);

  const handleViewToggle = () => {
    if (isAllShown) {
      setCurrentPage(0);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  
    useEffect(() => {
      if (location.state?.sectionId) {
     
        const el = document.getElementById(location.state.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);
  

  return (
   
      <div className="bg-gray-50 min-h-screen flex flex-col mb-28" id="services">
    
      <section className="relative h-[60vh] w-full flex items-center">
      
      <img
        src={industry2}
        className="absolute w-full h-full object-cover"
      />
    
      <div className="absolute inset-0 bg-black/50" />
    
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
    
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-orange-500 mb-3">
          {decodeURIComponent(id)}
        </h1>
    
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>Home</span>
          <span>›</span>
          <span>{sectionId}</span>
          <span>›</span>
          <span className="text-white">{decodeURIComponent(id)}</span>
        </div>
    
      </div>
    </section>
    
          <section
      className="relative py-14 overflow-hidden "
    
    >
      <div className="absolute inset-0 bg-white/60" />
    
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
    
        <div className="grid md:grid-cols-2 gap-20 items-center">
    
          <div className="relative">
    
            <div className="overflow-hidden rounded-2xl border shadow-lg bg-white">
    
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {services?.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img.img}
                    className="w-full h-[260px] sm:h-[300px] md:h-[420px] object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
    
            <button
              onClick={() => handleSlide(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              ‹
            </button>
    
            <button
              onClick={() => handleSlide(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              ›
            </button>
          </div>
    
          <div>
    
            <p className="text-orange-500 text-md font-semibold uppercase mb-2">
              Trusted Pliers Exporter In{" "}
              <span className="relative inline-block ml-1">
                India
    
             <svg
              className="absolute left-0 -bottom-2 w-full"
              viewBox="0 0 120 30"
              fill="none"
            >
              <path
                d="M5 18 Q40 10 115 16"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="160"
                strokeDashoffset="160"
                className="sig sig1"
              />
    
              <path
                d="M15 22 Q60 14 110 20"
                stroke="#f97316"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="140"
                strokeDashoffset="140"
                className="sig sig2"
              />
    
              <path
                d="M40 25 Q70 20 95 23"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="100"
                strokeDashoffset="100"
                className="sig sig3"
              />
            </svg>
              </span>
            </p>
    
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
              {decodeURIComponent(id)} Manufacturer In India
            </h2>
    
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              {services?.para}
            </p>
    
            <ul className="space-y-2">
              {services?.details?.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-2 h-2 bg-orange-500 mt-2 rounded-full" />
                  <span className="text-gray-700">{item.data}</span>
                </li>
              ))}
            </ul>
    
          <NavLink to='/contact'><button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
               Contact Us →
          </button> </NavLink>
          </div>
        </div>
    
        <div className="mt-16 max-w-5xl mx-auto px-4">
    
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 relative overflow-hidden">
    
      <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />
    
      <p className="text-gray-600 text-xs sm:text-sm md:text-[16px] leading-relaxed text-center md:text-left">
        {services?.para1}
      </p>
    
    </div>
    </div>
    
      </div>
    
    
      <style jsx>{`
        .signature-path {
          animation: drawSign 1.5s ease forwards;
        }
    
        @keyframes drawSign {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
    
          <div className="bg-orange-500 overflow-hidden py-3">
    
    <div className="flex items-center gap-12 whitespace-nowrap animate-marquee text-white text-sm md:text-base font-light tracking-wide">
    
      <span>Trusted Manufacturing Excellence</span>
    
      <span className="text-black text-lg">✦</span>
    
      <span>Engineering Precision Tools</span>
    
      <span className="text-black text-lg">✦</span>
    
      <span>Trusted Manufacturing Excellence</span>
    
      <span className="text-black text-lg">✦</span>
    
      <span>Engineering Precision Tools</span>
    
      <span>Trusted Manufacturing Excellence</span>
    
      <span className="text-black text-lg">✦</span>
    
      <span>Engineering Precision Tools</span>
    
      <span className="text-black text-lg">✦</span>
    
    </div>
    
    </div>
    
           
          <section
      className="relative py-10 overflow-hidden"
       
    >
   
      <div className="absolute inset-0 bg-white/70" />
    
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
    
       
        <div className="text-center mb-10">
    
          <p className="text-lg py-10 text-gray-500 ">
            Collection Of{" "}
            <span className="relative font-semibold text-gray-800">
              Pincers And Pliers
    
             
              <svg
                className="absolute left-0 top-2.5 w-full"
                viewBox="0 0 120 25"
              >
                <path
                  d="M5 15 Q40 5 115 15"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>
    
          <h2 className="text-2xl md:text-4xl  font-bold text-gray-900">
            Explore a Range of Different Types of Pliers
          </h2>
    
        </div>
    
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className="relative bg-white p-3 group transition duration-300"
            >
    
              
    
              <span className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-orange-500 opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-orange-500 opacity-0 group-hover:opacity-100 transition" />
    
              <div className="overflow-hidden mb-3">
                <img
                  src={img.img}
                  className="w-full h-32 sm:h-36 md:h-40 object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
    
              <div className="text-center">
                
    
                <p className="text-sm font-medium text-gray-800 mb-3">
                  {img.name}
                </p>
                
              </div>
            </div>
          ))}
    
        </div>
    
        {/* <div className="flex justify-center mt-20">
      <button
        onClick={() =>
          setCurrentPage((prev) =>
            isAllShown ? 0 : prev + 1
          )
        }
        className="relative px-8 py-3 text-sm font-semibold text-white bg-orange-500 rounded-full shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
      >
        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700"></span>
    
        <span className="relative z-10 flex items-center gap-2">
          {isAllShown ? "View Less" : "View More"}
    
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div> */}
    
      </div>
    </section>
    
          <style >{`
            .animate-marquee {
              display: inline-block;
              animation: marquee 15s linear infinite;
            }
            @keyframes marquee {
              from { transform: translateX(100%); }
              to { transform: translateX(-100%); }
            }
          `}</style>
        </div>


  );
};

export default ServicesItem;