import ServiceCard from '@/components/ServiceCard'
import React from 'react'

const page = () => {
  return (
    <section>
        {/* Services Preview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-black mb-4">
                OUR SERVICES
            </h2>
            <p className="text-xl text-black font-body">
              Choose the perfect makeup experience for you
            </p>
          </div>
            
            <ServiceCard/>
        </div>
      </section>
  )
}

export default page