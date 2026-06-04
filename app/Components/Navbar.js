"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showPeek, setShowPeek] = useState(true);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setShowPeek(false);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setShowPeek(true);
      }, 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FEFAF3]">
      <div className="relative">

        {/* NAVBAR */}
        <nav className="relative z-20 h-24 flex items-center justify-between px-8 lg:px-16 bg-[#FEFAF3]">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logolang.png"
              alt="Lingova"
              width={200}
              height={50}
              priority
            />
          </Link>

          {/* NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-10 font-semibold text-[#1E2235]">
            <li className="cursor-pointer hover:text-red-500 transition">
              Courses
            </li>

            <li className="cursor-pointer hover:text-red-500 transition">
              German
            </li>

            <li className="cursor-pointer hover:text-red-500 transition">
              English
            </li>

            <li className="cursor-pointer hover:text-red-500 transition">
              Batch Schedule
            </li>

            <li className="cursor-pointer hover:text-red-500 transition">
              About Us
            </li>

            <li className="cursor-pointer hover:text-red-500 transition">
              FAQ
            </li>
          </ul>

          {/* CTA */}
          <button className="bg-[#FFD45A] border-2 border-[#1E2235] rounded-full px-6 py-3 font-bold shadow-sm hover:scale-105 transition">
            Enroll Now →
          </button>
        </nav>

        {/* PEEK DRAGON SLOT */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-[320px] h-[110px] overflow-hidden pointer-events-none">

          <div
            className={`
              absolute left-1/2 -translate-x-1/2
              transition-all duration-500 ease-out
              pointer-events-auto
              ${
                showPeek
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }
            `}
            onMouseEnter={() => setShowPeek(false)}
          >
            {/* Line */}
            

            {/* DRAGON */}
            <Image
              src="/doodles/peek.png"
              alt="Peek Dragon"
              width={190}
              height={120}
              priority
              className="animate-float"
            />
          </div>
        </div>

      </div>
    </header>
  );
}