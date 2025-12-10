export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{color: '#1e3a3a'}}>About KIAQ</h1>
        <p className="text-xl mb-12" style={{color: '#6b7280'}}>
          Learn about our mission to connect Africa's best tech talent with global opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              KIAQ is dedicated to empowering African tech talent by connecting them with global opportunities 
              that advance their careers and improve their quality of life.
            </p>
            <p className="text-lg">
              We believe that talent is equally distributed, but opportunity is not. Our platform bridges 
              this gap by providing access to world-class projects and companies.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">African Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Global Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Talented Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}