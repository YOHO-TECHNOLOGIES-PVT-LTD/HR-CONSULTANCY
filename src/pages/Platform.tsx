export default function Platform() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{color: '#1e3a3a'}}>Platform</h1>
        <p className="text-xl mb-12" style={{color: '#6b7280'}}>
          Advanced platform features for seamless collaboration.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">AI-Powered Matching</h2>
            <p className="text-lg mb-8">Our advanced algorithms ensure perfect talent-project matches based on skills, experience, and cultural fit.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Smart skill assessment</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Cultural compatibility analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Real-time availability tracking</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Collaboration Tools</h2>
            <p className="text-lg mb-8">Integrated tools for seamless team communication and project management.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Integrated video conferencing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Project tracking dashboard</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Time tracking and reporting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}