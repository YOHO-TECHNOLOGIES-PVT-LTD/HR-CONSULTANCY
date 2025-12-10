import type { FC } from "react";
import { FiSearch, FiInfo, FiBookOpen, FiMessageSquare, FiClock } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";


const HeroSection: FC = () => {
  return (
    <>
    <section className="relative w-full h-[420px] overflow-hidden flex items-center justify-center bg-[#0d2e2f] text-white px-4">

      {/* BACKGROUND ANIMATION */}
      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(10,60,60,1)_0%,rgba(4,30,30,1)_55%,rgba(0,0,0,1)_100%)]
          scale-[1.6] blur-[2px]
          opacity-90 animate-zoomIn
        "
      />

      {/* CONTENT */}
      <div className="relative text-center animate-fadeInUp z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          How can we help?
        </h1>

        {/* SEARCH BAR */}
        <div
          className="
            group w-[90%] md:w-[60%] max-w-[650px] mx-auto 
            bg-white rounded-full flex items-center
            px-6 py-3 mb-7 
            transition-all duration-300
            hover:shadow-[0_4px_20px_rgba(255,255,255,0.18)]
          "
        >
          <FiSearch className="text-gray-600 text-[22px] mr-4" />
          <input
            type="text"
            placeholder="Search..."
            className="
              flex-1 text-[18px] outline-none bg-transparent 
              text-black placeholder-gray-500
            "
          />
        </div>

        {/* POPULAR LINKS */}
        <div className="text-[17px] opacity-90">
          <span className="font-semibold mr-2">Popular:</span>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-2">
            {[
              "profile",
              "andela community",
              "cash advance",
              "contract",
              "rate renegotiation",
              "login",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  group relative text-[#c7ebe8] 
                  hover:text-white transition-colors duration-300
                "
              >
                {item}
                <span
                  className="
                    absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white
                    transition-all duration-300 
                    group-hover:w-full
                  "
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>

     <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
      
      {/* ALERT SECTION */}
      <div className="max-w-6xl mx-auto mb-14">
        <div className="
          bg-[#e5f4eb] border border-[#c8e9d4]
          rounded-xl px-6 py-4 flex items-start gap-3
        ">
          <FiInfo className="text-green-700 text-xl mt-1" />
          <p className="text-[#1c3327] leading-relaxed text-[15.5px]">
            <strong>Attention Certified Talent:</strong> Please sign in with your 
            Andela Talent Cloud credentials to have full access to our articles 
            within our help center.
          </p>
        </div>
      </div>

      {/* TOP ICON SECTIONS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">
        
        <div>
          <FiBookOpen className="text-[#0b3b3b] text-5xl mx-auto mb-3" />
          <h3 className="font-semibold text-xl text-[#0b3b3b]">FAQs</h3>
          <p className="text-gray-600 mt-1">Most common questions asked by technologists</p>
        </div>

        <div>
          <FiBookOpen className="text-[#0b3b3b] text-5xl mx-auto mb-3" />
          <h3 className="font-semibold text-xl text-[#0b3b3b]">Guides</h3>
          <p className="text-gray-600 mt-1">User guides and onboarding materials</p>
        </div>

        <div>
          <FiMessageSquare className="text-[#0b3b3b] text-5xl mx-auto mb-3" />
          <h3 className="font-semibold text-xl text-[#0b3b3b]">Andela Community</h3>
          <p className="text-gray-600 mt-1">Join discussions with other technologists</p>
        </div>

      </div>

      {/* CARD GRID SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {[
          {
            title: "Joining the Andela Talent Cloud",
            desc: "Learn about Andela, our application process, the requirements to successfully apply, and troubleshooting issues with an assessment.",
          },
          {
            title: "Getting started at Andela",
            desc: "Connect with your community, polish your profile and interviewing skills, and learn how to find your next engagement.",
          },
          {
            title: "Community",
            desc: "Community information, programs, guides, perks, and learning resources.",
          },
          {
            title: "Andela Learning",
            desc: "Articles about our comprehensive learning programs to equip you with cutting-edge skills and expertise in tech domains.",
          },
          {
            title: "Andela Talent Cloud",
            desc: "This section contains elements related to the Andela Talent Cloud platform.",
          },
          {
            title: "Getting matched",
            desc: "Learn how to find your next job at Andela, best practices for landing a job, and preparing for success.",
          },
          {
            title: "On engagements",
            desc: "Project support, client requests, and other engagement-related details.",
          },
          {
            title: "Payments",
            desc: "Learn about Andela Pay, wallet integrations, receiving and transferring funds.",
          },
          {
            title: "Technical",
            desc: "Help with troubleshooting common technical issues.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="
              bg-[#0b3b3b] text-white rounded-2xl 
              p-6 h-full shadow-sm 
              hover:shadow-md transition-all duration-300
            "
          >
            <h4 className="font-semibold text-lg mb-3">{card.title}</h4>
            <p className="text-sm text-gray-200 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}

      </div>

    </section>

        <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-12">

      {/* PROMOTED ARTICLES */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-[26px] font-semibold text-[#0b3b3b] mb-6">
          Promoted articles
        </h2>

        <div className="grid md:grid-cols-3 gap-y-3 text-[#108a62] text-[15.5px]">
          <a href="#" className="hover:underline">
            Changes to your Andela Login: Here's what you need to know
          </a>
          <a href="#" className="hover:underline">
            Life as a contractor
          </a>
          <a href="#" className="hover:underline">
            Changes to your Andela Community Login: Here's what you need to know
          </a>
        </div>

        <div className="mt-4">
          <a href="#" className="text-[#108a62] hover:underline">
            Refer a friend to Andela
          </a>
        </div>
      </div>

      {/* MORE RESOURCES TITLE */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-[26px] font-semibold text-[#0b3b3b]">
          More Resources
        </h2>
      </div>

      {/* TWO CARDS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">

        {/* Card 1 */}
        <div
          className="
            border border-[#dbe8e3] rounded-2xl
            p-6 flex gap-4 items-start
            bg-white
          "
        >
          <FaRegNewspaper className="text-4xl text-[#0b3b3b]" />

          <div>
            <h3 className="font-semibold text-lg text-[#0b3b3b] mb-1">
              Andela Insights
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Access the Writer’s Room – a series of blogs written by our 
              technologists on a wide range of topics.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="
            border border-[#dbe8e3] rounded-2xl
            p-6 flex gap-4 items-start
            bg-white
          "
        >
          <FiClock className="text-4xl text-[#0b3b3b]" />

          <div>
            <h3 className="font-semibold text-lg text-[#0b3b3b] mb-1">
              Our support hours:
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              10:00am – 9:00pm GMT Monday to Friday; closed on Saturday and Sunday
            </p>
          </div>
        </div>

      </div>

      {/* CTA BOX */}
      <div className="max-w-6xl mx-auto">
        <div
          className="
            bg-[#c0ded6] rounded-3xl
            px-6 py-16 md:px-12 md:py-16
            text-center
          "
        >
          <h2 className="text-2xl font-semibold text-[#0b3b3b] mb-3">
            Can't find what you're looking for?
          </h2>
          <p className="text-[#1c3327] text-[15px] mb-7">
            Our support team is here for you!
          </p>

          <button
            className="
              bg-[#0b3b3b] text-white text-sm
              rounded-full px-6 py-2 
              hover:bg-[#0e4b4b] transition
            "
          >
            Submit a request
          </button>
        </div>
      </div>

    </section>

    </>
  );
};

export default HeroSection;
