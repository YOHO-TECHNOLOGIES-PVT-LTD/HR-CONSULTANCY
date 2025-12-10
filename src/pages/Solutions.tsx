export default function Solutions() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{color: '#1e3a3a'}}>Solutions</h1>
        <p className="text-xl mb-12" style={{color: '#6b7280'}}>
          Comprehensive solutions for your technology needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Dedicated Teams</h3>
            <p className="mb-6">Full-time dedicated development teams that work exclusively on your projects.</p>
            <ul className="space-y-2 text-sm">
              <li>• Long-term partnerships</li>
              <li>• Dedicated project management</li>
              <li>• Seamless integration</li>
            </ul>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Staff Augmentation</h3>
            <p className="mb-6">Extend your existing team capabilities with skilled professionals.</p>
            <ul className="space-y-2 text-sm">
              <li>• Flexible scaling</li>
              <li>• Quick onboarding</li>
              <li>• Skill-specific matching</li>
            </ul>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Project-Based</h3>
            <p className="mb-6">Complete project delivery solutions from concept to deployment.</p>
            <ul className="space-y-2 text-sm">
              <li>• End-to-end delivery</li>
              <li>• Fixed timelines</li>
              <li>• Quality assurance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}