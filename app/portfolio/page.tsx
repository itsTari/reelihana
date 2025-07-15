import About from '@/components/About'
import PortfolioHeroSlider from '@/components/PortfolioHeroSlider'
import PortfolioSlider from '@/components/PortfolioSlider'
import React from 'react'

const page = () => {
  return (
    <>
        <PortfolioHeroSlider/>
        <About/>
        <PortfolioSlider/>
    </>
  )
}

export default page