import HomeSlide from "@/components/HomeSlide";
import Link from "next/link";

export default function Home() {
  return (
    <>
     
      <section className=" flex flex-col items-center justify-center relative w-full bg-cover bg-center bg-no-repeat h-screen" style={{ background: 'url(/sample-6.jpg)'}}>
          <div className="absolute inset-0 bg-black/75"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold font-heading">
              <span className="text-[#EAD8C0] bg-clip-text">
                REELIHANA
              </span>
            </h1>
            <p className="text-xl md:text-xl text-white/80 mb-8 max-w-xl mx-auto text-center font-body">
              Refined elegance in every shade  Profressional makeup service for every skin tone.
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
      <HomeSlide/>
    </>
  );
}
