import { useState, useEffect } from 'react';
import kiaqimag from '../assets/ex1.jpg'
import fvimg from '../assets/whykiaq/img7.jpg';
import ninth from '../assets/whykiaq/team-man-woman-working-media-field-with-laptop-tablet.jpg';
import omeimg1 from '../assets/whykiaq/e1.jpg';
import omeimg2 from '../assets/whykiaq/e2.jpg';

import { UI_CONSTANTS } from '../constants/colors';

const useCases = [
  {
    title: "Digital Transformation in Oil & Gas Energy Sector",
    description: "Kiaq Technologies delivers comprehensive digital solutions for the oil and gas industry, enhancing operational efficiency, safety, and sustainability. Our expertise includes real-time monitoring systems, predictive maintenance platforms, asset management solutions, and operational automation.",
    category: "Oil & Gas Energy",
    bgColor: "#2C4A4D",
    patternColor: "#3D5F63",
    patternOpacity: "0.6"
  },
  {
    title: "Smart Manufacturing & Industrial Automation Solutions", 
    description: "Kiaq Technologies provides specialized IT solutions for manufacturing enterprises, driving operational modernization through automation, IoT integration, real-time analytics, and customized ERP implementations.",
    category: "Manufacturing",
    bgColor: "#D5E8EC",
    patternColor: "#BDD9DE",
    patternOpacity: "0.5"
  },
  {
    title: "Digital Commerce & Supply Chain Optimization",
    description: "Kiaq Technologies delivers advanced technological solutions for the consumer goods sector, enabling brands to maintain competitive advantage in evolving digital marketplaces.",
    category: "Consumer Goods",
    bgColor: "#C8E4D4",
    patternColor: "#B0D6BE",
    patternOpacity: "0.5"
  },
  {
    title: "Renewable Energy Management & Grid Optimization",
    description: "Kiaq Technologies implements cutting-edge digital solutions for the renewable energy sector, enabling intelligent, efficient, and sustainable energy management.",
    category: "Renewable Energy", 
    bgColor: "#F5F1E8",
    patternColor: "#E3DCC9",
    patternOpacity: "0.5"
  },
  {
    title: "Digital Governance & Public Service Transformation",
    description: "Kiaq Technologies specializes in delivering secure, scalable, and citizen-focused digital solutions for public sector organizations.",
    category: "Public Sector",
    bgColor: "#E5E5E5",
    patternColor: "#CFCFCF",
    patternOpacity: "0.5"
  },
  {
    title: "Healthcare Digital Transformation & Telemedicine Platforms",
    description: "Kiaq Technologies delivers advanced IT solutions specifically designed for healthcare organizations.",
    category: "Healthcare",
    bgColor: "#C8E4D4",
    patternColor: "#B0D6BE",
    patternOpacity: "0.5"
  },
  {
    title: "HSSE Compliance & Risk Management Systems",
    description: "Kiaq Technologies integrates comprehensive Health, Safety, Security, and Environmental standards throughout our operational framework.",
    category: "HSSE",
    bgColor: "#E5E5E5",
    patternColor: "#CFCFCF",
    patternOpacity: "0.5"
  },
  {
    title: "FinTech Innovation & Digital Banking Solutions",
    description: "Kiaq Technologies specializes in delivering secure, high-performance IT solutions for financial services organizations.",
    category: "Financial Services",
    bgColor: "#E5E5E5",
    patternColor: "#CFCFCF",
    patternOpacity: "0.5"
  },
  {
    title: "Telecom Infrastructure & Network Modernization",
    description: "Kiaq Technologies delivers advanced IT solutions for telecommunications providers, enabling seamless connectivity and infrastructure optimization.",
    category: "Telecommunications",
    bgColor: "#E5E5E5",
    patternColor: "#CFCFCF",
    patternOpacity: "0.5"
  }
];

interface UseCase {
  title: string;
  description: string;
  category: string;
  bgColor: string;
  patternColor: string;
  patternOpacity: string;
}

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
}

function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  const isDark = useCase.bgColor === "#2C4A4D";
  const textColor = isDark ? "#FFFFFF" : UI_CONSTANTS.DARK;
  const uniqueId = `pattern-${index}`;

  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div 
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl font-['Inter_Variable',_sans-serif]"
      onClick={handleClick}
    >
      <div 
        className="relative rounded-3xl overflow-hidden border border-gray-200 h-full min-h-[320px] transition-all duration-500"
        style={{ backgroundColor: useCase.bgColor }}
      >
        {/* Original Hexagonal Pattern with Four-Pointed Star */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <pattern id={uniqueId} x="0" y="0" width="90" height="78" patternUnits="userSpaceOnUse">
              <g fill="none" stroke={useCase.patternColor} strokeWidth="1.5" opacity={useCase.patternOpacity}>
                {/* Hexagon pattern */}
                <path d="M45,0 L67.5,13 L67.5,39 L45,52 L22.5,39 L22.5,13 Z" />
                <path d="M0,26 L22.5,39 L22.5,65 L0,78 L-22.5,65 L-22.5,39 Z" />
                <path d="M90,26 L112.5,39 L112.5,65 L90,78 L67.5,65 L67.5,39 Z" />
                
                {/* Four-pointed star in center */}
                <path d="M45,20 L47,26 L53,26 L48,30 L50,36 L45,32 L40,36 L42,30 L37,26 L43,26 Z" 
                      fill={useCase.patternColor} 
                      opacity={useCase.patternOpacity} 
                      stroke="none" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${uniqueId})`} />
        </svg>

        {/* Hover Overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
          style={{ 
            background: `linear-gradient(135deg, ${useCase.bgColor} 0%, ${useCase.patternColor} 100%)` 
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Category Badge */}
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm mr-3">
              <svg width="16" height="16" viewBox="0 0 14 15" fill="none">
                <path 
                  d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z" 
                  fill={textColor}
                />
              </svg>
            </div>
            <span 
              className="text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm"
              style={{ color: textColor, letterSpacing: '0.05em' }}
            >
              {useCase.category}
            </span>
          </div>

          {/* Title */}
          <h3 
            className="text-xl font-bold leading-tight mb-4 flex-grow group-hover:translate-y-[-5px] transition-transform duration-300"
            style={{ color: textColor }}
          >
            {useCase.title}
          </h3>

          {/* Description - Hidden by default, shows on hover */}
          <div className="overflow-hidden">
            <p 
              className="text-sm leading-relaxed transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
              style={{ color: textColor, opacity: 0.9 }}
            >
              {useCase.description}
            </p>
          </div>

          {/* CTA Arrow */}
          <div className="flex justify-end mt-6">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                style={{ color: textColor }}
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Second Section with Auto Slide
function AutoSlideSection() {
  const images = [ fvimg, omeimg1, omeimg2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-gray-50 text-black py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden font-['Inter_Variable',_sans-serif]">
      {/* Background Pattern (optional subtle circles) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.andela.com/_next/static/media/circle-pattern.1c4b7dc2.svg')] opacity-10 bg-no-repeat bg-right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
        
        {/* Left Image with Auto Slide */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
            {/* Image Slides */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Industry Solutions ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-orange-500 w-6' 
                      : 'bg-white/70 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 lg:space-y-5">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase">
            ✦ Core Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-snug text-gray-900">
            Scalable Tech Built for Industry-Focused Digital Execution
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            At Kiaq Technologies, we specialize in delivering scalable technology solutions tailored to the unique digital demands of diverse industries. Whether it's manufacturing, healthcare, finance, or retail, our expert team crafts agile, high-performance systems designed to streamline operations, enhance user experience, and accelerate digital growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function WhyKiaq() {
  return (
    <div className="font-['Inter_Variable',_sans-serif]">
      <section
        className="relative min-h-screen flex items-center bg-black text-white bg-cover bg-center bg-no-repeat font-['Inter_Variable',_sans-serif]"
        style={{ backgroundImage: `url(${kiaqimag})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 max-w-xl space-y-4 sm:space-y-5">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm sm:text-base">
                KIAQ TECHNOLOGIES
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug">
                Enterprise Technology <br />
                Solutions
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                Kiaq Technologies delivers innovative, scalable technology solutions that drive digital transformation and accelerate business growth across diverse industry sectors.
              </p>

              <button className="mt-4 sm:mt-5 bg-orange-500 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-orange-400 transition w-full sm:w-auto">
                Schedule Consultation
              </button>
            </div>

            {/* Spacer for layout balance */}
            <div className="hidden md:block md:flex-1" />
          </div>
        </div>
      </section>

      {/* Second Section with Auto Slide */}
      <AutoSlideSection />

      {/* Fifth Section */}
      <section className="py-6 sm:py-10 md:py-14 lg:py-16 px-3 sm:px-6 font-['Inter_Variable',_sans-serif]" style={{ backgroundColor: UI_CONSTANTS.WHITE }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-6 sm:mb-10 lg:mb-12 px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight" style={{ color: UI_CONSTANTS.DARK }}>
              Driving Industrial Evolution Through Intelligent Technology Solutions
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl mx-auto text-justify">
              Kiaq Technologies empowers industrial organizations to evolve and excel in the digital age through sophisticated, future-ready technology solutions. By leveraging advanced capabilities including cloud computing, automation, data analytics, and custom software development, we address the distinctive operational requirements of various sectors.
            </p>
          </div>
          
          {/* Static Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-justify">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-10 lg:mt-12">
            <button 
              style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
              className="px-6 py-2.5 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="w-full bg-white text-black py-10 sm:py-14 md:py-16 lg:py-20 relative overflow-hidden font-['Inter_Variable',_sans-serif]">
        {/* Diagonal Grid Pattern - Background */}
        <svg
          className="absolute top-0 right-0 w-[350px] sm:w-[450px] md:w-[550px] lg:w-[650px] h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] opacity-10 pointer-events-none translate-x-8 sm:translate-x-16 -translate-y-4 sm:-translate-y-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            <pattern id="diagonalGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M0 20 L20 0 M-5 5 L5 -5 M15 25 L25 15"
                stroke="#00b3a4"
                strokeWidth="0.8"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalGrid)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-20 z-10">
          {/* Proof Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-10 relative overflow-hidden" style={{ backgroundColor: '#fff2eb' }}>
            {/* Pattern inside Proof Section */}
            <svg
              className="absolute top-0 right-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] opacity-10 pointer-events-none translate-x-4 sm:translate-x-8 -translate-y-4 sm:-translate-y-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <pattern id="diagonalGrid2" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M0 20 L20 0 M-5 5 L5 -5 M15 25 L25 15"
                    stroke="#008080"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalGrid2)" />
            </svg>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
              {/* Left Text */}
              <div className="w-full lg:w-2/3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight text-justify">
                  Expertise That Powers Digital Excellence Book a Free Consultation
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-5 leading-relaxed text-justify">
                  At Kiaq Technologies, our expertise is the foundation of every solution we deliver. With a deep understanding of emerging technologies and industry-specific demands, we craft intelligent, scalable, and secure systems that solve real business challenges. Our team of experienced professionals brings together innovation, precision, and strategic thinking to drive digital transformation across sectors. From concept to execution, we ensure each project reflects our commitment to quality, performance, and long-term value—positioning your business for sustainable success in a rapidly evolving tech landscape.
                </p>
                <button className="bg-orange-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold hover:bg-[#006666] transition-all w-full sm:w-auto">
                  Schedule Consultation
                </button>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
                <img src={ninth} alt="Technology Excellence" className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-lg object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eighth Section */}
      <section className="dual-action-button-cta font-['Inter_Variable',_sans-serif]">
        <div className="dual-action-button-cta-wrapper grid lg:grid-cols-2 gap-0 min-h-[350px] sm:min-h-[400px]">
          
          {/* LEFT SECTION */}
          <div
            className="dual-action-button-cta-left-div relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
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
              <div className="dual-action-button-cta-tag-wrapper flex items-center mb-6 sm:mb-8">
                <div className="dual-action-button-cta-left-div-img mr-2.5 sm:mr-3">
                  <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="sm:w-[14px] sm:h-[15px]">
                    <path
                      d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p
                  className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
                  style={{ color: UI_CONSTANTS.WHITE }}
                >
                  GET STARTED
                </p>
              </div>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
                style={{ color: UI_CONSTANTS.WHITE }}
              >
                Build Your Future Technology Team with KIAQ
              </h2>

              <button
                style={{
                  backgroundColor: UI_CONSTANTS.DARK,
                  color: UI_CONSTANTS.WHITE,
                }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Request Consultation
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div
            className="dual-action-button-cta-right-div relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
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
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="mr-2.5 sm:mr-3">
                  <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="sm:w-[14px] sm:h-[15px]">
                    <path
                      d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                      fill="#173B3F"
                    />
                  </svg>
                </div>
                <p
                  className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
                  style={{ color: '#173B3F' }}
                >
                  CONNECT WITH US
                </p>
              </div>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
                style={{ color: '#173B3F' }}
              >
                Let Us Understand Your Technology Requirements
              </h2>

              <button
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#173B3F',
                  border: '2px solid rgba(23, 59, 63, 0.2)',
                }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white transition-colors w-full sm:w-auto"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}