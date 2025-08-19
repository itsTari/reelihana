import { services } from "@/constants";
import { Check } from "lucide-react";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`w-[19rem] max-lg:w-full h-full px-6 border rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
            index % 3 === 0
              ? "bg-[#D4B5A0] border-[#B89584]"
              : index % 3 === 1
              ? "bg-[#C9A992] border-[#A88B73]"
              : "bg-[#B89584] border-[#9A7A68]"
          }`}
        >
          <h4
            className={`text-3xl text-center mb-4 font-semibold font-heading ${
              index % 3 === 0
                ? "text-[#5A453A]"
                : index % 3 === 1
                ? "text-[#4A3629]"
                : "text-[#3D2B20]"
            }`}
          >
            {service.name}
          </h4>

          <p
            className={`font-body text-xl text-center mb-3 ${
              index % 3 === 0
                ? "text-[#6B5349]"
                : index % 3 === 1
                ? "text-[#5A453A]"
                : "text-[#4A3629]"
            }`}
          >
            {service.description}
          </p>

          <ul>
            {service.features.map((feature, id) => (
              <li
                key={id}
                className={`flex items-start py-5 border-t ${
                  index % 3 === 0
                    ? "border-[#BFA08E]"
                    : index % 3 === 1
                    ? "border-[#B89584]"
                    : "border-[#A88B73]"
                }`}
              >
                <Check
                  className={`${
                    index % 3 === 0
                      ? "text-[#5A453A]"
                      : index % 3 === 1
                      ? "text-[#4A3629]"
                      : "text-[#3D2B20]"
                  }`}
                />
                <p
                  className={`font-body ml-4 ${
                    index % 3 === 0
                      ? "text-[#6B5349]"
                      : index % 3 === 1
                      ? "text-[#5A453A]"
                      : "text-[#4A3629]"
                  }`}
                >
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <div
            className={`text-[#F5F2ED] text-3xl font-bold font-body h-[4.5rem] mb-6 flex items-center justify-center rounded-lg rounded-tr-4xl transition-all duration-300 hover:brightness-110 ${
              index % 3 === 0
                ? "bg-[#5A453A]"
                : index % 3 === 1
                ? "bg-[#4A3629]"
                : "bg-[#3D2B20]"
            }`}
          >
            {service.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
