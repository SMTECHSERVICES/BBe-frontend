import React,  { useEffect, useState } from 'react'
import img from '../../../assets/Images/about.jpg'
import factory from '../../../assets/Images/factory.jpeg'
import robot from '../../../assets/Images/robot.jpeg'
import { useLocation } from 'react-router-dom'

const HeroSection = () => {
  const [started, setStarted] = useState(false)
 
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setStarted(true))
    })
    return () => cancelAnimationFrame(raf)
  }, [])


  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className='relative  z-10 top-0 ' id='about'>
      <section className="relative w-full h-[70vh] mx-auto flex items-center overflow-hidden">

      <div
        className="absolute w-full h-full will-change-transform bg-white"
        style={{
          transform:    started ? 'scale(1)'    : 'scale(0.88)',
          borderRadius: started ? '0px'         : '20px',
          overflow:     'hidden',
          transition: started
            ? 'transform 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            : 'none',
        }}
      >
        <img
          src={robot}
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>


      <div
        className="absolute inset-0 bg-black/50"
        style={{
          
          borderRadius: started ? '0px' : '20px',
          overflow:     'hidden',
          transition: started
            ? 'border-radius 1600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            : 'none',
        }}
      />

      <div
        className="flex z-50 text-white flex-col w-full"
        style={{
          opacity:   started ? 1 : 0,
          transform: started ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 900ms ease-out 400ms, transform 900ms ease-out 400ms',
        }}
      >
        <div className="md:w-9/12 relative py-24 mx-auto w-full px-6 md:px-0">

      
          <div className="flex items-center mb-4">
            <span className="text-sm tracking-widest font-semibold uppercase" />
          </div>

          
          <div className="max-w-7xl mx-auto px-0 py-1 flex flex-col md:flex-row items-center gap-8">
            <div className="lg:w-5/12 text-left">
              <h2 className="text-base font-bold leading-tight text-[#EB9A38]">
                About us
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-sm tracking-widest text-gray-300 font-medium" />
            </div>
          </div>

          
          <div className="text-left text-3xl  sm:text-4xl md:text-5xl text-[#EB9A38] flex z-10 w-full md:w-8/12 mt-4">
            <p className="leading-snug">
              Innovative. Sustainable. Future Ready.
            </p>
          </div>

        </div>

        
      </div>

      </section>


  </div>
  )
}

export default HeroSection