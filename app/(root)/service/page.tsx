import CuratedLearning from "@/components/CuratedLearning";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { classLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="pt-12 bg-[#e6dad1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="pb-16">
          <p className="text-[#3D2B20] font-body capitalize font-heading text-3xl font-bold">
            Choose the perfect makeup experience for you
          </p>
        </div>

        <ServiceCard />
      </div>
      <div id="classes" className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
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
        <CuratedLearning/>
      </div>
    </section>
  );
};

export default page;
