import About from '@/components/About'
import PortfolioHeroSlider from '@/components/PortfolioHeroSlider'
import PortfolioSlider from '@/components/PortfolioSlider'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <>
        <PortfolioHeroSlider/>
        <About/>
        <Testimonial/>
        <PortfolioSlider/>
    </>
  )
}

export default page