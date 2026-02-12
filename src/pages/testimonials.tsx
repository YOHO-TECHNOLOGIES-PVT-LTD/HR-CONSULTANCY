import React, { useState, useEffect } from 'react';
import ourimg from '../assets/manpower/people-working-with-ai-operated-devices.jpg';
import img1 from '../assets/home2/business-man-black-suit-glasses-looking-front-with-confident-expression-smiling-showing-thumbs-up-standing-white-wall.jpg';
import img2 from '../assets/home2/smiling-young-pretty-girl-her-thumb-up-isolated-yellow-wall.jpg';
import img3 from '../assets/home2/emotional-young-bearded-man-making-ok-gesture-with-both-hands-isolated-dark-wall.jpg';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "The job lists they provided helped us quickly match candidates with international opportunities. Their WhatsApp-ready formats saved us hours of work and improved our placement success rate.",
      name: "Rahul Sharma,",
      role: "Recruitment Manager at Global Manpower Corp",
      avatar: img1
    },
    {
      id: 2,
      text: "Working with their detailed Singapore trade test categories transformed our hiring process. The certification guidance helped candidates prepare better, resulting in higher success rates.",
      name: "Priya Patel,",
      role: "Operations Director at Overseas Employment Solutions",
      avatar: img2
    },
    {
      id: 3,
      text: "Their comprehensive blue-collar job descriptions in WhatsApp format made it so easy to share with clients. The country-specific lists helped us match the right candidates with the right opportunities.",
      name: "Michael Chen,",
      role: "CEO at International Placement Agency",
      avatar: img3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center">
        
        {/* Slider Container */}
        <div className="relative overflow-hidden w-full max-w-4xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-2 sm:px-4 md:px-6"
              >
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 shadow-lg mx-auto">

                  <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10">
                    
                    {/* Quote Text */}
                    <div className="flex-1">
                      <p className="text-slate-800 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    {/* Quote Icon */}
                    <div className="flex-shrink-0">
                      <svg 
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-indigo-600 opacity-80" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-10 sm:mt-12">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-slate-300 object-cover ring-4 ring-white shadow-md"
                    />
                    <div>
                      <h3 className="text-slate-900 text-lg sm:text-xl md:text-2xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-3 h-3 bg-red-600' 
                  : 'w-3 h-3 bg-slate-300 hover:bg-red-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div style={{ fontFamily: "'Inter Variable', sans-serif" }}>

      <div
        className="w-full h-[220px] sm:h-[300px] md:h-[350px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${ourimg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Testimonials
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="hover:text-blue-300 transition cursor-pointer">
              Home
            </span>
            <span>/</span>
            <span className="text-blue-300">Testimonials</span>
          </div>
        </div>
      </div>

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Future Sections Placeholder */}
    </div>
  );
}