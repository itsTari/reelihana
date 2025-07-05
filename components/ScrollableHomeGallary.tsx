import { imageLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const ScrollableHomeGallary = () => {
  return (
    <div className='w-full overflow-x-auto whitespace-nowrap py-4 scrollbar-hide group flex-1'>
        <div className='inline-flex gap-4'>
            {imageLinks.map((item, index)=>(
                <Link key={index} href={item.href} className={`relative min-w-[200px] h-[450px] md:[500px] lg:[550px] rounded-lg overflow-hidden shadow-md hover:scale-[1.05] bg-cover bg-center bg-no-repeat transition-all duration-500 opacity-100 group-hover:opacity-50 hover:opacity-100`} style={{ backgroundImage: `url(${item.image})` }}>
                    <div className='absolute inset-0 flex justify-center items-end bg-black/30 pb-10'>
                        <span className='text-white text-lg font-semibold font-heading drop-shadow '>{item.title}</span>
                    </div>
                    {/* <img src={item.src} alt={item.alt} className='w-full h-full object-cover'/> */}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ScrollableHomeGallary