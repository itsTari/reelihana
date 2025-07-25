// components/PortfolioSlider.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { makeupLooks } from "@/constants";



export default function PortfolioSlider() {
  return (
    <div className="py-15 w-full mx-auto p-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {makeupLooks.map((look, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={look.image} alt={look.title} className="w-full h-150 object-center object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{look.title}</h3>
                <p className="text-gray-600 mt-2">{look.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
