import React from 'react'
import PortfolioSlider from './PortfolioSlider'
import ScrollableHomeGallary from './ScrollableHomeGallary'

const HomeSlide = () => {
  return (
    <section className='relative px-10 md:pl-20 lg:pl-35 lg:pr-0 md:pr-2 py-25'>
            <div className='flex flex-col md:flex-row lg:flex-row  gap-30 justify-center items-center'>
                <div className='md:max-w-2/7 w-full items-center text-center md:items-start md:text-start flex flex-col gap-5'>
                    <p className='text-xl font-body'>Discover</p>
                    <h1 className='text-4xl font-heading md:w-[300px] w-[500px]'>Our beautiful stories</h1>
                    <p className='text-sm font-body w-full lg:w-[400px]'>Reelihana has set itself the mission of offering all women worldwide the best of looks innovation in terms of quality, efficacy and safety. Here's a look at the Brand&apos;s latest stories</p>
                </div>
                <ScrollableHomeGallary/>
            </div>
    </section>
  )
}

export default HomeSlide