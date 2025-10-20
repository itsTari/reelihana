import { services } from "@/constants";
import { Check } from "lucide-react";
import React from "react";
import { Modal } from "./Modal";

const ServiceCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`h-full px-6 border rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5 transition-all duration-300 lg:hover:shadow-lg lg:hover:scale-105
            ${
            index % 3 === 0
              ? "bg-[#f6f1ee]"
              : index % 3 === 1
              ? "bg-[#9d5a4d]"
              : "bg-[#f6f1ee]"
          } `}
        >
          <h4
            className={`text-3xl text-center mb-4 font-semibold font-heading ${
              index % 3 === 0
                ? "text-[#9d5a4d]"
                : index % 3 === 1
                ? "text-[#e6dad1]"
                : "text-[#9d5a4d]"
            }`}
          >
            {service.name}
          </h4>

          <p
            className={`font-body text-xl text-center mb-3 ${
              index % 3 === 0
                ? "text-[#9d5a4d]"
                : index % 3 === 1
                ? "text-[#e6dad1]"
                : "text-[#9d5a4d]"
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
                      ? "text-[#9d5a4d]"
                      : index % 3 === 1
                      ? "text-[#e6dad1]"
                      : "text-[#9d5a4d]"
                  }`}
                />
                <p
                  className={`font-body ml-4 ${
                    index % 3 === 0
                      ? "text-[#9d5a4d]"
                      : index % 3 === 1
                      ? "text-[#e6dad1]"
                      : "text-[#9d5a4d]"
                  }`}
                >
                  {feature}
                </p>
              </li>
            ))}
          </ul>
          <Modal service={service} index={index}/>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
