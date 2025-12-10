
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import webimg from "../assets/solutions/665f0e6451687baa423524d5_application_engineering_banner_2x-p-2000.webp";
import { UI_CONSTANTS } from "../constants/colors";
import webimg2 from "../assets/66592e243ff567c6d20bf458_shutterstock_1903260658.avif";
import webimg3 from "../assets/665931b9c3884b006d99aea7_shutterstock_2178995507 1.avif";
import webimg4 from "../assets/6659318549edab4cae8985df_v617-bb-18-technology 1.webp";

import webimg8 from "../assets/usecase/6626c1bf2f6333755ec893d1_Layer_1 (2).svg";
import webimg9 from "../assets/usecase/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600 (1).svg";
import webimg10 from "../assets/usecase/6626c1bf2f6333755ec893fa_ViacomCBS (2).svg";
import webimg11 from "../assets/usecase/6626c1c02f6333755ec89435_Casper_Sleep_logo (2).svg";
import webimg12 from "../assets/usecase/6626c1c02f6333755ec89474_Cloudflare_Logo (2).svg";
import webimg13 from "../assets/usecase/66347e6ccfb7ada3bdf3ce34_Vector (3).svg";
import webimg14 from "../assets/usecase/665e67458fbe05d52c24cf21_groupm-logo.svg";
// import webimg15 from "../assets/usecase/66561ebf26b4d7de96e4e0ed_Wendy TWC.avif";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
import sol13 from '../assets/solutions/66551e33b51a48a01a04b49e_TWC _ 370 x 442.avif';
import sol14 from '../assets/solutions/66551e5ea419e51fd8602370_Mindshare.avif';
import sol15 from '../assets/solutions/66551df754960be0f32df34b_Frame 1073714194.avif';
import sol16 from '../assets/solutions/6655d8d4de6e142a88be6431_Nebula _ 370 x 446.avif';
import sol17 from '../assets/solutions/6657c42407afdd44de5fd97b_github logo.webp';
import sol18 from '../assets/solutions/6657c45988183db22b904624_TWC logo.webp';
import sol19 from '../assets/solutions/6657c49b629db5fe891a5454_mindshare logo.webp';
import sol20 from '../assets/solutions/6657c518ad72fe6656c7b9d6_nebula logo (1).webp';
import sol21 from '../assets/solutions/66343fa7e9d0576bd06f8b42_master-card-img.webp';
export default function WebAppDevelopmentHero() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const testimonials = [
    {
      title: "GitHub quickly activates scalable global teams to improve their customer experience",
      quote: "When we needed help with our expert services delivery, our certifications, and our partner enablement, we worked with Andela to get the people in place. Being able to have the right resource, in the right region, at the right time, has been transformational for us.",
      name: "Mark Schaefer",
      role: "Sr. Director, Worldwide Partnerships, GitHub",
      image: sol15,
      logo: sol17
    },
    {
      title: "The Weather Company diversifies skill sets",
      quote: "We want to leverage large language modeling, supercomputers, and GenAI to really bring outcomes to our users in a more robust and quick manner. Being the first to market in that space is going to be key. And Andela just continues to amaze me and does a phenomenal job.",
      name: "Wendy Frazier",
      role: "CTO, The Weather Company",
      image: sol13,
      logo: sol18
    },
    {
      title: "Mindshare scales data teams to serve the world's largest advertisers",
      quote: "With Andela, we scale up or down easily as business needs change. They help us quickly find people who are highly motivated, highly skilled and that embodies a culture of excellence and delivery. The talent hits the ground running which drives maximum value for our clients. Andela de-risks global hiring, so businesses can grow and be competitive.",
      name: "Ikechi Okoronkwo",
      role: "EVP, Analytics & Data Science",
      image: sol14,
      logo: sol19
    },
    {
      title: "Nebula scales its engineering team to meet goals faster",
      quote: "We reached our product initiatives 6-9 months faster than we would have with traditional hiring. The engineering teams from Andela meet every single sprint milestone - they have a spotless execution track record.",
      name: "Ed Donner",
      role: "Cofounder and CTO, Nebula",
      image: sol16,
      logo: sol20
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 720;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  



  const logos = [webimg10, webimg8, webimg9, webimg12, webimg11, webimg14, webimg13];

    const [activeTab] = useState<"Innovative Web Apps" | "Outsource Projects" | "Deliver Projects Faster">("Deliver Projects Faster");

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
    alt="Data Science and AI"
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
        Accelerate Your AI & Data Science
        <br />
        Projects with Expert Teams
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
        KIAQ connects you with top-tier AI and Data Science talent to deliver
        actionable insights, scalable models, and intelligent automation —
        driving measurable impact for your business.
      </p>

      {/* CTA Button */}
      <button
        className="px-6 py-3 text-sm md:text-base font-semibold rounded-md shadow-md transition-all duration-300 hover:opacity-90"
        style={{
          backgroundColor: UI_CONSTANTS.WHITE,
          color: UI_CONSTANTS.DARK,
        }}
      >
        Start Your AI Journey
      </button>
    </div>

    {/* Stats Section */}
    <div className="flex flex-wrap gap-10 mt-14 text-gray-200">
      <div>
        <p className="text-2xl font-semibold text-white mb-1">95%</p>
        <p className="text-sm opacity-90">Client satisfaction with AI solutions</p>
      </div>

      <div className="border-l border-white/20 pl-8">
        <p className="text-2xl font-semibold text-white mb-1">500+</p>
        <p className="text-sm opacity-90">AI & Data Science experts</p>
      </div>

      <div className="border-l border-white/20 pl-8">
        <p className="text-2xl font-semibold text-white mb-1">24+</p>
        <p className="text-sm opacity-90">Months of average engagement</p>
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
    <svg width="280" height="160" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <g id="star">
          <path d="M8 0 L10.2 5.6 L16 6.4 L11.6 10.2 L12.8 16 L8 13 L3.2 16 L4.4 10.2 L0 6.4 L5.8 5.6 Z" fill={UI_CONSTANTS.DARK} />
        </g>
      </defs>
      <g transform="translate(0,0)" opacity="0.5">
        {/* Row 1 */}
        <use href="#star" x="0" y="0" />
        <use href="#star" x="36" y="0" />
        <use href="#star" x="72" y="0" />
        <use href="#star" x="108" y="0" />
        <use href="#star" x="144" y="0" />
        <use href="#star" x="180" y="0" />
        {/* Row 2 */}
        <use href="#star" x="18" y="28" />
        <use href="#star" x="54" y="28" />
        <use href="#star" x="90" y="28" />
        <use href="#star" x="126" y="28" />
        <use href="#star" x="162" y="28" />
        <use href="#star" x="198" y="28" />
        {/* Row 3 (trim) */}
        <use href="#star" x="36" y="56" />
        <use href="#star" x="72" y="56" />
        <use href="#star" x="108" y="56" />
        <use href="#star" x="144" y="56" />
      </g>
    </svg>
  </div>

  {/* STAR PATTERN BOTTOM-LEFT (SVG) */}
  <div
    aria-hidden
    className="absolute bottom-0 left-0 pointer-events-none"
    style={{ opacity: 0.10 }}
  >
    <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <g id="starB">
          <path d="M8 0 L10.2 5.6 L16 6.4 L11.6 10.2 L12.8 16 L8 13 L3.2 16 L4.4 10.2 L0 6.4 L5.8 5.6 Z" fill={UI_CONSTANTS.DARK} />
        </g>
      </defs>
      <g transform="translate(0,0)" opacity="0.5">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((__, col) => (
            <use
              key={`b-${row}-${col}`}
              href="#starB"
              x={col * 40 + (row % 2 === 0 ? 0 : 20)}
              y={row * 36}
            />
          ))
        )}
      </g>
    </svg>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* LEFT aligned top block */}
    <div className="max-w-[980px]">
      <div className="pr-12">
        <h2
          className="text-[28px] md:text-[36px] font-semibold text-[#011123] mb-4"
          style={{ color: UI_CONSTANTS.DARK, lineHeight: 1.08 }}
        >
          AI & Data Science solutions tailored for your business
        </h2>
        <p
          className="text-gray-600 mb-8 max-w-[720px]"
          style={{ fontSize: "1.03rem", lineHeight: 1.65 }}
        >
          Leverage advanced analytics, machine learning, and AI to drive actionable insights and smarter business decisions. We deliver solutions that integrate seamlessly with your systems for maximum impact.
        </p>
      </div>
    </div>

    {/* TABS: LEFT-ALIGNED under heading, with separators */}
    <div className="mt-4">
      <div className="flex items-center gap-6 max-w-[720px] pb-3">
        {tabs.map((tab, idx) => {
          const isActive = tab === activeTab;
          return (
            <div key={tab} className="flex items-center">
              <button
                // onClick={() => setActiveTab(tab as "Predictive Analytics" | "AI Models" | "Data Pipelines")}
                className="relative text-sm md:text-base font-medium pb-2 transition-colors"
                style={{ color: isActive ? UI_CONSTANTS.DARK : "rgba(1,17,35,0.6)" }}
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

    {/* Two-column content: left narrow (text), right image */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-5">
        <h3
          className="text-[20px] md:text-[22px] font-semibold mb-3"
          style={{ color: UI_CONSTANTS.DARK, lineHeight: 1.12 }}
        >
          Quickly access top AI and Data Science talent
        </h3>

        <p className="text-gray-600 mb-5" style={{ lineHeight: 1.7 }}>
          KIAQ helps companies accelerate AI and data projects by connecting them with highly skilled engineers and data scientists, enabling faster delivery and smarter outcomes.
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

   <section className="relative w-full bg-[#edf6f5] overflow-hidden py-20 px-6 lg:px-12">
  {/* Scrollable SVG Pattern Background */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
        radial-gradient(circle at 60px 60px, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
      backgroundAttachment: "scroll",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-[#011123] mb-14">
      Get the talent you need for all your application projects
    </h2>

    {/* Cards */}
    {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 justify-items-center items-stretch">
  {[
    {
      title: "Develop custom software",
      desc: "Tailored for seamless integration and enhanced efficiency",
      gradient: "from-[#e3f3e9] to-[#f1faf4]",
      pattern:
        "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
    },
    {
      title: "Innovate web apps",
      desc: "Improve and energize the customer experience",
      gradient: "from-[#b6d9d2] to-[#d3efea]",
      pattern:
        "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
    },
    {
      title: "Transform mobile apps",
      desc: "Optimize for brand, customer engagement, and revenue",
      gradient: "from-[#f2f5f6] to-[#f7fbfb]",
      pattern:
        "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
    },
    {
      title: "Modernize legacy systems",
      desc: "Upgrade to the most modern, scalable, and useful iteration",
      gradient: "from-[#e7f6dc] to-[#f1fbef]",
      pattern:
        "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
    },
    {
      title: "Craft engaging UX designs",
      desc: "Delight customers with more intuitive user experiences",
      gradient: "from-[#b6d9d2] to-[#d3efea]",
      pattern:
        "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
    },
  ].map((card, idx) => (
    <div
      key={idx}
      className={`relative w-full max-w-[230px] min-h-[240px] p-6 rounded-xl shadow-sm bg-gradient-to-b ${card.gradient} transition-all duration-300 hover:scale-[1.03] hover:shadow-md flex flex-col justify-between`}
    >
      <div>
        <h3 className="text-[15px] font-semibold text-[#011123] mb-2 leading-snug">
          {card.title}
        </h3>
        <p className="text-sm text-[#011123b3] leading-snug">{card.desc}</p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-14 rounded-b-xl"
        style={{
          backgroundImage: card.pattern,
          backgroundSize: "24px 24px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          opacity: 0.6,
        }}
      ></div>
    </div>
  ))}
</div>



    {/* Auto Scrolling Logos Row */}
    <div className="relative overflow-hidden mt-20">
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


<style>
{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 25s linear infinite;
  }
`}
</style>




        {/* {fourth section} */}
             <section className="relative w-full bg-gray-50 py-20 px-6 lg:px-12 overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
      Here's why industry leaders rely on <br /> Andela talent
    </h2>
  </div>

  {/* Scrollable Cards Container */}
  <div className="relative">
    {/* Left Arrow */}
    {showLeftArrow && (
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-all"
      >
        <ArrowLeft className="w-6 h-6 text-gray-900" />
      </button>
    )}

    {/* Right Arrow */}
    {showRightArrow && (
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-all"
      >
        <ArrowRight className="w-6 h-6 text-gray-900" />
      </button>
    )}

    {/* Horizontal Scroll Section */}
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="overflow-x-auto scrollbar-hide scroll-smooth pb-6"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div className="flex gap-8 w-max px-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex bg-white rounded-3xl shadow-lg overflow-hidden w-[800px] h-[420px] flex-shrink-0 hover:shadow-2xl transition-all duration-300"
          >
            {/* Text Section */}
            <div className="flex flex-col justify-between p-10 w-full md:w-[55%]">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-5 leading-snug">
                  {testimonial.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-base font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-[45%] bg-gray-200">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Company Logos */}
  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-20 opacity-60">
    <img src={sol17} alt="GitHub" className="h-5 md:h-7 object-contain" />
    <img src={sol18} alt="The Weather Company" className="h-5 md:h-7 object-contain" />
    <img src={sol19} alt="Mindshare" className="h-5 md:h-7 object-contain" />
    <img src={sol20} alt="Nebula" className="h-5 md:h-7 object-contain" />
  </div>

  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `}</style>
</section>
  
    {/* fourth.one section */}

    {/* Mastercard Foundry Section */}
<section className="relative w-full bg-white py-16 px-4 lg:px-10 overflow-hidden">
  {/* Background Pattern */}
  <div
    className="absolute inset-0 opacity-15 pointer-events-none"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20px 20px, rgba(0,0,0,0.1) 1px, transparent 1px),
        radial-gradient(circle at 60px 60px, rgba(0,0,0,0.1) 1px, transparent 1px)
      `,
      backgroundSize: "70px 70px",
    }}
  />

  <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    {/* Left Image */}
    <div className="relative w-full lg:w-1/2">
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={sol21}
          alt="Mastercard Foundry"
          className="w-full h-[380px] object-cover"
        />
      </div>

      {/* Mastercard Logo Overlay */}
      <div className="absolute bottom-5 left-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
          alt="Mastercard Logo"
          className="h-10 w-auto"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
        How Mastercard Foundry expanded into new global product offerings
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        Mastercard Foundry scaled its engineering teams to develop promising
        products. Over the past four years, 10 Andela engineers have contributed
        to key projects with a focus on financial inclusion. The partnership has
        since expanded to include numerous other initiatives.
      </p>
      <button className="px-5 py-2.5 border border-gray-800 text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-all">
        Learn More
      </button>
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


