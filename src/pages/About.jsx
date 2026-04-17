import React from 'react'
import HeroSection from '../components/core/AboutPage/HeroSection'
import EveryDay from '../components/core/AboutPage/EveryDay'
import AboutSection from '../components/core/AboutPage/AboutSection'
import AboutDifference from '../components/core/AboutPage/AboutDifference'
import Leadership from '../components/core/AboutPage/Leadership'
import Legacy from '../components/core/AboutPage/Legacy'


const About = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
       {/* <AboutSection /> */}
       <EveryDay />
       <Legacy />
       <Leadership />
       <AboutDifference />
     
    </div>
  )
}

export default About