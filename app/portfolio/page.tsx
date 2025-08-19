import About from '@/components/About'
import PortfolioHeroSlider from '@/components/PortfolioHeroSlider'
import GallarySlide from '@/components/GallarySlide'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <>
        <PortfolioHeroSlider/>
        <About/>
        <Testimonial/>
        <GallarySlide/>
    </>
  )
}

export default page