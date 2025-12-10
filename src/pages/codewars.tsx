export default function Codewars() {
    return (
        <div className="min-h-screen pt-20 px-6 bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="max-w-5xl mx-auto py-16">
                <h1 className="text-5xl font-bold mb-6 text-[#011123]">
                    Codewars
                </h1>
                <p className="text-xl mb-10 text-gray-600">
                    Explore the Codewars platform to enhance your coding skills through challenges and community engagement.
                </p>
                <div className="p-10 rounded-2xl shadow-md bg-gray-50">
                    <h2 className="text-2xl font-semibold mb-4 text-[#011123]">
                        Join the Coding Community
                    </h2>
                    <p className="text-lg text-gray-600">
                        Join our Code
wars community to participate in coding challenges, improve your skills, and connect with fellow developers. Whether you're a beginner or an experienced coder, Codewars offers a variety of challenges to help you grow.
                    </p>
                    <button
                        className="mt-8 py-3 px-8 rounded-xl font-semibold transition-all bg-[#ff4600] text-white"
                        style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                        Explore Codewars
                    </button>
                </div>
            </div>
        </div>
    );
}