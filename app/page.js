import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import Tail from './Components/Tail'
import FeaturedCourses from './Components/FeaturedCourses'
import WhyChooseUs from './Components/WhyChooseUs'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tail/>
      <AboutSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      
      
    </div>
  )
}

export default page
