import img1 from "../assets/talent/67f567c63ee9f844dec8be3b_665d7cf43e31eeb58e57d4b2_Our Process - For Talent Hero 1-p-2000.png";
import img2 from "../assets/talent/66618f09844a5b560222dfda_English Fluency Tests@2x-p-500.webp";
import img3 from "../assets/talent/665a449ee4e1718e41ce7b5e_work-independently.avif";
import img4 from "../assets/talent/665a44e8dc56207290812aed_keep-your-webcam-on.avif";
import img5 from "../assets/talent/665a452e8014616ed0d0ecdf_avoid-distraction.avif";
import img6 from "../assets/talent/665a4563f275d7737d37cf43_give-yourself-time.avif";
import img7 from "../assets/talent/66405e41fb4c14287176ab19_img-002a.webp";
import img8 from "../assets/talent/66405e42fb4c14287176ab8d_img-001a.webp";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
import { CheckCircle } from "lucide-react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { UI_CONSTANTS } from "../constants/colors";


export default function TalentMatching() {

   const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I get assessed in multiple skills?",
      answer:
        "Although Andela is aware that all technologists can be knowledgeable in multiple technological stacks and languages when applying to enter the Andela Talent Network, the expectation is that candidates will choose the strongest and/or most comfortable technology they use as a daily driver for their assessment path. After entering the network, there will be the opportunity to be assessed in other skill sets, but when applying, the chosen path should be only one of the various available.",
    },
    {
      question: "What happens when I join the Andela Talent Network?",
      answer:
        "Once you join the network, you gain access to global job opportunities, community events, and career development resources tailored for top tech talent.",
    },
    {
      question: "What companies can I work with at Andela?",
      answer:
        "Andela partners with leading organizations across industries, including startups, Fortune 500 companies, and global tech firms looking for top remote engineers.",
    },
    {
      question: "Does Andela provide work visas?",
      answer:
        "Andela does not typically provide work visas as most engagements are remote, allowing technologists to work from anywhere in the world.",
    },
  ];


  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] md:h-[90vh] lg:h-[65vh] overflow-hidden bg-black">
        <img
          src={img1}
          alt="Talent Hero"
          className="absolute inset-0 w-full h-full object-cover object-right"
          style={{ transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 h-full flex items-center">
          <div className="w-full md:w-7/12 lg:w-6/12 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Let’s Set You Up for Success
            </h1>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl mb-6">
              Andela provides access to thousands of meaningful and technically
              demanding jobs around the world. You’ll be screened, tested, and
              challenged — and we’re here to help you succeed.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#00d1b2] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#00bfa1] transition-shadow shadow-lg">
                Join Andela Today
              </button>
              <a className="text-sm text-gray-200 underline hover:text-white">
                Learn how
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-STEP SCREENING SECTION */}
      <section className="relative w-full bg-white py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              It all starts with a three-step screening
            </h2>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              You’ll be carefully tested to ensure success on day one
            </h3>

            <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-lg">
              Andela technologists are expected to meet the highest standards of
              professional excellence. That includes the ability to communicate
              effectively in English, have technology expertise, and to work as
              part of a collaborative team.
            </p>

            {/* Steps */}
            <div className="space-y-3">
              {[
                "English Language Proficiency",
                "Technical Skills",
                "Live Technical Interview",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 hover:border-[#00bfa1] cursor-pointer transition"
                >
                  <span className="text-sm font-semibold text-gray-700">
                    STEP {i + 1}
                  </span>
                  <span className="text-sm md:text-base font-medium text-gray-900 flex-1 text-left ml-4">
                    {step}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE CONTENT */}
          <div className="flex flex-col items-center text-center lg:text-left">
            <img
              src={img2}
              alt="Screening Process"
              className="rounded-xl shadow-md w-full max-w-md mb-4"
            />
            <p className="text-gray-600 text-sm md:text-base max-w-sm mx-auto lg:mx-0 mb-2">
              You start with an AI-powered test that measures your ability to
              communicate effectively in English.
            </p>
            <a
              href="#"
              className="text-[#00bfa1] text-sm font-medium hover:underline flex items-center justify-center gap-1"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        
      </section>
       <section className="relative w-full bg-white py-24 px-6 lg:px-12">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-[#f1f6f5] rounded-xl shadow-sm p-10">
            <h3 className="text-2xl font-bold text-[#12393d] mb-3">
              What You Need To Get Started
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You must have four years of relevant professional, technical work
              experience, not including:
            </p>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#00bfa1] mt-1 w-5 h-5" />
                Internships
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#00bfa1] mt-1 w-5 h-5" />
                Freelance work
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#00bfa1] mt-1 w-5 h-5" />
                Unrelated or non-technical experience
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#00bfa1] mt-1 w-5 h-5" />
                A recent high school or college diploma
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f4f9f2] rounded-xl shadow-sm p-10">
            <h3 className="text-2xl font-bold text-[#12393d] mb-3">
              Please note:
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You cannot re-apply within 90 days of a rejected application.
            </p>
            <p className="text-gray-700 mb-4">You must pass:</p>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#00bfa1] mt-1 w-5 h-5" />
                English Fluency Tests
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#00bfa1] mt-1 w-5 h-5" />
                Technical skills test
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#00bfa1] mt-1 w-5 h-5" />
                Live technical interview
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

   <section className="relative w-full bg-[#e9f5f2] overflow-hidden py-20 px-6 lg:px-12">
  {/* Top Pattern (optional light circles) */}
  <div
    className="absolute right-0 top-0 w-[400px] h-[400px] opacity-20 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.1) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-[#12393d] mb-3">
      Make your screening a success
    </h2>
    <p className="text-gray-600 text-lg mb-10">
      Here are some tips to ensure a smooth and successful process.
    </p>

    {/* Scroll Buttons */}
    <button
      onClick={scrollLeft}
      className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:scale-110 transition z-20"
    >
      <ChevronLeft className="text-[#12393d] w-6 h-6" />
    </button>

    <button
      onClick={scrollRight}
      className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:scale-110 transition z-20"
    >
      <ChevronRight className="text-[#12393d] w-6 h-6" />
    </button>

    {/* Scrollable Cards */}
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
    >
      {/* Card 1 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0">
        <img
          src={img5}
          alt="Avoid Distraction"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#12393d] mb-2">
            Avoid distraction
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            It's important that you are in a quiet, distraction-free place so
            you can focus on taking the assessment and perform your best.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0">
        <img
          src={img6}
          alt="Give yourself time"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#12393d] mb-2">
            Give yourself time
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Make sure you have 1–2 hours to comfortably complete the assessment
            in one session. You can't save it or finish later.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0">
        <img
          src={img3}
          alt="Work independently"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#12393d] mb-2">
            Work independently
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Any use of reference materials or code templates will result in
            immediate disqualification. Tests detect plagiarized code.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0">
        <img
          src={img4}
          alt="Keep your webcam on"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#12393d] mb-2">
            Keep your webcam on
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Make sure your webcam is on during assessments to maintain
            authenticity and integrity throughout the process.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="relative w-full bg-[#f6f9f8] py-16 px-4 lg:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 60px 60px, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Heading */}
      <div className="relative text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Take your career to new heights
        </h2>
      </div>

      {/* Card Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-start">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={img7}
              alt="Access world-class job opportunities"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            Access world-class job opportunities
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Join the Andela global marketplace and gain access to a steady stream of
            new opportunities with companies looking for top global experts.
          </p>
          <button className="flex items-center text-[#0b806a] text-sm font-semibold hover:underline">
            Learn More <ArrowRight className="ml-1 w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-start">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={img8}
              alt="Refine your skills"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            Refine your skills
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Get free access to a broad range of upskilling opportunities, learning
            programs, and events. That includes Codewars Red, the Andela Learning
            Community, and other EdTech learning platforms.
          </p>
          <button className="flex items-center text-[#0b806a] text-sm font-semibold hover:underline">
            Learn More <ArrowRight className="ml-1 w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>

     <section className="relative w-full bg-[#f6f9f8] py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 60px 60px, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Heading */}
      <div className="relative text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Container */}
      <div className="relative max-w-4xl mx-auto flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`w-full bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 ${
              openIndex === index ? "py-6 px-7" : "py-4 px-6"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span
                className={`font-semibold text-[17px] text-gray-900 ${
                  openIndex === index ? "text-[#0b806a]" : ""
                }`}
              >
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-700 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-700 flex-shrink-0" />
              )}
            </button>

            {openIndex === index && (
              <p className="mt-4 text-gray-600 text-[15px] leading-relaxed pr-1">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
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
