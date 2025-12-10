
import img1 from "../assets/about/662a9cb1c0757ada21e3d73e_Group 290111.svg";
import img2 from "../assets/about/662a9cb0c0757ada21e3d720_Chan_Zuckerberg_Initiative.svg";
import img3 from "../assets/about/662a9cb0c0757ada21e3d6e0_Softbank_mobile_logo.svg";
import img4 from "../assets/about/662a9cb1c0757ada21e3d73e_Group 290111.svg";
import img5 from "../assets/about/662a9cb0c0757ada21e3d6f8_Mask group.svg";
import img6 from "../assets/about/662a9cb0c0757ada21e3d6f2_image 484.svg";
import img9 from "../assets/about/6629fb6ad6ea8c68148fcef7_icons8-conference.svg";
import img10 from "../assets/about/6629fb6bd6ea8c68148fcf17_icons8-magazine 1 (1).svg";
import img11 from "../assets/about/6629fb6bd6ea8c68148fcf26_icons8-versions 1.svg";

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
      title: "Careers",
      text: "Join a team that’s out to change the way the world works.",
      link: "#",
    },
    {
      icon: img10,
      title: "Blog",
      text: "Learn about digital transformation, borderless hiring and more.",
      link: "#",
    },
    {
      icon: img11,
      title: "Resources",
      text: "Discover how to put Adaptive Hiring to work for your business.",
      link: "#",
    },
  ];



  return (
    <>
      {/* Contact Section */}
     <section className="relative w-full overflow-hidden bg-[#ff5500] pb-24 pt-20">
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
          stroke="#ffffff"  
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circlePattern)" />
  </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
          <p className="max-w-2xl text-base leading-relaxed">
            Let’s get this conversation started. Tell us a bit about yourself and
            we’ll get in touch as soon as we can.
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative z-10 mt-10 flex justify-center px-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8 md:p-10">
            {/* Work Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-700 mb-2"
              >
                WORK EMAIL: *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Work email*"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-[#1ad6b5] focus:border-[#1ad6b5] outline-none transition-all"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-gray-700 mb-2"
              >
                MESSAGE: *
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-[#1ad6b5] focus:border-[#1ad6b5] outline-none transition-all"
              ></textarea>
            </div>

            {/* Type of Inquiry */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-gray-700 mb-3">
                TYPE OF INQUIRY
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="inquiry"
                    value="sales"
                    defaultChecked
                    className="text-[#ff5500] focus:ring-[#ff5500]"
                  />
                  SALES
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="inquiry"
                    value="media"
                    className="text-[#ff5500] focus:ring-[#ff5500]"
                  />
                  MEDIA
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="inquiry"
                    value="general"
                    className="text-[#ff5500] focus:ring-[#ff5500]"
                  />
                  GENERAL
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#ff5500] text-gray-900 font-semibold text-sm px-8 py-2.5 rounded-md hover:bg-[#e64e00] transition-all duration-300"
            >
              Submit
            </button>
          </div>
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
                  stroke="#94D5C8"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#whitePattern)" />
          </svg>
        </div>
      </section>

    {/* Backed By Section */}
<section className="w-full bg-white py-20">
  <div className="mx-auto max-w-7xl px-6 text-center">
    {/* Heading */}
    <h2 className="mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">
      We&apos;re backed by some of the best in the world
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
  <div className="max-w-7xl mx-auto bg-[#fff2eb] rounded-2xl shadow-sm overflow-hidden">
    <div className="flex flex-col md:flex-row">
      
      {/* LEFT SIDE — Explore More Heading with Pattern */}
      <div className="relative flex flex-col justify-center items-start p-16 md:w-[32%] bg-[#fff2eb] border-b md:border-b-0 md:border-r border-[#D7E0D2]">
        <h2 className="text-4xl font-extrabold text-[#0F3E40] leading-snug mb-2">
          Explore<br />More
        </h2>

        {/* Decorative Pattern */}
        <svg
          className="absolute bottom-0 left-0 w-64 h-64 text-[#BFD8B5]/60"
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
              stroke="currentColor"
              strokeWidth="0.6"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      {/* RIGHT SIDE — 3 CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 flex-1 divide-y sm:divide-y-0 sm:divide-x divide-[#D7E0D2] bg-[#fff2eb]">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-12 flex flex-col justify-start items-start hover:bg-[#F0F5ED] transition-colors duration-300"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mb-5"
              loading="lazy"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0F3E40] mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              {item.text}
            </p>

            {/* Learn More Link */}
            <a
              href={item.link}
              className="text-sm font-semibold text-[#0F3E40] flex items-center gap-1 hover:underline"
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
