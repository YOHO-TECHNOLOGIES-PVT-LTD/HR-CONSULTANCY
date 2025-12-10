import React from "react";
import img1 from "../assets/whykiaq/66622659f3617ef0668c5907_Our Talent Community_Header-p-2000.webp";
import img2 from "../assets/whykiaq/testi01.webp" ;
import img3 from "../assets/whykiaq/6641e09ebdb58bed56d6f12d_our-talent.avif" ;
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
import {
  ChartLine,
  Code,
  Globe,
  Users,
  Brain,
  Atom,
  Cpu,
  Share2,
  RefreshCcw,
} from "lucide-react";

interface Program {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const programs: Program[] = [
 {
  icon: <Code className="w-6 h-6 text-white" />,
  title: "KIAQ Skill Challenges",
  description:
    "Hands-on coding challenges designed to strengthen problem-solving and accelerate engineering growth.",
},
{
  icon: <Globe className="w-6 h-6 text-white" />,
  title: "KIAQ Cloud & AI Academy",
  description:
    "Specialized learning paths in Cloud, AI, and modern development tools—built with industry-leading partners.",
},
{
  icon: <Users className="w-6 h-6 text-white" />,
  title: "Technical Leadership Accelerator",
  description:
    "A focused program that helps emerging engineers build leadership, communication, and system-design skills.",
},
{
  icon: <Brain className="w-6 h-6 text-white" />,
  title: "AI & Data Skills Series",
  description:
    "Self-paced courses covering AI, machine learning, data science, and prompt engineering fundamentals.",
},
{
  icon: <Atom className="w-6 h-6 text-white" />,
  title: "Frontend Mastery Program",
  description:
    "A structured learning experience designed to advance expertise in React, modern UI frameworks, and best practices.",
},
{
  icon: <Cpu className="w-6 h-6 text-white" />,
  title: "GPU Computing Foundations",
  description:
    "Training in accelerated computing, RAPIDS workflows, and essential GPU-based data engineering tools.",
},

];

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

const features = [
  {
  icon: <ChartLine size={28} />,
  title: "Expertly Vetted Talent",
  desc: "Rigorous assessments ensure every engineer meets global-quality standards.",
},
{
  icon: <Users size={28} />,
  title: "Smart Talent Matching",
  desc: "AI-powered matching aligns the right experts to your project needs instantly.",
},
{
  icon: <Share2 size={28} />,
  title: "KIAQ Talent Network",
  desc: "Access a growing community of skilled professionals with continuous upskilling.",
},
{
  icon: <RefreshCcw size={28} />,
  title: "Dedicated Support",
  desc: "Our team ensures smooth onboarding, project alignment, and ongoing success.",
},


  // {
  //     company: "CloudTech Solutions",
  //     logo: "https://via.placeholder.com/200x60/ffffff/000000?text=CloudTech",
  //     title: "Scaling Infrastructure with African DevOps Expertise",
  //     description: "KIAQ connected us with exceptional DevOps engineers from Nigeria and Kenya who transformed our cloud infrastructure. Their expertise in AWS and Kubernetes helped us achieve 99.9% uptime and reduce deployment time by 70%.",
  //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
  //   },
    // {
    //   company: "DataFlow Analytics",
    //   logo: "https://via.placeholder.com/200x60/ffffff/000000?text=DataFlow",
    //   title: "Unlocking Data Insights with African Data Scientists",
    //   description: "Through KIAQ, we found brilliant data scientists from Ghana and South Africa who revolutionized our analytics capabilities. Their innovative approaches to machine learning increased our prediction accuracy by 45% and drove significant business growth.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    // }
  ];

const testimonials = [
  {
  company: "CloudTech Solutions",
  logo: "https://via.placeholder.com/200x60/ffffff/000000?text=CloudTech",
  title: "Scaling Infrastructure with Exceptional DevOps Talent",
  description: "KIAQ connected us with highly skilled DevOps engineers who streamlined our cloud operations. Their expertise in AWS and Kubernetes improved uptime and accelerated deployment cycles.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
},
{
  company: "DataFlow Analytics",
  logo: "https://via.placeholder.com/200x60/ffffff/000000?text=DataFlow",
  title: "Driving Smarter Decisions with Top Data Talent",
  description: "KIAQ enabled us to build a strong data team that elevated our machine learning workflows. Their contributions improved prediction accuracy and strengthened key business insights.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
}

];

const logos = [
  {
    src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600%20(1).svg",
    alt: "coursera logo",
  },
  {
    src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893d1_Layer_1%20(2).svg",
    alt: "mastercard logo",
  },
  {
    src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893fa_ViacomCBS%20(2).svg",
    alt: "viacom cbs logo",
  },
  {
    src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec8940e_github-2%20(1).svg",
    alt: "github logo",
  },
  {
    src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89435_Casper_Sleep_logo%20(2).svg",
    alt: "casper logo",
  },
  {
    src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89474_Cloudflare_Logo%20(2).svg",
    alt: "cloudflare logo",
  },
];

const TalentSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev: number): number => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (

    <>
    <section
      className="relative w-full h-[85vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-44 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.15] mb-5">
          We Don&apos;t Just Find The Best <br />
          Talent — We Cultivate It
        </h1>

        <p className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
  KIAQ empowers top global talent with continuous learning, mentorship, and
  growth opportunities. Our programs help engineers stay future-ready so they
  can deliver exceptional impact for the companies they work with.
</p>

        <button className="bg-orange-400 hover:bg-orange-300 text-black font-semibold text-sm md:text-base px-7 py-3 rounded-md shadow-md transition-all duration-300">
          Book a discovery call
        </button>
      </div>
    </section>


   <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20">
  {/* Decorative pattern in top right */}
  <div className="absolute top-0 right-0 opacity-20">
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M20 0L40 20L20 40L0 20L20 0Z"
          stroke="#0D9488"
          strokeWidth="0.5"
          fill="none"
        />
      </pattern>
      <rect width="160" height="160" fill="url(#dots)" />
    </svg>
  </div>

  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
      A Hiring Process Designed for Better Outcomes
    </h2>
    <p className="text-gray-600 mt-3 text-base md:text-lg">
      KIAQ empowers businesses with skilled, reliable digital talent backed by continuous support.
    </p>
  </div>

  {/* Features grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 max-w-6xl mx-auto">
    {features.map((f, i) => (
      <div key={i} className="flex flex-col items-start text-left px-8 py-10">
        <div className="bg-orange-700 text-white p-3 rounded-xl shadow-md mb-4">
          {f.icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{f.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
      </div>
    ))}
  </div>
</section>


       <section className="relative bg-[#fff2eb] py-14 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-10">
      KIAQ talent is trusted and recognized by leading global companies
    </h2>

    {/* Scrolling wrapper */}
    <div className="relative flex items-center overflow-hidden">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#fff2eb] to-transparent z-10" />

      {/* Logos */}
      <div className="flex animate-scroll whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-12 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

      {/* Right gradient */}
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#fff2eb] to-transparent z-10" />
    </div>
  </div>

  {/* Animation */}
  <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      display: flex;
      animation: scroll 15s linear infinite;
    }
  `}</style>
</section>



     <section className="bg-white py-24">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
    {/* Top Text Section */}
    <div className="text-center mb-20">
      <h2 className="text-[32px] leading-[42px] font-bold text-[#0B0B0C] mb-4">
        Technical proficiency is only the beginning at KIAQ
      </h2>
      <p className="text-[#4B5563] text-[16px] leading-[26px] max-w-[720px] mx-auto">
        Our rigorous evaluation model ensures every professional is tested, verified,
        and ready to deliver exceptional results.
      </p>
    </div>

    {/* Main Two-Column Layout */}
    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
      {/* Left Text Content */}
      <div className="flex-1">
        <h3 className="text-[22px] leading-[30px] font-semibold text-[#0B0B0C] mb-4">
          KIAQ Qualification sets the standard for excellence
        </h3>
        <p className="text-[#4B5563] text-[15px] leading-[25px] mb-12 max-w-[520px]">
          Our performance-based assessments combine real-world tasks and technical
          challenges to provide clear insight into capability and expertise.
        </p>

        {/* Divider line and Sub-sections */}
        <div className="border-t border-[#E5E7EB] pt-8 flex flex-col sm:flex-row gap-10 sm:gap-12">
          {/* Column 1 */}
          <div className="max-w-[200px]">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Communication Skills
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              Every candidate is evaluated on clarity, collaboration, and global work readiness.
            </p>
          </div>

          {/* Divider Line (visible on desktop) */}
          <div className="hidden sm:block border-l border-[#E5E7EB] h-[60px]" />

          {/* Column 2 */}
          <div className="max-w-[200px]">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Expert Interviews
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              Senior evaluators assess problem-solving depth and real-world thinking.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block border-l border-[#E5E7EB] h-[60px]" />

          {/* Column 3 */}
          <div className="max-w-[200px]">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Verified Profiles
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              All talent in the KIAQ network undergo identity and background verification.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src={img2}
          alt="Assessment Illustration"
          className="rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] w-[520px] h-auto object-cover"
        />
      </div>
    </div>
  </div>
</section>


         <section className="relative py-20 overflow-hidden" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slides */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="py-12">
                
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: UI_CONSTANTS.WHITE }}>
                      {testimonial.title}
                    </h2>
                    <p className="text-lg lg:text-xl leading-relaxed opacity-90" style={{ color: UI_CONSTANTS.WHITE }}>
                      {testimonial.description}
                    </p>
                  </div>
                  
                  {/* Right Media */}
                  <div className="relative">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.company}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                      
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-white' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

           <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Main Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-[32px] leading-[42px] font-bold text-[#0B0B0C] mb-4">
              Providing unmatched <br /> career support
            </h2>
            <p className="text-[#4B5563] text-[16px] leading-[26px] max-w-[520px]">
              We are committed to growth and upskilling of our technical talent,
              including developing the next generation of technologists. So we
              have made long-term investments in upskilling and reskilling
              partnerships and programs.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={img3}
              alt="Career Support"
              className="rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] w-[500px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Grid of Support Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 border-t border-[#E5E7EB] pt-10">
          {/* Column 1 */}
          <div className="border-l border-[#E5E7EB] pl-6">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Training
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              We help talent upskill in advanced technologies so they can land
              their ideal role.
            </p>
          </div>

          <div className="border-l border-[#E5E7EB] pl-6">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Events
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              Exclusive opportunities to gain insights from leaders at top
              global companies.
            </p>
          </div>

          <div className="border-l border-[#E5E7EB] pl-6">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Mentorship
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              Peer-to-peer support and guidance from Andela experts and
              community members.
            </p>
          </div>

          {/* Column 2 */}
          <div className="border-l border-[#E5E7EB] pl-6">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Perks
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              Access health insurance, MBA programs, EdTech opportunities and
              more from our trusted partners.
            </p>
          </div>

          <div className="border-l border-[#E5E7EB] pl-6">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Wellness
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              Medical, dental, and vision insurance, global wellness initiatives,
              counseling.
            </p>
          </div>

          <div className="border-l border-[#E5E7EB] pl-6">
            <h4 className="text-[14px] font-semibold text-[#0B0B0C] mb-1">
              Meet-ups
            </h4>
            <p className="text-[13px] text-[#4B5563] leading-[20px]">
              We connect technologists at quarterly, in-person events in their
              region.
            </p>
          </div>
        </div>
      </div>
    </section>

   <section className="relative bg-[#fff2eb] py-20 px-6 md:px-12 lg:px-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-[420px_1fr] gap-12 items-start">

    {/* LEFT: Title + description */}
    <div className="pr-2">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Advanced programs that power future-ready tech talent
      </h2>
      <p className="mt-6 text-gray-700 max-w-[330px] leading-relaxed">
        KIAQ offers continuous upskilling programs designed to strengthen engineering depth and accelerate career growth.
      </p>
    </div>

    {/* RIGHT: two-column grid of program cards */}
    <div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-8">
        {programs.map((p, i) => {
          const isRightCol = i % 2 === 1;
          return (
            <div
              key={p.title}
              className={`flex items-start gap-4 py-2 ${
                isRightCol ? "border-l border-gray-300 pl-6" : "pl-0"
              }`}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-md">
                {p.icon}
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-[420px]">
                  {p.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

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
};

export default TalentSection;   