import { useState, useEffect, useRef } from "react";
import { 
  FaUserTie, 
  FaDollarSign, 
  // FaRocket, 
  FaExpandArrowsAlt,
  // FaCheck,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
// Add the new icons for the second section
import { 
  // FaSkills, 
  FaUserClock, 
  FaMoneyBillWave, 
  FaUserFriends, 
  FaRocket, 
  FaSyncAlt 
} from "react-icons/fa";
import img7 from "../assets/solutions/Cloud and DevOps.avif";
import imgfocus from "../assets/solutions/job-interview-candidate-selection-employment.jpg";
import img12 from "../assets/solutions/business-people-working-using-technology-connect-with-others.jpg";
import img13 from "../assets/solutions/top-view-office-desk-with-growth-chart-analyzed-with-magnifying-glass.jpg";
import img14 from "../assets/solutions/businesspeople-planning-tasks-with-sticky-notes.jpg";
import img15 from "../assets/solutions/person-office-analyzing-checking-finance-graphs.jpg";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';

const tabs = [
  {
    label: "Quality Global Talent",
    icon: FaUserTie,
    image: img12,
    title: "Quality, Global Talent",
    desc: "Access a curated network of pre-vetted technical professionals across 135+ countries. KIAQ's rigorous screening process ensures you connect with top-tier engineers, data scientists, and cloud specialists who deliver exceptional results from day one.",
  },
  {
    label: "Cost Optimization",
    icon: FaDollarSign,
    image: img14,
    title: "Strategic Cost Optimization",
    desc: "Reduce technical hiring costs by up to 40% while maintaining enterprise-grade quality. Our global talent model eliminates geographical compensation barriers while ensuring fair market rates and sustainable partnerships.",
  },
  {
    label: "Agile Deployment",
    icon: FaRocket,
    image: img15,
    title: "Agile Talent Deployment",
    desc: "Deploy fully vetted technical teams within 48 hours, not weeks. Our streamlined onboarding process and ready-to-work professionals ensure immediate project impact and accelerated time-to-value for your critical initiatives.",
  },
  {
    label: "Rapid Scalability",
    icon: FaExpandArrowsAlt,
    image: img13,
    title: "Enterprise Scalability",
    desc: "Scale your technical capacity dynamically across multiple time zones and skill sets. From individual specialists to complete project teams, KIAQ provides the flexibility to align resources with evolving business demands.",
  },
];

const UI_CONSTANTS = {
  PRIMARY: "#ff4600",
  DARK: "#011123",
  WHITE: "#ffffff",
  GRAY: "#64748b",
};

const checkItems = [
  "Scale development capacity with pre-vetted technical talent",
  "Reduce recruitment complexity and accelerate project timelines",
  "Deliver critical business initiatives with predictable outcomes",
];

const dropdowns = [
  "Data Science and Artificial Intelligence",
  "Data Engineering and Analytics",
  "Cloud and DevOps",
  "Cybersecurity & Infrastructure",
];

const features = [
  {
    title: "Connect with elite global technical talent.",
    description:
      "Access a rigorously screened network of specialized engineers across DevOps, Data Science, AI, and Cloud technologies. Collaborate with experts who bring proven experience and innovative solutions. Scale your team quickly without compromising quality. Unlock strategic technical insights that accelerate project success.",
  },
  {
    title: "Build without geographical constraints.",
    description:
      "KIAQ delivers world-class engineering expertise to distributed teams, breaking down traditional hiring barriers. Engage top-tier talent regardless of location. Ensure seamless integration with your existing workflows. Empower your projects with global knowledge and diverse skill sets.",
  },
  {
    title: "Expertise that evolves with your needs.",
    description:
      "From initial prototypes to enterprise-scale solutions, our specialists provide scalable technical leadership. Adapt your team dynamically as requirements grow. Benefit from continuous guidance and technical mentorship. Drive innovation with flexible, forward-thinking strategies.",
  },
  {
    title: "Seamless global collaboration.",
    description:
      "Advanced remote work infrastructure enables productive cross-timezone partnerships. Communicate effortlessly across teams with modern collaboration tools. Reduce delays and increase efficiency with synchronized workflows. Foster a culture of accountability and transparency at scale.",
  },
  {
    title: "Innovation through diverse perspectives.",
    description:
      "Leverage global engineering talent to drive creative problem-solving and technical excellence. Gain insights from professionals with varied backgrounds and expertise. Encourage bold thinking that challenges conventional approaches. Deliver solutions that are both innovative and reliable.",
  },
];

// Second section items with icons
const secondSectionItems = [
  { 
    title: "Critical Skill Gaps", 
    desc: "Specialized roles remain unfilled for months",
    icon:   FaSyncAlt 

  },
  { 
    title: "Limited Engineering Capacity", 
    desc: "Insufficient bandwidth for innovation projects",
    icon: FaUserClock
  },
  { 
    title: "Escalating Talent Costs", 
    desc: "Competitive markets drive compensation inflation",
    icon: FaMoneyBillWave
  },
  { 
    title: "Extended Recruitment Cycles", 
    desc: "Traditional hiring processes delay project starts",
    icon: FaSyncAlt
  },
  { 
    title: "Slow Team Deployment", 
    desc: "Lengthy onboarding reduces immediate impact",
    icon: FaRocket
  },
  { 
    title: "High Technical Turnover", 
    desc: "Top talent seeks dynamic global opportunities",
    icon: FaUserFriends
  },
];

export default function AdaptiveHiring() {
  const [openFirst, setOpenFirst] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(0);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;

      contentRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const top = ref.offsetTop;
        const height = ref.offsetHeight;

        if (mid >= top && mid < top + height) {
          setActiveIndex(index);
        }
      });
    };

    const onScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleAccordion = (i: number) =>
    setActiveIndex((prev) => (prev === i ? -1 : i));

  return (
    <div className="font-['Inter_Variable',_sans-serif]">
      {/* FIRST SECTION */}
      <section className="relative w-full bg-[#062C2C] text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden font-['Inter_Variable',_sans-serif]">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/mnt/data/d629bbbb-541e-423e-82c6-129bbddad2a5.png')",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What is <br /> Adaptive Hiring?
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 text-justify sm:text-center">
            Adaptive Hiring applies agile methodology to technical recruitment, enabling organizations 
            to rapidly scale engineering capacity with pre-vetted global talent. This modern approach 
            transforms how enterprises access specialized skills and deliver digital innovation.
          </p>
        </div>
      </section>

      {/* SECOND SECTION - MODIFIED WITH REACT ICONS */}
      <section className="w-full bg-[#F2FBF9] py-16 sm:py-20 md:py-24 font-['Inter_Variable',_sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 sm:gap-12 md:gap-16">
          
          {/* Left Content */}
          <div className="text-justify">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              The Technical Talent<br />Challenge is Real<br />and Growing
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Organizations face increasing pressure to deliver digital transformation 
              while constrained by traditional hiring limitations. KIAQ's Adaptive Hiring 
              model provides the strategic solution for sustainable technical capacity.
            </p>
          </div>

          {/* Divider for larger screens */}
          <div className="hidden md:block border-l border-gray-300"></div>

          {/* Right Grid - MODIFIED WITH REACT ICONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-10 sm:gap-y-14">
            {secondSectionItems.map((item, i) => (
              <div key={i} className="flex gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff5500] flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-white font-['Inter_Variable',_sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 text-justify">
            Strategic Applications for Adaptive Hiring
          </h2>

          <div className="grid md:grid-cols-[auto_1fr] gap-4 sm:gap-6 md:gap-8">
            <img
              src={img7}
              className="w-full md:w-[240px] lg:w-[280px] h-[180px] sm:h-[200px] md:h-[180px] lg:h-[200px] rounded-xl sm:rounded-2xl shadow-md object-cover"
              alt="Strategic Talent Solutions"
            />

            <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
              <div
                className="flex justify-between items-start cursor-pointer group"
                onClick={() => setOpenFirst(!openFirst)}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 pr-3 group-hover:text-[#ff5500] transition-colors text-justify">
                  Enterprise Application Development
                </h3>

                <span
                  className={`transition-all duration-300 flex-shrink-0 text-lg sm:text-xl text-[#ff5500] ${
                    openFirst ? "rotate-180" : ""
                  }`}
                >
                  {openFirst ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFirst ? "max-h-[600px] mt-3 sm:mt-4 md:mt-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {checkItems.map((item, i) => (
                  <div key={i} className="flex gap-2 sm:gap-3 mb-2 sm:mb-3 items-start">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ff5500] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs sm:text-sm mt-0.5">
                      ✓
                    </span>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8 space-y-2 sm:space-y-3">
            {dropdowns.map((label, i) => {
              const isOpen = activeIndex === i;

              return (
                <div
                  key={i}
                  className={`bg-white border-2 rounded-xl sm:rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    isOpen ? "border-[#ff5500] shadow-md" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => toggleAccordion(i)}
                >
                  <div className={`p-3 sm:p-4 md:p-5 ${isOpen ? "bg-[#ff5500]/5" : ""} transition-colors duration-300`}>
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-base sm:text-lg md:text-xl font-semibold pr-3 transition-colors ${
                          isOpen ? "text-[#ff5500]" : "text-gray-900"
                        } text-justify`}
                      >
                        {label}
                      </span>
                      <span
                        className={`transition-all duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-[#ff5500]" : "text-gray-400"
                        }`}
                      >
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-2">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                        KIAQ delivers specialized {label.toLowerCase()} expertise through pre-vetted professionals 
                        who integrate seamlessly with your teams to drive innovation and deliver measurable business outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCROLL SECTION WITH IMAGE */}
      <section className="py-6 sm:py-10 md:py-12 lg:py-16 bg-white font-['Inter_Variable',_sans-serif]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-10 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
          {/* Image Section - Shows first on mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="lg:sticky lg:top-20 h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] flex items-center justify-center">
              <img
                src={imgfocus}
                className="max-w-full max-h-full object-contain"
                alt="Strategic Global Talent"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => {
                  contentRefs.current[i] = el;
                }}
                className="min-h-[35vh] sm:min-h-[45vh] lg:min-h-[60vh] flex items-center py-2 sm:py-4"
              >
                <div>
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1.5 sm:mb-2 transition-all leading-tight text-justify"
                    style={{
                      opacity: activeIndex === i ? 1 : 0.3,
                      color: UI_CONSTANTS.DARK,
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-base sm:text-lg transition-all leading-relaxed text-justify"
                    style={{
                      opacity: activeIndex === i ? 1 : 0.3,
                      color: UI_CONSTANTS.GRAY,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-10 px-3">
          <button
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold hover:shadow-xl transition-shadow text-sm sm:text-base w-full sm:w-auto"
            style={{
              backgroundColor: UI_CONSTANTS.PRIMARY,
              color: UI_CONSTANTS.WHITE,
            }}
          >
            Join Our Team
          </button>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 font-['Inter_Variable',_sans-serif]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[Black] px-3 text-justify lg:text-center">
          KIAQ Makes Adaptive Hiring Accessible
        </h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 border-b border-gray-200 pb-4 sm:pb-6 px-3 sm:px-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full cursor-pointer transition-all border ${
                selected === index
                  ? "bg-gradient-to-r from-[#ff5500] to-[#ff4600] text-white shadow-md border-transparent"
                  : "bg-white border-gray-200 text-[#ff5500] hover:shadow-sm"
              }`}
            >
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 flex items-center justify-center">
                <tab.icon className="text-current" />
              </div>
              <span className="font-medium text-xs sm:text-sm whitespace-nowrap">{tab.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-3 sm:px-4 md:px-6">
          <div className="relative bg-[#C8E0D8] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] flex items-center justify-center order-1 lg:order-1">
            <img
              src={tabs[selected].image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center px-2 sm:px-3 lg:px-0 order-2 lg:order-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A3A36] mb-2 sm:mb-3 leading-tight text-justify lg:text-left">
              {tabs[selected].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
              {tabs[selected].desc}
            </p>
          </div>
        </div>
      </section>

      {/* KIAQ ROI METRICS SECTION */}
      <section className="w-full bg-slate-950 relative overflow-hidden font-['Inter_Variable',_sans-serif]">
        {/* Background Pattern - Circular Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circles"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgb(20, 184, 166)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-3 sm:px-4 md:px-6 py-10 sm:py-12 md:py-16">
          {/* Header */}
          <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight px-2">
              Adaptive Hiring Delivers Measurable Business Outcomes
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 text-justify">
              Independent analysis demonstrates the significant economic impact of KIAQ's Adaptive Hiring model, 
              based on comprehensive customer interviews, enterprise surveys, and multi-year financial modeling.
            </p>
            <button className="bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg transition-all shadow-lg shadow-orange-500/20 text-sm sm:text-base w-full sm:w-auto">
              Read More
            </button>
          </div>

          {/* Metrics Cards Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {/* Hiring Efficiency Card */}
            <div className="bg-slate-900/40 backdrop-blur-sm border border-orange-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-orange-700/60 transition-all">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-5">
                Hiring Efficiency
              </h3>
              <div className="text-orange-400 mb-4 sm:mb-6 md:mb-8">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">106+</span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ml-1">hours</span>
              </div>
              <div className="border-t border-orange-900/40 pt-2 sm:pt-3 md:pt-4">
                <p className="text-gray-300 text-sm sm:text-base">Recruitment time saved per technical hire</p>
              </div>
            </div>

            {/* Project Productivity Card */}
            <div className="bg-slate-900/40 backdrop-blur-sm border border-orange-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-orange-700/60 transition-all">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-5">
                Project Velocity
              </h3>
              <div className="text-orange-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">33%</div>
              <div className="border-t border-orange-900/40 pt-2 sm:pt-3 md:pt-4">
                <p className="text-gray-300 text-sm sm:text-base">Accelerated project completion timelines</p>
              </div>
            </div>

            {/* Talent Compliance Risk Card */}
            <div className="bg-slate-900/40 backdrop-blur-sm border border-orange-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-orange-700/60 transition-all sm:col-span-2 md:col-span-1">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-5">
                Risk Mitigation
              </h3>
              <div className="text-orange-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">
                640K
              </div>
              <div className="border-t border-orange-900/40 pt-2 sm:pt-3 md:pt-4">
                <p className="text-gray-300 text-sm sm:text-base">
                  Avoided compliance and operational risks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#f8fafc] text-black py-24 overflow-hidden font-['Inter_Variable',_sans-serif]">
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
              Adaptive Hiring Insights & Resources
            </h2>
            <button className="mt-6 md:mt-0 border border-gray-800 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Access All Resources
            </button>
          </div>

          {/* Cards Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
              <div className="overflow-hidden">
                <img
                  src={tenimg}
                  alt="Flexible Hiring Models"
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
                  Hiring Strategy
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
                  Flexible Hiring Models: Remote, Hybrid & On-Demand Talent
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
                  alt="Skills-Based Hiring"
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
                  Recruitment Innovation
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
                  Skills-Based Hiring: Moving Beyond Traditional Credentials
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
                >
                  Read More <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
              <div className="overflow-hidden">
                <img
                  src={twlimg}
                  alt="Agile Recruitment"
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
                  Process Optimization
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
                  Agile Recruitment: Adapting to Changing Market Demands
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
    </div>
  );
}