import { services } from "@/constants";
import { Check } from "lucide-react";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center ">
      {services.map((service) => (
        <div
          key={service.id}
          className="w-[19rem] max-lg:w-full h-full px-6  border border-[#C6A98D] hover:border-black hover:bg-black hover:text-white transition-colors duration-500 ease-in rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 "
        >
          <h4 className="text-3xl text-center mb-4 font-semibold font-heading">{service.name}</h4>
          <p className="font-body text-xl text-center mb-3">
            {service.description}
          </p>
          <ul>
            {service.features.map((feature, id) => (
              <li
                key={id}
                className="flex items-start py-5 border-t border-[#C6A98D] "
              >
                <Check/>
                <p className="font-body ml-4">{feature}</p>
              </li>
            ))}
          </ul>
              <div className=" text-3xl font-bold font-body h-[4.5rem] mb-6 bg-gradient-to-r from-[#EAD8C0] via-[#C6A98D] to-[#8B6A5C] flex items-center justify-center rounded-lg rounded-tr-4xl">
                    {service.price}
              </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
