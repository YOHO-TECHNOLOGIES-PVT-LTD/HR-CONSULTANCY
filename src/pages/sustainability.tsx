// import React from "react";
import img1 from "../assets/about/Forrester Chart 3.avif";
import img2 from "../assets/about/6733f0dbf559577bb5f4cdbd_Frame 1073714193-p-1080.webp";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';

export default function SustainabilityHero() {
  return (

    <>
    <section className="relative w-full bg-[#063A38] text-white overflow-hidden h-[70vh] flex items-center">
      {/* Background Pattern */}
      {/* <img
        src={patternImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      /> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#063A38]/70"></div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Andela’s Commitment
          <br />
          to Sustainability
        </h1>

        <p className="mt-8 text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
          Andela is on a mission to change the way the world works. Our business
          model addresses three distinct pillars of sustainability:
          environmental, economic, and social.
        </p>
      </div>
    </section>

         <section className="relative w-full bg-white py-20 overflow-hidden">
      
      {/* TOP RIGHT PATTERN */}
      <img
        src="/mnt/data/a964249e-30c6-4819-8bac-6326dd6ae99b.png"
        alt=""
        className="absolute top-0 right-0 w-[450px] opacity-40 select-none pointer-events-none"
      />

      {/* BOTTOM LEFT PATTERN */}
      <img
        src="/mnt/data/a964249e-30c6-4819-8bac-6326dd6ae99b.png"
        alt=""
        className="absolute bottom-0 left-0 w-[450px] opacity-20 select-none pointer-events-none rotate-180"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={img1}
            alt="Chart"
            className="w-full max-w-lg object-contain"
          />
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Remote work:
            <br />
            A win-win for emissions
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            As a fully remote company, we know our approach not only supports
            economic and social sustainability, it's also an unequivocal win for
            emissions. A 2023 study by the US Career Institute notes that remote
            workers cut greenhouse gas emissions by up to 54% by not commuting
            to an office five days a week. As members of{" "}
            <a
              href="https://sustainableIT.org"
              className="text-blue-600 underline"
            >
              sustainableIT.org
            </a>
            , Andela is part of a growing movement to drive improvements across
            the tech industry. We are committed to helping our clients improve
            and report on the positive impacts of remote hiring.
          </p>
        </div>

      </div>
    </section>

    <section className="relative w-full text-white py-24 overflow-hidden bg-[#032B2F]">
      
      

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#032B2F] via-[#033437] to-[#032B2F]/90"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Andela partners with service providers — like WAP Sustainability — to  
          further reduce our environmental impact.
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
          We conducted a comprehensive Greenhouse Gas (GHG) inventory in accordance with 
          the World Resources Institute’s (WRI) GHG Protocol to quantify our GHG emissions 
          and identify opportunities for reduction. Recognizing that true sustainability 
          is a long game, we are proud of the improvements we’ve made year over year as 
          a result of our remote approach.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="border border-orange-400 rounded-xl p-8 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-semibold text-orange-400">
              Reduced Emissions
            </h3>
            <div className="w-20 h-[2px] bg-orange-400 mt-2 mb-4"></div>
            <p className="text-gray-200 text-sm leading-relaxed">
              In 2023, Andela's total GHG emissions were 2,088 metric tons CO₂e, 
              a 68% decrease from 3,075 metric tons CO₂e in 2022.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-orange-400 rounded-xl p-8 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-semibold text-orange-400">
              Significant Carbon Savings
            </h3>
            <div className="w-20 h-[2px] bg-orange-400 mt-2 mb-4"></div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Andela prevented an estimated 365 metric tons CO₂e emissions from 
              transportation in 2023. We also helped our clients prevent 1,992 
              metric tons CO₂e emissions by hiring remote talent.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-orange-400 rounded-xl p-8 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-semibold text-orange-400">
              Improved Efficiency
            </h3>
            <div className="w-20 h-[2px] bg-orange-400 mt-2 mb-4"></div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Andela has reduced its GHG intensity per employee from 6.71 metric 
              tons CO₂e in 2022 to 6.59 metric tons CO₂e in 2023.
            </p>
          </div>

        </div>

        {/* Footer Text */}
        <p className="mt-16 text-gray-300 text-sm">
          Source: Corporate GHG Inventory and Inventory Management Plan, April 2024
        </p>

      </div>

    </section>

     <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Embracing remote work for a<br />greener future
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            By embracing remote work and actively managing our carbon footprint,
            we demonstrate our dedication to sustainability and environmental
            responsibility in the tech industry. Learn more about how we{" "}
            <a href="#" className="underline text-gray-900 font-medium">
              measured these impacts
            </a>.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white max-w-lg">
            <img
              src={img2}
              alt="Remote Work Environment"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>

        {/* {fifth section} */}

    <section className="relative w-full bg-[#f8fafc] text-black py-24 overflow-hidden">
  {/* Flower Pattern Background */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        radial-gradient(circle at 25px 25px, rgba(104,179,157,0.4) 1px, transparent 0),
        radial-gradient(circle at 75px 75px, rgba(104,179,157,0.4) 1px, transparent 0)
      `,
      backgroundSize: "100px 100px",
    }}
  ></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Put Adaptive Hiring to work for you
      </h2>
      <button className="mt-6 md:mt-0 border border-gray-800 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
        View All Resources
      </button>
    </div>

    {/* Cards Grid */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={tenimg}
            alt="The Future of Hiring"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            White Paper
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            The Future of Hiring is Borderless
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Read More <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={eleimg}
            alt="Diversifying Skillsets"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Case Study
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Diversifying Skillsets With The Weather Company
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Watch Now <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={twlimg}
            alt="Global Remote Tech Talent"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Infographic
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Andela Research Finds Increasing Demand for Global Remote Tech Talent
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Read More <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>




    </>
  );
}
