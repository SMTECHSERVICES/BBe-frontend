

import comb from "../../../assets/Images/comb.jpg";
import React, {useState, useEffect, useRef} from 'react'
import header from '../../../assets/videos/header.mp4'
import w from '../../../assets/videos/w.mp4'
import hero from '../../../assets/videos/hero.mp4'
import homebg2 from '../../../assets/videos/homebg2.mp4'
import hero2 from '../../../assets/videos/hero2.mp4'
import home from '../../../assets/videos/homebg.mp4'

import header2 from '../../../assets/videos/header2.mp4'

import { HiMenuAlt3 } from "react-icons/hi";

import { useLocation } from 'react-router-dom'

const SLIDES = [
    {
      video: home,
      heading: (
        <>
          World Class <span className="text-[#F9981C]">  Manufacturing </span> Services Provider
        </>
      ),
      list: ['Commercial', 'Domestic', 'Industrial'],
      button: 'View More Details',
    },
    {
      video: w,
      heading: (
        <>
          Trusted <span className="text-[#F9981C]"> Structural </span> Design Solutions
        </>
      ),
      list: ['Residential', 'High-Rise', 'Infrastructure'],
      button: 'Explore Projects',
    },

  ]

  const INTERVAL = 5000

const HeroSection = () => {

    const [current, setCurrent] = useState(0)
    const [textVisible, setTextVisible] = useState(true)
    const videoRef = useRef(null)
   
    useEffect(() => {
      const timer = setInterval(() => {
        setTextVisible(false)
   
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % SLIDES.length)
          setTextVisible(true)
        }, 5000)
      }, INTERVAL)
      return () => clearInterval(timer)
    }, [])
 


    useEffect(() => {
      const video = videoRef.current;
    
      if (!video) return;
    
      video.src = SLIDES[current].video;
    
      video.onloadeddata = () => {
        video.play().catch(() => {console.log("error")});
      };
    
    }, [current]);

 
    const slide = SLIDES[current]

    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        const el = document.getElementById("home");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

  return (

   

    <div className='relative ' id='home'>

  <div className=''>
    <section className="transparent relative z-10 left-0">

      <div className="relative max-w-screen">
      <section className="h-[200vh] relative">
        <div className='sticky top-0 h-screen z-10'>

          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-b max-w-7xl mx-auto" />

          <div
            className={[
              'relative z-10 flex flex-col justify-center items-center min-h-screen w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12',
              'transition-all duration-300 ease-in-out',
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3',
            ].join(' ')}
          >
            <div className='max-w-7xl w-full'>
              <div className="w-full flex justify-center sm:justify-end">

                <div className='w-full sm:w-auto'>
                  <div className="mb-4 md:mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                    {slide.heading}
                  </div>
                   

                  <div className="mb-4 md:mb-6 text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                      {slide.list.map((item) => (
                        <li key={item} className="hover:text-[#FF8208]">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 mb-4 md:mb-0" />
            </div>
          </div>

     
        </div>
        </section>
      </div>
    </section>
  </div>

</div>
  )
}

export default HeroSection