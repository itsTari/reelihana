import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
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
          <p className="text-xl text-[#3D2B20] font-body">
            Choose the perfect makeup experience for you
          </p>
        </div>

        <ServiceCard />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading h2 pb-16 text-[#3D2B20]">Courses</h2>
        <div className="grid grid-cols-2 gap-8">
          <Button
            variant="default"
            className="rounded-full py-10 px-30 lg:text-3xl text-2xl bg-black hover:bg-gray-800 text-white border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            All
          </Button>
          <Button
            variant="default"
            className="rounded-full py-10 px-30 lg:text-3xl text-2xl bg-[#E6C4B0] hover:bg-[#D4B5A0] text-[#3D2B20] border-[#D4B5A0] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Beginner
          </Button>
          <Button
            variant="default"
            className="rounded-full py-10 px-30 lg:text-3xl text-2xl bg-[#DDB8A6] hover:bg-[#C9A992] text-[#3D2B20] border-[#C9A992] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Advance
          </Button>
          <Button className="rounded-full py-10 px-30 lg:text-3xl text-2xl bg-[#D4A894] hover:bg-[#B89584] text-[#3D2B20] border-[#B89584] transition-all duration-300 hover:shadow-lg hover:scale-105">
            Professional
          </Button>
        </div>
      </div>
      <div className="bg-[#FAF9F7] rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="h2">Curated Learning Library</h2>
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
