import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { classLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="pt-12">
      <div></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="pb-16">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-[#3D2B20] mb-4">
            OUR SERVICES
          </h2>
          <p className="text-xl text-[#3D2B20] font-body capitalize">
            Choose the perfect makeup experience for you
          </p>
        </div>

        <ServiceCard />
      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center bg-[#e6dad1]">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading text-black mb-4 uppercase">
            Our classes
          </h2>
        <h2 className="font-body font-medium text-xl pb-16 text-black capitalize">Be the first to Learn and Level up yor makeup game and position yourself as a pro</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-between px-30">
          {classLinks.map((item, id)=>(
            <div key={id} className=" flex items-end min-w-[250px] h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.image})` }}>
              <Link href={item.href} className="w-full text-center p-2 bg-[#f6f1ee]">
                  <p className="font-bold font-body">{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#FAF9F7] rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="h2 font-heading pb-6">Curated Learning Library</h2>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="flex flex-col gap-4">
              {/* Large card */}
              <div className="bg-[#D4B5A0] rounded-2xl p-6 h-64 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Define Your Makeup Skills
                  </h3>
                  <p className="text-white text-sm opacity-90">
                    to improve your learning process
                  </p>
                </div>
                <button className="text-white text-left underline mt-4">
                  Get started
                </button>
              </div>

              {/* Bottom left card */}
              <div className="bg-[#D4A894] rounded-2xl p-4 h-24 relative">
                <h3 className="text-white text-sm font-medium">
                  How to Choose the Perfect Blush
                </h3>
                <div className="absolute top-3 right-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right column with stacked cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#C9A992] rounded-2xl p-4 h-24 relative">
                <h3 className="text-white text-sm font-medium">
                  Matte Looking Skin and Powder Tips
                </h3>
                <div className="absolute top-3 right-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              </div>

              <div className="bg-[#B89584] rounded-2xl p-4 h-24 relative">
                <h3 className="text-white text-sm font-medium">
                  Foundation Tips for Mature Skin
                </h3>
                <div className="absolute top-3 right-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              </div>

              <div className="bg-[#E6C4B0] rounded-2xl p-4 h-24 relative">
                <h3 className="text-white text-sm font-medium">
                  How to Cover Red Spots on Your Skin
                </h3>
                <div className="absolute top-3 right-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
