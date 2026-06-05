"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.4,
    once: false,
  });

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-24 xl:px-40 py-24"
    >
      <div className="relative">
        {/* Peeking Dragon Outside Card */}
        <motion.div
          className="absolute -left-12 -bottom-8 z-30"
          initial={{ x: -220 }}
          animate={
            isInView
              ? {
                  x: [-270, -190, -190, -270],
                  y: [0, -6, 0, 0],
                }
              : {
                  x: -220,
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "easeInOut",
          }}
        >
          <img
            src="/doodles/ydrag-.png"
            alt="Dragon"
            className="w-40 rotate-90"
          />
        </motion.div>

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[40px] border-2 border-black bg-[#f8dba9]/40 p-10 md:p-16">
          {/* Parachute Doodle */}
          <Image
            src="/doodles/para.png"
            alt=""
            width={80}
            height={80}
            className="absolute hidden md:block top-8 left-8 animate-float"
          />

          {/* Heart Doodle */}
          <Image
            src="/doodles/heart.png"
            alt=""
            width={60}
            height={60}
            className="absolute top-8 right-8"
          />

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
              Ready to Start Your
              <span className="text-red-700">
                {" "}
                Language Journey?
              </span>
            </h2>

            <p className="font-nunito text-lg md:text-xl text-gray-700 mt-6">
              Join hundreds of students improving their English and German
              communication skills with Lingova.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                Explore Courses
              </button>

              <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}