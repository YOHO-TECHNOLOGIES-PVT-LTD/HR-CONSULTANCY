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

export default function CareersHero() {
  const [activeTab, setActiveTab] = useState<"who" | "why" | "believe">("who");
  const [current, setCurrent] = useState(0);

  const tabs = {
    who: {
      title: "Who we are",
      desc: "Andela is a global, private talent marketplace powered by a unified platform to manage the complete global hiring lifecycle. We help digital technologists discover exciting roles solving complex problems at the world’s leading companies.",
      img: img2,
    },
    why: {
      title: "Why work here",
      desc: "We offer remote-first, flexible work that empowers technologists to thrive. At Andela, you’ll collaborate with brilliant minds while building solutions that impact millions across the globe.",
      img: img3,
    },
    believe: {
      title: "We believe in opportunity for everyone",
      desc: "Our mission is to unlock human potential by connecting brilliance with opportunity. We’re committed to creating a world where anyone, anywhere, can reach their full potential.",
      img: img4,
    },
  };

  const testimonials = [
    {
      image: img5,
      quote:
        "There are people from all around the world bringing their own perspectives and values. That's what gives us the fire to do what we do everyday.",
      name: "Rosa Langhammer",
      role: "Senior Director, Match Funnel",
    },
    {
      image: img6,
      quote:
        "Working here has taught me the value of collaboration and diversity — we learn and grow together every single day.",
      name: "Joara Silva",
      role: "Engineering Manager",
    },
    {
      image: img7,
      quote:
        "Andela’s global network inspires me daily — connecting talent and opportunity in ways that truly make an impact.",
      name: "Nicola Adams",
      role: "Head of Product Design",
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
      <section className="relative w-full h-[85vh] flex items-center overflow-hidden bg-[#0b3b39]">
        <img
          src={img1}
          alt="Andela team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b39]/95 via-[#0b3b39]/90 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-2xl pt-16 sm:pt-24 md:pt-32 lg:pt-40">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug mb-5">
              On a Mission Together: <br />
              Careers with Purpose <br />
              at Andela
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed tracking-wide">
              Our vision is to connect brilliance with opportunity. Join us in
              breaking down the barriers to connect digital talent with some of
              the best companies around the world.
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
                We exist to unlock <br /> human potential <br /> at scale
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Our purpose is to change the way the world works: when we connect
                brilliance with opportunity, everyone wins.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col space-y-4 mt-4 w-full max-w-md">
              <button
                onClick={() => setActiveTab("who")}
                className={`flex justify-between items-center px-6 py-4 rounded-xl border text-base font-semibold transition-all duration-300 ${
                  activeTab === "who"
                    ? "bg-[#fff2eb] text-gray-900 border-transparent shadow-sm"
                    : "border-[#fff2eb]/40 text-gray-800 hover:border-[#fff2eb]"
                }`}
              >
                Who We Are <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab("why")}
                className={`flex justify-between items-center px-6 py-4 rounded-xl border text-base font-semibold transition-all duration-300 ${
                  activeTab === "why"
                    ? "bg-[#fff2eb] text-gray-900 border-transparent shadow-sm"
                    : "border-[#fff2eb]/40 text-gray-800 hover:border-[#fff2eb]"
                }`}
              >
                Why Work Here <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab("believe")}
                className={`flex justify-between items-center px-6 py-4 rounded-xl border text-base font-semibold transition-all duration-300 ${
                  activeTab === "believe"
                    ? "bg-[#fff2eb] text-gray-900 border-transparent shadow-sm"
                    : "border-[#fff2eb]/40 text-gray-800 hover:border-[#fff2eb]"
                }`}
              >
                We Believe in Opportunity For Everyone{" "}
                <ArrowRight className="w-5 h-5" />
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
              <h3 className="text-2xl font-bold text-[#0b3b39]">
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
              "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.08) 1px, transparent 1px)",
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


       <section className="w-full bg-[#e9f5f2] flex flex-col lg:flex-row items-stretch overflow-hidden">
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
                  stroke="#9bc9be"
                  strokeWidth="1"
                  transform={`translate(${col * 20}, ${row * 20})`}
                />
              ))
            )}
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Cultivate your career: Discover
          <br /> our dynamic culture and perks
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 text-lg mb-12">
          At Andela, your work will prove rewarding in more ways than one.
        </p>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 text-gray-800">
          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Top-notch employee benefits
            </h3>
            <p className="text-sm leading-snug">
              Generous paid time off, parental leave, and compassionate leave
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">Work your way</h3>
            <p className="text-sm leading-snug">
              Flexible working arrangements provide balance
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Borderless opportunities
            </h3>
            <p className="text-sm leading-snug">
              We hire globally and all our roles are fully remote
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Opportunity for growth
            </h3>
            <p className="text-sm leading-snug">
              Equity (as a part of the compensation package)
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              Technology stipend
            </h3>
            <p className="text-sm leading-snug">
              Bring your own device: buy a laptop with funds from us
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">
              A focus on wellness
            </h3>
            <p className="text-sm leading-snug">
              Quarterly Forma Wellness stipend to encourage well-being
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 h-100 lg:h-auto">
        <img
          src={img8}
          alt="Cultivate your career"
          className="w-full h-full object-cover"
        />
      </div>
    </section>


     <section className="relative w-full bg-gradient-to-r from-[#164240] via-[#1d5a58] to-[#164240] overflow-hidden py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
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
            stroke="#66b8b2"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="350"
            cy="200"
            r="150"
            stroke="#66b8b2"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="200"
            cy="300"
            r="150"
            stroke="#66b8b2"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 text-left max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join our team!
        </h2>
        <p className="text-[#b9e4de] text-lg leading-relaxed">
          Discover a place where your talents are nurtured and your skills are celebrated.
          <br />
          Browse our current job openings to find a role that aligns with your passions and
          propels your career forward.
        </p>
      </div>

      {/* RIGHT BUTTON */}
      <div className="relative z-10 mt-10 lg:mt-0">
        <button className="bg-[#1ce1c9] text-[#003b37] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-[#18c3ad] transition-all duration-300">
          See All Jobs
        </button>
      </div>
    </section>


       <section className="relative w-full bg-[#f2f6ed] rounded-2xl py-16 px-8 md:px-14 lg:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute left-0 bottom-0 w-[350px] h-[350px] opacity-50 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, rgba(163, 200, 143, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
        {/* Left Section */}
        <div className="md:w-[22%] flex flex-col justify-center">
          <h2 className="text-4xl md:text-[42px] font-bold leading-tight text-[#0b0b0b]">
            Explore <br /> More
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row w-full md:w-[75%] border-l md:border-l-0 md:divide-x md:divide-[#d6dfd1] md:border-[#d6dfd1]">
          {/* Card 1 */}
          <div className="flex flex-col justify-start px-8 py-2 md:w-1/3 border-l md:border-l-0 border-[#d6dfd1]">
            <img src={img9} alt="About Andela" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold text-[#0b2c25] mb-2">
              About Andela
            </h3>
            <p className="text-[#37564a] text-sm leading-relaxed mb-3">
              We believe brilliance is evenly distributed, but opportunity is not.
            </p>
            <button className="flex items-center gap-2 text-[#0b2c25] font-semibold text-sm hover:underline">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-start px-8 py-2 md:w-1/3 border-t md:border-t-0 border-[#d6dfd1]">
            <img src={img10} alt="Blog" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold text-[#0b2c25] mb-2">
              Blog
            </h3>
            <p className="text-[#37564a] text-sm leading-relaxed mb-3">
              Learn about digital transformation, borderless hiring and more.
            </p>
            <button className="flex items-center gap-2 text-[#0b2c25] font-semibold text-sm hover:underline">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-start px-8 py-2 md:w-1/3 border-t md:border-t-0 border-[#d6dfd1]">
            <img src={img11} alt="Resources" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold text-[#0b2c25] mb-2">
              Resources
            </h3>
            <p className="text-[#37564a] text-sm leading-relaxed mb-3">
              Discover how to put Adaptive Hiring to work for your business.
            </p>
            <button className="flex items-center gap-2 text-[#0b2c25] font-semibold text-sm hover:underline">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
