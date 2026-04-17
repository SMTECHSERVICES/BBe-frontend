import  react, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import ProductsItem from './pages/ProductsItem'
 import ServicesItem from './pages/ServicesItem'

 import Location from './pages/Location'
 import Lenis from "@studio-freight/lenis";
import PrivacyPolicy from './pages/PrivacyPolicy'

 

function App() {


  
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,     // smoothness (0.05 = very smooth)
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);


  return (
    <div>
 
      <Navbar />
       <Routes  > 
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      
        <Route path="/products/:id" element={<ProductsItem />} />
        
        <Route path="/services/:id" element={<ServicesItem />} />
        <Route path="/location/:city/:plant" element={<Location />} />
        
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>

       <Footer />
    </div>
  )
}

export default App


