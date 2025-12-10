import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
import webimg2 from "../assets/66592e243ff567c6d20bf458_shutterstock_1903260658.avif"; 
import webimg3 from "../assets/665931b9c3884b006d99aea7_shutterstock_2178995507 1.avif";
import webimg4 from "../assets/6659318549edab4cae8985df_v617-bb-18-technology 1.webp";
import sol13 from '../assets/solutions/66551e33b51a48a01a04b49e_TWC _ 370 x 442.avif';
import sol14 from '../assets/solutions/66551e5ea419e51fd8602370_Mindshare.avif';
import sol15 from '../assets/solutions/66551df754960be0f32df34b_Frame 1073714194.avif';
import sol16 from '../assets/solutions/6655d8d4de6e142a88be6431_Nebula _ 370 x 446.avif';

const UI_CONSTANTS = {
  PRIMARY: "#ff4600",
  DARK: "#011123",
  WHITE: "#ffffff",
};

const EBooks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ebooks = [
    {
      title: "Mastering React.js",
      author: "John Doe",
      category: "Frontend Development",
      image: webimg2,
    },
    {
      title: "Node.js in Action",
      author: "Sarah Johnson",
      category: "Backend Development",
      image: webimg3,
    },
    {
      title: "The Art of JavaScript",
      author: "Michael Brown",
      category: "Programming",
      image: webimg4,
    },
    {
      title: "MongoDB Essentials",
      author: "Alice Smith",
      category: "Database",
      image: sol13,
    },
    {
      title: "Python for Data Science",
      author: "Emily Chen",
      category: "Data Science",
      image: sol14,
    },
    {
      title: "CSS Mastery",
      author: "David Wilson",
      category: "Frontend Development",
      image: sol15,
    },
    {
      title: "Docker Deep Dive",
      author: "Robert Lee",
      category: "DevOps",
      image: sol16,
    },
    {
      title: "Machine Learning Basics",
      author: "Linda Martinez",
      category: "AI & ML",
      image: tenimg,
    },
    {
      title: "TypeScript Complete Guide",
      author: "James Anderson",
      category: "Programming",
      image: eleimg,
    },
    {
      title: "AWS Cloud Essentials",
      author: "Maria Garcia",
      category: "Cloud Computing",
      image: twlimg,
    },
    {
      title: "Vue.js 3 Masterclass",
      author: "Tom Harris",
      category: "Frontend Development",
      image: webimg2,
    },
    {
      title: "GraphQL in Practice",
      author: "Sophie Turner",
      category: "Backend Development",
      image: webimg3,
    },
  ];

  const itemsPerPage = 8;
  const totalSlides = Math.ceil(ebooks.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleBooks = ebooks.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (

    <>
    <div
      className="min-h-screen flex flex-col items-center px-6 md:px-12 lg:px-20 py-16"
      style={{
        backgroundColor: UI_CONSTANTS.DARK,
        color: UI_CONSTANTS.WHITE,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* --- Hero Section --- */}
      <div className="text-center max-w-3xl mb-14">
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
          style={{ color: UI_CONSTANTS.WHITE }}
        >
          Explore Our eBook Library
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Discover curated eBooks to help you master cutting-edge technologies
          and enhance your career growth. Each book is carefully selected to
          guide you from fundamentals to advanced concepts.
        </p>
      </div>

      {/* --- Search & Filter --- */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch justify-between gap-4 mb-12">
        <div className="relative w-full md:flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for an eBook..."
            className="w-full h-full pl-12 pr-4 py-3 rounded-full border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-[#ff4600] focus:outline-none transition-all"
          />
        </div>

        <select
          className="border border-gray-700 rounded-full px-6 py-3 bg-transparent text-white text-sm focus:ring-2 focus:ring-[#ff4600] focus:outline-none w-full md:w-auto md:min-w-[200px]"
        >
          <option value="">All Categories</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="database">Database</option>
          <option value="programming">Programming</option>
          <option value="datascience">Data Science</option>
          <option value="devops">DevOps</option>
          <option value="cloud">Cloud Computing</option>
        </select>
      </div>

      {/* --- Slider Navigation --- */}
      <div className="w-full max-w-6xl flex items-center justify-between mb-6">
        <div className="text-gray-400 text-sm">
          Showing {currentSlide * itemsPerPage + 1} -{" "}
          {Math.min((currentSlide + 1) * itemsPerPage, ebooks.length)} of{" "}
          {ebooks.length} eBooks
        </div>
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full border-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              borderColor: UI_CONSTANTS.PRIMARY,
              color: UI_CONSTANTS.PRIMARY,
            }}
            onMouseEnter={(e) => {
              if (currentSlide !== 0) {
                e.currentTarget.style.backgroundColor = UI_CONSTANTS.PRIMARY;
                e.currentTarget.style.color = UI_CONSTANTS.WHITE;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = UI_CONSTANTS.PRIMARY;
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-full border-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              borderColor: UI_CONSTANTS.PRIMARY,
              color: UI_CONSTANTS.PRIMARY,
            }}
            onMouseEnter={(e) => {
              if (currentSlide !== totalSlides - 1) {
                e.currentTarget.style.backgroundColor = UI_CONSTANTS.PRIMARY;
                e.currentTarget.style.color = UI_CONSTANTS.WHITE;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = UI_CONSTANTS.PRIMARY;
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* --- eBooks Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-6xl transition-all duration-500">
        {visibleBooks.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                <span
                  className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: "#fff2eb",
                    color: UI_CONSTANTS.PRIMARY,
                  }}
                >
                  {book.category}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* --- Slide Indicators --- */}
      <div className="flex gap-2 mt-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor:
                index === currentSlide ? UI_CONSTANTS.PRIMARY : "#4a5568",
            }}
          />
        ))}
      </div>
    </div>


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

export default EBooks;