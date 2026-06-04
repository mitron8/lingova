import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 xl:px-40">
      <div className="grid lg:grid-cols-2 items-center gap-12 w-full">
        
        {/* Left Content */}
        <div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            Learn More
            <br />
            Speak <span className="text-red-700">More</span>
          </h1>

          <p className="font-nunito text-lg md:text-xl text-gray-700 mt-6 max-w-xl">
            German & English language courses designed for
            real-world communication, career growth, and
            academic success.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 font-nunito">
            <button className="bg-black text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              Explore Courses
            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-700 cursor-pointer">
              Book a Free Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/prime/Heromain.png"
            alt="Lingova Language Learning"
            width={650}
            height={650}
            priority
            className="w-full max-w-[600px] h-auto"
          />
        </div>

      </div>
      
    </section>
  );
};

export default Hero;