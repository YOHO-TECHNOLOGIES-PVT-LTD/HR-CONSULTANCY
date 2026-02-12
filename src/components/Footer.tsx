// import React from "react";
import logo from "../assets/1-01.png";

export default function FooterSection() {
  return (
    <div className="w-full bg-[#0A2A4A] text-white relative overflow-hidden">
      {/* Footer Section */}
      <div className="w-full bg-[#0A2A4A] pt-8 pb-8 px-4 sm:px-6 lg:px-8 xl:px-28">
        {/* Mobile Layout: Stack with logo at top */}
        <div className="md:hidden flex flex-col items-center space-y-6">
          {/* Logo - Centered on mobile */}
          <div className="text-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-40 h-40 mx-auto object-contain" 
            />
          </div>
          
          {/* Content Grid for mobile */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Column 1 */}
            <div>
              <h3 className="text-base font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1.5 text-sm opacity-90">
                <li>
                  <a href="/" className="hover:text-[#f90102] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:text-[#f90102] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/ourservices" className="hover:text-[#f90102] transition-colors">
                    Our Services
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="text-base font-semibold mb-2">Our Services</h3>
              <ul className="space-y-1.5 text-sm opacity-90">
                <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                  WhatsApp Job Lists
                </li>
                <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                  Singapore Trade Tests
                </li>
                <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                  Blue-Collar Recruitment
                </li>
              </ul>
            </div>
          </div>
          
          {/* Full width sections for mobile */}
          <div className="w-full">
            <h3 className="text-base font-semibold mb-2 text-center">Get In Touch</h3>
            <div className="space-y-2 text-sm opacity-90 text-center">
              <div>
                <p className="mb-1">Contact Number</p>
                <p className="font-semibold hover:text-[#f90102] transition-colors cursor-pointer">
                  7395969270
                </p>
              </div>
              <button
                onClick={() => window.open('https://wa.me/7395969270', '_blank')}
                className="mt-4 px-4 py-2 rounded-md text-xs font-semibold transition-all duration-200 hover:scale-105 uppercase tracking-wide flex items-center justify-center space-x-2 mx-auto"
                style={{ backgroundColor: '#f90102', color: '#ffffff' }}
              >
                <span>Get Free Job Lists</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout: 4-column grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-48 h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 object-contain" 
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/" className="hover:text-[#f90102] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-[#f90102] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/ourservices" className="hover:text-[#f90102] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-[#f90102] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/contactus" className="hover:text-[#f90102] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                WhatsApp Job Lists
              </li>
              <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                Singapore Trade Tests
              </li>
              <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                Blue-Collar Recruitment
              </li>
              <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                Healthcare Placements
              </li>
              <li className="hover:text-[#f90102] transition-colors cursor-pointer">
                Certification Guidance
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>Contact Number</p>
              <p className="font-semibold hover:text-[#f90102] transition-colors cursor-pointer">
                7395969270
              </p>
              <p>Email Address</p>
              <p className="font-semibold hover:text-[#f90102] transition-colors cursor-pointer break-all">
                info@tjtechbusiness.com
              </p>
              <p>Address</p>
              <p className="text-xs opacity-80 leading-snug">
                No.95, 1st Floor, Valluvar Pettai, 2nd Street, Grand Southern Trunk Rd, Sunnambu Colony, Paltavaram, Chennai, Tamil Nadu - 600043
              </p>
              <button
                onClick={() => window.open('https://wa.me/7395969270', '_blank')}
                className="mt-3 px-4 py-2 rounded-md text-xs font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap uppercase tracking-wide flex items-center space-x-2"
                style={{ backgroundColor: '#f90102', color: '#ffffff' }}
              >
                <span>Get Free Job Lists</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 py-3 md:py-4 text-center text-xs opacity-80">
  Copyright © {new Date().getFullYear()} TJ-TECH BUSINESS SOLUTIONS PVT LTD. All Rights Reserved.
</div>

    </div>
  );
}