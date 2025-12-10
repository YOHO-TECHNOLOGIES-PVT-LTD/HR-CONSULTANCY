import React from "react";
import webimg from "../assets/usecase/Legacy system modernization.avif";
import { UI_CONSTANTS } from "../constants/colors";
import webimg2 from "../assets/66592e243ff567c6d20bf458_shutterstock_1903260658.avif";
import webimg3 from "../assets/665931b9c3884b006d99aea7_shutterstock_2178995507 1.avif";
import webimg4 from "../assets/6659318549edab4cae8985df_v617-bb-18-technology 1.webp";
import webimg5 from "../assets/usecase/6659122638860b6b136d87cc_663cd53f7f18d638d7d794b4_663b848c3b7490760b70c15d_pymetrics-logo.webp";
import webimg6 from "../assets/usecase/665911c80e229142815dcc29_664d0cc858260032436ce24c_Hover Template 640 x 540.avif";
import webimg7 from "../assets/usecase/665911f99aebdfa28eaa44fd_66466ee066937caaa153818f_Hover Template 640 x 537.avif";
import webimg8 from "../assets/usecase/6626c1bf2f6333755ec893d1_Layer_1 (2).svg";
import webimg9 from "../assets/usecase/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600 (1).svg";
import webimg10 from "../assets/usecase/6626c1bf2f6333755ec893fa_ViacomCBS (2).svg";
import webimg11 from "../assets/usecase/6626c1c02f6333755ec89435_Casper_Sleep_logo (2).svg";
import webimg12 from "../assets/usecase/6626c1c02f6333755ec89474_Cloudflare_Logo (2).svg";
import webimg13 from "../assets/usecase/66347e6ccfb7ada3bdf3ce34_Vector (3).svg";
import webimg14 from "../assets/usecase/665e67458fbe05d52c24cf21_groupm-logo.svg";
import webimg15 from "../assets/usecase/66561ebf26b4d7de96e4e0ed_Wendy TWC.avif";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
export default function WebAppDevelopmentHero() {



  const logos = [webimg10, webimg8, webimg9, webimg12, webimg11, webimg14, webimg13];

    const [activeTab, setActiveTab] = useState<"Innovative Web Apps" | "Outsource Projects" | "Deliver Projects Faster">("Deliver Projects Faster");

  const tabs = [
    "Innovative Web Apps",
    "Outsource Projects",
    "Deliver Projects Faster",
  ];

  const images = {
    "Innovative Web Apps": webimg2,
    "Outsource Projects": webimg3,
    "Deliver Projects Faster": webimg4,
  };

  return (
    <>
   <section
  className="relative w-full min-h-[90vh] flex items-center justify-start overflow-hidden"
  style={{ backgroundColor: UI_CONSTANTS.DARK }}
>
  {/* Background image */}
  <img
    src={webimg}
    alt="Web app development"
    className="absolute inset-0 w-full h-full object-cover object-right z-0"
  />

  {/* Dark gradient overlay */}
  <div
    className="absolute inset-0 z-10"
    style={{
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.1) 100%)",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-12 w-full">
    <div className="max-w-[520px] mt-[14vh]">
      {/* Title */}
      <h1
        className="text-white font-bold leading-snug mb-5"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
          lineHeight: 1.2,
        }}
      >
        Build High-Performance
        <br />
        Web Applications with Ease
      </h1>

      {/* Description */}
      <p
        className="text-gray-200 font-light mb-8"
        style={{
          fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        KIAQ delivers scalable, secure, and high-performance web applications
        built by top tech talent. From UI to backend architecture, we help
        you launch faster and grow confidently.
      </p>

      {/* CTA Button */}
      <button
        className="px-6 py-3 text-sm md:text-base font-semibold rounded-md shadow-md transition-all duration-300 hover:opacity-90"
        style={{
          backgroundColor: UI_CONSTANTS.WHITE,
          color: UI_CONSTANTS.DARK,
        }}
      >
        Book a Discovery Call
      </button>
    </div>

    {/* Stats Section */}
    <div className="flex flex-wrap gap-10 mt-14 text-gray-200">
      <div>
        <p className="text-2xl font-semibold text-white mb-1">98%</p>
        <p className="text-sm opacity-90">
          Client satisfaction rate for delivered talent
        </p>
      </div>

      <div className="border-l border-white/20 pl-8">
        <p className="text-2xl font-semibold text-white mb-1">3,000+</p>
        <p className="text-sm opacity-90">
          Skilled web and mobile developers
        </p>
      </div>

      <div className="border-l border-white/20 pl-8">
        <p className="text-2xl font-semibold text-white mb-1">18+</p>
        <p className="text-sm opacity-90">
          Average engagement duration
        </p>
      </div>
    </div>
  </div>
</section>



  {/* {second section} */}
  <section className="relative w-full bg-white overflow-hidden py-20 px-6 lg:px-12">
  {/* STAR PATTERN TOP-RIGHT (SVG) */}
  <div
    aria-hidden
    className="absolute top-8 right-8 pointer-events-none"
    style={{ opacity: 0.12 }}
  >
    {/* SVG UNCHANGED */}
    ...
  </div>

  {/* STAR PATTERN BOTTOM-LEFT (SVG) */}
  <div
    aria-hidden
    className="absolute bottom-0 left-0 pointer-events-none"
    style={{ opacity: 0.10 }}
  >
    {/* SVG UNCHANGED */}
    ...
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* LEFT aligned top block */}
    <div className="max-w-[980px]">
      <div className="pr-12">
        <h2
          className="text-[28px] md:text-[36px] font-semibold text-[#011123] mb-4"
          style={{ color: UI_CONSTANTS.DARK, lineHeight: 1.08 }}
        >
          Build scalable web applications tailored to your business goals
        </h2>

        <p
          className="text-gray-600 mb-8 max-w-[720px]"
          style={{ fontSize: "1.03rem", lineHeight: 1.65 }}
        >
          We develop high-performing, scalable web applications that enhance
          user experience and integrate seamlessly with your existing systems.
        </p>
      </div>
    </div>

    {/* TABS */}
    <div className="mt-4">
      <div className="flex items-center gap-6 max-w-[720px] pb-3">
        {/* No changes to tabs */}
        {tabs.map((tab, idx) => {
          const isActive = tab === activeTab;
          return (
            <div key={tab} className="flex items-center">
              <button
                onClick={() =>
                  setActiveTab(
                    tab as
                      | "Innovative Web Apps"
                      | "Outsource Projects"
                      | "Deliver Projects Faster"
                  )
                }
                className="relative text-sm md:text-base font-medium pb-2 transition-colors"
                style={{
                  color: isActive
                    ? UI_CONSTANTS.DARK
                    : "rgba(1,17,35,0.6)",
                }}
              >
                {tab}
                {isActive && (
                  <span
                    className="absolute left-0 right-0"
                    style={{
                      height: 3,
                      bottom: -8,
                      background: UI_CONSTANTS.DARK,
                      borderRadius: 2,
                    }}
                  />
                )}
              </button>

              {idx < tabs.length - 1 && (
                <div
                  aria-hidden
                  className="mx-4"
                  style={{
                    width: 36,
                    height: 1,
                    background: "rgba(1,17,35,0.06)",
                    borderRadius: 2,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="max-w-[720px] border-b border-gray-200 mt-2" />
    </div>

    {/* Two-column content */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-5">
        <h3
          className="text-[20px] md:text-[22px] font-semibold mb-3"
          style={{ color: UI_CONSTANTS.DARK, lineHeight: 1.12 }}
        >
          Find the right development talent faster with KIAQ’s smart matching platform
        </h3>

        <p className="text-gray-600 mb-5" style={{ lineHeight: 1.7 }}>
          Companies accelerate their development cycles by hiring skilled
          engineers through KIAQ within days, enabling faster delivery and
          long-term scalability.
        </p>

        <button
          className="text-sm font-semibold border-b border-current hover:text-[rgba(0,212,170,1)] transition-colors"
          style={{ color: UI_CONSTANTS.DARK }}
        >
          Learn More
        </button>
      </div>

      <div className="md:col-span-7 flex justify-end">
        <div className="w-full max-w-[520px]">
          <img
            src={images[activeTab]}
            alt={activeTab}
            className="w-full h-auto rounded-xl shadow-[0_10px_30px_rgba(2,6,23,0.12)] object-cover"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </div>
  </div>
</section>


    {/* {third section} */}

    <section className="relative w-full bg-[#fff2eb] overflow-hidden py-20 px-6 lg:px-12">
  {/* Scrollable SVG Pattern Background */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
        radial-gradient(circle at 60px 60px, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
      backgroundAttachment: "scroll", // ✅ scrollable pattern
    }}
  ></div>

  <div className="relative z-10 max-w-7xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-[#011123] mb-14">
      We solve for the most important use cases
    </h2>

   {/* --- Use Case Cards (full block including corrected 3rd card) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-16">
  <div className="relative w-full max-w-[360px] rounded-xl overflow-hidden shadow-lg bg-[#000]">
          <img
            src={webimg6}
            alt="Indeed Case Study"
            className="w-full h-[340px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-5 left-5 text-left text-white">
            <p className="text-[10px] font-semibold uppercase tracking-wide mb-1 opacity-80">
              Case Study
            </p>
            <h3 className="text-lg font-semibold leading-snug">
              Optimizing Infrastructure: Indeed's Large-Scale Cloud Transformation
            </h3>
            <p className="text-xs underline mt-2 font-medium opacity-90 cursor-pointer">
              Learn More
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative w-full max-w-[360px] rounded-xl overflow-hidden shadow-lg bg-[#000]">
          <img
            src={webimg7}
            alt="GoPuff Case Study"
            className="w-full h-[340px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-5 left-5 text-left text-white">
            <p className="text-[10px] font-semibold uppercase tracking-wide mb-1 opacity-80">
              Case Study
            </p>
            <h3 className="text-lg font-semibold leading-snug">
              Elevating GoPuff's Database Uptime by 80% With a Seamless Azure Integration
            </h3>
            <p className="text-xs underline mt-2 font-medium opacity-90 cursor-pointer">
              Learn More
            </p>
          </div>
        </div>

        {/* CARD 3 (PYMETRICS — MINT BACKGROUND) */}
        <div
          className="relative w-full max-w-[360px] rounded-xl overflow-hidden shadow-md border border-[#d8eeea] bg-white flex flex-col"
          style={{ height: "340px" }}
        >
          {/* Top area with mint background and centered logo */}
          <div className="flex items-center justify-center h-[160px] bg-[#ecf9f7]">
            <img
              src={webimg5}
              alt="Pymetrics"
              className="h-12 md:h-14 object-contain"
            />
          </div>

          {/* Bottom content area */}
          <div className="p-6 flex-1 text-left flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide mb-2 text-gray-500">
                Case Study
              </p>
              <h3 className="text-base font-semibold text-[#011123] leading-snug mb-2">
                How Pymetrics Scaled Global Development Projects With Effective Hiring
              </h3>
            </div>

            <div>
              <p className="text-xs underline font-medium text-[#011123] cursor-pointer">
                Learn More
              </p>
            </div>
          </div>

    {/* subtle rounded inside corners matching the outer radius */}
    <style >{`
      /* ensure top area has same radius on top corners */
      .rounded-xl > div:first-child {
        border-top-left-radius: 0.75rem;  /* Tailwind rounded-xl = 0.75rem */
        border-top-right-radius: 0.75rem;
      }
      /* keep bottom area crisp */
      .rounded-xl > div:last-child {
        border-bottom-left-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
      }
    `}</style>
  </div>
</div>
    {/* Auto Scrolling Logos Row */}
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-start gap-16 md:gap-20 opacity-70 animate-scroll">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="client logo"
            className="h-6 md:h-7 w-auto grayscale hover:grayscale-0 transition duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  </div>
</section>



        {/* {fourth section} */}
         <section className="relative w-full bg-white overflow-hidden py-20 px-6 lg:px-12">
      {/* SVG PATTERN — BOTTOM LEFT */}
      <svg
        className="absolute left-0 bottom-0 w-[520px] h-[220px] md:w-[720px] md:h-[320px] opacity-30 pointer-events-none z-0"
        viewBox="0 0 720 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="10" stroke="#cfeee9" strokeWidth="1" fill="transparent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>

      {/* SVG PATTERN — TOP RIGHT (subtle and cropped) */}
      <svg
        className="absolute right-0 top-0 w-[360px] h-[160px] md:w-[560px] md:h-[240px] opacity-20 pointer-events-none z-0"
        viewBox="0 0 560 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="circles2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="10" stroke="#cfeee9" strokeWidth="1" fill="transparent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles2)" />
      </svg>

      {/* subtle radial background to blend with pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 10% 90%, rgba(206,238,233,0.12) 0%, transparent 25%), radial-gradient(circle at 90% 10%, rgba(206,238,233,0.06) 0%, transparent 20%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left side (Image / Video) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={webimg15}
              alt="The Weather Company Interview"
              className="w-full h-auto object-cover rounded-2xl"
              style={{ maxWidth: 520 }}
            />
          </div>
        </div>

        {/* Right side (Text Content) */}
        <div className="w-full lg:w-1/2 text-left">
  <h2 className="text-2xl md:text-3xl font-semibold text-[#011123] leading-snug mb-4">
    Elevate your app with cutting-edge web solutions
  </h2>
  <p className="text-base text-gray-700 leading-relaxed mb-8">
    KIAQ empowers businesses to innovate and scale by leveraging top-tier engineering talent,
    delivering modern, high-performance web applications tailored to your needs.
  </p>

 
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
      Leverage Adaptive Hiring for Web Development Success
    </h2>
    <button className="mt-6 md:mt-0 border border-gray-800 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
      Explore Resources
    </button>
  </div>

  {/* Cards Grid */}
  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Card 1 */}
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
      <div className="overflow-hidden">
        <img
          src={tenimg}
          alt="Future of Web Development"
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
          White Paper
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
          The Future of Web Development is Borderless
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
          alt="Diverse Web Teams"
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
          Case Study
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
          Building Scalable Web Teams with KIAQ
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
          alt="Remote Tech Talent"
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
          Infographic
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
          Rising Demand for Remote Web Development Talent
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
              <div className="dual-action-button-cta-wrapper grid lg:grid-cols-2 gap-0 min-h-[400px]">
                
                {/* LEFT SECTION */}
                <div
                  className="dual-action-button-cta-left-div relative px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
                  style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}
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
                        style={{ color: UI_CONSTANTS.WHITE }}
                      >
                        GET STARTED
                      </p>
                    </div>
        
                    <h2
                      className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
                      style={{ color: UI_CONSTANTS.WHITE }}
                    >
                      Build the tech team of the future with KIAQ
                    </h2>
        
                    <button
                      style={{
                        backgroundColor: UI_CONSTANTS.DARK,
                        color: UI_CONSTANTS.WHITE,
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
                  style={{ backgroundColor: UI_CONSTANTS.WHITE }}
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
function useState<T>(
  initial: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  return React.useState<T>(initial as any);
}

