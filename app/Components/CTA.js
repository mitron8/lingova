import Image from "next/image";

export default function CTA() {
  return (
    <section className="px-6 md:px-12 lg:px-24 xl:px-40 py-24">
      <div className="relative overflow-hidden rounded-[40px] border-2 border-black bg-[#FFE5DF] p-10 md:p-16">

        {/* Doodles */}
        <Image
          src="/doodles/para.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-8 left-8 animate-float"
        />

       

        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight">
            Ready to Start Your
            <span className="text-red-700"> Language Journey?</span>
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
    </section>
  );
}