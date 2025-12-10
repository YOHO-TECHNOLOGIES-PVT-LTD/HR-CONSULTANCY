
import { Clock, Sparkles } from "lucide-react";
import insightimg from "../assets/6643e549495270ffe8edb1e8_ForCompanies_AdaptiveHiring_5-steps-to-building-a-successful-global-team_InteriorPageHero-p-2000.avif";
import inimg from "../assets/6737bae590f5e024e63981b5_Blog - John_Winsor_Webinar 570x570.avif";
import inimg2 from "../assets/670815e7263cb4930a54a7e8_Blog - Mental Health Day 570x570 (1).jpg";
import inimg3 from "../assets/6643e549495270ffe8edb1e8_ForCompanies_AdaptiveHiring_5-steps-to-building-a-successful-global-team_InteriorPageHero-p-2000.avif";

export default function Insights() {
  const articles = [
    {
      date: "NOV 15, 2024",
      title: "Harnessing AI and Open Talent: Key Insights from John Winsor",
      author: "Ashley Rendall",
      image: inimg
    },
    {
      date: "OCT 10, 2024",
      title: "Honoring World Mental Health Day: Andela and SafetyWing",
      author: "Eliza Power",
      image: inimg2
    },
    {
      date: "SEP 25, 2024",
      title: "Why Adaptive Hiring is Your Secret Weapon in the Tech Talent War",
      author: "Ashley Rendall",
      image: inimg3
    }
  ];
  return (
    <div className="relative w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <img
          src={insightimg}
          alt="5 steps to build a successful global team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        {/* Floating Card */}
        <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%]">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            {/* Tag and Date */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
              <span>ADAPTIVE HIRING</span>
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>AUG 29, 2023</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              5 steps to build a successful global team
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
      <div className="max-w-4xl mx-auto mt-32 px-6 md:px-10 pb-20 text-gray-700 leading-relaxed text-lg space-y-6">
        <p>
          By recruiting and hiring internationally, companies can hire from a
          larger and more diverse talent pool, and have access to more
          specialized knowledge and skill sets. Financially, it could save money
          on development and engineering costs, as well as overhead costs like
          office space. Plus, having staff in different time zones allows
          companies to provide a more comprehensive customer service experience
          and attract even more business in new markets, keeping you ahead of
          the curve.
        </p>

        <p>
          Retention, too, becomes easier with a distributed workforce: One 2022
          study found that employees who are able to work remotely report higher
          levels of happiness and stronger commitments to their organizations.
        </p>

        <p>
          Of course, recruiting top talent abroad requires a unique approach.
          Here’s how to build a successful global team:
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">
          1. Identify your needs
        </h2>
        <p>
          Companies and hiring managers should consider these types of questions
          before putting out a job description: What projects or teams need
          support? Or, what new project is upcoming that needs a new or
          different skill set? Is this a permanent position, or can a contractor
          fulfill it?
        </p>
        <p>
          Make a list of projects, the skills required, the estimated timeline,
          and any other key points. It’s important to get concrete about the gap
          that needs to be filled to better understand the type of developer and
          their expertise.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">
          2. Put remote software and processes in place
        </h2>
        <p>
          Candidates are likely going to wonder how the company collaborates
          across time zones and regions efficiently and effectively. They’re
          also going to be looking for a team that has a strong remote culture.
          Investing in software and putting it into place before you start
          recruiting shows you’re on top of all of this. Online tools can also
          create transparency and reduce silos when your workforce is
          distributed, as well as replace more expensive alternatives — such as
          hiring a full-time staffer to run point on projects or manage the
          employee experience.
        </p>
        <p>
          Consider what each team and division needs to be productive.
          Project-management software like Trello or Jira may be useful for
          product development and engineering, while design tools like Figma or
          Miro may be better for user-interface and user-experience work. Apps
          like Slack or Loom can help with both synchronous and asynchronous
          communication in lieu of popping over to someone’s desk in an office.
          And HR software is crucial no matter the type of company to ensure
          employees have easy access to benefits, legal documents, paystubs, and
          other important information from afar.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">
          3. Start with a short technical assessment
        </h2>
        <p>
          Frontloading the technical portion of your hiring process can save
          time and set expectations with candidates from the get-go, and you’ll
          be able to quickly weed out the applicants who are serious about the
          role and have the chops to do it well. Starting out with a skills test
          also ensures there’s no human bias turning great potential hires away.
          Andela talent is assessed using Andela Qualified, so hiring managers
          know the developers they hire are in fact skilled, offering
          reassurance and a better match.
        </p>
        <p>
          Once you’ve identified the applicants who are up for the job, then you
          can take the time via phone or video to vet for relevant soft skills
          and culture fit, such as how they stay organized or meet deadlines, or
          what they look for in a team dynamic.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">
          4. Align on a checklist of requirements
        </h2>
        <p>
          If you’re planning to use a hiring committee to evaluate candidates,
          make sure everyone involved is aligned on what skills or qualities
          you’re vetting for to avoid bias. For example, you could require each
          interviewer to ask the same behavioral questions, or create a rubric
          or checklist for everyone to follow and fill out during or after each
          interview. You should also make your hiring committee as diverse and
          inclusive as possible — not just in terms of demographics but also
          experience level, department, and expertise — if you want to appeal to
          a larger pool of candidates.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10">
          5. Pay attention to candidates’ questions
        </h2>
        <p>
          The kinds of questions candidates ask can say as much about how they’ll
          fit into a team as the answers they provide to your questions.
        </p>
        <p>
          A good candidate should show a genuine curiosity not just for the role
          itself but general processes, other teams they might interact with,
          and the company’s goals. If their questions feel generic or focus
          solely on benefits or salary, that could be a sign they’re not excited
          about the product or building a long-term career at your company.
        </p>

        <p>
          While building a successful global team takes time and effort, the
          benefits can extend across the company. Not only does a global team
          come with diversity of thought and experiences, but allows
          organizations to hire the exact skill set required to complete a key
          project. These five steps will put you well on your way to hiring a
          global team of talented developers.
        </p>

        <p className="font-medium text-gray-900 mt-6">
          Looking to expand your global footprint and hire skilled developers?
          Discover how Andela can help.
        </p>
      </div>

      {/* Subscribe Section */}
      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
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
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-12 md:p-16">
          {/* Left Text */}
          <div className="flex items-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Interested in<br />Learning More?
            </h1>
          </div>

          {/* Right Form */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-white text-lg leading-relaxed">
              Subscribe today to stay informed and get regular updates from Andela.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2 uppercase tracking-wide">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder=""
                />
              </div>

              <button className="w-full md:w-auto px-8 py-3 bg-orange-400 hover:bg-orange-300 text-orange-900 font-semibold rounded-lg transition-colors duration-200">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

     

      {/* You might also be interested in Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            You might also be interested in
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#011123] group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-500 font-medium tracking-wide group-hover:text-gray-400 transition-colors">
                    {article.date}
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    {article.author}
                  </p>
                  
                  <button className="flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-400 transition-colors group-hover:text-orange-400">
                    Learn More
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to get started Section */}
      <section className="relative bg-[#fff2eb] py-24 px-4 overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Ready to get started?
          </h2>
          
          <button className="px-10 py-4 bg-orange-400 hover:bg-orange-300 text-orange-900 font-semibold rounded-lg transition-colors duration-200 text-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
