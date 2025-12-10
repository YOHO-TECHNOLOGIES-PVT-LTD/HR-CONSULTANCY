import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ✅ Import all your assets
import webimg2 from "../assets/66592e243ff567c6d20bf458_shutterstock_1903260658.avif";
import webimg3 from "../assets/665931b9c3884b006d99aea7_shutterstock_2178995507 1.avif";
import webimg4 from "../assets/6659318549edab4cae8985df_v617-bb-18-technology 1.webp";
import webimg5 from "../assets/usecase/6659122638860b6b136d87cc_663cd53f7f18d638d7d794b4_663b848c3b7490760b70c15d_pymetrics-logo.webp";
import webimg6 from "../assets/usecase/665911c80e229142815dcc29_664d0cc858260032436ce24c_Hover Template 640 x 540.avif";
import webimg7 from "../assets/usecase/665911f99aebdfa28eaa44fd_66466ee066937caaa153818f_Hover Template 640 x 537.avif";
import twlimg from "../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png";
import sol13 from "../assets/solutions/66551e33b51a48a01a04b49e_TWC _ 370 x 442.avif";
import sol14 from "../assets/solutions/66551e5ea419e51fd8602370_Mindshare.avif";
import sol15 from "../assets/solutions/66551df754960be0f32df34b_Frame 1073714194.avif";
import sol16 from "../assets/solutions/6655d8d4de6e142a88be6431_Nebula _ 370 x 446.avif";
import sol17 from "../assets/solutions/6657c42407afdd44de5fd97b_github logo.webp";
import sol18 from "../assets/solutions/6657c45988183db22b904624_TWC logo.webp";
import sol19 from "../assets/solutions/6657c49b629db5fe891a5454_mindshare logo.webp";
import sol20 from "../assets/solutions/6657c518ad72fe6656c7b9d6_nebula logo (1).webp";
import sol21 from "../assets/solutions/66343fa7e9d0576bd06f8b42_master-card-img.webp";

// ✅ Cards data
const cards = [
  {
    type: "ANALYST INSIGHTS",
    title: "Unlock Hidden Talent: The Skills-Based Strategy...",
    description:
      "Discover how the skills-based hiring revolution is solving the $5.5 trillion IT talent crisis. IDC research reveals why 94% of tech leaders prioritize AI skills, successful strategies from Andela’s Google and Nvidia partnerships, and actionable frameworks for accessing global tech talent pools.",
    image: webimg2,
  },
  {
    type: "INFOGRAPHIC",
    title: "Fix Your Hiring Process With Andela",
    description:
      "It’s sad but true; the traditional hiring process is broken. Unstructured interviews, biases, and reliance on gut instincts sabotage the process. Our infographic is packed with expert insights to help you save time, cut costs, and build better teams.",
    image: webimg3,
  },
  { type: "CASE STUDY", title: "Technology Transformation", description: "How enterprises transform through digital innovation and global collaboration.", image: webimg4 },
  { type: "PARTNER STORY", title: "Pymetrics Success Case", description: "Discover how Andela supported Pymetrics in building scalable data-driven solutions.", image: webimg5 },
  { type: "CASE STUDY", title: "AI Talent Acceleration", description: "Leverage Andela’s AI-focused hiring strategy for cutting-edge innovation.", image: webimg6 },
  { type: "INSIGHT REPORT", title: "Diversity in Tech Workforce", description: "Explore global diversity trends in tech and how to improve inclusion.", image: webimg7 },
  { type: "RESEARCH", title: "Building Smarter Teams", description: "Understand the frameworks behind world-class global teams.", image: twlimg },
  { type: "SUCCESS STORY", title: "TWC Case Study", description: "Scaling software delivery with Andela’s global talent network.", image: sol13 },
  { type: "SUCCESS STORY", title: "Mindshare Partnership", description: "How Mindshare achieved tech excellence through Andela.", image: sol14 },
  { type: "CASE STUDY", title: "Frame Innovation Story", description: "Transforming innovation pipelines using AI-driven hiring.", image: sol15 },
  { type: "CASE STUDY", title: "Nebula Project", description: "Accelerating project delivery timelines with flexible engineering capacity.", image: sol16 },
  { type: "PARTNER", title: "GitHub Collaboration", description: "Empowering open-source projects through Andela’s network.", image: sol17 },
  { type: "PARTNER", title: "TWC Partnership", description: "Discover Andela’s long-term partnership success with TWC.", image: sol18 },
  { type: "CASE STUDY", title: "Mindshare Collaboration", description: "Driving media innovation with global engineering talent.", image: sol19 },
  { type: "PARTNER", title: "Nebula Collaboration", description: "How Nebula achieved operational excellence with Andela.", image: sol20 },
  { type: "INSIGHT", title: "Mastercard Digital Success", description: "Enabling Mastercard’s digital transformation through global tech collaboration.", image: sol21 },
];

export default function ResourceCenter() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const cardWidth = (scrollContainer.children[0] as HTMLElement).offsetWidth + 32;
    scrollContainer.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const next = () => {
    if (activeIndex < cards.length - 1) scrollToIndex(activeIndex + 1);
  };

  const prev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const cardWidth = (scrollContainer.children[0] as HTMLElement).offsetWidth + 32;
      const newIndex = Math.round(scrollContainer.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <section className="relative w-full bg-[#e5f0ee] py-20 px-6 lg:px-12 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <div className="relative text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Resource Center
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore our library of guides, case studies, webinars, and other
          resources to unlock best practices for building high-performing teams.
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-10 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md hover:shadow-xl z-20"
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-10 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md hover:shadow-xl z-20"
      >
        <ArrowRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="relative flex gap-8 overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth px-6"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={`snap-center flex-shrink-0 w-[750px] h-[440px] transition-all duration-700 ease-out ${
              activeIndex === i
                ? "scale-100 opacity-100"
                : "scale-95 opacity-70"
            }`}
          >
            <div className="flex h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
              {/* Left content */}
              <div className="w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-3">
                    {card.type}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-[#0a4340] hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="w-1/2 h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
   {/* second section */}

  <section className="relative flex justify-center py-20 px-4 bg-gradient-to-b from-[#e5f0ee] to-[#e5f0ee]">
  <div className="relative w-full max-w-6xl bg-[#12393d] rounded-2xl overflow-hidden flex flex-col md:flex-row justify-between items-center p-10 md:p-16 shadow-xl">
    {/* Background pattern overlay */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "300px 300px",
      }}
    ></div>
    
    {/* Floral line pattern */}
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm0 0c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0 0c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }}
    ></div>
    
    {/* Left side text */}
    <div className="relative text-white mb-8 md:mb-0 md:w-1/2">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Interested in <br /> Learning More?
      </h2>
    </div>
    {/* Right side form */}
    <div className="relative bg-transparent md:w-1/2 flex flex-col space-y-4">
      <p className="text-gray-100 text-base leading-relaxed">
        Subscribe today to stay informed and get regular updates from Andela.
      </p>
      <form className="flex flex-col space-y-4 max-w-md">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-gray-200 tracking-wide"
        >
          EMAIL ADDRESS:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fff2eb]"
        />
        <button
          type="submit"
          className="bg-[#fff2eb] text-gray-900 font-semibold px-6 py-2.5 rounded-md hover:bg-[#1fc8a4] transition-all duration-300 w-[120px]"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

    </>
  );
}
