import { Clock, Sparkles } from "lucide-react";
import insightimg from "../assets/6643e549495270ffe8edb1e8_ForCompanies_AdaptiveHiring_5-steps-to-building-a-successful-global-team_InteriorPageHero-p-2000.avif";
import inimg from "../assets/6737bae590f5e024e63981b5_Blog - John_Winsor_Webinar 570x570.avif";
import inimg2 from "../assets/670815e7263cb4930a54a7e8_Blog - Mental Health Day 570x570 (1).jpg";
import inimg3 from "../assets/6643e549495270ffe8edb1e8_ForCompanies_AdaptiveHiring_5-steps-to-building-a-successful-global-team_InteriorPageHero-p-2000.avif";

export default function Insights() {
  const articles = [
    {
      title: "Global Talent Acquisition Strategy: Building High-Performing Remote Teams",
      image: inimg
    },
    {
      title: "AI-Powered Talent Matching: Revolutionizing Technical Recruitment",
      image: inimg2
    },
    {
      title: "Strategic Workforce Planning: Adapting to Evolving Technology Demands",
      image: inimg3
    }
  ];
  return (
    <div className="relative w-full bg-white min-h-screen">
  {/* Hero Section */}
  <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]">
    <img
      src={insightimg}
      alt="Strategic framework for building high-performing global teams"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

    {/* Floating Card */}
    <div className="absolute bottom-[-3.5rem] sm:bottom-[-3rem] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%]">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
        {/* Tag and Date */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs font-semibold text-gray-500 mb-2 sm:mb-3 uppercase tracking-wide">
          <span>STRATEGIC TALENT ACQUISITION</span>
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          <span>AUG 29, 2023</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-justify">
          Strategic Framework for Building High-Performing Global Teams
        </h1>

        {/* Read Time */}
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4 text-orange-500" />
          <span>4 minutes</span>
        </div>
      </div>
    </div>
  </div>

  {/* Main Article Content */}
  <div className="max-w-4xl mx-auto mt-28 sm:mt-32 px-4 sm:px-6 md:px-10 pb-16 sm:pb-20 text-gray-700 leading-relaxed text-base sm:text-lg space-y-5 text-justify">
    <p>
      By implementing strategic international recruitment and hiring practices, organizations can access expanded and more diverse talent pools, while gaining specialized knowledge and advanced skill sets. From a financial perspective, this approach can optimize development and engineering expenditures, while reducing overhead costs associated with physical infrastructure. Furthermore, maintaining teams across multiple time zones enables organizations to deliver comprehensive customer service experiences and expand business operations into new markets, establishing competitive advantage.
    </p>

    <p>
      Employee retention also demonstrates improvement within distributed workforce models: Recent research indicates that professionals with remote work capabilities report enhanced job satisfaction and stronger organizational commitment.
    </p>

    <p>
      Naturally, attracting premium international talent requires specialized methodologies. The following framework outlines strategic approaches for building successful global teams:
    </p>

    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-8 sm:mt-10">
      1. Strategic Requirement Analysis
    </h2>
    <p>
      Organizations and hiring managers should conduct comprehensive analysis by addressing key considerations prior to position development: Which projects or teams require additional support? What upcoming initiatives demand new or specialized capabilities? Does this represent a permanent organizational need, or can it be fulfilled through contractual engagement?
    </p>
    <p>
      Develop detailed project inventories, required competency frameworks, estimated timelines, and other critical parameters. Precise identification of organizational gaps enables more accurate definition of required developer profiles and expertise levels.
    </p>

    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-8 sm:mt-10">
      2. Implementation of Remote Collaboration Infrastructure
    </h2>
    <p>
      Prospective candidates will naturally inquire about cross-timezone collaboration methodologies and regional operational efficiency. They will also seek organizations demonstrating mature remote work cultures. Strategic investment in collaboration technologies prior to recruitment initiatives demonstrates organizational preparedness and operational excellence. Digital tools additionally foster transparency and reduce operational silos within distributed teams, while providing cost-effective alternatives to traditional staffing models.
    </p>
    <p>
      Evaluate specific requirements across teams and functional divisions. Project management platforms such as Trello or Jira may optimize product development and engineering workflows, while design collaboration tools like Figma or Miro enhance user-interface and user-experience development. Communication applications including Slack or Loom facilitate both synchronous and asynchronous interaction, replacing traditional office-based communication. Human resources management systems remain essential regardless of organizational structure, ensuring employee access to benefits, legal documentation, compensation information, and other critical resources.
    </p>

    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-8 sm:mt-10">
      3. Initial Technical Competency Assessment
    </h2>
    <p>
      Front-loading technical evaluation within recruitment processes optimizes time utilization and establishes clear candidate expectations, while enabling rapid identification of qualified applicants demonstrating both commitment and capability. Initiating with skills assessment additionally mitigates potential human bias in candidate evaluation. KIAQ professionals undergo comprehensive assessment through our proprietary evaluation system, providing hiring managers with verified skill validation and optimal talent matching.
    </p>
    <p>
      Following identification of technically qualified candidates, organizations can proceed with comprehensive evaluation of relevant soft skills and cultural alignment, including organizational methodologies, deadline management approaches, and team dynamic preferences.
    </p>

    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-8 sm:mt-10">
      4. Standardized Evaluation Framework Alignment
    </h2>
    <p>
      For organizations utilizing hiring committees in candidate evaluation, ensure complete alignment regarding evaluation criteria and qualification standards to prevent assessment bias. Implementation strategies may include standardized behavioral questioning across interviewers, or development of comprehensive evaluation rubrics for systematic candidate assessment. Additionally, cultivate diverse and inclusive hiring committees—encompassing demographic diversity, experience levels, departmental representation, and specialized expertise—to enhance appeal to broader candidate pools.
    </p>

    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-8 sm:mt-10">
      5. Strategic Candidate Inquiry Analysis
    </h2>
    <p>
      The nature and quality of candidate inquiries can provide significant insight into team integration potential, complementing responses to organizational questions.
    </p>
    <p>
      Qualified candidates should demonstrate genuine curiosity extending beyond position specifics to encompass operational processes, cross-functional collaboration opportunities, and organizational strategic objectives. Generic inquiries or exclusive focus on compensation and benefits may indicate limited enthusiasm for organizational products or long-term career development within your company.
    </p>

    <p>
      While developing high-performing global teams requires strategic investment and dedicated effort, the organizational benefits demonstrate extensive impact. Global teams not only introduce diverse perspectives and experiences, but enable organizations to acquire precisely calibrated skill sets for critical project execution. These five strategic components establish foundation for successful recruitment of global technology professionals.
    </p>

    <p className="font-medium text-gray-900 mt-4 sm:mt-6">
      Seeking to expand global operational capabilities and recruit skilled technology professionals? Discover how KIAQ can facilitate your strategic objectives.
    </p>
  </div>

  {/* Subscribe Section */}
  <section className="min-h-[80vh] sm:min-h-[70vh] bg-gray-50 flex items-center justify-center p-4">
    <div className="w-full max-w-6xl bg-gradient-to-br from-orange-800 to-orange-900 rounded-3xl shadow-2xl overflow-hidden relative">
      {/* Left Pattern Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 400 400" preserveAspectRatio="none">
          <circle cx="50" cy="100" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
          <circle cx="-20" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
          <circle cx="80" cy="350" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
        </svg>
      </div>

      {/* Right Pattern Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 400 400" preserveAspectRatio="none">
          <circle cx="350" cy="100" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
          <circle cx="420" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
          <circle cx="320" cy="350" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-300" />
        </svg>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6 sm:gap-8 p-8 sm:p-12">
        {/* Left Text */}
        <div className="flex items-center text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Interested in<br />Strategic Insights?
          </h1>
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
          <p className="text-white text-base sm:text-lg leading-relaxed text-justify">
            Subscribe to receive strategic insights and regular updates from KIAQ Technologies.
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-1 sm:mb-2 uppercase tracking-wide">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder=""
              />
            </div>

            <button className="w-full md:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-orange-400 hover:bg-orange-300 text-orange-900 font-semibold rounded-lg transition-colors duration-200 text-base sm:text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* You might also be interested in Section */}
  <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 text-justify">
      Additional Strategic Resources
    </h2>

    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#011123] group cursor-pointer"
        >
          {/* Image */}
          <div className="relative h-56 sm:h-64 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-4 text-justify">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-white transition-colors">
              {article.title}
            </h3>

            <button className="flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-400 transition-colors group-hover:text-orange-400 text-sm sm:text-base">
              Access Resource
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  {/* Ready to get started Section */}
  <section className="relative bg-[#fff2eb] py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
    {/* Pattern Overlay */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1600 400" preserveAspectRatio="none">
        <circle cx="400" cy="200" r="250" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-600" />
        <circle cx="800" cy="200" r="250" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-600" />
        <circle cx="1200" cy="200" r="250" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-600" />
        <circle cx="200" cy="100" r="180" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-600" />
        <circle cx="1400" cy="300" r="180" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-600" />
      </svg>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 ">
        Ready to Implement Strategic Solutions?
      </h2>
      
      <button className="px-8 sm:px-10 py-3 sm:py-4 bg-orange-400 hover:bg-orange-300 text-orange-900 font-semibold rounded-lg transition-colors duration-200 text-base sm:text-lg">
        Schedule Consultation
      </button>
    </div>
  </section>
</div>

  );
}