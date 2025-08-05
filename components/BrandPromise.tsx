import React from "react";

const BrandPromise = () => {
  return (
    <section className="bg-[#F6F1EC] text-[#1B1B1B] text-center">
      <div className=" relative grid gap-10 md:grid-cols-2 lg:grid-cols-4  mx-auto">
        <div className="bg-white rounded-2xl p-4 flex flex-col items-center text-center px-2">
          <h3 className="text-2xl font-extrabold font-body mb-2">Mission Statement</h3>
          <p className="text-lg text-[#4B4B4B]">
           At Rellihana, we believe that true beauty lies in authenticity
              enhanced, not hidden. Our mission is to empower every client to
              feel confident, radiant, and uniquely themselves through the
              transformative power of makeup artistry.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 flex flex-col items-center text-center px-4">
          <h3 className="text-2xl font-extrabold font-body mb-2">Enhance, Don't Mask</h3>
          <p className="text-lg text-[#4B4B4B]">
           Every face tells a story, and makeup should amplify that narrative
              rather than rewrite it. Rellihana focuses on highlighting each
              client's natural features while addressing their specific needs
              and desires.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold font-body mb-2">Artistry Meets Individuality</h3>
          <p className="text-lg text-[#4B4B4B]">
           No two clients are alike, and neither should their makeup be. Each
              look is carefully crafted to reflect the individual's personality,
              lifestyle, and the occasion, ensuring that the final result feels
              authentically "them."
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 flex flex-col items-center text-center px-2">
          <h3 className="text-2xl font-extrabold font-body mb-2">Timeless Beauty</h3>
          <p className="text-lg text-[#4B4B4B]">
           While trends come and go, true beauty is timeless. Rellihana
              creates looks that not only capture the moment but will look
              stunning in photographs for years to come, focusing on techniques
              and styles that enhance rather than date..
          </p>
        </div>
      </div>

      <p className="mt-16 max-w-3xl mx-auto text-sm md:text-lg text-[#333]">
       "I don&apos;t just apply makeup I create <span className="font-bold">confidence, capture moments</span>, and celebrate the <span className="font-bold">unique beauty</span> that exists within every person who sits in my chair"
      </p>
      <p className="font-bold">Reelihana</p>
    </section>
  );
};

export default BrandPromise;
