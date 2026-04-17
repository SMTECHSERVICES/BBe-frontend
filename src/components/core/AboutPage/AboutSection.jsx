import React from 'react'

import innovation from '../../../assets/Images/innovation.jpg'
import execution from '../../../assets/Images/execution.jpg'

import productExe from '../../../assets/Images/productExe.jpg'
import strategy from '../../../assets/Images/strategy.jpg'

const AboutSection = () => {
  return (
    <div>
           <section className="w-full bg-[#f3f3f3]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-4 sm:pt-5 md:pt-6 ">
        <div className="w-full border-b border-[#cfcfcf] pb-3">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs md:text-[13px] tracking-[0.22em] text-[#2f2f2f] uppercase">
            <span>Home</span>
            <span className="text-[#4a4a4a]">&gt;</span>
            <span>About Us</span>
          </div>
        </div>

        <div className="flex justify-center text-center mt-16    ">
          <p className="max-w-[780px] text-[#4a4a4a] font-light leading-[1.55] text-[22px]  ">
          BB Engineers is a Press Component , Assy. & Roiling  
            Solution Provider Organization for Automotive and Non Automotive 
            Industries. Location :- Chakan Pune
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-0">
        

            <div> 
               <img src={innovation} className='w-40 animate-float'/>
            </div>
            <p className="mt-3 text-[#2e2e2e] text-[16px]   leading-[1.4]">
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-0 md:border-l md:border-r border-[#d8d8d8]">
          
             <div> 
               <img src={execution} className='w-40 animate-wiggle' />
            </div>
            <p className="mt-3 text-[#2e2e2e] text-[16px]  leading-[1.4]">
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-0 md:border-l md:border-r border-[#d8d8d8]">
            
             <div> 
               <img src={productExe} className='w-40 animate-zoomInOut'/>
            </div>
            <p className="mt-3 text-[#2e2e2e] text-[16px]   leading-[1.4]">
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-0">
           
             <div> 
               <img src={strategy}className='w-40 animate-float' />
            </div>
            <p className="mt-3 text-[#2e2e2e] text-[16px]   leading-[1.4]">
            </p>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default AboutSection