"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Expert Teachers",
    desc: "Learn from experienced language experts.",
    icon: "/doodles/expet.png",
  },
  {
    title: "Interactive Classes",
    desc: "Fun and engaging live sessions.",
    icon: "/doodles/result.png",
  },
  {
    title: "Flexible Batches",
    desc: "Weekend and weekday options.",
    icon: "/doodles/calan.png",
  },
  {
    title: "Proven Results",
    desc: "Students achieve real language growth.",
    icon: "/doodles/awd.png",
  },
  {
    title: "Global Community",
    desc: "Connect with learners worldwide.",
    icon: "/doodles/globe.png",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [peek, setPeek] = useState(false);
  const [inView, setInView] = useState(false);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Peek animation every 5 sec
  useEffect(() => {
    if (!inView) {
      setPeek(false);
      return;
    }

    const showPeek = () => {
      setPeek(true);

      setTimeout(() => {
        setPeek(false);
      }, 8000);
    };

    // First peek immediately
    showPeek();

    const interval = setInterval(showPeek, 8000);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-[#FEFAF3]"
    >
      {/* Left Top Doodle */}
      <div className="absolute left-10 top-20">
        <img
          className="h-12 md:h-25"
          src="/doodles/para.png"
          alt="Parachute"
        />
      </div>

      {/* Right Top Doodle */}
      <div className="absolute right-10 top-10">
        <img
        className="hidden md:block md:h-25"
          src="/doodles/heart.png"
          alt="Heart"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center relative">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Why Choose{" "}
            <span className="text-[#E53935]">Us?</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 font-semibold">
            Everything you need to learn confidently,
            practice consistently, and grow globally.
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative mt-20">
          {/* PEEKING DRAGON */}
          <div
            className={`
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              hidden
              xl:block
              z-30
              transition-all
              duration-700
              ease-out
              ${
                peek
                  ? "translate-x-[250px]"
                  : "translate-x-[500px]"
              }
            `}
          >
            <img
              src="/doodles/ydrag-.png"
              alt="Peeking Dragon"
              
              className="w-52 drop-shadow-lg rotate-290"
            />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-[32px]
                  border-[3px]
                  border-[#2A2A2A]
                  bg-white
                  p-6
                  min-h-[260px]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[8px_8px_0px_#000]
                "
              >
                <div className="relative z-10">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider Placeholder */}
        <div className="flex justify-center mt-20"></div>
      </div>

      {/* Bottom Left Bush */}
      <div className="absolute bottom-10 left-10">
        <img
          src="/doodles/bush.png"
          alt="Bush"
        />
      </div>
    </section>
  );
}