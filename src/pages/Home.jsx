import React from 'react'
import MapSection from '../components/core/HomePage/MapSection'
import CardSection from '../components/core/HomePage/CardSection'
import HiddenVideo from '../components/core/HomePage/HiddenVideo'
import FInanceSection from '../components/core/HomePage/FInanceSection'
import HeroSection from '../components/core/HomePage/HeroSection'
import AboutSection from '../components/core/HomePage/AboutSection'
import ScopePromise from '../components/core/HomePage/ScopePromise'
import StackedSections from '../components/StackedSections'

const Home = () => {
    
  return (    

    <div className=''>

     <HeroSection />
     <AboutSection />

       <ScopePromise />

       <MapSection/>
       <StackedSections />
      {/* <FInanceSection /> */}
    
      <HiddenVideo />
      <CardSection />
    
 
  </div>
 
   

  )
}

export default Home