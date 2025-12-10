import { FileText, HardHat, Users, Stethoscope, Globe, ClipboardCheck } from 'lucide-react';
import img2 from "../assets/home2/4.png";
import img3 from "../assets/home2/5.png";
import img4 from "../assets/home2/6.png";
import img5 from "../assets/home2/7.png";
import img6 from "../assets/home2/8.png";
import img7 from "../assets/home2/9.png";
import img8 from "../assets/home2/10.png";
// import img9 from "../assets/home2/11.png";

interface VisaCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBgColor: string;
}

const VisaCard: React.FC<VisaCardProps> = ({ icon, title, description, features, iconBgColor }) => {
  // Assign local images based on title
  const getImage = () => {
    switch(title) {
      case 'Blue-Collar Foreign Jobs':
        return img2;
      case 'Singapore Trade Tests':
        return img3;
      case 'Healthcare Professionals':
        return img4;
      case 'Local Job Categories':
        return img5;
      case 'Certifications Guide':
        return img6;
      case 'Country-Specific Lists':
        return img7;
      default:
        return img2;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full w-full">
      <div className="relative h-40 sm:h-48 md:h-52">
        <img 
          src={getImage()}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute bottom-3 right-3 ${iconBgColor} p-3 rounded-lg`}>
          {icon}
        </div>
      </div>
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* <button className="mt-auto flex items-center justify-between w-full text-left px-4 py-3 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors group text-sm">
          <span className="font-medium">Get This List</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button> */}
      </div>
    </div>
  );
};

const VisaServicesGrid: React.FC = () => {
  const visaCards = [
    {
      icon: <HardHat className="w-6 h-6 text-white" />,
      title: 'Blue-Collar Foreign Jobs',
      description: 'Complete list of construction, industrial, and service jobs for international placements.',
      features: ['24+ Job Categories', 'WhatsApp-Ready Format', 'International Requirements'],
      iconBgColor: 'bg-red-600'
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      title: 'Singapore Trade Tests',
      description: 'All BCA/SEC/SEC(K) trade test categories for Singapore employment.',
      features: ['Construction & MEP Trades', 'Equipment Operations', 'Industrial Technical Trades'],
      iconBgColor: 'bg-red-600'
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-white" />,
      title: 'Healthcare Professionals',
      description: 'Detailed job categories for nurses and physiotherapists in specific regions.',
      features: ['Singapore Nurse Categories', 'Schengen Physiotherapist Jobs', 'Specialized Healthcare Roles'],
      iconBgColor: 'bg-red-600'
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Local Job Categories',
      description: 'Comprehensive list of domestic job opportunities across various sectors.',
      features: ['Industrial & Factory Jobs', 'Service & Maintenance', 'Hotel & Retail Positions'],
      iconBgColor: 'bg-red-600'
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: 'Certifications Guide',
      description: 'Complete guidance on trade testing and professional certifications.',
      features: ['SEC/SEC(K) Requirements', 'Skill Evaluation Processes', 'Testing Center Information'],
      iconBgColor: 'bg-red-600'
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: 'Country-Specific Lists',
      description: 'Job descriptions tailored for specific countries and regions.',
      features: ['Gulf Region Requirements', 'Schengen Country Jobs', 'Singapore Specific Roles'],
      iconBgColor: 'bg-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {visaCards.map((card, index) => (
            <VisaCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function WebAppDevelopmentHero() {
  return (
    <div style={{ fontFamily: "'Inter Variable', sans-serif" }}>
      <div
        className="w-full h-[220px] sm:h-[300px] md:h-[350px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${img8})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Services</h1>

          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="hover:text-blue-300 transition cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-blue-300">Job Categories</span>
          </div>
        </div>
      </div>

      <VisaServicesGrid />
    </div>
  );
}