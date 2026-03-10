import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecentPostsGrid from "@/components/RecentPostsGrid";
import SearchBar from "@/components/SearchBar";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
            <Navbar />

            <main className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24 min-h-[60vh]">
                <div className="max-w-2xl text-center mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Our Insights
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Discover articles, tutorials, and expert knowledge to elevate your UX design and development skills.
                    </p>
                </div>

                <SearchBar />

                <div className="-mt-12 mb-24">
                    {/* Reusing RecentPostsGrid from the homepage to save time and ensure visual consistency */}
                    <RecentPostsGrid />
                </div>

            </main>

            <Footer />
        </div>
    );
}
