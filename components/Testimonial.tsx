import { testimonial } from '@/constants'
import React from 'react'

const Testimonial = () => {
  return (
    <section id='reviews' className='flex flex-col items-center justify-center p-12'>
        <h1 className='h1 py-12'>Hear what our customers have to say</h1>
        
        <div className='flex flex-col md:flex-row gap-8'>
            {testimonial.map((comment)=> (
                <div key={comment.id} className='flex flex-col md:flex-row items-center justify-center gap-8'>
                    <img src={comment.image} alt={comment.name} className='rounded-xl md:max-w-[350px] animate-from-top '/>
                    <div className='bg-[#F6F1EC] max-w-[340px] rounded-lg animate-from-bottom'>
                        <div className='p-4'>
                            <p className='text-[19px]'>{comment.message}</p>
                        </div>
                        <div className='bg-black text-white text-center p-4 text-2xl rounded-b-xl'>{comment.name}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonial