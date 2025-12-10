import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/about/670815e7263cb4930a54a7e8_Blog - Mental Health Day 570x570 (1).jpg";
import img2 from "../assets/about/6662a2173998700d8c4937f4_Who We Are (2)-p-800.webp";
import img3 from "../assets/about/6662a217a2a23e146edc4902_Why Work Here (2)-p-800.webp";
import img4 from "../assets/about/6662a21707e06534583d67d8_We believe in opportunity for everyone (2)-p-800.webp";
import img5 from "../assets/about/66354d8b1dcb83c4e8c64adb_Rosa.avif";
import img6 from "../assets/about/66354e1e7267bf2d26690ba7_Joara.avif";
import img7 from "../assets/about/66550e5bf2437dd72f0edb47_Nicola.avif";
import img8 from "../assets/about/6662a3d705da38efa79b5b81_Culitvate your career.webp";
import img9 from "../assets/about/6629fb6ad6ea8c68148fcef7_icons8-conference.svg";
import img10 from "../assets/about/6629fb6bd6ea8c68148fcf17_icons8-magazine 1 (1).svg";
import img11 from "../assets/about/6629fb6bd6ea8c68148fcf26_icons8-versions 1.svg";

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

export default function CareersHero() {
  const [activeTab, setActiveTab] = useState<"who" | "why" | "believe">("who");
  const [current, setCurrent] = useState(0);

  const tabs = {
    who: {
      title: "Our Leadership Team",
      desc: "Meet the visionary leaders driving KIAQ's mission forward. Our executive team brings decades of combined experience in technology, talent development, and global business strategy to deliver exceptional results.",
      img: img2,
    },
    why: {
      title: "Our Vision & Values",
      desc: "At KIAQ, we believe in empowering organizations through exceptional talent. Our values of innovation, integrity, and impact guide every decision we make and relationship we build.",
      img: img3,
    },
    believe: {
      title: "Our Global Impact",
      desc: "We're committed to creating opportunities that transcend borders. Through strategic partnerships and innovative solutions, we're building a future where talent knows no boundaries.",
      img: img4,
    },
  };

  const testimonials = [
    {
      image: img5,
      quote:
        "Our leadership philosophy is built on trust, transparency, and the belief that great talent can come from anywhere. We're committed to building bridges between opportunity and expertise.",
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
    },
    {
      image: img6,
      quote:
        "What drives me every day is seeing how our work transforms organizations and careers. We're not just matching skills to roles—we're building lasting partnerships.",
      name: "Michael Chen",
      role: "Chief Technology Officer",
    },
    {
      image: img7,
      quote:
        "The diversity of our leadership team reflects our global mission. We bring perspectives from every corner of the world to solve complex challenges for our clients.",
      name: "Elena Rodriguez",
      role: "Chief Operations Officer",
    },
  ];

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { image, quote, name, role } = testimonials[current];
  const currentTab = tabs[activeTab as keyof typeof tabs];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
        <img
          src={img1}
          alt="KIAQ leadership team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011123]/95 via-[#011123]/90 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-2xl pt-16 sm:pt-24 md:pt-32 lg:pt-40">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug mb-5">
              Meet the Leadership Team: <br />
              Driving Innovation and <br />
              Excellence at KIAQ
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed tracking-wide">
              Get to know the visionary leaders behind KIAQ's mission to connect world-class 
              talent with transformative opportunities. Our team brings decades of expertise 
              in technology and global talent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* MIDDLE SECTION */}
      <section className="relative w-full bg-white py-24 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Leadership That <br /> Inspires and <br /> Delivers Results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Our executive team combines strategic vision with deep industry expertise 
                to drive innovation and create lasting impact for our clients and partners.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col space-y-4 mt-4 w-full max-w-md">
              <button
                onClick={() => setActiveTab("who")}
                className={`flex justify-between items-center px-6 py-4 rounded-xl border text-base font-semibold transition-all duration-300 ${
                  activeTab === "who"
                    ? "bg-[#ff4600] text-white border-transparent shadow-sm"
                    : "border-[#ff4600]/40 text-gray-800 hover:border-[#ff4600]"
                }`}
              >
                Our Leadership Team <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab("why")}
                className={`flex justify-between items-center px-6 py-4 rounded-xl border text-base font-semibold transition-all duration-300 ${
                  activeTab === "why"
                    ? "bg-[#ff4600] text-white border-transparent shadow-sm"
                    : "border-[#ff4600]/40 text-gray-800 hover:border-[#ff4600]"
                }`}
              >
                Our Vision & Values <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab("believe")}
                className={`flex justify-between items-center px-6 py-4 rounded-xl border text-base font-semibold transition-all duration-300 ${
                  activeTab === "believe"
                    ? "bg-[#ff4600] text-white border-transparent shadow-sm"
                    : "border-[#ff4600]/40 text-gray-800 hover:border-[#ff4600]"
                }`}
              >
                Our Global Impact <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center items-start lg:pl-8">
            <img
              src={currentTab.img}
              alt={currentTab.title}
              className="w-full rounded-2xl shadow-lg object-cover"
            />
            <div className="mt-12 space-y-3">
              <h3 className="text-2xl font-bold" style={{ color: UI_CONSTANTS.DARK }}>
                {currentTab.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                {currentTab.desc}
              </p>
            </div>
          </div>
        </div>

        {/* PATTERN */}
        <div
          className="absolute top-0 right-0 w-[420px] h-[420px] opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20px 20px, rgba(255,70,0,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </section>

      {/* TESTIMONIAL SLIDER SECTION */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image with fade animation */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            key={current} // ✅ forces re-render on slide change
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-opacity duration-700 opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-8 lg:px-20">
          <div className="max-w-3xl text-left text-white">
            <p className="text-3xl md:text-5xl font-extrabold leading-snug mb-6">
              “{quote}”
            </p>
            <div>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-sm uppercase tracking-wide opacity-80">{role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-200 transition"
        >
          <ChevronRight size={28} />
        </button>
      </section>


       <section className="w-full bg-[#f8f9fa] flex flex-col lg:flex-row items-stretch overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 px-6 lg:px-20 py-16 flex flex-col justify-center relative">
        {/* Decorative pattern (top-right corner) */}
        <div className="absolute top-6 right-6 hidden lg:block opacity-40">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 6 }).map((_, col) => (
                <path
                  key={`${row}-${col}`}
                  d="M10 0 L20 10 L10 20 L0 10 Z"
                  fill="none"
                  stroke="#ff4600"
                  strokeWidth="1"
                  transform={`translate(${col * 20}, ${row * 20})`}
                />
              ))
            )}
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Executive Leadership: <br />
          Driving Strategic <br />
          Excellence
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 text-lg mb-12">
          Our leadership team combines deep industry expertise with a passion for innovation and results.
        </p>

        {/* Leadership Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 text-gray-800">
          <div className="border-l-2 border-[#ff4600] pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Strategic Vision
            </h3>
            <p className="text-sm leading-snug">
              Decades of experience shaping technology and talent strategies for global organizations
            </p>
          </div>

          <div className="border-l-2 border-[#ff4600] pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">Global Perspective</h3>
            <p className="text-sm leading-snug">
              Leadership experience spanning multiple continents and diverse markets
            </p>
          </div>

          <div className="border-l-2 border-[#ff4600] pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Innovation Focus
            </h3>
            <p className="text-sm leading-snug">
              Commitment to driving technological innovation and digital transformation
            </p>
          </div>

          <div className="border-l-2 border-[#ff4600] pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Client Success
            </h3>
            <p className="text-sm leading-snug">
              Proven track record of delivering exceptional value and results for partners
            </p>
          </div>

          <div className="border-l-2 border-[#ff4600] pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Team Development
            </h3>
            <p className="text-sm leading-snug">
              Focus on mentoring and developing the next generation of industry leaders
            </p>
          </div>

          <div className="border-l-2 border-[#ff4600] pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Industry Recognition
            </h3>
            <p className="text-sm leading-snug">
              Award-winning leadership with numerous industry accolades and achievements
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 h-100 lg:h-auto">
        <img
          src={img8}
          alt="KIAQ leadership team"
          className="w-full h-full object-cover"
        />
      </div>
    </section>


     <section className="relative w-full overflow-hidden py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
      {/* Decorative circles on right */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] opacity-20 hidden lg:block pointer-events-none">
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="#ff4600"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="350"
            cy="200"
            r="150"
            stroke="#ff4600"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="200"
            cy="300"
            r="150"
            stroke="#ff4600"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 text-left max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join Our Leadership Journey!
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Be part of a leadership team that's shaping the future of global talent solutions.
          <br />
          Explore opportunities to contribute your expertise and drive meaningful impact.
        </p>
      </div>

      {/* RIGHT BUTTON */}
      <div className="relative z-10 mt-10 lg:mt-0">
        <button 
          className="font-semibold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-all duration-300"
          style={{
            backgroundColor: UI_CONSTANTS.PRIMARY,
            color: UI_CONSTANTS.WHITE
          }}
        >
          Connect With Our Team
        </button>
      </div>
    </section>


       <section className="relative w-full bg-gray-50 rounded-2xl py-16 px-8 md:px-14 lg:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute left-0 bottom-0 w-[350px] h-[350px] opacity-50 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, rgba(255,70,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
        {/* Left Section */}
        <div className="md:w-[22%] flex flex-col justify-center">
          <h2 className="text-4xl md:text-[42px] font-bold leading-tight" style={{ color: UI_CONSTANTS.DARK }}>
            Leadership <br /> Insights
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row w-full md:w-[75%] border-l md:border-l-0 md:divide-x md:divide-gray-300 md:border-gray-300">
          {/* Card 1 */}
          <div className="flex flex-col justify-start px-8 py-2 md:w-1/3 border-l md:border-l-0 border-gray-300">
            <img src={img9} alt="Executive Profiles" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
              Executive Profiles
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Learn about our leadership team's background, expertise, and vision for the future.
            </p>
            <button className="flex items-center gap-2 font-semibold text-sm hover:underline" style={{ color: UI_CONSTANTS.DARK }}>
              Meet Our Leaders <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-start px-8 py-2 md:w-1/3 border-t md:border-t-0 border-gray-300">
            <img src={img10} alt="Leadership Blog" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
              Leadership Blog
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Insights and perspectives from our executives on industry trends and innovation.
            </p>
            <button className="flex items-center gap-2 font-semibold text-sm hover:underline" style={{ color: UI_CONSTANTS.DARK }}>
              Read Insights <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-start px-8 py-2 md:w-1/3 border-t md:border-t-0 border-gray-300">
            <img src={img11} alt="Strategic Vision" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
              Strategic Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Discover our roadmap for growth and innovation in the global talent marketplace.
            </p>
            <button className="flex items-center gap-2 font-semibold text-sm hover:underline" style={{ color: UI_CONSTANTS.DARK }}>
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}