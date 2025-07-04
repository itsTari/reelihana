import BrandPromise from "@/components/BrandPromise";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className=" bg-black/95">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48">
          <div className="flex items-center flex-col gap-15">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              <span className="text-[#EAD8C0] bg-clip-text">
                REELIHANA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto text-center font-body">
              Refined elegance in every shade  Profressional makeup service for every skin tone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                // onClick={() => setCurrentView("services")}
                className="px-8 py-4 bg-gradient-to-r from-[#EAD8C0] via-[#C6A98D] to-[#8B6A5C] text-black font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Book Your Session
              </button>
              <button
                // onClick={() => setIsLoggedIn(true)}
                className="px-8 py-4 border-2 text-white font-semibold rounded-full hover:bg-white hover:text-black hover:border-black transition-all duration-200"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
       
      <section>
        {/* Services Preview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-black mb-4">
                OUR SERVICES
            </h2>
            <p className="text-xl text-black font-body">
              Choose the perfect makeup experience for you
            </p>
          </div>
            
            <ServiceCard/>
        </div>
      </section>
      <BrandPromise/>
      
    </>
  );
}
