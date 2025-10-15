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
              ? "bg-[#e6dad1] border-[#e6dad1]"
              : index % 3 === 1
              ? "bg-[#9d5a4d] border-[#9d5a4d]"
              : "bg-[#e6dad1] border-[#e6dad1]"
          }`}
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

          <div
            className={`${index % 3 === 1 ? 'text-[#9d5a4d]' : 'text-[#F5F2ED]' } text-3xl font-bold font-body h-[4.5rem] mb-6 flex items-center justify-center rounded-lg rounded-tr-4xl transition-all duration-300 hover:brightness-110 ${
              index % 3 === 0
                ? "bg-[#9d5a4d]"
                : index % 3 === 1
                ? "bg-[#e6dad1]"
                : "bg-[#9d5a4d]"
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
