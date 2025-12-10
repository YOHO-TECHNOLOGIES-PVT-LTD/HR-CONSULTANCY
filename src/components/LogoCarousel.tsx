import React from "react";
import img1 from "../assets/manpower/visa.png";
import img2 from "../assets/manpower/travle.png";
import img3 from "../assets/manpower/man.png";

const VisaCards: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-[#002b66] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] sm:min-h-[260px]">
          <div>
            <p className="text-xs sm:text-sm tracking-wide opacity-80 mb-2 sm:mb-3">
              ONLINE REGISTRATION
            </p>

            <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-4 sm:mb-6">
              Register Online For <br /> Job Opportunities
            </h2>

            <button className="flex items-center bg-red-600 hover:bg-red-700 transition text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm w-fit">
              Apply Now
              <span className="ml-2 text-base sm:text-lg">→</span>
            </button>
          </div>

          {/* IMAGE */}
          <img
            src={img1}
            alt="Job Registration"
            className="absolute right-1 sm:right-3 bottom-1 sm:bottom-3 w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain pointer-events-none"
          />
        </div>

        {/* CARD 2 */}
        <div className="bg-[#002b66] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] sm:min-h-[260px]">
          <div>
            <p className="text-xs sm:text-sm tracking-wide opacity-80 mb-2 sm:mb-3">
              OVERSEAS PLACEMENT
            </p>

            <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-4 sm:mb-6">
              Smooth & Secure <br /> Placement Process
            </h2>

            <button className="flex items-center bg-red-600 hover:bg-red-700 transition text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm w-fit">
              Learn More
              <span className="ml-2 text-base sm:text-lg">→</span>
            </button>
          </div>

          {/* IMAGE */}
          <img
            src={img2}
            alt="Overseas Job"
            className="absolute right-1 bottom-1 sm:right-0 sm:bottom-0 w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain pointer-events-none"
          />
        </div>

        {/* CARD 3 */}
        <div className="bg-[#002b66] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px] sm:min-h-[260px]">
          <p className="text-xs sm:text-sm tracking-wide opacity-80 mb-2 sm:mb-3">
            FREE CAREER GUIDANCE
          </p>

          <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-4 sm:mb-6">
            Book Your Free <br /> Career Consultation
          </h2>

          <button className="flex items-center bg-red-600 hover:bg-red-700 transition text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm w-fit">
            Book Now
            <span className="ml-2 text-base sm:text-lg">→</span>
          </button>

          {/* IMAGE */}
          <img
            src={img3}
            alt="Career Consultation"
            className="absolute right-1 bottom-1 sm:right-1 sm:bottom-2 w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
};

export default VisaCards;
