import React from "react";
import BrandPromise from "./BrandPromise";

const About = () => {
  return (
    <>
      <section className="pt-30 md:pt-40 pb-20 px-10 font-body ">
        <h1 className="h1 font-heading pb-10">Our Story</h1>
        <div className="flex flex-col lg:flex-row pt-10 gap-20 w-full items-center">
          <img
            src="/sample-2.jpeg"
            alt="placeholder"
            width={500}
            height={500}
            className="flex-1 rounded-2xl"
          />
          <div className="flex-1 font-body leading-8">
            <p>
              Meet the visionary behind Rellihana, a passionate makeup artist
              who transforms faces into works of art. With a keen eye for detail
              and an unwavering commitment to enhancing natural beauty,
              Rellihana has become a trusted name in the beauty industry. Her
              journey began with a simple belief: that makeup is not just about
              covering imperfections, but about celebrating the unique features
              that make each person beautiful. From intimate bridal sessions to
              high-fashion editorial shoots, Rellihana approaches every client
              with the same dedication to excellence and artistry that has
              defined her career.
            </p>
            <p>
              With over 5 years of professional experience in the makeup
              industry, Rellihana has mastered the art of beauty transformation
              across multiple specializations.{" "}
              <span className="text-lg">
                <br />
                Our expertise spans:
              </span>
            </p>
            <p>
              <span className="font-semibold text-xl">Bridal Makeup:</span>
              Creating timeless, camera-ready looks that capture the essence of
              your special day
            </p>
            <p>
              <span className="font-semibold text-xl">
                Editorial & Fashion:
              </span>{" "}
              Bold, avant-garde artistry for magazines, fashion shows, and
              creative shoots
            </p>
            <p>
              <span className="font-semibold text-xl">Corporate & Event:</span>
              Professional makeup for headshots, galas, and special occasions
            </p>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-[#F6F1EC] text-[#1B1B1B] p-12">
        <h1 className="h1 font-heading !font-light pb-10 pt-4">
          Mission Statement and Artistic Philosophy
        </h1>
        <BrandPromise/>
      </section>
    </>
  );
};

export default About;
