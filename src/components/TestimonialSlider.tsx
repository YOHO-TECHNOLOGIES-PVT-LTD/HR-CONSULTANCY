import React from "react";
import { HiDocumentText, HiOutlineUserGroup, HiCheckCircle, HiShieldCheck } from "react-icons/hi";
import serviceImg from "../assets/manpower/abo2.jpg";
import client1 from "../assets/manpower/About.jpg";
import client2 from "../assets/manpower/About.jpg";
import client3 from "../assets/manpower/About.jpg";

const services = [
  {
    title: "Documentation",
    description:
      "Complete assistance with CV preparation, certificates attestation, passport processing and all required documents.",
    icon: <HiDocumentText className="h-6 w-6 text-white" />,
  },
  {
    title: "Career Consulting",
    description:
      "Personalized consultations to assess skills, identify best job opportunities, and plan your overseas career path.",
    icon: <HiOutlineUserGroup className="h-6 w-6 text-white" />,
  },
  {
    title: "Job Placement",
    description:
      "Direct connections with verified employers and guaranteed job placements in Gulf countries, Singapore, and Schengen regions.",
    icon: <HiCheckCircle className="h-6 w-6 text-white" />,
  },
  {
    title: "Visa Processing",
    description:
      "End-to-end visa processing including work permits, employment visas, and all immigration formalities for smooth relocation.",
    icon: <HiShieldCheck className="h-6 w-6 text-white" />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0c2d5c] relative py-16 px-4 sm:px-6 md:px-10 lg:px-20 text-white">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20">
          <div className="lg:w-1/2 flex flex-col justify-start text-center lg:text-left">
            <p className="text-sm font-semibold uppercase text-gray-300 mb-2">Our Specialized Services</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Connecting Global Talent with International Opportunities
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We provide complete overseas employment solutions for blue-collar workers,
              healthcare professionals, skilled tradespeople, and technical staff across
              multiple countries with guaranteed placements and full support.
            </p>
          </div>

          <div className="lg:w-1/2 relative w-full">
            <img
              src={serviceImg}
              alt="Global Job Placements"
              className="rounded-xl w-full h-48 sm:h-60 md:h-72 object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-red-500 rounded-xl px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 shadow-lg">
              <span className="text-white text-xs sm:text-sm font-semibold">5000+ Successfully Placed</span>
              <div className="flex -space-x-2">
                {[client1, client2, client3].map((client, idx) => (
                  <img
                    key={idx}
                    src={client}
                    alt={`Candidate ${idx + 1}`}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#12366e] border border-gray-700 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow flex flex-col text-center"
            >
              <div className="text-white mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">{service.description}</p>
              <a href="#" className="text-white text-sm font-semibold flex items-center justify-center gap-1 mt-auto">
                Read More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;