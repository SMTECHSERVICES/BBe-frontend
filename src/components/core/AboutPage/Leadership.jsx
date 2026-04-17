

import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ceo from '../../../assets/Images/ceo.jpeg';

const Leadership = () => {

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
    <div id="leadership" ref={ref}  style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="bg-blue-50 pt-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col-reverse md:flex-row gap-10">

          <div className="flex-1 text-left">

            <h1 className={`text-xl sm:text-4xl mt-8 font-semibold text-gray-900 leading-tight mb-6 uppercase transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              We're not just a business, we're a catalyst for India's growth.
            </h1>

            <p className={`text-gray-600 text-[0.8rem] sm:text-base leading-relaxed mb-8 max-w-md transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              BB Engineers is a leading manufacturing organization based in Chakan, Pune, specializing in high-quality press components, tube bending, and heat shield embossing solutions. We cater to both automotive and non-automotive industries, delivering reliable sub-assemblies and complete assemblies for exhaust systems, mufflers, and related components.
            </p>

            <p className={`text-gray-600 text-[0.8rem]    sm:text-base leading-relaxed mb-8 max-w-md transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
         With strong engineering expertise, our team provides end-to-end solutions—from stamping and assembly fixture design to manufacturing and integration—helping customers streamline production processes while reducing vendor dependency.            </p>

            <p className={`text-gray-600 text-[0.8rem]    sm:text-base leading-relaxed mb-8 max-w-md transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              We operate two fully equipped manufacturing plants with advanced in-house capabilities, including
            </p>

       

          </div>

          <div className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}>
            <div className="relative group w-64 sm:w-80 md:w-full overflow-hidden rounded-xl shadow-lg">
              
              <img
                src={ceo}
                alt="Founder"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition duration-500"></div>

              <div className="absolute bottom-16 left-0 w-full translate-y-full transition-all duration-500">
                <div className="backdrop-blur-md bg-white/10 border-t border-white/20 px-6 py-4">
                  <p className="font-semibold text-[0.7rem] sm:text-sm tracking-wide uppercase text-[#EB9A38]">
                    Mr. Saroj Ranajn Parida
                  </p>
                  <p className="text-[#EB9A38] text-xs">CEO</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Leadership