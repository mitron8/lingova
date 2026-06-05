"use client";

const features = [
  {
    title: "Expert Teachers",
    desc: "Learn from experienced language experts.",
    icon:"/doodles/expet.png"
  },
  {
    title: "Interactive Classes",
    desc: "Fun and engaging live sessions.",
    icon:"/doodles/result.png"
  },
  {
    title: "Flexible Batches",
    desc: "Weekend and weekday options.",
    icon:"/doodles/calan.png"
  },
  {
    title: "Proven Results",
    desc: "Students achieve real language growth.",
    icon:"/doodles/result.png"
  },
  {
    title: "Global Community",
    desc: "Connect with learners worldwide.",
    icon:"/doodles/globe.png"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Left Top Doodle */}
      <div className="absolute left-10 top-20">
        <img className="h-25" src="/doodles/para.png"/>
      </div>

      {/* Right Top Doodle */}
      <div className="absolute right-10 top-10">
        <img src="/doodles/heart.png"/>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center relative">

         

          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Why Choose{" "}
            <span className="text-[#E53935]">
              Us?
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 font-semibold">
            Everything you need to learn confidently,
            practice consistently, and grow globally.
          </p>

        </div>

        {/* Main Layout */}
        <div className="relative mt-20">

          {/* Side Dragon Placeholder */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden xl:block">
           
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
                  p-6
                  min-h-[260px]
                  transition-all
                  duration-300
                  hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000]
                "
                style={{
                  backgroundImage: "",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >

                {/* Card Background Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-300">
                  
                </div>

                {/* Icon Placeholder */}
                <div className="relative z-10">

                  <div className="w-20 h-20  border-gray-300 rounded-2xl flex items-center justify-center text-xs text-gray-400">
                   <img src={item.icon}/>
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

        {/* Bottom Doodle Divider */}
        <div className="flex justify-center mt-20">

         

        </div>

      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-10 left-10">
        <img src="/doodles/bush.png"/>
      </div>

      {/* Bottom Right */}
    

    </section>
  );
}