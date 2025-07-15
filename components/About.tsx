import React from "react";

const About = () => {
  return (
    <>
      <section className="pt-30 md:pt-40 pb-20 px-10 font-body ">
        {/* quotes for an intro by the Reelihana */}
        {/* "I don't just apply makeup – I create confidence, capture moments, and celebrate the unique beauty that exists within every person who sits in my chair." */}
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
        <h1 className="h1 font-heading py-10">
          Mission Statement and Artistic Philosophy
        </h1>
        <div className="mt-20 flex flex-col md:grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-0 py-10 px-5 lg:px-0 lg:py-0 bg-white">
          <div className="item animate-from-top px-5 flex items-center text-center md:text-left font-bold">
            <p className="flex flex-col gap-6 leading-7">
              <span className="h1 font-heading font-bold">
                Mission Statement
              </span>
              "At Rellihana, we believe that true beauty lies in authenticity
              enhanced, not hidden. Our mission is to empower every client to
              feel confident, radiant, and uniquely themselves through the
              transformative power of makeup artistry."
            </p>
          </div>
          <div
            className="lg:h-90 lg:w-89 hidden md:flex bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${`/sample-3.jpg`})` }}
          ></div>
          {/* <div className='item animate-from-bottom bg-[#f5cba7] p-6 rounded-lg flex items-center justify-center text-xl font-bold '>
                    <h1>Artistic Philosophy</h1>
                    <p>Rellihana's approach to makeup artistry is rooted in three core principles:</p>
                </div> */}
          <div className="item animate-from-top px-5  flex items-center text-center md:text-left font-bold ">
            <p className="flex flex-col gap-6 leading-7">
              <span className="h1 font-heading  font-bold">
                Enhance, Don't Mask
              </span>
              Every face tells a story, and makeup should amplify that narrative
              rather than rewrite it. Rellihana focuses on highlighting each
              client's natural features while addressing their specific needs
              and desires.
            </p>
          </div>
          <div
            className="lg:h-90 lg:w-89 hidden md:flex bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${`/sample-3.jpg`})` }}
          ></div>
          <div
            className="lg:h-90 lg:w-89 hidden md:flex border-2  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${`/sample-3.jpg`})` }}
          ></div>
          <div className="item animate-from-bottom px-5  flex items-center text-center md:text-left font-bold ">
            <p className="flex flex-col gap-6 leading-7">
              <span className="h1 font-heading font-bold">
                Artistry Meets Individuality
              </span>
              No two clients are alike, and neither should their makeup be. Each
              look is carefully crafted to reflect the individual's personality,
              lifestyle, and the occasion, ensuring that the final result feels
              authentically "them."
            </p>
          </div>
          <div
            className="lg:h-90 lg:w-89  hidden md:flex border-2 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${`/sample-3.jpg`})` }}
          ></div>
          <div className="item animate-from-bottom px-5 flex items-center text-center md:text-left font-bold">
            <p className="flex flex-col gap-6 leading-7">
              <span className="h1 font-heading font-bold">Timeless Beauty</span>
              While trends come and go, true beauty is timeless. Rellihana
              creates looks that not only capture the moment but will look
              stunning in photographs for years to come, focusing on techniques
              and styles that enhance rather than date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
