import React from 'react'

const About = () => {
  return (
    <>
        <section className='pt-40 px-10 font-body bg-black text-white'>
            {/* quotes for an intro by the Reelihana */}
            {/* "I don't just apply makeup – I create confidence, capture moments, and celebrate the unique beauty that exists within every person who sits in my chair." */}
            <h1 className='h1 font-heading'>Our Story</h1>
            <div className='flex flex-col md:flex-row pt-10 gap-20 w-full items-center'>
                <img src='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' alt='placeholder' width={500} height={500} className='flex-1 rounded-2xl'/>
                <div className='flex-1'>
                <p className='font-body leading-8'>Meet the visionary behind Rellihana, a passionate makeup artist who transforms faces into works of art. With a keen eye for detail and an unwavering commitment to enhancing natural beauty, Rellihana has become a trusted name in the beauty industry. Her journey began with a simple belief: that makeup is not just about covering imperfections, but about celebrating the unique features that make each person beautiful. From intimate bridal sessions to high-fashion editorial shoots, Rellihana approaches every client with the same dedication to excellence and artistry that has defined her career.</p>
                </div>
            </div>

            <div className='my-10 p-4  rounded-xl'>
                <h1 className='h2 font-heading py-2'>Experience and Specializations</h1>
                <ul>
                    <p className='py-3'>With over 5 years of professional experience in the makeup industry, Rellihana has mastered the art of beauty transformation across multiple specializations. <br/>Our expertise spans:</p>
                    <li className='text-xl'><span className='font-semibold text-3xl'>Bridal Makeup:</span>Creating timeless, camera-ready looks that capture the essence of your special day</li>
                    <li className='text-xl'><span className='font-semibold text-3xl'>Editorial & Fashion:</span> Bold, avant-garde artistry for magazines, fashion shows, and creative shoots</li>
                    <li className='text-xl'><span className='font-semibold text-3xl'>Corporate & Event:</span>Professional makeup for headshots, galas, and special occasions</li>
                </ul>
            </div>
                <h1 className='h2 font-heading'>Mission Statement and Artistic Philosophy</h1>
            <div className=' mx-auto py-10 flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-6'>
                <div className='item animate-from-top bg-black text-white p-6 rounded-lg flex items-center justify-center text-xl font-bold h-80 '>
                    <p className='flex flex-col gap-6 leading-9 text-center'><span className='h1 font-heading font-bold'>Mission Statement</span>"At Rellihana, we believe that true beauty lies in authenticity enhanced, not hidden. Our mission is to empower every client to feel confident, radiant, and uniquely themselves through the transformative power of makeup artistry."</p>
                </div>
                {/* <div className='item animate-from-bottom bg-[#f5cba7] text-gray-800 p-6 rounded-lg flex items-center justify-center text-xl font-bold h-80'>
                    <h1>Artistic Philosophy</h1>
                    <p>Rellihana's approach to makeup artistry is rooted in three core principles:</p>
                </div> */}
                 <div className='item animate-from-top bg-gradient-to-r from-[#EAD8C0] via-[#C6A98D] to-[#8B6A5C] text-gray-800 p-6 rounded-lg flex items-center justify-center text-xl font-bold h-80'>
                    <p className='flex flex-col gap-6 leading-9 text-center'><span className='h1 font-heading text-gray-900 font-bold'>Enhance, Don't Mask</span>Every face tells a story, and makeup should amplify that narrative rather than rewrite it. Rellihana focuses on highlighting each client's natural features while addressing their specific needs and desires.</p>
                </div>
                <div className='item animate-from-bottom bg-gradient-to-r from-[#EAD8C0] via-[#C6A98D] to-[#8B6A5C] bg-cyan-200 text-gray-800 p-6 rounded-lg flex items-center justify-center text-xl font-bold h-80'>
                    <p className='flex flex-col gap-6 leading-9 text-center'><span className='h1 font-heading text-gray-900 font-bold line-clamp-1'>Artistry Meets Individuality</span>No two clients are alike, and neither should their makeup be. Each look is carefully crafted to reflect the individual's personality, lifestyle, and the occasion, ensuring that the final result feels authentically "them."</p>
                </div>
                <div className='item animate-from-top  bg-black  text-white p-6 rounded-lg flex items-center justify-center text-xl font-bold h-80'>
                    <p className='flex flex-col gap-6 leading-9 text-center'><span className='h1 font-heading font-bold'>Timeless Beauty</span>While trends come and go, true beauty is timeless. Rellihana creates looks that not only capture the moment but will look stunning in photographs for years to come, focusing on techniques and styles that enhance rather than date.</p>
                </div>

                
            </div>
        </section>
    </>
  )
}

export default About