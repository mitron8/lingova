"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Clock3,
  IndianRupee,
  Users,
  CalendarDays,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "German A1",
    subtitle: "Beginner",
    timing: "Mon, Wed, Fri • 7:00 PM - 8:00 PM",
    fee: "₹15,500",
    students: "12 - 15 Students",
    duration: "80 hours",
    overview:
      "Start your German journey with basics of reading, writing, and speaking.",
    drag: "/doodles/a1.png",
  },
  {
    title: "German B1",
    subtitle: "Intermediate",
    timing: "Tue, Thu, Sat • 7:00 PM - 8:30 PM",
    fee: "₹17,000",
    students: "10 - 12 Students",
    duration: "90 hours",
    overview:
      "Build confidence in speaking, understanding, and writing German in real-life situations.",
    drag: "/doodles/bone.png",
  },
  {
    title: "English",
    subtitle: "Mastery",
    timing: "Mon to Fri • 8:00 PM - 9:00 PM",
    fee: "₹5,000",
    students: "15 - 18 Students",
    duration: "25 hours",
    overview:
      "Improve communication skills, fluency, confidence, and daily conversation abilities.",
    drag: "/doodles/eng.png",
  },
];

export default function FeaturedCourses() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-[#FEFAF3]"
    >
      {/* Peeking Dragon */}
      <motion.div
        className="
          hidden
          xl:block
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          z-30
        "
        initial={{ x: -10 }}
        animate={
          isInView
            ? {
                x: [-500, -75, -75, -500],
                y: [0, -4, 0, 0],
              }
            : {
                x: -280,
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 10,
          ease: "easeInOut",
        }}
      >
        <img
          src="/doodles/hellodrag.png"
          alt="Dragon"
          className="w-40 rotate-90"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Featured Courses
            <span className="text-[#E53935]"> / Batches</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-semibold">
            Choose the course that matches your goals and start your language
            learning adventure today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {courses.map((course, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-[30px]
                border-2
                border-[#D8D1C7]
                bg-[#F8F4ED]
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[8px_8px_0px_rgba(0,0,0,0.08)]
              "
            >
              {/* Dragon */}
              <div className="absolute top-5 right-5">
                <img
                  src={course.drag}
                  alt={course.title}
                  className="h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Header */}
              <div className="pr-28">
                <h3 className="text-3xl font-extrabold leading-tight">
                  {course.title}
                </h3>

                <p className="text-xl font-bold text-[#E53935] mt-1">
                  {course.subtitle}
                </p>
              </div>

              {/* Details */}
              <div className="mt-10 space-y-4">
                <div className="flex gap-3">
                  <Clock3
                    size={18}
                    className="text-[#E53935] mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-bold text-[15px]">
                      Batch Timing
                    </p>
                    <p className="text-gray-600 text-sm">
                      {course.timing}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <IndianRupee
                    size={18}
                    className="text-[#222] mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-bold text-[15px]">
                      Course Fee
                    </p>
                    <p className="text-gray-600 text-sm">
                      {course.fee}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Users
                    size={18}
                    className="text-[#222] mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-bold text-[15px]">
                      Students per Batch
                    </p>
                    <p className="text-gray-600 text-sm">
                      {course.students}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CalendarDays
                    size={18}
                    className="text-[#222] mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-bold text-[15px]">
                      Course Duration
                    </p>
                    <p className="text-gray-600 text-sm">
                      {course.duration}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <BookOpen
                    size={18}
                    className="text-[#222] mt-1 shrink-0"
                  />
                  <div>
                    <p className="font-bold text-[15px]">
                      Course Overview
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {course.overview}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#DDD6CC]/5 mt-6 pt-6">
                <button
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border-2
                    border-[#2A2A2A]
                    bg-[#F7D86F]
                    py-3
                    font-extrabold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[4px_4px_0px_rgba(0,0,0,0.12)]
                  "
                >
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16"></div>
      </div>
    </section>
  );
}