import React, { useEffect, useRef, useState }  from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiSmileyWinkThin } from "react-icons/pi";
import video from '../../../assets/videos/water.mp4';

const EveryDay = () => {

            const ref = useRef(null);
            const [visible, setVisible] = useState(false);

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
            className=" bg-gray-100 flex items-center justify-center sm:py-20 py-10 sm:px-0 px-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
      
              <div className="relative h-[380px] sm:h-[420px] md:h-[500px] overflow-hidden ">
      
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
      
                <div className="absolute inset-0 bg-white/40 sm:bg-white/30" />
      
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 h-full">
      
                  <h1
                    className={`text-2xl sm:text-4xl md:text-5xl text-[#EB9A38] mb-6 transition-all duration-1000 ease-out ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    #BETTER EVERYDAY
                  </h1>
      
                  <p
                    className={`max-w-md md:max-w-2xl text-[0.7rem] sm:text-base md:text-lg  text-white leading-relaxed transition-all duration-1000 delay-200 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    Our team delivers end-to-end expertise in stamping assembly fixture design,
                    manufacturing, and integration, streamlining your production processes and
                    minimizing vendor complexity
                  </p>
      
                  <p
                    className={`max-w-md md:max-w-2xl pt-6 md:pt-10 text-[0.7rem] sm:text-base md:text-lg  text-white leading-relaxed transition-all duration-1000 delay-400 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    Two Plant with in-house capabilities of Press Shop, Laser Cutting Machine pipe
                    bending robotic welding etc.
                  </p>
      
                </div>
      
              </div>
      
            </div>
          </div>

  )
}

export default EveryDay
