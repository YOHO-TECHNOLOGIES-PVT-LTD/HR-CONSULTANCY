import ourimg from '../assets/manpower/people-working-with-ai-operated-devices.jpg';
import React, { useEffect, useState } from "react";
import { Plane, Globe, FileText } from 'lucide-react';
import { ArrowRight, Check } from 'lucide-react';
import { FaCheck, FaArrowRight, FaUserMd, FaFileAlt, FaBriefcase, FaBuilding, FaCertificate, FaGlobe, FaLanguage } from 'react-icons/fa';
import { GraduationCap, HardHat } from 'lucide-react';
import img1 from "../assets/home2/3.png";
import img2 from "../assets/home2/4.png";
import img3 from "../assets/home2/5.png";
import img4 from "../assets/home2/6.png";
import img5 from "../assets/home2/7.png";
import img6 from "../assets/home2/8.png";
import img7 from "../assets/home2/9.png";
import img8 from "../assets/home2/10.png";
import img9 from "../assets/home2/11.png";
import img10 from "../assets/home2/12.png";
import img11 from "../assets/home2/13.png";





export default function Aboutus() {
  const [activeTab, setActiveTab] = useState('CATEGORIES');
  const [currentIndex, setCurrentIndex] = useState(0);
  
 const services = [
  {
    title: "Blue-Collar Foreign Jobs",
    description: "List of construction, industrial, and service jobs for international placements.",
    features: [
      "24+ Job Categories",
      "WhatsApp-Ready Format",
      "International Requirements"
    ],
    icon: <FaBriefcase />,
    image: img1
  },
  {
    title: "Singapore Trade Tests",
    description: "All BCA/SEC/SEC(K) trade test categories for Singapore employment.",
    features: [
      "Construction & MEP Trades",
      "Equipment Operations",
      "Industrial Technical Trades"
    ],
    icon: <FaFileAlt />,
    image: img2
  },
  {
    title: "Healthcare Professionals",
    description: "Detailed job categories for nurses and physiotherapists in specific regions.",
    features: [
      "Singapore Nurse Categories",
      "Schengen Physiotherapist Jobs",
      "Specialized Healthcare Roles"
    ],
    icon: <FaUserMd />,
    image: img3
  },
  {
    title: "Local Job Categories",
    description: "Comprehensive list of domestic job opportunities across various sectors.",
    features: [
      "Industrial & Factory Jobs",
      "Service & Maintenance",
      "Hotel & Retail Positions"
    ],
    icon: <FaBuilding />,
    image: img4
  },
  {
    title: "Certifications Guide",
    description: "Complete guidance on trade testing and professional certifications.",
    features: [
      "SEC/SEC(K) Requirements",
      "Skill Evaluation Processes",
      "Testing Center Information"
    ],
    icon: <FaCertificate />,
    image: img5
  },
  {
    title: "Country-Specific Lists",
    description: "Job descriptions tailored for specific countries and regions.",
    features: [
      "Gulf Region Requirements",
      "Schengen Country Jobs",
      "Singapore Specific Roles"
    ],
    icon: <FaGlobe />,
    image: img6
  },
  {
    title: "Multi-Language Support",
    description: "Job lists available in multiple languages for wider accessibility.",
    features: [
      "Tamil Versions Available",
      "WhatsApp Forwarding Format",
      "Easy-to-Share PDFs"
    ],
    icon: <FaLanguage />,
    image: img7
  }
];

  const totalSlides = Math.ceil(services.length / 4);
  const currentSlide = Math.floor(currentIndex / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move to next group of 4 services
        const nextIndex = prevIndex + 4;
        return nextIndex >= services.length ? 0 : nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Second carousel state for last section
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleServices = () => {
    // Get the next 4 services starting from currentIndex
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const serviceIndex = (currentIndex + i) % services.length;
      visible.push(services[serviceIndex]);
    }
    return visible;
  };


const tabContent = {
  CATEGORIES: (
    <div className="space-y-6 mb-8">
      <p className="text-gray-600 leading-relaxed">
        We provide comprehensive job lists for blue-collar, healthcare, technical, and professional categories - all formatted for easy sharing on WhatsApp, Telegram, and other messaging platforms.
      </p>
      <p className="text-gray-600 leading-relaxed">
        From construction workers to specialized nurses, from factory operators to certified welders - we cover all major employment sectors with detailed role descriptions and requirements.
      </p>
    </div>
  ),
  COUNTRIES: (
    <div className="space-y-6 mb-8">
      <p className="text-gray-600 leading-relaxed">
        Specialized job lists for specific regions including Singapore, Schengen countries, Gulf regions,and domestic opportunities. Each list includes local requirements, salary ranges, and eligibility criteria.
      </p>
      <p className="text-gray-600 leading-relaxed">
        We stay updated with changing immigration policies and job market demands to provide you with the most current and accurate information.
      </p>
    </div>
  ),
  CERTIFICATIONS: (
    <div className="space-y-6 mb-8">
      <p className="text-gray-600 leading-relaxed">
        Detailed guidance on trade testing, skill certifications, and professional licensing requirements for various international job markets including SEC/SEC(K) for Singapore and European qualification standards.
      </p>
      <p className="text-gray-600 leading-relaxed">
        We help candidates understand certification processes, preparation resources, and testing centers to ensure successful qualification for their desired roles.
      </p>
    </div>
  ),
};

  return (
    <div style={{ fontFamily: "'Inter Variable', sans-serif" }}>
     
     {/* First Section */}
   <div
  className="w-full h-[300px] sm:h-[350px] md:h-[420px] bg-cover bg-center relative flex items-center justify-center"
  style={{
    backgroundImage: `url(${ourimg})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative text-center text-white px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
      About
    </h1>

    <div className="flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
      <span className="hover:text-blue-300 transition cursor-pointer">
        Home
      </span>
      <span>/</span>
      <span className="text-blue-300">About</span>
    </div>
  </div>
</div>


      {/* Second Section */}
   
<div className="w-full px-4 sm:px-6 py-8 sm:py-10">
  <div className="w-full bg-[#EEF3F6] rounded-2xl p-6 sm:p-10 lg:p-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

      {/* Card 1 */}
      <div className="flex flex-col items-start">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 sm:mb-6">
          <FileText className="text-[#0C3C78] w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0C3C78] mb-2 sm:mb-3">
          Comprehensive Job Categories
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Explore our complete database of blue-collar, healthcare, technical, and professional job categories tailored for global opportunities.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-start">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 sm:mb-6">
          <Plane className="text-[#0C3C78] w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0C3C78] mb-2 sm:mb-3">
          Country-Specialized Lists
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Get WhatsApp-ready job lists for specific regions like Singapore, Schengen countries, and Gulf regions with local requirements.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-start">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 sm:mb-6">
          <Globe className="text-[#0C3C78] w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0C3C78] mb-2 sm:mb-3">
          Certification & Testing Guides
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Detailed information on trade testing, skill certifications, and qualification requirements for various international job markets.
        </p>
      </div>

    </div>
  </div>
</div>





    {/* Third Section */}
  


<div className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    
    {/* Left Side - Image */}
    <div className="relative">
      <img
        src={img1}
        alt="International job opportunities"
        className="w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover rounded-3xl"
      />
    </div>

    {/* Right Side - Content */}
    <div className="flex flex-col">
      <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
        ABOUT OUR SERVICES
      </p>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-snug lg:leading-tight">
        Your Gateway to Global Employment
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 border-b border-gray-200 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('CATEGORIES')}
          className={`text-sm sm:text-base font-semibold pb-3 whitespace-nowrap ${
            activeTab === 'CATEGORIES'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500'
          }`}
        >
          CATEGORIES
        </button>

        <button 
          onClick={() => setActiveTab('COUNTRIES')}
          className={`text-sm sm:text-base font-semibold pb-3 whitespace-nowrap ${
            activeTab === 'COUNTRIES'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500'
          }`}
        >
          COUNTRIES
        </button>

        <button 
          onClick={() => setActiveTab('CERTIFICATIONS')}
          className={`text-sm sm:text-base font-semibold pb-3 whitespace-nowrap ${
            activeTab === 'CERTIFICATIONS'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500'
          }`}
        >
          CERTIFICATIONS
        </button>
      </div>

      {/* Content - FIXED SECTION */}
      <div className="mb-8 min-h-[200px]">
        {activeTab === 'CATEGORIES' && tabContent.CATEGORIES}
        {activeTab === 'COUNTRIES' && tabContent.COUNTRIES}
        {activeTab === 'CERTIFICATIONS' && tabContent.CERTIFICATIONS}
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="bg-red-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 text-sm sm:text-base transition-colors hover:bg-red-700">
          Get Free Consultation
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Card */}
  <div className="max-w-7xl mx-auto mt-10 sm:mt-12">
    <div className="bg-[#0A2540] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white">
      <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
        We provide complete job descriptions, country-specific requirements, and certification guidance in ready-to-use WhatsApp formats.
      </p>

      {/* Progress Bar */}
      <div className="mb-5 sm:mb-6">
        <div className="flex justify-between items-center mb-1 sm:mb-2">
          <span className="text-xs sm:text-sm font-semibold">Job Matching Accuracy</span>
          <span className="text-xs sm:text-sm font-semibold">95%</span>
        </div>

        <div className="w-full bg-blue-900 rounded-full h-1.5 sm:h-2">
          <div className="bg-white h-1.5 sm:h-2 rounded-full" style={{ width: '95%' }}></div>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-xs sm:text-sm">WhatsApp-Ready Job Lists</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-xs sm:text-sm">Country-Specific Requirements</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-xs sm:text-sm">Trade Test Guidance</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-xs sm:text-sm">Multi-Language Support</span>
        </div>
      </div>
    </div>
  </div>
</div>




    {/* Fourth Section */}

<div className="min-h-screen bg-gray-50 py-12 sm:py-16 px-3 sm:px-4">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-10 sm:mb-12 px-2">
      <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
        OUR JOB LIST SERVICES
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
        Ready-to-Share Job Descriptions
      </h1>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {getVisibleServices().map((service, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Image with Icon */}
          <div className="relative h-40 sm:h-48">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-red-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center text-xl sm:text-2xl">
              {service.icon}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Features List */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <FaCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded flex items-center justify-between text-sm sm:text-base transition-colors">
              <span>Get This List</span>
              <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index * 4)}
          className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ? 'bg-red-600 w-6 sm:w-8' : 'bg-gray-300 w-2.5 sm:w-3'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</div>




    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-blue-900 to-blue-950">
  {/* Hero Section */}
  <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-4">

    {/* CTA Box */}
    <div className="relative z-10 max-w-sm sm:max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
      <div className="p-6 sm:p-8 text-center">
        <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 uppercase tracking-wide">
          Welcome to VisaHub
        </p>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
          Start Your Immigration<br />Journey With Us!
        </h1>
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 sm:py-4 px-6 flex items-center justify-center gap-2 transition-colors text-sm sm:text-base">
        GET FREE CONSULTATION
        <span className="text-lg sm:text-xl">→</span>
      </button>
    </div>
  </div>

  {/* Services Section */}
  <div className="relative px-3 sm:px-4 pb-16 sm:pb-20">

    <div className="max-w-6xl mx-auto">
      <p className="text-blue-300 text-center text-xs sm:text-sm mb-2 sm:mb-3 uppercase tracking-wide">
        OUR EXTENSIVE SOLUTIONS
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12 sm:mb-16 leading-snug">
        Navigate Your Visa Choices with<br />Confidence
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
          style={{
            transform: `translateX(-${carouselIndex * 100}%)`,
          }}
        >
          {/* MOBILE: 1 card per slide */}
          {/* TABLET: 2 cards per slide */}
          {/* DESKTOP: 4 cards per slide */}
          {[...Array(3)].map((_, repeatIndex) => (
            <React.Fragment key={repeatIndex}>

              {/* Student Visa */}
              <div className="min-w-full sm:min-w-[50%] lg:min-w-[25%] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={img9}
                    alt="Student with books"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="bg-red-600 w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center mb-3 sm:mb-4">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Student Visa</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">Guidance</p>
                </div>
              </div>

              {/* Tourist Visa */}
              <div className="min-w-full sm:min-w-[50%] lg:min-w-[25%] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={img10}
                    alt="Tourist at beach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="bg-red-600 w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center mb-3 sm:mb-4">
                    <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Travel and</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">Tourist Visa</p>
                </div>
              </div>

              {/* Business Immigration */}
              <div className="min-w-full sm:min-w-[50%] lg:min-w-[25%] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={img11}
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="bg-red-600 w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center mb-3 sm:mb-4">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Experienced</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">Immigration</p>
                </div>
              </div>

              {/* Work Visa */}
              <div className="min-w-full sm:min-w-[50%] lg:min-w-[25%] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={img8}
                    alt="Construction workers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="bg-red-600 w-10 h-10 sm:w-12 sm:h-12 rounded flex items-center justify-center mb-3 sm:mb-4">
                    <HardHat className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Work Visa &</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">Employment</p>
                </div>
              </div>

            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10 sm:mt-12">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === carouselIndex ? 'bg-red-600' : 'bg-white opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
</div>
  
    </div>
  );
}