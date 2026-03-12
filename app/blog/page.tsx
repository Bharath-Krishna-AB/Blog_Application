import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PostCard from "@/components/PostCard";
import { getBlogData } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Insights",
    description: "Browse all our articles, tutorials, and expert knowledge to elevate your UX design and development skills.",
    openGraph: {
        title: "Our Insights | Blog Application",
        description: "Browse all our articles, tutorials, and expert knowledge to elevate your UX design and development skills.",
    },
};

export default async function BlogPage() {
    const blogData = await getBlogData();

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 -mt-4">
                    {blogData.map((post: any) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

            </main>

            <Footer />
        </div>
    );
}
