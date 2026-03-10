import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
    const features = [
        {
            title: "Pixel-Perfect Components",
            description: "Every component is meticulously crafted to ensure high fidelity and stunning visual consistency.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
        {
            title: "Fully Responsive",
            description: "Mobile-first approach ensures your interfaces look beautiful on every screen size automatically.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Customizable Theme",
            description: "Easily adapt the typography, colors, and border-radii to perfectly match your brand guidelines.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
        },
        {
            title: "React & Next.js Ready",
            description: "Built with modern frameworks in mind, integrating seamlessly into your App Router workflows.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
            <Navbar />

            <main className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24 min-h-[60vh]">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Powerful features designed for the modern web.
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Everything you need to launch incredibly beautiful applications faster than ever before.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-4xl p-8 lg:p-10 transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </main>

            <Footer />
        </div>
    );
}
