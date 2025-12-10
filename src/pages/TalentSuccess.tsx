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

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

export default function TalentMatching() {

   const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I start getting opportunities through KIAQ?",
      answer: "Most qualified candidates start receiving opportunities within 2-4 weeks of completing our assessment process. The speed depends on your skills, experience level, and current market demand for your expertise.",
    },
    {
      question: "What kind of career growth can I expect with KIAQ?",
      answer: "KIAQ professionals typically see 30-50% salary growth within 18 months, access to leadership roles, and opportunities to work on cutting-edge projects with global companies.",
    },
    {
      question: "Do you provide ongoing career support?",
      answer: "Yes, we offer continuous career coaching, skill development programs, and regular performance reviews to help you advance your career and take on more challenging roles.",
    },
    {
      question: "What industries do KIAQ partners represent?",
      answer: "We work with leading companies across technology, finance, healthcare, e-commerce, and enterprise software - from fast-growing startups to Fortune 500 organizations.",
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
      <section className="relative w-full h-[85vh] md:h-[90vh] lg:h-[65vh] overflow-hidden" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
        <img
          src={img1}
          alt="Success Stories Hero"
          className="absolute inset-0 w-full h-full object-cover object-right"
          style={{ transform: "scale(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011123]/85 via-[#011123]/65 to-[#011123]/35"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 h-full flex items-center">
          <div className="w-full md:w-7/12 lg:w-6/12 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Real Success Stories, <br />Real Career Growth
            </h1>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl mb-6">
              Discover how KIAQ has transformed careers and created opportunities 
              for talented professionals worldwide. Join thousands who have accelerated 
              their growth with our global network.
            </p>
            <div className="flex items-center gap-4">
              <button 
                className="font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-shadow shadow-lg"
                style={{
                  backgroundColor: UI_CONSTANTS.PRIMARY,
                  color: UI_CONSTANTS.WHITE
                }}
              >
                Share Your Story
              </button>
              <a className="text-sm text-gray-200 underline hover:text-white">
                View All Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-STEP SUCCESS SECTION */}
      <section className="relative w-full bg-white py-24 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Path to Career Transformation
            </h2>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              From assessment to accelerated growth
            </h3>

            <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-lg">
              KIAQ success stories follow a proven path: rigorous assessment, 
              strategic matching, and continuous growth opportunities that lead 
              to remarkable career advancements.
            </p>

            {/* Steps */}
            <div className="space-y-3">
              {[
                "Comprehensive Skills Assessment",
                "Strategic Role Matching",
                "Accelerated Career Growth",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 hover:border-[#ff4600] cursor-pointer transition"
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
              alt="Career Growth Process"
              className="rounded-xl shadow-md w-full max-w-md mb-4"
            />
            <p className="text-gray-600 text-sm md:text-base max-w-sm mx-auto lg:mx-0 mb-2">
              Our assessment process identifies your unique strengths and matches 
              you with opportunities that accelerate your career trajectory.
            </p>
            <a
              href="#"
              className="text-sm font-medium hover:underline flex items-center justify-center gap-1"
              style={{ color: UI_CONSTANTS.PRIMARY }}
            >
              Read Success Stories
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
          <div className="bg-gray-50 rounded-xl shadow-sm p-10 border border-gray-200">
            <h3 className="text-2xl font-bold mb-3" style={{ color: UI_CONSTANTS.DARK }}>
              Career Milestones Achieved
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              KIAQ professionals consistently achieve remarkable career advancements:
            </p>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 w-5 h-5" style={{ color: UI_CONSTANTS.PRIMARY }} />
                Average 45% salary increase within first year
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 w-5 h-5" style={{ color: UI_CONSTANTS.PRIMARY }} />
                Promotion to leadership roles in 18 months
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 w-5 h-5" style={{ color: UI_CONSTANTS.PRIMARY }} />
                Global project experience with top companies
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 w-5 h-5" style={{ color: UI_CONSTANTS.PRIMARY }} />
                Continuous skill development and certifications
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-10 border border-gray-200">
            <h3 className="text-2xl font-bold mb-3" style={{ color: UI_CONSTANTS.DARK }}>
              Success Metrics
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our track record speaks for itself:
            </p>

            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 w-5 h-5" style={{ color: UI_CONSTANTS.PRIMARY }} />
                95% candidate satisfaction rate
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 w-5 h-5" style={{ color: UI_CONSTANTS.PRIMARY }} />
                12-month retention rate of 88%
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 w-5 h-5" style={{ color: UI_CONSTANTS.PRIMARY }} />
                Average project duration: 18+ months
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

   <section className="relative w-full bg-gray-50 overflow-hidden py-20 px-6 lg:px-12">
  {/* Top Pattern */}
  <div
    className="absolute right-0 top-0 w-[400px] h-[400px] opacity-20 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at 20px 20px, rgba(255,70,0,0.1) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: UI_CONSTANTS.DARK }}>
      Real Stories, Real Impact
    </h2>
    <p className="text-gray-600 text-lg mb-10">
      Discover how KIAQ has transformed careers across the globe.
    </p>

    {/* Scroll Buttons */}
    <button
      onClick={scrollLeft}
      className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:scale-110 transition z-20"
    >
      <ChevronLeft className="w-6 h-6" style={{ color: UI_CONSTANTS.DARK }} />
    </button>

    <button
      onClick={scrollRight}
      className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:scale-110 transition z-20"
    >
      <ChevronRight className="w-6 h-6" style={{ color: UI_CONSTANTS.DARK }} />
    </button>

    {/* Scrollable Cards */}
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
    >
      {/* Card 1 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0 border border-gray-200">
        <img
          src={img5}
          alt="Career Transformation"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
            From Junior to Lead in 2 Years
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maria's journey from junior developer to technical lead through strategic KIAQ placements and continuous growth opportunities.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0 border border-gray-200">
        <img
          src={img6}
          alt="Global Opportunities"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
            Breaking Into Silicon Valley
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            How David landed his dream role at a top tech company while working remotely from his home country.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0 border border-gray-200">
        <img
          src={img3}
          alt="Skill Advancement"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
            Mastering New Technologies
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sarah's transition from traditional development to AI/ML engineering through KIAQ's upskilling programs.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="min-w-[280px] bg-white rounded-2xl shadow-sm overflow-hidden flex-shrink-0 border border-gray-200">
        <img
          src={img4}
          alt="Leadership Growth"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
            Building Global Teams
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            How Alex grew from individual contributor to managing international teams across three continents.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="relative w-full bg-white py-16 px-4 lg:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, rgba(255,70,0,0.1) 1px, transparent 1px),
            radial-gradient(circle at 60px 60px, rgba(1,17,35,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Heading */}
      <div className="relative text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold" style={{ color: UI_CONSTANTS.DARK }}>
          Accelerate Your Career Journey
        </h2>
      </div>

      {/* Card Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-start border border-gray-200">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={img7}
              alt="Global Career Opportunities"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
            Access Global Career Opportunities
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Join professionals who have landed roles at innovative companies worldwide, 
            working on projects that challenge and grow their skills exponentially.
          </p>
          <button className="flex items-center text-sm font-semibold hover:underline" style={{ color: UI_CONSTANTS.PRIMARY }}>
            Explore Opportunities <ArrowRight className="ml-1 w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-start border border-gray-200">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={img8}
              alt="Continuous Growth"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
            Continuous Skill Advancement
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Leverage KIAQ's learning ecosystem to stay ahead of industry trends, 
            master new technologies, and position yourself for leadership roles.
          </p>
          <button className="flex items-center text-sm font-semibold hover:underline" style={{ color: UI_CONSTANTS.PRIMARY }}>
            View Growth Paths <ArrowRight className="ml-1 w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>

     <section className="relative w-full bg-gray-50 py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, rgba(255,70,0,0.1) 1px, transparent 1px),
            radial-gradient(circle at 60px 60px, rgba(1,17,35,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Heading */}
      <div className="relative text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: UI_CONSTANTS.DARK }}>
          Success Stories FAQ
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
                className={`font-semibold text-[17px] ${
                  openIndex === index ? "text-[#ff4600]" : "text-gray-900"
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

    <section className="relative w-full bg-white py-24 overflow-hidden">
  {/* Flower Pattern Background */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        radial-gradient(circle at 25px 25px, rgba(255,70,0,0.1) 1px, transparent 0),
        radial-gradient(circle at 75px 75px, rgba(1,17,35,0.05) 1px, transparent 0)
      `,
      backgroundSize: "100px 100px",
    }}
  ></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold" style={{ color: UI_CONSTANTS.DARK }}>
        More Success Stories & Insights
      </h2>
      <button 
        className="mt-6 md:mt-0 border font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-all duration-300"
        style={{
          borderColor: UI_CONSTANTS.DARK,
          color: UI_CONSTANTS.DARK
        }}
      >
        View All Stories
      </button>
    </div>

    {/* Cards Grid */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={tenimg}
            alt="Career Transformation Stories"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Success Story
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            From Local Developer to Global Tech Lead
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center font-semibold text-sm hover:underline group-hover:text-[#ff8a65]"
            style={{ color: UI_CONSTANTS.PRIMARY }}
          >
            Read Story <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={eleimg}
            alt="Skill Advancement Journey"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Case Study
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Mastering AI: A Developer's Growth Journey
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center font-semibold text-sm hover:underline group-hover:text-[#ff8a65]"
            style={{ color: UI_CONSTANTS.PRIMARY }}
          >
            Watch Journey <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={twlimg}
            alt="Global Career Impact"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Research
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            KIAQ Success: 89% Career Growth in 24 Months
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center font-semibold text-sm hover:underline group-hover:text-[#ff8a65]"
            style={{ color: UI_CONSTANTS.PRIMARY }}
          >
            Read Report <span className="ml-2">→</span>
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
                        SHARE YOUR STORY
                      </p>
                    </div>
        
                    <h2
                      className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
                      style={{ color: UI_CONSTANTS.WHITE }}
                    >
                      Inspire Others With Your KIAQ Journey
                    </h2>
        
                    <button
                      style={{
                        backgroundColor: UI_CONSTANTS.DARK,
                        color: UI_CONSTANTS.WHITE,
                      }}
                      className="px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
                    >
                      Share Your Success
                    </button>
                  </div>
                </div>
        
                {/* RIGHT SECTION */}
                <div
                  className="dual-action-button-cta-right-div relative px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
                  style={{ backgroundColor: '#f8f9fa' }}
                >
                  {/* Pattern Background */}
                  <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                      <path d="M100 50 Q300 150 500 50 T900 50" stroke={UI_CONSTANTS.DARK} strokeWidth="1.5" opacity="0.4" fill="none"/>
                      <path d="M0 100 Q200 200 400 100 T800 100" stroke={UI_CONSTANTS.DARK} strokeWidth="1.5" opacity="0.3" fill="none"/>
                      <path d="M150 200 Q350 300 550 200 T950 200" stroke={UI_CONSTANTS.DARK} strokeWidth="1.5" opacity="0.25" fill="none"/>
                      <path d="M50 300 Q250 400 450 300 T850 300" stroke={UI_CONSTANTS.DARK} strokeWidth="1.5" opacity="0.2" fill="none"/>
                      <circle cx="200" cy="80" r="3" fill={UI_CONSTANTS.DARK} opacity="0.5"/>
                      <circle cx="600" cy="120" r="2.5" fill={UI_CONSTANTS.DARK} opacity="0.4"/>
                      <circle cx="400" cy="250" r="3" fill={UI_CONSTANTS.DARK} opacity="0.3"/>
                    </svg>
                  </div>
        
                  {/* Text Content */}
                  <div className="relative z-20">
                    <div className="flex items-center mb-8">
                      <div className="mr-3">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                          <path
                            d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                            fill={UI_CONSTANTS.DARK}
                          />
                        </svg>
                      </div>
                      <p
                        className="text-sm font-semibold tracking-[0.2em] uppercase"
                        style={{ color: UI_CONSTANTS.DARK }}
                      >
                        START YOUR JOURNEY
                      </p>
                    </div>
        
                    <h2
                      className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
                      style={{ color: UI_CONSTANTS.DARK }}
                    >
                      Begin Your Success Story Today
                    </h2>
        
                    <button
                      style={{
                        backgroundColor: UI_CONSTANTS.PRIMARY,
                        color: UI_CONSTANTS.WHITE,
                      }}
                      className="px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
                    >
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            </section>


    </>
  );
}