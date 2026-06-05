"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showPeek, setShowPeek] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

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
        <nav className="relative z-20 h-24 flex items-center justify-between px-5 lg:px-16 bg-[#FEFAF3]">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logolang.png"
              alt="Lingova"
              width={200}
              height={50}
              priority
              className="w-auto h-10 lg:h-auto"
            />
          </Link>

          {/* DESKTOP NAV LINKS */}
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

          {/* DESKTOP CTA */}
          <button className="hidden lg:block bg-[#FFD45A] border-2 border-[#1E2235] rounded-full px-6 py-3 font-bold shadow-sm hover:scale-105 transition">
            Enroll Now →
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-[#1E2235]"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle Menu"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#FEFAF3] border-t border-[#E9E2D5] shadow-md transition-all duration-300 overflow-hidden z-30 ${
            mobileMenu
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col py-4">
            <li className="px-8 py-4 font-semibold text-[#1E2235] hover:text-red-500 transition cursor-pointer">
              Courses
            </li>

            <li className="px-8 py-4 font-semibold text-[#1E2235] hover:text-red-500 transition cursor-pointer">
              German
            </li>

            <li className="px-8 py-4 font-semibold text-[#1E2235] hover:text-red-500 transition cursor-pointer">
              English
            </li>

            <li className="px-8 py-4 font-semibold text-[#1E2235] hover:text-red-500 transition cursor-pointer">
              Batch Schedule
            </li>

            <li className="px-8 py-4 font-semibold text-[#1E2235] hover:text-red-500 transition cursor-pointer">
              About Us
            </li>

            <li className="px-8 py-4 font-semibold text-[#1E2235] hover:text-red-500 transition cursor-pointer">
              FAQ
            </li>

            <div className="px-8 pt-2 pb-4">
              <button className="w-full bg-[#FFD45A] border-2 border-[#1E2235] rounded-full px-6 py-3 font-bold shadow-sm">
                Enroll Now →
              </button>
            </div>
          </ul>
        </div>

        {/* PEEK DRAGON SLOT */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-[320px] h-[110px] overflow-hidden pointer-events-none">
          <div
            className={`
              absolute left-1/2 -translate-x-1/2
              transition-all duration-500 ease-out
              pointer-events-auto
              ${
  showPeek
    ? "translate-y-0"
    : "-translate-y-[120px]"
}
            `}
            onMouseEnter={() => setShowPeek(false)}
          >
            {/* DRAGON */}
            <Image
              src="/doodles/ydrag-.png"
              alt="Peek Dragon"
              width={190}
              height={120}
              priority
              className="my-[-80] animate-float rotate-180"
            />
          </div>
        </div>
      </div>
    </header>
  );
}