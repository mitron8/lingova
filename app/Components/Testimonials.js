import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "German A1",
      review:
        "The classes were super interactive and fun. I cleared my Goethe A1 exam on the first attempt!",
      image: "/doodles/ydrag-.png",
    },
    {
      name: "Rahul Verma",
      course: "English Fluency",
      review:
        "My confidence in speaking English improved drastically. The trainers are incredibly supportive.",
      image: "/doodles/sleep.png",
    },
    {
      name: "Ananya Gupta",
      course: "German B1",
      review:
        "The notes, practice sessions, and mock tests helped me prepare effectively for my studies abroad.",
      image: "/doodles/hellodrag.png",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-24 xl:px-40 overflow-hidden">
      
   

      <Image
        src="/doodles/ydrag-.png"
        alt=""
        width={80}
        height={80}
        className="absolute top-32 right-12 animate-float-delayed"
      />

      

     

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="font-bold text-red-700 uppercase tracking-widest">
          Testimonials
        </span>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4">
          Loved by <span className="text-red-700">Students</span>
        </h2>

        <p className="font-nunito text-lg text-gray-600 mt-5">
          Hear from students who transformed their language learning journey
          with Lingova.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#FFF9EE] border-2 border-black rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000]"
          >
            {/* Quote Doodle */}
            <div className="absolute -top-5 -left-4 text-5xl text-red-600 font-bold">
              "
            </div>

            <p className="font-nunito text-gray-700 leading-relaxed">
              {item.review}
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-black">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-red-700 font-semibold text-sm">
                  {item.course}
                </p>
              </div>
            </div>

            {/* Tiny heart Doodle */}
            <Image
              src="/doodles/heart.png"
              alt=""
              width={24}
              height={24}
              className="absolute top-5 right-5"
            />
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Testimonials;