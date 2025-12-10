import React from "react";
import img1 from "../assets/manpower/portrait-woman-playing-poker-casino.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:h-[90vh] overflow-hidden flex items-center">

      {/* Background Image */}
      <img
        src={img1}
        alt="Global Employment Opportunities"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#e63946]/75 via-[#e63946]/55 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-12 mx-auto flex flex-col md:flex-row items-start justify-between">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-2xl mt-32 sm:mt-40 md:mt-[25rem]">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight drop-shadow-md">
            Connecting Talent with <br />
            Global Opportunities <br />
            One Job at a Time
          </h1>
        </div>

        {/* RIGHT SIDE SMALL TEXT + BUTTON */}
        <div className="mt-8 sm:mt-10 md:mt-[25rem] flex flex-col justify-start md:justify-center items-start md:items-end gap-4 sm:gap-5 md:pr-4 w-full md:w-auto">

          <p className="text-white/90 text-sm sm:text-base max-w-xs sm:max-w-sm leading-relaxed text-left md:text-right">
            We specialize in overseas placements for skilled professionals, 
            nurses, tradespeople, and blue-collar workers across Singapore, 
            Gulf countries, and Schengen regions.
          </p>

          <button className="bg-white text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-md flex items-center gap-3 hover:bg-gray-100 transition whitespace-nowrap text-sm sm:text-base">
            Get Free Career Consultation
            <span className="text-lg sm:text-xl">➜</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
