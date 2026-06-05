"use client";


const courses = [
  {
    title: "German A1",
    subtitle: "Beginner",
    duration: "3 Months",
    level: "A1 Level",
    drag:"/doodles/a1.png"
  },
  {
    title: "German B1",
    subtitle: "Intermediate",
    duration: "4 Months",
    level: "B1 Level &ebsp;",
    drag:"/doodles/bone.png"
  },
  {
    title: "English",
    subtitle: "Mastery",
    duration: "2 Months",
    level: "Daily Classes",
    drag:"/doodles/eng.png"
  },
];

export default function FeaturedCourses() {
  return (
    <section className="relative overflow-hidden ">
      

      {/* Top Left Doodle */}
      

      {/* Top Right Doodle */}
    

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          

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
                h-[317px]
                
                w-[373px]
                rounded-2xl
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000]
                
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

     
      

    </section>
  );
}