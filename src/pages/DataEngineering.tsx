// Updated responsive and success message version
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import img1 from '../assets/home2/3d-style-retro-telephone.jpg';

const VisaConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-sm border border-gray-100 w-full" style={{ fontFamily: "'Inter Variable', sans-serif" }}>

      {success && (
        <div className="mb-5 p-3 text-center text-green-700 bg-green-100 border border-green-300 rounded-md text-sm font-medium">
          ✔ Successfully Submitted!
        </div>
      )}

      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Submit Your Details to Get Free Job Lists</h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10">Get WhatsApp-ready job descriptions, country-specific lists, and certification guidance</p>

      <div>
        {/* Full Name */}
        <div className="mb-5 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
        </div>

        {/* Email */}
        <div className="mb-5 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
        </div>

        {/* Service Type */}
        <div className="mb-5 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white text-sm" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
            <option value="">Select service type</option>
            <option value="blue-collar">Blue-Collar Job Lists</option>
            <option value="singapore-tests">Singapore Trade Tests</option>
            <option value="healthcare">Healthcare Job Categories</option>
            <option value="certifications">Certification Guidance</option>
            <option value="country-specific">Country-Specific Lists</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-6 sm:mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Requirements / Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-sm" />
        </div>

        {/* Button */}
        <button onClick={handleSubmit} className="bg-red-600 text-white font-semibold py-3.5 px-8 sm:px-10 rounded-full hover:bg-red-700 transition uppercase text-xs sm:text-sm tracking-wider w-full sm:w-auto">GET FREE JOB LISTS</button>
      </div>
    </div>
  );
};

export default function VisaConsultationLayout() {
  return (
    <div style={{ fontFamily: "'Inter Variable', sans-serif" }}>
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: `url(${img1})` }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>

          <div className="flex items-center justify-center gap-2 text-sm sm:text-lg">
            <span className="hover:text-blue-300 transition cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-blue-300">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* LEFT SECTION */}
            <div className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">TJ-TECH BUSINESS SOLUTIONS PVT LTD</p>

              <h1 className="text-2xl sm:text-3xl leading-snug font-bold text-gray-900 mb-8 sm:mb-10">Your Gateway to International Careers!</h1>

              <div className="space-y-8 sm:space-y-12">

                {/* Phone */}
                <div>
                  <div className="flex items-center text-gray-500 mb-1 sm:mb-2">
                    <FaPhone className="mr-2 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm font-medium">Contact Number</span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">7395969270</p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center text-gray-500 mb-1 sm:mb-2">
                    <FaEnvelope className="mr-2 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm font-medium">Email Address</span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">info@tjtechbusiness.com</p>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center text-gray-500 mb-1 sm:mb-2">
                    <FaMapMarkerAlt className="mr-2 text-xs sm:text-sm" />
                    <span className="text-xs sm:text-sm font-medium">Office Address</span>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base leading-relaxed">
                    No.95, 1st Floor, Valluvar Pettai, 2nd Street,<br />
                    Grand Southern Trunk Rd, Sunnambu Colony,<br />
                    Paltavaram, Chennai, Tamil Nadu - 600043
                  </p>
                </div>

                {/* Services */}
                <div>
                  <div className="flex items-center text-gray-500 mb-1 sm:mb-2">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Our Services</span>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base leading-relaxed">
                    Gulf - Europe - Middle East Countries Job Providers<br />
                    WhatsApp-ready Job Lists & Certification Guidance
                  </p>
                </div>

                {/* Social */}
                <div>
                  <div className="flex items-center text-gray-500 mb-1 sm:mb-2">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Follow Us</span>
                  </div>

                  <div className="flex space-x-3 pt-2 sm:pt-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition"><FaFacebookF className="text-white text-sm sm:text-base" /></div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition"><FaYoutube className="text-white text-sm sm:text-base" /></div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition"><FaInstagram className="text-white text-sm sm:text-base" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION – FORM */}
            <VisaConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}