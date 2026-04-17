
import React, { useEffect, useRef, useState } from 'react'
import { FiPlus } from "react-icons/fi";

import vikram from '../../../assets/Images/vikram.jpg'
import suresh from '../../../assets/Images/suresh.jpg'
import rohan from '../../../assets/Images/rohan.jpg'
import anil from '../../../assets/Images/anil.jpg'

import worker from '../../../assets/Images/worker.jpg'
import worker2 from '../../../assets/Images/worker2.jpg'
import worker1 from '../../../assets/Images/worker1.jpg'

const images = {
  topLeft: vikram,
  topCenter: suresh,
  topRight: rohan,
  bottomLeft: anil,
  bottomCenter: worker,
  bottomRight: worker1,
};

const AboutDifference = () => {

  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (

        <div ref={ref} className="bg-white h-full w-full flex flex-col items-center justify-center px-4 py-16 sm:py-24 lg:py-32" id='team'>
        <p className="text-center text-gray-500 text-xs sm:text-sm md:text-base lg:text-xl max-w-2xl mb-6 sm:mb-10 leading-relaxed px-2">
          At BB Engineers, we believe in creating long-term value and believe what's good for the
          planet is good for the business.
        </p>
      
        <div className="md:hidden w-full max-w-sm sm:max-w-md mx-auto pb-10">
      
          <h2
            className="text-center text-2xl sm:text-3xl font-bold tracking-widest py-4 mb-4"
            style={{ color: "#29B6E8" }}
          >
            Meet Our Team
          </h2>
      
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
      
            <div
              className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden"
              style={{ transition: "all 1s ease", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.topLeft} className="w-full h-full object-cover" />
            </div>
      
            <div
              className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden"
              style={{ transition: "all 1s ease 0.2s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.topRight} className="w-full h-full object-cover" />
            </div>
            <div
              className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden"
              style={{ transition: "all 1s ease 0.4s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.topCenter} className="w-full h-full object-cover" />
            </div>
      
            <div
              className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden"
              style={{ transition: "all 1s ease 0.6s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.bottomCenter} className="w-full h-full object-cover" />
            </div>
      
            <div
              className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden"
              style={{ transition: "all 1s ease 0.8s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.bottomLeft} className="w-full h-full object-cover" />
            </div>
      
            <div
              className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden"
              style={{ transition: "all 1s ease 1s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.bottomRight} className="w-full h-full object-cover" />
            </div>
      
          </div>
        </div>
      
        <div className="hidden md:block relative w-full max-w-7xl pb-16 sm:pb-24 lg:pb-28">
      
          <div className="relative flex items-start justify-center mt-4 min-h-[160px] sm:min-h-[240px] lg:min-h-80">
      
            <div
              className="absolute left-4 sm:left-16 md:left-32 lg:left-56 top-10 sm:top-16 lg:top-24 w-20 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ transition: "all 1s ease", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.topLeft} className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-1/3 md:right-80 lg:right-96 w-20 h-28 sm:w-40 sm:h-56 md:w-52 md:h-64 lg:w-64 lg:h-80 rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ transition: "all 1s ease 0.2s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.topCenter} className="w-full h-full object-cover" />
            </div>
      
            <div
              className="absolute right-3 sm:right-6 md:right-8 lg:right-10 top-8 sm:top-12 lg:top-16 w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ transition: "all 1s ease 0.4s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.topRight} className="w-full h-full object-cover" />
            </div>
          </div>
      
          <h2
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest py-6 sm:py-8 lg:py-10"
            style={{ color: "#29B6E8" }}
          >
            Meet Our Team
          </h2>
      
          <div className="relative flex items-start justify-center mt-4 min-h-[160px] sm:min-h-[240px] lg:min-h-80">
      
            <div
              className="absolute left-3 sm:left-6 md:left-8 lg:left-8 top-14 sm:top-20 lg:top-28 w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ transition: "all 1s ease 0.6s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.bottomLeft} className="w-full h-full object-cover" />
            </div>
      
            <div
              className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:left-1/3 md:left-72 lg:left-80 -top-2 sm:-top-4 lg:-top-5 w-20 h-28 sm:w-40 sm:h-56 md:w-52 md:h-64 lg:w-64 lg:h-80 rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ transition: "all 1s ease 0.8s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.bottomCenter} className="w-full h-full object-cover" />
            </div>
      
            <div
              className="absolute right-4 sm:right-20 md:right-36 lg:right-44 bottom-0 w-14 h-14 sm:w-32 sm:h-36 md:w-40 md:h-48 lg:w-56 lg:h-60 rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ transition: "all 1s ease 1s", clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)" }}
            >
              <img src={images.bottomRight} className="w-full h-full object-cover" />
            </div>
          </div>
      
        </div>
      </div>
   

  )
}

export default AboutDifference