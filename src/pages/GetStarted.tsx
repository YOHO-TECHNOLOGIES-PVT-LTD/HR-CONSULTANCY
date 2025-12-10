import { UI_CONSTANTS } from '../constants/colors'

export default function GetStarted() {
  return (
    <div className="pt-16">
      <section style={{ backgroundColor: UI_CONSTANTS.DARK }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 style={{ color: UI_CONSTANTS.WHITE }} className="text-5xl font-bold mb-6">
            Connect with Africa's Tech Talent
          </h1>
          <p style={{ color: UI_CONSTANTS.WHITE }} className="text-xl opacity-90 mb-12">
            Start your journey with KIAQ today
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="p-8 rounded-2xl text-center">
              <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-6xl mb-6">🏢</div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-2xl font-bold mb-4">
                I need tech talent
              </h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70 mb-8">
                Connect with skilled African DevOps engineers, data scientists, and AI specialists
              </p>
              <button 
                style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                className="w-full py-4 rounded-full text-lg font-semibold hover:opacity-90"
              >
                Find Talent
              </button>
            </div>

            <div style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="p-8 rounded-2xl text-center">
              <div style={{ color: UI_CONSTANTS.PRIMARY }} className="text-6xl mb-6">👨‍💻</div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-2xl font-bold mb-4">
                I'm African tech talent
              </h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70 mb-8">
                Join KIAQ's network and connect with global companies seeking your expertise
              </p>
              <button 
                style={{ 
                  border: `2px solid ${UI_CONSTANTS.PRIMARY}`,
                  color: UI_CONSTANTS.PRIMARY 
                }}
                className="w-full py-4 rounded-full text-lg font-semibold hover:bg-orange-50"
              >
                Join KIAQ Network
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: UI_CONSTANTS.WHITE }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 style={{ color: UI_CONSTANTS.DARK }} className="text-4xl font-bold mb-6">
              How it works
            </h2>
            <p style={{ color: UI_CONSTANTS.DARK }} className="text-lg opacity-70">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6"
              >
                1
              </div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">
                Share your requirements
              </h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                Tell us about your DevOps, Data, or AI project needs
              </p>
            </div>

            <div className="text-center">
              <div 
                style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6"
              >
                2
              </div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">
                Connect with specialists
              </h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                Meet vetted African professionals who match your needs
              </p>
            </div>

            <div className="text-center">
              <div 
                style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6"
              >
                3
              </div>
              <h3 style={{ color: UI_CONSTANTS.DARK }} className="text-xl font-bold mb-4">
                Start collaborating
              </h3>
              <p style={{ color: UI_CONSTANTS.DARK }} className="opacity-70">
                Begin your project with your new African tech partners
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}