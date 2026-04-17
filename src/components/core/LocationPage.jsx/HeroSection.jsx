import React from 'react'
import img from '../../../assets/Images/about.jpg'

const HeroSection = ({img, address, scrollTo}) => {

  return (
  
          <div className="relative  ">

        <section className="relative w-full h-[70vh] mx-auto flex items-center" id={scrollTo}>
            
          <img
            src={img}
            alt="Safety"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <div className="flex z-50 text-white flex-col w-full">
            <div className="md:w-9/12 relative py-24 mx-auto">

              <div className="flex items-center mb-4">
                <span className="text-sm tracking-widest font-semibold uppercase"></span>
              </div>

              <div className="max-w-7xl mx-auto px-0 py-1 flex flex-col md:flex-row items-center gap-8">

                <div className="lg:w-5/12 text-left">
                  <h2 className="text-base font-bold leading-tight text-[#EB9A38]">
                    Pune, India
                  </h2>
                </div>

                <div className="lg:w-1/2">
                  <p className="text-sm tracking-widest text-gray-600 font-medium"></p>
                </div>

              </div>

              <div className="text-lg sm:text-xl md:text-2xl text-white flex z-10 w-full sm:w-8/12 px-10 md:px-0">
                <p className='text-[#EB9A38]'>
                  {address}
                </p>
              </div>

            </div>
          </div>

        </section>

      </div>

  )
}

export default HeroSection


