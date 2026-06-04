"use client";

const courses = [
  {
    title: "German A1",
    subtitle: "Beginner",
    duration: "3 Months",
    level: "A1 Level",
    drag:"/doodles/greendarg.png"
  },
  {
    title: "German B1",
    subtitle: "Intermediate",
    duration: "4 Months",
    level: "B1 Level",
    drag:"/doodles/bluedrag.png"
  },
  {
    title: "Spoken English",
    subtitle: "Mastery",
    duration: "2 Months",
    level: "Daily Classes",
    drag:"/doodles/pinkdrag.png"
  },
];

export default function FeaturedCourses() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Top Left Doodle */}
      <div className="absolute left-10 top-10">
       <img src="/doodles/bush.png"></img>
      </div>

      {/* Top Right Doodle */}
      <div className="absolute right-10 top-20">
        <img src="/doodles/bush.png"></img>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-[#E53935] font-bold text-lg">
            OUR COURSES
          </span>

          <h2 className="mt-3 text-5xl md:text-7xl font-extrabold tracking-tight">
            Featured Courses
            <span className="text-[#E53935]"> / Batches</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-semibold">
            Choose the course that matches your goals and
            start your language learning adventure today.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="
                relative
                h-[320px]
                
                
                
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
              style={{
                backgroundImage: "url('/cards/cardbg.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Background Image Placeholder */}
             
              {/* Dragon Placeholder */}
              <div className="absolute top-6 right-6">
               <img className="h-40" src={course.drag}/>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">

                <h3 className="text-3xl font-extrabold">
                  {course.title}
                </h3>

                <p className="text-xl font-bold text-[#E53935] mt-1">
                  {course.subtitle}
                </p>

                <div className="mt-6 space-y-2 text-gray-700 font-semibold">

                  <div>📚 {course.level}</div>

                  <div>⏰ {course.duration}</div>

                </div>

                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border-[2px]
                    border-[#2A2A2A]
                    bg-[#F7D86F]
                    px-6
                    py-3
                    font-extrabold
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  View Details →
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Doodle Area */}
        <div className="flex justify-center mt-16">

          

        </div>

      </div>

     
      {/* Side Doodle */}
      <div className="absolute bottom-10 right-6">
        <img src="/doodles/bush.png"></img>
      </div>

    </section>
  );
}