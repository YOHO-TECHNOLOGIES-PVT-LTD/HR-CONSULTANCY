import { useState } from "react";
import { Search, Calendar, Clock, User, Play, ArrowRight, Filter } from "lucide-react";
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
  PRIMARY: '#ff4600',
  DARK: '#011123',
  WHITE: '#ffffff',
};

const Webinars = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Webinars" },
    { id: "tech", name: "Technology" },
    { id: "leadership", name: "Leadership" },
    { id: "development", name: "Career Development" },
    { id: "industry", name: "Industry Trends" },
  ];

  const webinars = [
    {
      id: 1,
      title: "The Future of Remote Work in Tech",
      description: "Explore how remote work is reshaping the technology industry and what it means for your career.",
      date: "2024-12-15",
      time: "14:00",
      duration: "60 mins",
      speaker: "Sarah Johnson",
      category: "tech",
      image: webimg2,
      attendees: 245,
      isLive: false,
    },
    {
      id: 2,
      title: "Building Effective Engineering Teams",
      description: "Learn strategies for building and managing high-performing distributed engineering teams.",
      date: "2024-12-18",
      time: "11:00",
      duration: "45 mins",
      speaker: "Michael Chen",
      category: "leadership",
      image: webimg3,
      attendees: 189,
      isLive: true,
    },
    {
      id: 3,
      title: "AI and Machine Learning Trends 2024",
      description: "Discover the latest trends and innovations in artificial intelligence and machine learning.",
      date: "2024-12-20",
      time: "16:30",
      duration: "90 mins",
      speaker: "Dr. Emily Rodriguez",
      category: "industry",
      image: webimg4,
      attendees: 312,
      isLive: false,
    },
    {
      id: 4,
      title: "Career Growth in Digital Transformation",
      description: "Navigate your career path in the rapidly evolving landscape of digital transformation.",
      date: "2024-12-22",
      time: "13:00",
      duration: "75 mins",
      speaker: "David Thompson",
      category: "development",
      image: sol13,
      attendees: 167,
      isLive: false,
    },
    {
      id: 5,
      title: "Cloud Native Development Best Practices",
      description: "Master the principles and practices of cloud-native application development.",
      date: "2024-12-25",
      time: "10:00",
      duration: "120 mins",
      speaker: "Lisa Wang",
      category: "tech",
      image: sol14,
      attendees: 278,
      isLive: false,
    },
    {
      id: 6,
      title: "Inclusive Leadership in Tech",
      description: "Learn how to foster inclusive environments and lead diverse technology teams effectively.",
      date: "2024-12-28",
      time: "15:00",
      duration: "60 mins",
      speaker: "Marcus Johnson",
      category: "leadership",
      image: sol15,
      attendees: 201,
      isLive: false,
    },
    {
      id: 7,
      title: "The Future of Hiring is Borderless",
      description: "Explore how global talent acquisition is transforming the way companies build teams.",
      date: "2024-12-30",
      time: "09:00",
      duration: "75 mins",
      speaker: "Alex Morgan",
      category: "industry",
      image: tenimg,
      attendees: 189,
      isLive: false,
    },
    {
      id: 8,
      title: "Modern Web Development Patterns",
      description: "Deep dive into contemporary web development architectures and best practices.",
      date: "2025-01-05",
      time: "14:30",
      duration: "90 mins",
      speaker: "Jennifer Lee",
      category: "tech",
      image: eleimg,
      attendees: 234,
      isLive: false,
    },
    {
      id: 9,
      title: "Tech Talent Market Insights",
      description: "Latest research findings on global remote tech talent demand and trends.",
      date: "2025-01-08",
      time: "16:00",
      duration: "60 mins",
      speaker: "Robert Kim",
      category: "industry",
      image: twlimg,
      attendees: 156,
      isLive: false,
    },
    {
      id: 10,
      title: "Advanced Cloud Infrastructure",
      description: "Building scalable and resilient cloud infrastructure for modern applications.",
      date: "2025-01-12",
      time: "11:00",
      duration: "120 mins",
      speaker: "Maria Garcia",
      category: "tech",
      image: sol16,
      attendees: 198,
      isLive: false,
    },
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesCategory = activeCategory === "all" || webinar.category === activeCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: UI_CONSTANTS.DARK, color: UI_CONSTANTS.WHITE }}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full" style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full" style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Expert <span style={{ color: UI_CONSTANTS.PRIMARY }}>Webinars</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join live sessions with industry leaders and expand your knowledge in technology, 
            leadership, and career development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
            >
              View Upcoming Webinars
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:bg-white hover:bg-opacity-10"
              style={{ borderColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.PRIMARY }}
            >
              Watch Recordings
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:outline-none transition-all"
                style={{ '--tw-ring-color': UI_CONSTANTS.PRIMARY } as React.CSSProperties}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? UI_CONSTANTS.PRIMARY : 'transparent',
                    border: activeCategory === category.id ? 'none' : `1px solid #374151`
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Webinars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Webinar Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Live Badge */}
                  {webinar.isLive && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 bg-red-500 text-white">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        LIVE
                      </span>
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={24} style={{ color: UI_CONSTANTS.PRIMARY }} fill={UI_CONSTANTS.PRIMARY} />
                    </div>
                  </div>
                </div>

                {/* Webinar Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ backgroundColor: `${UI_CONSTANTS.PRIMARY}20`, color: UI_CONSTANTS.PRIMARY }}
                    >
                      {webinar.category.charAt(0).toUpperCase() + webinar.category.slice(1)}
                    </span>
                    <span className="text-gray-400 text-sm">{webinar.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-orange-300 transition-colors">
                    {webinar.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {webinar.description}
                  </p>

                  {/* Webinar Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar size={16} />
                      <span>{formatDate(webinar.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock size={16} />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <User size={16} />
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>

                  {/* Attendees and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400">
                      {webinar.attendees} attendees
                    </div>
                    <button 
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:gap-3 group/btn"
                      style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                    >
                      {webinar.isLive ? 'Join Now' : 'Register'}
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredWebinars.length === 0 && (
            <div className="text-center py-16">
              <Filter size={64} className="mx-auto mb-4 text-gray-500" />
              <h3 className="text-2xl font-bold mb-2">No webinars found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Host a Webinar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Share your expertise with our global community of tech professionals and leaders.
          </p>
          <button 
            className="px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:bg-white hover:text-orange-600"
            style={{ backgroundColor: 'transparent', borderColor: UI_CONSTANTS.WHITE, color: UI_CONSTANTS.WHITE }}
          >
            Become a Speaker
          </button>
        </div>
      </section>
    </div>
  );
};

export default Webinars;