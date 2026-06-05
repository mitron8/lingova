import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import Tail from './Components/Tail'
import FeaturedCourses from './Components/FeaturedCourses'
import WhyChooseUs from './Components/WhyChooseUs'
import Testimonials from './Components/Testimonials'
import CTA from './Components/CTA'
import Footer from './Components/Footer'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tail/>
      <AboutSection/>
      
      <FeaturedCourses/>
      
      <WhyChooseUs/>
      <Testimonials/>
      <CTA/>
      <Footer/>
      
    </div>
  )
}

export default page
