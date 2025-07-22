import HomeSlide from "@/components/HomeSlide";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className=" flex flex-col items-center justify-center relative bg-cover bg-no-repeat w-full h-screen "
        style={{ backgroundImage: "url(/sample-5.jpg)",  backgroundPosition: "50% 30%"}}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center flex-col  max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="text-[#C6A98D] bg-clip-text">REELIHANA</span>
            </h1>
            <p className="text-lg text-white/80 mx-auto text-center font-heading">
              Refined elegance in every shade
            </p>
            <p className="text-xl text-white/80 mx-auto text-center font-body">
               Profressional makeup service for
                every skin tone.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
            {/* <Link href='/service'>
              <button
                // onClick={() => setCurrentView("services")}
                className="px-8 py-4 bg-gradient-to-r from-[#EAD8C0] via-[#C6A98D] to-[#8B6A5C] text-black font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Book Your Session
              </button>
              </Link>
              <Link href='/portfolio'>
              <button
                // onClick={() => setIsLoggedIn(true)}
                className="px-8 py-4 border-2 text-white font-semibold rounded-full hover:bg-white hover:text-black hover:border-black transition-all duration-200"
              >
                View Portfolio
              </button>
              </Link> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      <HomeSlide />
    </>
  );
}
