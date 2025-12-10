// import React from "react";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
import webr from "../assets/vecteezy_traditional-and-cultural-beautiful-pattern-design-mandala_ (1).png";

const UI = {
  PRIMARY: '#ff4600',
  DARK: '#011123',
  WHITE: '#ffffff',
};

export default function CaseStudyOrangeTheme() {
  return (
    <>
     <div className="min-h-screen bg-orange-700 relative overflow-hidden">
      {/* Overlapping Circles Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circlePattern" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Four overlapping circles creating flower-like intersections */}
              <circle cx="0" cy="0" r="40" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="80" cy="0" r="40" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="0" cy="80" r="40" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="80" cy="80" r="40" stroke="white" strokeWidth="1" fill="none" />
              
              {/* Center circle */}
              <circle cx="40" cy="40" r="40" stroke="white" strokeWidth="1" fill="none" />
              
              {/* Small dots at intersections */}
              <circle cx="40" cy="0" r="1.5" fill="white" />
              <circle cx="80" cy="40" r="1.5" fill="white" />
              <circle cx="40" cy="80" r="1.5" fill="white" />
              <circle cx="0" cy="40" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circlePattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-orange-300 text-xl">✦</span>
          <span className="text-orange-100 text-sm font-medium tracking-wider uppercase">
            Human Resources & Recruitment
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
              Scaling Predictive Analytics: Expanding Indeed's Machine Learning Framework for Revenue Growth
            </h1>

            <div className="mb-8">
              <h3 className="text-orange-200 text-xs font-semibold tracking-wider uppercase mb-4">
                Initiatives
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  DATA ENGINEERING & ANALYTICS
                </span>
                <span className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  DATA SCIENCE & AI
                </span>
                <span className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  CLOUD & DEVOPS
                </span>
              </div>
            </div>

            <div className="text-orange-50 space-y-4 mb-8 text-base leading-relaxed">
              <p>
                Indeed's Enterprise Data and Analytics team needed to expand its machine learning framework to include predictions for client retention risk and uplift opportunities. They sought a Gen AI solution that would serve thousands of sales representatives and other client-facing portals.
              </p>
              <p>
                Indeed looked to Andela for support with their crucial revenue growth initiative. Andela brought skilled data scientists and machine learning engineers to the table and successfully scaled their machine learning framework to provide business insights to the daily operations of hundreds of Indeed employees.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-orange-200 text-xs font-semibold tracking-wider uppercase mb-4">
                Solution
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Cloud Native
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Data Pipelines & ETL
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Data Warehouse
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Data Automation
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-orange-200 text-xs font-semibold tracking-wider uppercase mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Big Query
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Google Cloud
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Apache Kafka
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Spark Streaming
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-orange-200 text-xs font-semibold tracking-wider uppercase mb-4">
                Roles
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Data Scientist
                </span>
                <span className="bg-white text-orange-800 px-5 py-2.5 rounded-full text-sm font-medium">
                  Data Engineer
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-orange-600 bg-opacity-40 backdrop-blur-sm border border-orange-400 border-opacity-30 rounded-lg p-6">
                <div className="text-5xl font-bold text-white mb-2">150K</div>
                <div className="text-orange-100 text-sm leading-relaxed">
                  Top-rated, highly skilled global talent pool
                </div>
              </div>
              <div className="bg-orange-600 bg-opacity-40 backdrop-blur-sm border border-orange-400 border-opacity-30 rounded-lg p-6">
                <div className="text-5xl font-bold text-white mb-2">66%</div>
                <div className="text-orange-100 text-sm leading-relaxed">
                  Faster time to hire
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <section className="w-full bg-[#fff7f5] py-24 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8">
      
      {/* Left image (Mandala / Rangoli pattern) */}
      <div className="md:w-1/3 w-full flex justify-center md:justify-end mb-10 md:mb-0">
        <img
          src={webr}
          alt="Decorative mandala pattern"
          className="w-72 md:w-[520px] h-auto object-contain drop-shadow-md"
          loading="lazy"
        />
      </div>

      {/* Right content */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-snug">
          Want to build a similar solution?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed mb-10">
          Learn what organizations large and small are doing to create a global tech
          workforce that is ready for tomorrow.
        </p>
        <button
          className="bg-[#ff4600] text-white font-semibold text-lg px-10 py-4 rounded-lg hover:bg-[#ff5722] transition-all duration-300 shadow-md"
        >
          Get Started
        </button>
      </div>
    </section>

            
      <section className="relative w-full bg-[#f0cec3] text-black py-24 overflow-hidden">
        {/* White Circular Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg 
            className="w-full h-full" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern 
                id="circlePatternLight" 
                x="0" 
                y="0" 
                width="100" 
                height="100" 
                patternUnits="userSpaceOnUse"
              >
                <circle cx="50" cy="0" r="50" fill="none" stroke={UI.DARK} strokeWidth="1.5" opacity="0.5"/>
                <circle cx="100" cy="50" r="50" fill="none" stroke={UI.DARK} strokeWidth="1.5" opacity="0.5"/>
                <circle cx="50" cy="100" r="50" fill="none" stroke={UI.DARK} strokeWidth="1.5" opacity="0.5"/>
                <circle cx="0" cy="50" r="50" fill="none" stroke={UI.DARK} strokeWidth="1.5" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circlePatternLight)" />
          </svg>
        </div>

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
              <div className="overflow-hidden h-56">
                <img
                  src={tenimg}
                  alt="The Future of Hiring is Borderless"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
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
              <div className="overflow-hidden h-56">
                <img
                  src={eleimg}
                  alt="Diversifying Skillsets With The Weather Company"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
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
              <div className="overflow-hidden h-56">
                <img
                  src={twlimg}
                  alt="Andela Research Finds Increasing Demand for Global Remote Tech Talent"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
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
      
         {/* {6th Section} */}

         <section className="dual-action-button-cta">
              <div className="dual-action-button-cta-wrapper grid lg:grid-cols-2 gap-0 min-h-[200px]">
                
                {/* LEFT SECTION */}
                <div
                  className="dual-action-button-cta-left-div relative px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
                  style={{ backgroundColor: UI.PRIMARY }}
                >
                  {/* Pattern Background */}
                  <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                      <path d="M100 50 Q300 150 500 50 T900 50" stroke="white" strokeWidth="1.5" opacity="0.4" fill="none"/>
                      <path d="M0 100 Q200 200 400 100 T800 100" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
                      <path d="M150 200 Q350 300 550 200 T950 200" stroke="white" strokeWidth="1.5" opacity="0.25" fill="none"/>
                      <path d="M50 300 Q250 400 450 300 T850 300" stroke="white" strokeWidth="1.5" opacity="0.2" fill="none"/>
                      <circle cx="200" cy="80" r="3" fill="white" opacity="0.5"/>
                      <circle cx="600" cy="120" r="2.5" fill="white" opacity="0.4"/>
                      <circle cx="400" cy="250" r="3" fill="white" opacity="0.3"/>
                    </svg>
                  </div>
        
                  {/* Text Content */}
                  <div className="relative z-20">
                    <div className="dual-action-button-cta-tag-wrapper flex items-center mb-8">
                      <div className="dual-action-button-cta-left-div-img mr-3">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                          <path
                            d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p
                        className="text-sm font-semibold tracking-[0.2em] uppercase"
                        style={{ color: UI.WHITE }}
                      >
                        GET STARTED
                      </p>
                    </div>
        
                    <h2
                      className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
                      style={{ color: UI.WHITE }}
                    >
                      Build the tech team of the future with KIAQ
                    </h2>
        
                    <button
                      style={{
                        backgroundColor: UI.DARK,
                        color: UI.WHITE,
                      }}
                      className="px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
                    >
                      Request a consultation
                    </button>
                  </div>
                </div>
        
                {/* RIGHT SECTION */}
                <div
                  className="dual-action-button-cta-right-div relative px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
                  style={{ backgroundColor: UI.WHITE }}
                >
                  {/* Pattern Background */}
                  <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                      <path d="M100 50 Q300 150 500 50 T900 50" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.4" fill="none"/>
                      <path d="M0 100 Q200 200 400 100 T800 100" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.3" fill="none"/>
                      <path d="M150 200 Q350 300 550 200 T950 200" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.25" fill="none"/>
                      <path d="M50 300 Q250 400 450 300 T850 300" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.2" fill="none"/>
                      <circle cx="200" cy="80" r="3" fill="#0D2A2C" opacity="0.5"/>
                      <circle cx="600" cy="120" r="2.5" fill="#0D2A2C" opacity="0.4"/>
                      <circle cx="400" cy="250" r="3" fill="#0D2A2C" opacity="0.3"/>
                    </svg>
                  </div>
        
                  {/* Text Content */}
                  <div className="relative z-20">
                    <div className="flex items-center mb-8">
                      <div className="mr-3">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                          <path
                            d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                            fill="#173B3F"
                          />
                        </svg>
                      </div>
                      <p
                        className="text-sm font-semibold tracking-[0.2em] uppercase"
                        style={{ color: '#173B3F' }}
                      >
                        SCHEDULE A CALL
                      </p>
                    </div>
        
                    <h2
                      className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
                      style={{ color: '#173B3F' }}
                    >
                      Let us know how we can help
                    </h2>
        
                    <button
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: '#173B3F',
                        border: '2px solid rgba(23, 59, 63, 0.2)',
                      }}
                      className="px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-colors"
                    >
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
}