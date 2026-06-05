"use client";

import Group from "./Group";
import Tail from "./Tail";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#FEFAF3] py-24">
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#DFF4FF] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFF0C8] rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-3 relative">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            About <span className="text-[#E53935]">Lingova</span>
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-semibold">
            Learning a language should feel like an adventure —
            fun, engaging, and full of opportunities.
          </p>
        </div>

        {/* Bridge */}
        <div className="relative flex justify-center mb-[-110px] z-0">
          <img
            src="/doodles/bridge.png"
            alt="Bridge"
            className="w-full h-[300px] max-w-4xl object-contain"
          />
        </div>

        {/* Story Card */}
        <div className="relative flex justify-center mb-12 z-20">
          {/* Dragon */}
          <div className="hidden lg:block absolute -right-16 bottom-0 z-30">
            <img
              src="/doodles/hellodrag.png"
              alt="Dragon"
              className="w-44 object-contain"
            />
          </div>

          {/* Main Card */}
          <div
            className="
              relative
              bg-[#FFFDF7]
              border-[3px]
              border-[#2A2A2A]
              rounded-[40px]
              max-w-3xl
              p-8
              md:p-10
              shadow-[10px_10px_0px_rgba(0,0,0,0.08)]
              rotate-[-1deg]
            "
          >
            {/* Tape */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-25 h-8 bg-[#F7D86F]/70 rounded-sm rotate-2  border-[#D4B24E]" />
            </div>

            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-[#222]">
              At Lingova, we believe learning a language is more than just
              memorizing words — it's about connecting with people and cultures.
            </p>

            <p className="mt-6 text-xl md:text-2xl font-semibold leading-relaxed text-[#222]">
              Our mission is to make language learning simple, fun, and
              effective for everyone.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border-[2px]
                  border-[#2A2A2A]
                  bg-[#F7D86F]
                  px-7
                  py-3
                  text-lg
                  font-extrabold
                  text-[#222]
                  shadow-[4px_4px_0px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[6px_6px_0px_rgba(0,0,0,0.12)]
                "
              >
                Know More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Bush */}
            <div className="absolute bottom-3 right-4">
              <img
                src="/doodles/bush.png"
                alt="Bush"
                className="w-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}