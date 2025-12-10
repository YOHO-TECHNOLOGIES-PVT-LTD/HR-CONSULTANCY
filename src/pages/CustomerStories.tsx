
import img1 from "../assets/about/662a9cb1c0757ada21e3d73e_Group 290111.svg";
import img2 from "../assets/about/662a9cb0c0757ada21e3d720_Chan_Zuckerberg_Initiative.svg";
import img3 from "../assets/about/662a9cb0c0757ada21e3d6e0_Softbank_mobile_logo.svg";
import img4 from "../assets/about/662a9cb1c0757ada21e3d73e_Group 290111.svg";
import img5 from "../assets/about/662a9cb0c0757ada21e3d6f8_Mask group.svg";
import img6 from "../assets/about/662a9cb0c0757ada21e3d6f2_image 484.svg";
import img9 from "../assets/about/6629fb6ad6ea8c68148fcef7_icons8-conference.svg";
import img10 from "../assets/about/6629fb6bd6ea8c68148fcf17_icons8-magazine 1 (1).svg";
import img11 from "../assets/about/6629fb6bd6ea8c68148fcf26_icons8-versions 1.svg";

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
      title: "Customer Stories",
      text: "Read how companies transformed their teams with KIAQ talent solutions.",
      link: "#",
    },
    {
      icon: img10,
      title: "Success Metrics",
      text: "Explore the measurable impact KIAQ has delivered for organizations worldwide.",
      link: "#",
    },
    {
      icon: img11,
      title: "Case Studies",
      text: "Deep dive into detailed success stories and implementation journeys.",
      link: "#",
    },
  ];

  const testimonials = [
    {
      quote: "KIAQ connected us with exceptional talent that transformed our infrastructure.",
      name: "Sarah Johnson",
      role: "CTO, TechFlow Solutions"
    },
    {
      quote: "The data scientist we found through KIAQ revolutionized our analytics capabilities.",
      name: "Michael Chen", 
      role: "Head of Data, DataDriven Inc"
    }
  ];

  return (
    <>
      {/* Customer Stories Section */}
      <section className="relative w-full overflow-hidden pb-24 pt-20" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
        {/* Background Circular Pattern */}
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
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke={UI_CONSTANTS.PRIMARY}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circlePattern)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-3">Customer Stories</h2>
          <p className="max-w-2xl text-base leading-relaxed text-gray-200">
            Real success stories from companies that have transformed their teams with KIAQ talent.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative z-10 mt-12 flex justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-2" style={{ color: UI_CONSTANTS.DARK }}>
                      "
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 mt-16 text-center">
          <button 
            className="px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300"
            style={{
              backgroundColor: UI_CONSTANTS.PRIMARY,
              color: UI_CONSTANTS.WHITE
            }}
          >
            Read More Success Stories
          </button>
        </div>

        {/* Bottom White Section with Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-[160px] bg-white overflow-hidden">
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
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={UI_CONSTANTS.PRIMARY}
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
            Trusted by innovative companies worldwide
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

      {/* Explore Stories Section */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl shadow-sm overflow-hidden border border-gray-200">
          <div className="flex flex-col md:flex-row">
            
            {/* LEFT SIDE — Explore Stories Heading with Pattern */}
            <div className="relative flex flex-col justify-center items-start p-16 md:w-[32%] bg-gray-50 border-b md:border-b-0 md:border-r border-gray-300">
              <h2 className="text-4xl font-extrabold leading-snug mb-2" style={{ color: UI_CONSTANTS.DARK }}>
                Explore<br />Stories
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
                    Read More <span className="text-base">→</span>
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