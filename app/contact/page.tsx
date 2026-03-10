import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
            <Navbar />

            <main className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24 min-h-[60vh] pb-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Let's talk about your next project.
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            Have a question or want to work together? Fill out the form and we'll be in touch with you shortly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Email us</h4>
                                    <p className="text-gray-600">hello@beyondui.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Visit us</h4>
                                    <p className="text-gray-600">123 Design Street, Creative Quarter<br />San Francisco, CA 94103</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-4xl p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a message</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-900">First name</label>
                                    <input type="text" id="firstName" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-900">Last name</label>
                                    <input type="text" id="lastName" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-900">Email address</label>
                                <input type="email" id="email" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="button" className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-colors mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
