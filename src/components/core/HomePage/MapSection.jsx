




import React from "react";
import ind from "../../../assets/Images/ind.jpg";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import add1 from '../../../assets/Images/address.jpeg'
import add2 from '../../../assets/Images/address1.jpeg'
import i from '../../../assets/Images/i.png'



import w from "../../../assets/bbimages/w.jpeg";
import w1 from "../../../assets/bbimages/w1.jpeg";
import w2 from "../../../assets/bbimages/w2.jpeg";
import w6 from "../../../assets/bbimages/w6.jpeg";

import w5 from "../../../assets/bbimages/w5.jpeg";
import w4 from "../../../assets/bbimages/w4.jpeg";
import w3 from "../../../assets/bbimages/w3.jpeg";

const images2 = [w, w1, w2, w3, w4,w5, w6]
const images1 = []


const pl1 =
  "Pl-1 Address B B Engineers, Survey No. G63/7, MIDC Kurli, Chakan Industrial Estate, Taluka Khed, Pune - 410501 (MH)";
  

const pl2 =
  "PL-2 Gat No. 51, Near Hotel Moi Grand, Nighoje Moi Road, At .Moi, PO Kurli Tal. Khed Dist Pune-410501, MH, INDIA";

const MapSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="w-full  h-full sm:h-full flex  items-center justify-center relative bg-white">

        <img src={i} className="w-full h-full object-cover "   />

        {/* 🔥 PLANT 2 */}


          <div className="absolute 
            left-[39%] top-[58%] 
            sm:left-[40%] sm:top-[56%] 
            md:left-[40%] md:top-[57%] 
            lg:left-[40%] lg:top-[58%] 
            xl:left-[41%] xl:top-[60%]">

            <IoLocation
              className="text-orange-400  text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl cursor-pointer"
              onClick={() => {
                navigate("/location/pune/plant-2", {
                  state: {
                    name: "Plant 2",
                    address: pl2,
                    image: add1,
                    scrollTo: "plant2",
                    images: images2
                  },
                });
              }}
            />

            
            <div className="absolute left-full top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2">

              <svg 
                className="pointer-events-none  overflow-visible 
               w-[45px] sm:w-[120px] md:w-[130px] lg:w-[180px] xl:w-[220px] 
               h-[15px] sm:h-[30px] md:h-[35px] lg:h-[40px]"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="20"
                  x2="200"
                  y2="20"
                  stroke="black"
                  strokeWidth="2"
                />

                <polygon
                  points="200,20 180,12 180,28"
                  fill="black"
                />
              </svg>

              
              <div className="bg-white 
                px-2 py-1 
                sm:px-3 sm:py-2 
                rounded-lg shadow-md 
                w-[110px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[230px] cursor-pointer"
                 onClick={() => {
                  navigate("/location/pune/plant-2", {
                    state: {
                      name: "Plant 2",
                      address: pl2,
                      image: add1,
                      scrollTo: "plant2",
                      images: images2
                    },
                  });
                 }}
                >

                <p className="text-[8px] sm:text-[10px] md:text-xs font-semibold">
                  Plant 2
                </p>
                <p className="text-[0.4rem] sm:text-[9px] md:text-[10px] text-gray-500 leading-tight">
                  {pl2}
                </p>
              </div>

            </div>
          </div>

        {/* 🔥 PLANT 1 */}
            <div className="absolute 
              left-[43%] top-[54%] 
              sm:left-[43%] sm:top-[54%] 
              md:left-[43%] md:top-[54%] 
              lg:left-[43%] lg:top-[54%] 
              xl:left-[43%] xl:top-[54%]">

              <IoLocation
                className="text-orange-400 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl cursor-pointer"
                onClick={() => {
                  navigate("/location/pune/plant-1", {
                    state: {
                      name: "Plant 1",
                      address: pl1,
                      image: add2,
                      scrollTo:  "plant1",
                      images: images2
                    },
                  });
                }}
              />

              
              <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center"  >

                <div className="bg-white  px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-md  
                   w-[110px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[230px] cursor-pointer" 
                   onClick={() => {
                    navigate("/location/pune/plant-1", {
                      state: {
                        name: "Plant 1",
                        address: pl1,
                        image: add2,
                        scrollTo:  "plant1",
                        images: images2
                      },
                    });
                   }}
                   >
                  <p className="text-[8px] sm:text-xs font-semibold">Plant 1</p>

                  <p className="text-[6px]  sm:text-[10px] text-gray-500">
                    {pl1}
                  </p>
                </div>

                    <svg 
                      className="overflow-visible 
                      w-[25px] sm:w-[100px] md:w-[110px] lg:w-[180px] xl:w-[220px] 
                      h-[15px] sm:h-[30px] md:h-[35px] lg:h-[40px]"
                      viewBox="0 0 200 40"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="200"
                        y1="20"
                        x2="20"
                        y2="20"
                        stroke="black"
                        strokeWidth="2"
                      />

                      <polygon
                        points="0,20 20,12 20,28"
                        fill="black"
                      />
                    </svg>

              </div>
            </div>

      </section>
    </div>
  );
};

export default MapSection;