import React, { useState, useEffect } from 'react';
import img1 from "../assets/manpower/1.png";
import img2 from "../assets/manpower/2.png";
import img3 from "../assets/manpower/3.png";
import img4 from "../assets/manpower/4.png";
import img5 from "../assets/manpower/5.png";
import { ArrowRight } from 'lucide-react';
import { FaGlobe, FaPassport, FaRegFileAlt, FaGlobeAmericas } from "react-icons/fa";
import img6 from "../assets/manpower/w1.png";
import img7 from "../assets/manpower/w2.png";
import img8 from "../assets/manpower/w3.png";
import img9 from "../assets/manpower/w4.png";
import { FaUniversity, FaBriefcase, FaBusinessTime, FaHospitalSymbol, FaPlane } from "react-icons/fa";
import officeImg from "../assets/manpower/About.jpg";
// import agentImg from "../assets/manpower/pass.png";
import webimg1 from "../assets/home2/1.png";
import webimg2 from "../assets/home2/2.png";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "1. What types of overseas jobs do you offer?",
    answer: "We provide placements for blue-collar workers, healthcare professionals, skilled tradespeople, and technical staff across Singapore, Gulf countries, and Schengen regions with verified employers."
  },
  { 
    question: "2. What are the basic requirements for overseas jobs?", 
    answer: "Requirements vary by country and job type but generally include valid passport, relevant experience certificates, trade test certificates (for Singapore), medical fitness, and basic language skills." 
  },
  { 
    question: "3. Do you provide training for trade tests?", 
    answer: "Yes, we offer comprehensive training for Singapore SEC/SEC(K) trade tests in various categories including electrician, plumber, welder, and other construction trades." 
  },
  { 
    question: "4. How long does the job placement process take?", 
    answer: "The process typically takes 3-6 months, including documentation, interviews, trade tests (if required), visa processing, and deployment arrangements." 
  },
  { 
    question: "5. What support do you provide after placement?", 
    answer: "We offer post-placement support including airport pickup, accommodation assistance, contract guidance, and 24/7 emergency support for all our placed candidates." 
  },
];

type Country = {
  name: string;
  flag: string;
};

type Service = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: string;
  bg: string;
  text: string;
};

type VisaOption = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

type Testimonial = {
  text: string;
  name: string;
  role: string;
  img: string;
};

// Main Component
export default function CountryCoverageSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const countries: Country[] = [
    { name: "Singapore", flag: img1 },
    { name: "UAE/Dubai", flag: img2 },
    { name: "Saudi Arabia", flag: img3 },
    { name: "Qatar", flag: img4 },
    { name: "Kuwait", flag: img5 },
  ];

  const services: Service[] = [
    {
      id: "01",
      title: "Global Job Placements",
      desc: "Direct connections with verified employers in multiple countries for blue-collar, healthcare, and skilled worker placements.",
      icon: <FaGlobeAmericas size={34} />,
      img: img6,
      bg: "bg-[#02275D]",
      text: "text-white",
    },
    {
      id: "02",
      title: "Trade Test Training",
      desc: "Comprehensive preparation for Singapore SEC/SEC(K) trade tests in construction, MEP, and industrial trades.",
      icon: <FaPassport size={34} />,
      img: img7,
      bg: "bg-[#D63232]",
      text: "text-white",
    },
    {
      id: "03",
      title: "Visa Processing",
      desc: "End-to-end visa processing including work permits, employment visas, and immigration formalities for smooth relocation.",
      icon: <FaRegFileAlt size={34} />,
      img: img8,
      bg: "bg-[#D63232]",
      text: "text-white",
    },
    {
      id: "04",
      title: "Documentation Support",
      desc: "Complete assistance with CV preparation, certificates attestation, passport processing and all required employment documents.",
      icon: <FaGlobe size={34} />,
      img: img9,
      bg: "bg-[#02275D]",
      text: "text-white",
    },
  ];

  const visaOptions: VisaOption[] = [
    { label: "Blue-Collar Jobs", icon: <FaUniversity size={26} />, active: true },
    { label: "Healthcare Jobs", icon: <FaBriefcase size={26} /> },
    { label: "Skilled Trades", icon: <FaBusinessTime size={26} /> },
    { label: "Factory Workers", icon: <FaHospitalSymbol size={26} /> },
    { label: "Hotel Staff", icon: <FaPlane size={26} /> },
    { label: "Drivers", icon: <FaPassport size={26} /> },
  ];

  // Testimonial data for auto-slide
  const testimonials: Testimonial[] = [
    {
      text: "I got placed as a welder in Singapore through their agency. The trade test training was excellent and their documentation support made the entire process smooth. Now earning 3x my previous salary with better benefits!",
      name: "Ravi Verma",
      role: "Welder - Singapore",
      img: webimg1,
    },
    {
      text: "As a nurse, I struggled to find overseas opportunities. This agency placed me in a reputed hospital in Qatar with complete documentation and visa support. Professional service throughout the entire process!",
      name: "Priya Sharma",
      role: "Staff Nurse - Qatar",
      img: webimg2,
    },
    {
      text: "Their support for Singapore trade test preparation was exceptional. I passed my SEC test and got placed as a steel fixer within 4 months. Truly life-changing opportunity with better career growth!",
      name: "Suresh Patel",
      role: "Steel Fixer - Singapore",
      img: webimg1,
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <>
      <section 
        className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6"
        style={{ fontFamily: "'Inter Variable', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-2 sm:mb-3 uppercase">Countries We Serve</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Global Job Opportunities Across <br className="hidden sm:block" /> Multiple Countries
          </h2>

          {/* Country Cards */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-4 sm:gap-6">
            {countries.map((c, i) => (
              <div
                key={i}
                className="w-full xs:w-40 sm:w-48 bg-gray-100 rounded-2xl shadow-sm flex flex-col items-center py-6 hover:shadow-md transition mx-auto"
              >
                <img src={c.flag} alt={c.name} className="w-12 h-12 sm:w-16 sm:h-16 mb-4 rounded-full object-cover" />
                <p className="text-base sm:text-lg font-semibold text-gray-800 text-center">{c.name}</p>
                <button className="mt-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-200">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="text-left px-2 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
                Building Careers Across <br className="hidden sm:block" /> International Borders
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Working abroad offers more than just a job—it's an opportunity for 
                professional growth, skill development, financial stability, and 
                exposure to global work cultures. We make this journey smooth and successful.
              </p>

              <button className="bg-red-600 text-white px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-red-700 flex items-center gap-2">
                Explore Jobs <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <div className="w-40 h-56 sm:w-64 sm:h-80 bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: `url(${webimg1})`  }}></div>
              <div className="w-40 h-56 sm:w-64 sm:h-80 bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: `url(${webimg2})`  }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const isSecondRow = i >= 2;

          return (
            <React.Fragment key={i}>
              {isSecondRow ? (
                <>
                  <div className={`${s.bg} ${s.text} p-8 sm:p-10 flex flex-col justify-between`}> 
                    <div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white rounded-full mb-3 sm:mb-4 text-xs sm:text-sm opacity-80">
                        {s.id}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{s.title}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed opacity-90">{s.desc}</p>
                    </div>
                    <div className="text-3xl sm:text-4xl mt-4 sm:mt-6">{s.icon}</div>
                  </div>

                  <div
                    className="h-[220px] sm:h-[280px] md:h-[330px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${s.img})` }}
                  ></div>
                </>
              ) : (
                <>
                  <div
                    className="h-[220px] sm:h-[280px] md:h-[330px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${s.img})` }}
                  ></div>

                  <div className={`${s.bg} ${s.text} p-8 sm:p-10 flex flex-col justify-between`}> 
                    <div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white rounded-full mb-3 sm:mb-4 text-xs sm:text-sm opacity-80">
                        {s.id}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{s.title}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed opacity-90">{s.desc}</p>
                    </div>
                    <div className="text-3xl sm:text-4xl mt-4 sm:mt-6">{s.icon}</div>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </section>

      <div className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-xs tracking-widest text-gray-500 mb-1 sm:mb-2 uppercase">
            Job Categories Available
          </p>
          <h2 className="text-2xl sm:text-4xl font-semibold leading-snug text-gray-900">
            Explore Overseas Job <br className="hidden sm:block" /> Opportunities by Category
          </h2>
        </div>

        {/* Visa Options - Now Job Categories */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {visaOptions.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 sm:p-6 w-full h-28 sm:h-32 flex flex-col items-center justify-center text-center text-xs sm:text-sm font-medium shadow-sm transition
                ${item.active ? "bg-gray-100 text-gray-700" : "bg-gray-100 text-gray-700"}`}
            >
              <div className="mb-2 text-lg sm:text-xl">{item.icon}</div>
              {item.label}
            </div>
          ))}
        </div>

        {/* Content + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 max-w-6xl w-full">
          {/* Left */}
          <div className="flex flex-col justify-center px-1 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-gray-900 leading-snug">
              Unlock International <br className="hidden sm:block" /> Career Opportunities
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
              We provide expert guidance for overseas employment including job matching, 
              trade test preparation, document processing, and complete visa support 
              for various job categories across multiple countries.
            </p>

            <ul className="text-xs sm:text-sm text-gray-800 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-center gap-2">✔ Direct Employer Connections</li>
              <li className="flex items-center gap-2">✔ Trade Test Training</li>
              <li className="flex items-center gap-2">✔ High Placement Success Rate</li>
            </ul>

            <button className="bg-red-600 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full flex items-center gap-2 w-fit text-xs sm:text-sm hover:bg-red-700 transition">
              View All Jobs <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-xl">
            <img src={img6} alt="Overseas Workers" className="w-full h-full object-cover" />

            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 bg-white bg-opacity-95 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow text-center">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">5000+</p>
              <p className="text-gray-600 text-[10px] sm:text-sm">Candidates Placed</p>
            </div>

            <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 bg-white bg-opacity-95 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow text-center">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">25+</p>
              <p className="text-gray-600 text-[10px] sm:text-sm">Job Categories</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 p-4 sm:p-6 md:p-8">
        {/* Left Images */}
        <div className="relative flex-1 flex justify-center items-center">
          <img
            src={officeImg}
            alt="Our Placement Center"
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Right FAQ */}
        <div className="flex-1 relative mt-6 lg:mt-0">
          <p className="text-xs sm:text-sm text-gray-400 uppercase mb-2">
            Frequently Asked Questions
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Common Questions About Overseas Jobs
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                onClick={() => toggleIndex(index)}
              >
                <div className="flex justify-between items-center gap-2">
                  <span className="font-medium text-sm sm:text-base">{item.question}</span>
                  <span className="text-xs sm:text-sm">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </div>

                {openIndex === index && item.answer && (
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-Slide Testimonial Section */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Content */}
          <div>
            <p className="text-xs sm:text-sm tracking-widest text-gray-500 font-semibold mb-1 sm:mb-2">
              OUR SUCCESS STORIES
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6 sm:mb-8 md:mb-10">
              Success Stories from Our <br className="hidden sm:block" /> Placed Candidates
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="bg-red-600 rounded-xl px-8 py-6 sm:px-10 sm:py-8 text-white shadow-md w-full sm:w-auto">
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-1">5000+</h3>
                <p className="text-sm sm:text-[15px] leading-relaxed opacity-90">
                  Successful Placements Across <br className="hidden sm:block" /> Multiple Countries
                </p>
              </div>

              <div className="bg-blue-900 rounded-xl px-8 py-6 sm:px-10 sm:py-8 text-white shadow-md w-full sm:w-auto">
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-1">4.8+</h3>
                <p className="text-sm sm:text-[15px] leading-relaxed opacity-90">
                  Customer Satisfaction Rating <br className="hidden sm:block" /> From Our Candidates
                </p>
              </div>
            </div>
          </div>

          {/* Right Testimonial Carousel */}
          <div className="relative">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-[15px]">
                {currentTestimonial.text}
              </p>

              <hr className="border-gray-300 mb-4 sm:mb-6" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
                <div className="flex items-center gap-3">
                  <img
                    src={currentTestimonial.img}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    alt={currentTestimonial.name}
                  />
                  <div>
                    <h4 className="text-gray-900 font-semibold text-sm sm:text-base">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{currentTestimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 3000);
                  }}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                    index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}