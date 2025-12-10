import React from "react";
import img1 from "../assets/manpower/About.jpg";
import img2 from "../assets/manpower/abo2.jpg";
import img3 from "../assets/manpower/pass.png";

/**
 * AboutSection.tsx
 * - Pixel-tight 3-column layout matching screenshot
 * - Left & right cards equal height
 * - Center column perfectly centered vertically
 * - Fixed image heights to guarantee alignment
 * - Small inline style used only for the circular text transform
 */

const AboutSection: React.FC = () => {
  return (
    <section 
      className="w-full bg-white py-16 px-6 lg:px-20"
      style={{ fontFamily: "'Inter Variable', sans-serif" }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* 3 column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* LEFT CARD */}
          <div className="bg-[#edf3f7] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between"
               style={{ minHeight: 520 }}>
            <div>
              <span className="inline-block px-5 py-2 rounded-full border border-gray-400 text-gray-700 text-sm">
                Agency Mission
              </span>

              <h3 className="mt-6 text-[20px] leading-[1.6] text-gray-800 font-medium">
                We specialize in overseas job placements for blue-collar workers, 
                healthcare professionals, skilled tradespeople, and technical staff.
              </h3>
            </div>

            <div className="mt-6">
              <img
                src={img1}
                alt="Workers Team"
                className="w-full h-[230px] object-cover rounded-xl shadow-sm"
                style={{ display: "block" }}
              />
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex flex-col items-center text-center justify-center px-10" style={{ minHeight: 520 }}>
            {/* Number */}
            <h1 className="text-[80px] leading-none font-bold text-[#0c3b75]">
              5000+
            </h1>

            {/* Text */}
            <p className="text-gray-700 mt-2 text-[15px] leading-[1.5] max-w-[280px] font-medium">
              We've successfully placed 5000+ candidates<br />in overseas jobs across 15+ countries
            </p>

            {/* Plane image */}
            <div className="mt-8 mb-8 w-full flex justify-center">
              <img
                src={img2}
                alt="Global Opportunities"
                className="max-w-full h-auto object-contain"
                style={{ maxHeight: 120 }}
              />
            </div>

            {/* Circular badge with curved text and arrow */}
            <div className="relative flex items-center justify-center w-[240px] h-[180px]">
              {/* Circular image */}
              <img
                src={img3}
                alt="Career Success"
                className="w-[140px] h-[140px] rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                style={{ marginTop: '20px' }}
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#edf3f7] border border-gray-200 rounded-2xl p-8 flex flex-col justify-between"
               style={{ minHeight: 520 }}>
            <div>
              <img
                src={img2}
                alt="Successful Placements"
                className="w-full h-[230px] object-cover rounded-xl shadow-sm"
              />
            </div>

            <div className="mt-6">
              <span className="inline-block px-5 py-2 rounded-full border border-gray-400 text-gray-700 text-sm">
                Vision & Goals
              </span>

              <p className="mt-4 text-[18px] leading-[1.6] text-gray-800">
                Our vision is to become the leading global manpower agency connecting 
                talent with life-changing opportunities worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;