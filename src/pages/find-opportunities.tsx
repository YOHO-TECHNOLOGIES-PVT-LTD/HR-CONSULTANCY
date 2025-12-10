// import React from "react";
import logo from "../assets/kIAQ_.png";
import bgImg from "../assets/talent/andela_login_bg.png";

export default function FindOpportunities() {
  return (
    <div className="min-h-screen w-full flex items-center justify-between bg-[#0F2F32] p-6 relative overflow-hidden">
      {/* Left Decorative Image */}
      <img
        src={bgImg}
        alt="Decorative"
        className="absolute left-10 top-1/2 -translate-y-1/2 w-[50%] object-contain opacity-90 pointer-events-none"
      />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-10 ml-auto mr-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">Log in to Andela</h2>

        {/* Input */}
        <label className="text-sm font-medium">Email Address</label>
        <input
          type="email"
          placeholder="e.g example@email.com"
          className="w-full border rounded-lg px-4 py-3 mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {/* Login Button */}
        <button className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition-all">
          Log in
        </button>

        {/* Sign up */}
        <p className="text-center text-sm mt-6">
          Don’t have an account? <span className="text-green-700 cursor-pointer">Sign up</span>
        </p>

        {/* Help center */}
        <p className="text-center text-sm mt-2">
          Need help? Check our <span className="text-green-700 cursor-pointer">Help center</span>
        </p>
      </div>

      {/* Footer link */}
      <p className="absolute bottom-6 text-white text-sm right-10">
        Are you a client? <span className="underline cursor-pointer">Log in here</span>
      </p>
    </div>
  );
}