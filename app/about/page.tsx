import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
            <Navbar />

            <main className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24 min-h-[60vh]">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        About Beyond UI
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We are a team of passionate designers and engineers building the future of SaaS interfaces. Our mission is to empower creators to deliver stunning experiences.
                    </p>
                </div>

                <div className="relative w-full aspect-21/9 rounded-4xl overflow-hidden mb-24 bg-gray-100">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Our Team"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Founded in 2024, Beyond UI started as a small internal tool to standardize our design system across multiple projects. We quickly realized the value it brought in terms of speed, consistency, and visual fidelity.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Today, we serve thousands of developers worldwide, helping them build premium SaaS applications without compromising on quality or aesthetics.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-3xl">
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">10k+</h3>
                            <p className="text-gray-500 font-medium">Active Users</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-3xl">
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
                            <p className="text-gray-500 font-medium">UI Components</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-3xl">
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">99%</h3>
                            <p className="text-gray-500 font-medium">Satisfaction</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-3xl">
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">24/7</h3>
                            <p className="text-gray-500 font-medium">Support</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
