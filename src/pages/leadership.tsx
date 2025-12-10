
import img1 from "../assets/about/662a9cb1c0757ada21e3d73e_Group 290111.svg";
import img2 from "../assets/about/662a9cb0c0757ada21e3d720_Chan_Zuckerberg_Initiative.svg";
import img3 from "../assets/about/662a9cb0c0757ada21e3d6e0_Softbank_mobile_logo.svg";
import img4 from "../assets/about/662a9cb1c0757ada21e3d73e_Group 290111.svg";
import img5 from "../assets/about/662a9cb0c0757ada21e3d6f8_Mask group.svg";
import img6 from "../assets/about/662a9cb0c0757ada21e3d6f2_image 484.svg";
import img9 from "../assets/about/6629fb6ad6ea8c68148fcef7_icons8-conference.svg";
import img10 from "../assets/about/6629fb6bd6ea8c68148fcf17_icons8-magazine 1 (1).svg";
import img11 from "../assets/about/6629fb6bd6ea8c68148fcf26_icons8-versions 1.svg";
import img12 from "../assets/about/trans-person-working-office-with-colleagues.jpg";

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

const ContactUs = () => {
  const logos = [
    { src: img1, alt: "Logo 1" },
    { src: img2, alt: "Chan Zuckerberg Initiative" },
    { src: img3, alt: "SoftBank" },
    { src: img4, alt: "Logo 4" },
    { src: img5, alt: "Generation / Mask group" },
    { src: img6, alt: "Serena Ventures" },
  ];

  const items = [
    {
      icon: img9,
      title: "Careers at KIAQ",
      text: "Join our mission to transform global talent solutions and build your career with purpose.",
      link: "#",
    },
    {
      icon: img10,
      title: "Our Insights",
      text: "Explore thought leadership on talent innovation, market trends, and industry insights.",
      link: "#",
    },
    {
      icon: img11,
      title: "Resources",
      text: "Access tools, guides, and resources to optimize your talent strategy and growth.",
      link: "#",
    },
  ];



  return (
    <>
      {/* Contact Section */}
       <section className="relative w-full overflow-hidden bg-[#0D2E2F] pt-24 pb-32">

      {/* BG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="circlePattern"
            x="0"
            y="0"
            width="140"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="70"
              cy="70"
              r="68"
              fill="none"
              stroke="#1CC1AB"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circlePattern)" />
      </svg>

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          We’re Changing The Way The World Works
        </h1>

        <p className="text-gray-200 max-w-3xl text-[15px] leading-relaxed">
          Andela exists to ensure technologists have access to equal opportunity
          regardless of where they live. Our digital talent solve complex and
          compelling problems, changing their career trajectory and quality of
          life, while companies can craft a workforce that reflects the world
          around them with lower costs, faster speed, and greater flexibility.
        </p>
      </div>

      {/* IMAGE + MISSION CARD */}
      <div className="relative z-10 mt-16 flex justify-center px-6">
        <div className="relative max-w-6xl w-full rounded-xl overflow-hidden shadow-2xl bg-black/5">

          {/* Hero Image */}
          <img
            src={img12}
            alt="team"
            className="w-full h-auto object-cover"
          />

          {/* Mission Box */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 bg-[#1C1C1C]/90 
              text-white p-7 rounded-xl max-w-xs backdrop-blur-md shadow-lg">
            <h3 className="text-lg font-bold mb-3">Our mission</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We envision a borderless world where the right person is chosen to
              do the job, no matter where they live. Where an organization in
              need of digital talent can quickly and easily scale up or down to
              meet their evolving needs. Where brilliant people in untapped
              markets build meaningful relationships with the world’s best
              brands.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM PATTERN */}
      <div className="absolute left-0 bottom-0 w-full h-[170px] bg-white">
        <svg
          className="w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="whitePattern"
              x="0"
              y="0"
              width="140"
              height="140"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="70"
                cy="70"
                r="68"
                fill="none"
                stroke="#1CC1AB"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#whitePattern)" />
        </svg>
      </div>
    </section>

    {/* Trusted By Section */}
<section className="w-full bg-white py-20">
  <div className="mx-auto max-w-7xl px-6 text-center">
    {/* Heading */}
    <h2 className="mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: UI_CONSTANTS.DARK }}>
      Trusted by industry leaders worldwide
    </h2>

    {/* Logos Row */}
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center w-16 sm:w-20 md:w-24 lg:w-28"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>


       <section className="w-full bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl shadow-sm overflow-hidden border border-gray-200">
    <div className="flex flex-col md:flex-row">
      
      {/* LEFT SIDE — Explore More Heading with Pattern */}
      <div className="relative flex flex-col justify-center items-start p-16 md:w-[32%] bg-gray-50 border-b md:border-b-0 md:border-r border-gray-300">
        <h2 className="text-4xl font-extrabold leading-snug mb-2" style={{ color: UI_CONSTANTS.DARK }}>
          Discover<br />More
        </h2>

        {/* Decorative Pattern */}
        <svg
          className="absolute bottom-0 left-0 w-64 h-64 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          fill="none"
        >
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 0L12.4 4.6L17 7L12.4 9.4L10 14L7.6 9.4L3 7L7.6 4.6L10 0Z"
              stroke={UI_CONSTANTS.PRIMARY}
              strokeWidth="0.6"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      {/* RIGHT SIDE — 3 CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 flex-1 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 bg-gray-50">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-12 flex flex-col justify-start items-start hover:bg-gray-100 transition-colors duration-300"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mb-5"
              loading="lazy"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              {item.text}
            </p>

            {/* Learn More Link */}
            <a
              href={item.link}
              className="text-sm font-semibold flex items-center gap-1 hover:underline"
              style={{ color: UI_CONSTANTS.DARK }}
            >
              Learn More <span className="text-base">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




    </>
  );
};

export default ContactUs;