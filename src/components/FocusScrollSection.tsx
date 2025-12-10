import React from "react";
import img1 from "../assets/manpower/About.jpg";
import img2 from "../assets/manpower/abo2.jpg";
import img3 from "../assets/manpower/pass.png";

const AboutSection: React.FC = () => {
  return (
    <section
      className="w-full py-20 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Inter Variable', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 lg:px-0">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-500 mb-2">
            ABOUT OUR AGENCY
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Connecting Talent with <br /> Global Opportunities
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
            We specialize in overseas job placements for skilled professionals,
            blue-collar workers, and healthcare staff across{" "}
            <span className="font-semibold text-black">
              Singapore, Gulf countries, and Schengen regions.
            </span>{" "}
            By combining industry expertise,{" "}
            <span className="font-semibold text-black">extensive network</span>,
            and a candidate-first approach.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              <span className="text-gray-700">Overseas Job Placements</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              <span className="text-gray-700">Trade Test Preparations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              <span className="text-gray-700">Direct Employer Interviews</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              <span className="text-gray-700">High Success Rate Placements</span>
            </li>
          </ul>

          {/* Button */}
          <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg hover:bg-red-700 transition-all flex items-center gap-3">
            Explore Jobs
            <span className="bg-white text-red-600 w-8 h-8 flex items-center justify-center rounded-full">
              →
            </span>
          </button>
        </div>

        {/* RIGHT IMAGES (mobile → only img1, desktop → all 3 images) */}
        <div className="relative flex justify-center lg:justify-end items-center min-h-[550px]">

          {/* MAIN IMAGE — always visible */}
          <img
            src={img1}
            alt="Overseas Workers"
            className="
              w-[260px] h-[330px] 
              md:w-[330px] md:h-[420px] 
              lg:w-[420px] lg:h-[520px]
              object-cover rounded-xl shadow-lg
            "
          />

          {/* OVERLAY IMAGE — hidden on mobile */}
          <img
            src={img2}
            alt="Global Opportunities"
            className="
              hidden md:block md:absolute
              w-[240px] h-[300px]
              md:top-20 md:left-16
              lg:w-[300px] lg:h-[360px] lg:top-38 lg:left-20
              object-cover rounded-xl shadow-xl border-4 border-white
            "
          />

          {/* PASSPORT IMAGE — hidden on mobile */}
          <img
            src={img3}
            alt="Career Passport"
            className="
              hidden md:block md:absolute
              w-[180px]
              md:top-52 md:left-10
              lg:w-[240px] lg:top-65 lg:left-8
              object-contain drop-shadow-2xl
            "
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
