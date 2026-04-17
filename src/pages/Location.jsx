import React, {useEffect} from 'react'
import img from '../../src/assets/Images/about.jpg'


import HeroSection from '../components/core/LocationPage.jsx/HeroSection'
import ParagraphSection from '../components/core/LocationPage.jsx/ParagraphSection'
import ImageSection from '../components/core/LocationPage.jsx/ImageSection'

import { useLocation } from 'react-router-dom'

const Location = () => {

  const location = useLocation();
  const data = location?.state;
  const images = data?.images
  const img = data?.img;
  const name = data?.name

  
  useEffect(() => {
    if (data?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(data.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location, data]);

  return (
    <div>
          
        <HeroSection img={data?.image} address={data?.address} scrollTo={data?.scrollTo}   />

         <ParagraphSection  />
        
        <ImageSection images={data?.images} />


    </div>
  )
}

export default Location