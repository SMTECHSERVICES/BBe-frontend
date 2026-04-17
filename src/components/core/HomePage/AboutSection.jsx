    import React, {useState, useRef, useEffect} from 'react'

import about from '../../../assets/videos/about.mp4'
import { NavLink } from 'react-router-dom'

import aboutSection from '../../../assets/Images/factory1.jpeg'
import { FiArrowUpRight } from "react-icons/fi";
import program from '../../../assets/Images/programming.jpg'
import bb from '../../../assets/Images/bb.jpg'
import mobile from '../../../assets/Images/mobile.png'
import software from '../../../assets/Images/software.png'
import sustainable from '../../../assets/Images/sustainability.webp'
import belding2 from '../../../assets/Images/belding2.jpeg'


const INTERVAL = 5000

const SLIDES = [
    {
      video: about,
      title: 'ABOUT B B Engineers',
      heading: (
        <>
        

          <span className='text-[#F9981C]'></span>
          Precision Engineering, One Roof Solution
        </>
      ),
      des: 'Empowering industry leaders with precision, innovation, and reliability—B B Engineers is your trusted “one roof solution” for advanced stamping, embossing, tooling assembly, fixture development, and integration. Based in Chakan, Pune, our team delivers expertise across automotive and non-automotive sectors, streamlining your processes and driving sustainable growth.',
      list: ['Commercial', 'Domestic', 'Industrial'],
      button: 'More About',
    },
   
  ]

const AboutSection = () => {
     const [current, setCurrent] = useState(0)
        const [textVisible, setTextVisible] = useState(true)
        const videoRef = useRef(null)
        const sectionRef = useRef(null);
       const [isVisible, setIsVisible] = useState(false);
       
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
          if (videoRef.current) {
            videoRef.current.src = SLIDES[current].video
            videoRef.current.load()
            videoRef.current.play()
          }
        }, [current])
       
        const slide = SLIDES[current]

        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            },
            { threshold: 0.4 }
          );
        
          if (sectionRef.current) {
            observer.observe(sectionRef.current);
          }
        
          return () => {
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          };
        }, []);

  return (
    <div className=''>

        <section
          ref={sectionRef}
          className="relative z-20 -mt-[100vh] "
        >
        <div className="relative w-full h-screen overflow-hidden ">

          <img
            src={belding2}
            className="w-full h-full object-cover"
          />

        <div className="absolute inset-0 flex items-center justify-center">

          <div
            className={`text-center text-white max-w-2xl px-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4  text-[#FF8208]">
              About B B Engineers
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white">
              Precision manufacturing and engineering solutions with innovation, reliability and performance.
            </p>
          </div>

        </div>

        </div>


        <div className="relative -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 z-10">

          <div className="w-full bg-[#f5f5f5] py-10 sm:py-12 px-4 flex justify-center">
            <div className="w-full max-w-6xl bg-white rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 md:p-10">

            

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

               
                <div className="bg-[#f1f1f1] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        Our Scope
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                      End to end manufacturing solutions across 
                      various commodities and processes including stamping, welding, etc
                      </p>
                    </div>
                    <img src={program} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                  </div>
                </div>

              
                <div className="bg-[#f4c84c] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <span className="bg-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                      Our Promise
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                        We promise quality, reliability, and on-time delivery with strong commitment to customer satisfaction.
                      </p>
                    </div>
                    <img src={mobile} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                  </div>

                </div>

       
                <div className="bg-[#1D75BC] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <span className="bg-white text-black px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        Management Target
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Achieving product excellence through zero-defect manufacturing, legal compliance, and transparent business processes
                      </p>
                    </div>
                    <img src={bb} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                  </div>


                </div>

                
                <div className="bg-[#f1f1f1] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between border-b-4 border-b-black shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <span className="bg-yellow-300 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        Strategies
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                        Ensuring product excellence through quality and innovation.
                      </p>
                    </div>
                    <img src={software} className="w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto sm:mx-0" />
                  </div>

                </div>

              </div>

            </div>
          </div>

         </div>

        </section>


    </div>
  )
}

export default AboutSection







   