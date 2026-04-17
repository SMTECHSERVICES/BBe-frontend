


import comb from '../../../assets/Images/comb.jpg'
import { useEffect, useRef } from "react";
import bgImage from "../../../assets/Images/productsbg.jpg";  

import carSheet from "../../../assets/Images/sheet.jpg";
import pipe from "../../../assets/Images/pipe.jpg";
import toolFixture6 from "../../../assets/Images/toolFixture6.jpg";
import toolFixture7 from "../../../assets/Images/toolFixture7.jpg";
import machineries5 from "../../../assets/Images/mechineries5.jpg";
import sheet7 from "../../../assets/Images/sheet7.jpg";

const images = [toolFixture7, toolFixture6, pipe, carSheet, machineries5, sheet7];

export default function PremiumRotateCenter({ title, images, bgImage }) {
  const ringRef = useRef(null);

  useEffect(() => {
    let angle = 0;

    const animate = () => {
      angle += 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${angle}deg)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">

      <img
        src={comb}
        className="absolute w-full h-full object-cover scale-110"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute top-32 text-center z-10">
        <h2 className="text-5xl font-semibold tracking-wide text- drop-shadow-lg text-[#EB9A38]">
          {title}
        </h2>
        <p className="text-gray-300 mt-3 tracking-wider text-sm">
          Premium Engineering Solutions
        </p>
      </div>

      <div
        className="relative w-[450px] h-[450px] mt-40 flex items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        <div
          ref={ringRef}
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((item, i) => {
            const angle = (360 / images.length) * i;

            return (
              <div
                key={i}
                className="absolute w-56 h-80 rounded-3xl"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(260px)`,
                }}
              >
               

                <div className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-110 hover:shadow-[0_40px_80px_rgba(0,0,0,0.7)]">

                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="bg-[#EB9A38] whitespace-nowrap absolute top-3 left-1/2 -translate-x-1/2   backdrop-blur-md px-4 py-1 rounded-full text-xs text-white tracking-wider border border-white/30 shadow-md">
                    {item.name}
                  </div>

                  <div className="absolute bottom-4 left-0 w-full text-center text-white text-sm tracking-wide opacity-80">
                    {/* {item.name} */}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

