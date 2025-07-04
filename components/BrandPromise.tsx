import React from "react";

const BrandPromise = () => {
  return (
    <section className="bg-[#F6F1EC] text-[#1B1B1B] py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-10">
        Our Commitment to Clean Beauty
      </h2>
      <div className=" relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {/* Vegan & Cruelty-Free */}
        <div className="relative flex flex-col items-center text-center px-4">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-medium mb-2">Vegan & Cruelty-Free</h3>
          <p className="text-sm text-[#4B4B4B]">
            We only use certified cruelty-free and vegan products for every
            service. Compassion meets beauty in every session.
          </p>
            <div className='absolute inset-0.5'>
                <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'><img src='/globe.svg' className='w-full h-full object-cover bg-center'/></div>
            </div>
        </div>

        {/* Skin Tone Inclusive */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="text-4xl mb-4">🧬</div>
          <h3 className="text-xl font-medium mb-2">Skin Tone Inclusive</h3>
          <p className="text-sm text-[#4B4B4B]">
            Every face is welcome. We specialize in tailoring looks for all skin
            tones, undertones, and textures no one is left out.
          </p>
        </div>

        {/* Dermatologist Tested */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="text-4xl mb-4">🧖🏾‍♀️</div>
          <h3 className="text-xl font-medium mb-2">Dermatologist Tested</h3>
          <p className="text-sm text-[#4B4B4B]">
            We prioritize your skin&apos;s health by selecting only safe,
            dermatologist-approved products and techniques in every service.
          </p>
        </div>

        {/* Natural Ingredients */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="text-4xl mb-4">🌿</div>
          <h3 className="text-xl font-medium mb-2">Natural Ingredients</h3>
          <p className="text-sm text-[#4B4B4B]">
            From prep to finish, we lean into natural, skin-kind products that
            enhance your beauty  not mask it.
          </p>
        </div>
      </div>

      <p className="mt-16 max-w-3xl mx-auto text-sm text-[#333]">
        Whether it&apos;s for a wedding, photoshoot, event, or a flawless everyday
        look, our professional artists bring skill, care, and integrity to
        every face. Our beauty philosophy is simple: look good, feel good, and
        know you&apos;re in the safest, most reliable hands.
      </p>
    </section>
  );
};

export default BrandPromise;
