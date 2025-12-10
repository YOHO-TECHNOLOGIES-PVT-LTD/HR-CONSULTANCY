export default function Resources() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{color: '#1e3a3a'}}>Resources</h1>
        <p className="text-xl mb-12" style={{color: '#6b7280'}}>
          Insights, guides, and resources for tech leaders.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Blog</h3>
              <p className="mb-4">Latest insights and industry trends from our experts.</p>
              <a href="/blog" className="text-orange-600 font-medium">Read Articles →</a>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-500 to-orange-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
              <p className="mb-4">Real success stories from our clients and partners.</p>
              <a href="/case-studies" className="text-orange-600 font-medium">View Studies →</a>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Whitepapers</h3>
              <p className="mb-4">In-depth research and analysis on tech trends.</p>
              <a href="/whitepapers" className="text-orange-600 font-medium">Download →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}