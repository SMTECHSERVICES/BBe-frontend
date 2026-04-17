
import React, { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import factory from '../../../assets/Images/factory.jpeg'
import factory1 from '../../../assets/Images/factory1.jpeg'

import mission from '../../../assets/Images/mission.jpeg'
import vision from '../../../assets/Images/vision.jpeg'
 
const slides = [
  {
    label: "OUR VISION",
    title: "Engineering Excellence for a Better Tomorrow",
    name: "Mr. Saroj Ranajn Parida CEO ",
    role: "FOUNDER AND VISIONARY, O. P. JINDAL GROUP",
    description: "To provide precision-engineered solutions in sheet metal, pipe bending, tooling & Exhaust System  by upholding the highest standards of quality, fostering continuous innovation, ensuring on-time delivery, and creating long-term value for our customers and stakeholders.",
    image: vision,
  },
  {
    label: "OUR MISSION",
    title: "Driven by Precision. Powered by Trust.",
    name: "Mr. P Rao   - Plant Head",
    role: "FOUNDER AND VISIONARY, O. P. JINDAL GROUP",
    description: "To be a trusted partner delivering precision-engineered solutions for mobility, infrastructure, and innovation—while maintaining an unwavering commitment to quality, reliability, and sustainable growth.",
    image: mission,
  },
];

const Legacy = () => {

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
 
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
 
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
 
  const slide = slides[current];

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

  return (
    <div
      ref={ref}
      className="relative w-full bg-gray-300 overflow-hidden min-h-screen flex items-center justify-center"
      id="vision"
    >
 
      <div className='flex justify-center items-center'>  
        <img
          src={slide.image}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-all duration-700"
        />
 
        <div className="absolute inset-0 bg-gray-800 opacity-30" />
 
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-700 transition"
        >
          <FiChevronLeft size={20} className="text-white" />
        </button>
 
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-700 transition"
        >
          <FiChevronRight size={20} className="text-white" />
        </button>
 
        <div className="relative z-10 max-w-6xl mx-auto px-16 sm:px-24 py-12 flex flex-col md:flex-row items-center gap-8">
 
          <div className="flex-1">
 
            <p className={` text-white text-xs sm:text-lg font-semibold tracking-widest uppercase mb-3 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {slide.label}
            </p>
 
            <h1 className={` text-3xl md:text-3xl font-black text-gray-900 uppercase leading-tight mb-5 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {slide.title}
            </h1>
 
            <p className={`text-gray-800 text-xs font-bold tracking-wide uppercase transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {/* {slide.name} */}
            </p>

            <p className={`text-[#ffffff] text-sm sm:text-base mb-8 max-w-sm transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {slide.description}
            </p>
 
          </div>
 
          <div className={`flex-1 flex justify-center md:justify-end transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <img
              src={slide.image}
              alt={slide.name}
              className="w-48 sm:w-64 md:w-80 object-cover grayscale"
            />
          </div>
 
        </div>
 
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-blue-400 w-4" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
 
    </div>
  )
}

export default Legacy