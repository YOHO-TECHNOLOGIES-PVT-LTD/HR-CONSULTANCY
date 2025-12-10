export default function Talent() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{color: '#1e3a3a'}}>Join KIAQ Talent</h1>
        <p className="text-xl mb-12" style={{color: '#6b7280'}}>
          Join our community of exceptional African tech talent and access global opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Why Join KIAQ?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Opportunities</h3>
                <p>Work with leading companies worldwide from the comfort of your location.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Competitive Compensation</h3>
                <p>Earn competitive rates that reflect your skills and experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                <p>Continuous learning opportunities to advance your career.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Ready to Apply?</h3>
            <p className="mb-6">Join thousands of talented professionals who have found their dream opportunities through KIAQ.</p>
            <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}