import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import image from '../assets/1-01.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  // Scroll to top when route changes
// Scroll to top when route changes
useEffect(() => {
  // Scroll window to top
  window.scrollTo({ top: 0, behavior: 'instant' });
  
  // Also scroll any main content element if it exists
  const main = document.querySelector('main');
  if (main) {
    main.scrollTo({ top: 0, behavior: 'instant' });
  }
}, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null); // This should now work correctly
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        fontFamily: "'Inter Variable', sans-serif"
      }}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={image}
                alt="KIAQ Logo"
                className="h-auto w-20 sm:w-24 md:w-32 lg:w-36 object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => navigate('/')}
              className={`${location.pathname === '/' ? 'text-red-600 border-b-2 border-red-600' : 'text-black'}
                hover:text-red-600 text-sm font-semibold transition-colors pb-1 whitespace-nowrap uppercase tracking-wide`}
            >
              Home
            </button>

            <button
              onClick={() => navigate('/about-us')}
              className={`${location.pathname === '/about-us' ? 'text-red-600 border-b-2 border-red-600' : 'text-black'}
                hover:text-red-600 text-sm font-semibold transition-colors pb-1 whitespace-nowrap uppercase tracking-wide`}
            >
              About Us
            </button>

            <button
              onClick={() => navigate('/ourservices')}
              className={`${location.pathname === '/ourservices' ? 'text-red-600 border-b-2 border-red-600' : 'text-black'}
                hover:text-red-600 text-sm font-semibold transition-colors pb-1 whitespace-nowrap uppercase tracking-wide`}
            >
              Our Services
            </button>

            <button
              onClick={() => navigate('/testimonials')}
              className={`${location.pathname === '/testimonials' ? 'text-red-600 border-b-2 border-red-600' : 'text-black'}
                hover:text-red-600 text-sm font-semibold transition-colors pb-1 whitespace-nowrap uppercase tracking-wide`}
            >
              Testimonials
            </button>

            <button
              onClick={() => navigate('/contactus')}
              className={`${location.pathname === '/contactus' ? 'text-red-600 border-b-2 border-red-600' : 'text-black'}
                hover:text-red-600 text-sm font-semibold transition-colors pb-1 whitespace-nowrap uppercase tracking-wide`}
            >
              Contact Us
            </button>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => window.open('https://wa.me/7395969270', '_blank')}
              className="px-4 py-2 rounded-md text-xs sm:text-sm md:text-sm font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap uppercase tracking-wide flex items-center space-x-2"
              style={{
                backgroundColor: '#dc2626',
                color: '#ffffff'
              }}
            >
              <span>Get A Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="#000000" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-gray-200 absolute left-0 right-0 top-16 sm:top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/' ? 'text-red-600 bg-gray-50' : 'text-black'} hover:bg-gray-50 hover:text-red-600`}
              >
                Home
              </button>

              <button
                onClick={() => { navigate('/about-us'); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/about-us' ? 'text-red-600 bg-gray-50' : 'text-black'} hover:bg-gray-50 hover:text-red-600`}
              >
                About Us
              </button>

              <button
                onClick={() => { navigate('/ourservices'); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/ourservices' ? 'text-red-600 bg-gray-50' : 'text-black'} hover:bg-gray-50 hover:text-red-600`}
              >
                Our Services
              </button>

              <button
                onClick={() => { navigate('/testimonials'); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/testimonials' ? 'text-red-600 bg-gray-50' : 'text-black'} hover:bg-gray-50 hover:text-red-600`}
              >
                Testimonials
              </button>

              <button
                onClick={() => { navigate('/contactus'); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/contactus' ? 'text-red-600 bg-gray-50' : 'text-black'} hover:bg-gray-50 hover:text-red-600`}
              >
                Contact Us
              </button>

              <div className="border-t border-gray-200 my-2"></div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};