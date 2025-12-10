import { useState, useEffect, useCallback } from "react";
import type { ChangeEvent } from "react";
import tecki from "../assets/teccipark3.jpeg";
import tech1 from "../assets/teccipark3.jpeg";
import tech2 from "../assets/teccientrance.png";
import tech3 from "../assets/ex9.png";
import teck4 from "../assets/chennai-clipart-18-removebg-preview.png";

// Define types for office data
interface OfficeInfo {
  title: string;
  address: string[];
  mobile: string;
  email: string;
  hours: string;
  image: string;
  mapsLink: string;
}

interface OfficeData {
  Chennai: OfficeInfo;
  Bangalore: OfficeInfo;
  Mumbai: OfficeInfo;
}

type OfficeLocation = keyof OfficeData;

const ContactUs = () => {
  const [selectedLocation, setSelectedLocation] =
    useState<OfficeLocation>("Chennai");

  useEffect(() => {
    const savedLocation =
      localStorage.getItem("selectedOfficeLocation") as OfficeLocation | null;
    if (savedLocation && officeData[savedLocation]) {
      setSelectedLocation(savedLocation);
    }
  }, []);

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocation = event.target.value as OfficeLocation;
    setSelectedLocation(newLocation);
    localStorage.setItem("selectedOfficeLocation", newLocation);
  };

  const officeData: OfficeData = {
    Chennai: {
      title: "Chennai",
      address: [
        "M181, Cactus Corporate, G Floor, Block B",
        "Tecci Park, OMR, Sholinganallur",
        "Chennai 600 119",
      ],
      mobile: "+91 8925 92 1401",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,

      // ✅ UPDATED ONLY THIS LINE
      mapsLink:
        "https://www.google.com/maps/dir//Cactus,G+Floor,+Block+B,+TECCI+PARK,+M181,+Rajiv+Gandhi+Salai,+Elcot+Sez,+Sholinganallur,+Chennai,+Tamil+Nadu+600119/@13.008896,80.2029568,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525d352c30ef65:0x5e68ff80778d5be4!2m2!1d80.2264068!2d12.910766?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
    },

    Bangalore: {
      title: "Bangalore",
      address: [
        "Tech Park, 3rd Floor, Tower B",
        "Whitefield Road",
        "Bangalore 560 066",
      ],
      mobile: "+91 8925 92 1402",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#",
    },

    Mumbai: {
      title: "Mumbai",
      address: [
        "Business Bay, 5th Floor",
        "Bandra Kurla Complex",
        "Mumbai 400 051",
      ],
      mobile: "+91 8925 92 1403",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#",
    },
  };

  const currentOffice = officeData[selectedLocation];

  const images = [tech1, tech2, tech3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide function
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);


  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <>
      <section
        className="relative w-full overflow-hidden pb-16 pt-24 sm:pt-28 md:pt-36 bg-[#002b38] font-['Inter_Variable',_sans-serif]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#002b38] opacity-95"></div>

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-['Inter_Variable',_sans-serif]">
            Contact Us
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-200 opacity-90 font-['Inter_Variable',_sans-serif]">
            We're a dedicated team of IT professionals, committed to delivering
            innovative solutions that fuel your business success.
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative z-10 flex justify-center px-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-6xl p-6 sm:p-8 md:p-10 border border-gray-200/80">

            {/* Title row */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mb-8 gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold mb-3 text-gray-900 font-['Inter_Variable',_sans-serif]">
                  Our Offices
                </h1>
                <p className="text-gray-700 max-w-xl leading-relaxed text-base sm:text-lg opacity-90 font-['Inter_Variable',_sans-serif]">
                  Explore our modern offices around the world—where innovation meets
                  collaboration and support is always available.
                </p>
              </div>

              {/* Dropdown */}
              <div className="w-full lg:w-auto">
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="appearance-none border border-gray-300/80 rounded-xl px-5 py-3.5 text-base sm:text-lg w-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#005f73] cursor-pointer transition-all pr-12 font-medium font-['Inter_Variable',_sans-serif]"
                  >
                    <option value="Chennai">Chennai</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 bg-white shadow-xl">

              {/* LEFT INFO */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight font-['Inter_Variable',_sans-serif]">
                    {currentOffice.title}
                  </h2>
                  <img src={teck4} alt="Location" className="w-12 h-12 ml-4 opacity-90" />
                </div>

                <div className="space-y-6 text-base sm:text-lg text-gray-800 font-['Inter_Variable',_sans-serif]">
                  <div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-[#002b38]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <p className="font-semibold text-lg sm:text-xl font-['Inter_Variable',_sans-serif]">Address:</p>
                    </div>
                    {currentOffice.address.map((line, index) => (
                      <p
                        key={index}
                        className="text-gray-700 leading-relaxed mb-1 text-base sm:text-lg opacity-90 ml-7 font-['Inter_Variable',_sans-serif]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-[#002b38]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <p className="font-semibold text-lg sm:text-xl font-['Inter_Variable',_sans-serif]">Mobile:</p>
                    </div>
                    <a
                      href={`tel:${currentOffice.mobile}`}
                      className="text-[#002b38] hover:text-[#ff5500] transition font-medium ml-7 font-['Inter_Variable',_sans-serif]"
                    >
                      {currentOffice.mobile}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-[#002b38]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <p className="font-semibold text-lg sm:text-xl font-['Inter_Variable',_sans-serif]">Mail ID:</p>
                    </div>
                    <a
                      href={`mailto:${currentOffice.email}`}
                      className="text-[#002b38] hover:text-[#ff5500] transition font-medium ml-7 font-['Inter_Variable',_sans-serif]"
                    >
                      {currentOffice.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-[#002b38]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <p className="font-semibold text-lg sm:text-xl font-['Inter_Variable',_sans-serif]">
                        Working Hours:
                      </p>
                    </div>
                    <p className="text-gray-700 opacity-90 ml-7 font-['Inter_Variable',_sans-serif]">{currentOffice.hours}</p>
                  </div>
                </div>

                <a
                  href={currentOffice.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg mt-8 font-medium text-[#002b38] border-b-2 border-[#ff5500] pb-1 hover:text-[#ff5500] hover:border-[#002b38] transition-all ml-7 font-['Inter_Variable',_sans-serif]"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* RIGHT SLIDER */}
              <div className="flex-1">
                <div className="w-full h-[300px] sm:h-[380px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img
                    src={images[currentIndex]}
                    alt="Office Slide"
                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-in-out transform bg-gray-100"
                  />

                  {/* NEW STYLE DOTS */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`
                          transition-all duration-300 ease-out transform
                          ${index === currentIndex
                            ? "w-8 h-2 bg-[#ff5500] rounded-full shadow-lg scale-110"
                            : "w-2 h-2 bg-white/60 rounded-full hover:bg-white/80 hover:scale-110"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;