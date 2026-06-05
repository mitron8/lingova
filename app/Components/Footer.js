import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9EE] border-t-2 border-black">
      <div className="px-6 md:px-12 lg:px-24 xl:px-40 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <Image
              src="/logolang.png"
              alt="Lingova"
              width={180}
              height={50}
            />

            <p className="mt-5 text-gray-600 leading-relaxed">
              Helping students become confident communicators through
              engaging English and German language programs.
            </p>

            <Image
              src="/doodles/sleep.png"
              alt="Dragon"
              width={100}
              height={100}
              className="mt-6 animate-float"
            />
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Courses
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="#">German A1</Link>
              </li>

              <li>
                <Link href="#">German A2</Link>
              </li>

              <li>
                <Link href="#">German B1</Link>
              </li>

              <li>
                <Link href="#">English Fluency</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="#">About Us</Link>
              </li>

              <li>
                <Link href="#">Testimonials</Link>
              </li>

              <li>
                <Link href="#">FAQ</Link>
              </li>

              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-5">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li>📧 hello@lingova.in</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 India</li>
            </ul>

            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                IG
              </Link>

              <Link
                href="#"
                className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                FB
              </Link>

              <Link
                href="#"
                className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                IN
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-gray-600">
          <p>
            © 2026 Lingova. All rights reserved.
          </p>

          <p>
            Made with ❤️ for language learners.
          </p>
        </div>
      </div>
    </footer>
  );
}