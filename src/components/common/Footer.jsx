
import  new_logo from '../../assets/Images/new_logo.png'
import NAV_DATA from '../../data/nav-data';
import plant1 from '../../assets/Images/plant1.jpg'
import plant2 from '../../assets/Images/plant2.jpg'

import add1 from '../../assets/Images/address1.jpeg'
import add2 from '../../assets/Images/address.jpeg'

import ser from '../../assets/Images/services.jpeg'
import sm from '../../assets/Images/sm.jpg'

import w from "../../assets/bbimages/w.jpeg";
import w1 from "../../assets/bbimages/w1.jpeg";
import w2 from "../../assets/bbimages/w2.jpeg";
import w6 from "../../assets/bbimages/w6.jpeg";

import w5 from "../../assets/bbimages/w5.jpeg";
import w4 from "../../assets/bbimages/w4.jpeg";
import w3 from "../../assets/bbimages/w3.jpeg";

const images2 = [w, w1, w2, w3, w4,w5, w6]
const images1 = []

import React,{useEffect, useState} from "react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Newsletter from "./NewLetter";
import { NavLink , useNavigate, useLocation} from "react-router-dom";

const pl2 = "Plant -2 Gat No. 51, Near Hotel Moi Grand, Nighoje Moi Road, At .Moi, PO Kurli Tal. Khed Dist Pune-410501, MH, INDIA"
const pl1 = " Plant -1 Address B B Engineers, Survey No. G63/7, MIDC Kurli, Chakan Industrial Estate, Taluka Khed, Pune - 410501 (MH)"

const Footer = () => {

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const data = NAV_DATA["Products"];
  const services = NAV_DATA["Services"];
  

  const product = NAV_DATA["Products"].grid[0];
  const service = NAV_DATA["Services"].grid[1];

  const name = product.name;
  const details =  product.details;
  const images = product.images;


  const para = product.para;
  const para1 = product.para1;
  const img =  product.img;

  const pName = product?.name;

  const pTitle = product?.title;
  const sTitle = service?.title;

  const sDetails =  service.details;
  const sImages = service.images;
  const sPara = service.para;
  const sPara1 = service.para1;
  const sImg =  service.img;
  const sName = service?.name;


   useEffect(() => {
        if (location.pathname === "/") {
          const el = document.getElementById("home");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, [location]);


  return (
    <div className="relative " style={{ fontFamily: "Poppins, sans-serif" }}>


      <footer className=" bg-[#2671AD] text-gray-300 pt-10 sm:pt-20 lg:pt-28 pb-12 px-6 md:px-10 lg:px-16">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

            <div>
              <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wide">
                Quick Links
              </h3>

              <ul className="space-y-1 sm:space-y-2 text-[0.8rem] sm:text-sm">
                <li>
                  <NavLink className="hover:text-orange-500 transition hover:underline" to="/" onClick={() => {
                      setTimeout(() => {
                        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                  }}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-orange-500 transition hover:underline" to="/about">
                    About
                  </NavLink>
                </li>
                {/* isko change nhi krna h  */}
                <li className="hover:text-orange-500 transition cursor-pointer hover:underline" >
                  <NavLink to={`/services/${encodeURIComponent(sName)}`}
                        state={{ 
                           name: sName,
                          img: sImg,
                          details:  sDetails,
                          images: sImages,
                          para: sPara,
                          para1: sPara1,
                          sectionId: "services" 
                      }} >
                     Services
                  </NavLink>
                 
                </li>
                <li className="hover:text-orange-500 transition cursor-pointer hover:underline">
                  <NavLink  to={`/products/${encodeURIComponent(pName)}`}  
                   state={{
                    name: pName,
                    img: img,
                    details: details,
                    images: images,
                    para: para,
                    para1: para1,
                    // sectionId: data?.title?.toLowerCase(),
                     sectionId: "products" }} >

                     Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="hover:text-orange-500 transition hover:underline" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wide">
                Products
              </h3>
     
           {/* dont change it  */}
           {/* products  */}
                  <ul className='space-y-1 sm:space-y-3 text-[0.8rem] sm:text-sm'> 
                    {data.grid.map((item, i) => (
                        <NavLink
                          key={i}
                          to={`/${data?.title
                            ?.toLowerCase()
                            .replace(/\s+/g, "-")}/${encodeURIComponent(item.name)}`}
                          state={{
                            name: item.name,
                            img: item.img,
                            details: item.details,
                            images: item.images,
                            para: item.para,
                            para1: item.para1,
                            sectionId: data?.title?.toLowerCase(),
                          }}
                          className=""
                        >
                          <li className="hover:text-orange-500 transition hover:underline list-none sm:space-y-3 py-1">
                            {item.name}
                          </li>

                        </NavLink>
                      ))}
                  </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wide">
                Services
              </h3>
     {/* dont chnage it  service */}
                  <ul className='space-y-1 sm:space-y-3 text-[0.8rem] sm:text-sm'> 
                    {services.grid.map((item, i) => (
                      <NavLink
                        key={i}
                        to={`/${services?.title
                          ?.toLowerCase()
                          .replace(/\s+/g, "-")}/${encodeURIComponent(item.name)}`}
                        state={{
                          name: item.name,
                          img: item.img,
                          details: item.details,
                          images: item.images,
                          para: item.para,
                          para1: item.para1,
                          sectionId: services?.title?.toLowerCase(), // 👈 also fix this
                        }}
                      >
                        <li className="hover:text-orange-500 transition hover:underline list-none py-1">
                          {item.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
            </div>

             <div>
              <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wide">
                Address
              </h3>
             
              <p className="hover:text-orange-500 transition text-[0.8rem] sm:text-sm pb-5">

              <span  className='hover:cursor-pointer' onClick={() => {
                  navigate('/location/pune/plant-1',   {
                    state: {
                    name: "Plant 1", 
                    image: add1,
                    address: pl1,
                    images: images2, 
                    scrollTo:  "plant1"
                  }})
                }}>
                  Plant -1 Address B B Engineers, Survey No. G63/7, MIDC Kurli,
                  Chakan Industrial Estate, Taluka Khed, Pune - 410501 (MH)
                </span>

              </p>
              <p className="hover:text-orange-500 transition text-[0.8rem] sm:text-sm ">
                <span  className='hover:cursor-pointer' onClick={() => {
                  navigate('/location/pune/plant-2',   {
                    state: {
                    name: "Plant 2", 
                    image: add2,
                    address: pl2,
                    images: images2, 
                    scrollTo:  "plant2"
                  }})
                }}>
                  Plant -2 Gat No. 51, Near Hotel Moi Grand, Nighoje Moi Road, At .Moi, PO Kurli Tal. Khed Dist Pune-410501, MH, INDIA
                </span>
                 
              </p>

            </div>

             <div>
              <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wide">
                Connect
              </h3>

              <p className=" mb-4 text-sm cursor-pointer transition hover:text-orange-500 ">
                <NavLink to='/policy'>
                    Privacy Policy
                </NavLink>
              
              </p>

              <div className="flex gap-4 text-lg mb-6">
                <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
                <FaLinkedinIn className="hover:text-blue-400 cursor-pointer transition" />
                <FaXTwitter className="hover:text-white cursor-pointer transition" />
                <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              </div>

              <p className="  text-[0.8rem] sm:text-sm  ">
               Copyright © 2026 All rights reserved
              </p>
            </div>

          </div>

           <div className="border-t border-white mt-12 pt-6 flex  items-center justify-center gap-3 font-poppins text-center text-[0.8rem] sm:text-sm transition hover:text-orange-500">
               <span>  Powered by  </span>
                <a href="https://www.smservice.co.in/" target="_blank" rel="noopener noreferrer">
                <img src={sm} className="w-20 h-6 sm:w-28 sm:h-10  rounded-md cursor-pointer" />
              </a>
              

          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;