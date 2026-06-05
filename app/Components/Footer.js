"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FEFAF3] border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <Image
              src="/logolang.png"
              alt="Lingova"
              width={180}
              height={60}
            />

            <p className="mt-5 text-[#374151] leading-relaxed">
              Helping students become confident communicators through
              engaging English and German language programs.
            </p>

            <Image
              src="/doodles/sleep.png"
              alt="Dragon"
              width={110}
              height={110}
              className="mt-6"
            />
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Courses
            </h4>

            <ul className="space-y-3">
              <li><Link href="#">German A1</Link></li>
              <li><Link href="#">German A2</Link></li>
              <li><Link href="#">German B1</Link></li>
              <li><Link href="#">English Fluency</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Courses</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@lingova.in</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <Link
                href="#"
                className="w-12 h-12 rounded-full border-2 border-black bg-white/30 flex items-center justify-center hover:bg-white hover:-translate-y-2 transition-all"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full border-2 border-black bg-white/30 flex items-center justify-center hover:bg-white hover:-translate-y-2 transition-all"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full border-2 border-black bg-white/30 flex items-center justify-center hover:bg-white hover:-translate-y-2 transition-all"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-full border-2 border-black bg-white/30 flex items-center justify-center hover:bg-white hover:-translate-y-2 transition-all"
              >
                <FaWhatsapp size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/20 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Lingova. All rights reserved.</p>
          <p>Made with ❤️ for language learners.</p>
        </div>
      </div>
    </footer>
  );
}