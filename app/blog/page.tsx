import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default async function BlogPage(props: { searchParams: Promise<{ query?: string }> }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const allBlogData = await getBlogData();

    // Filter the blog data if there's a search query
    const blogData = allBlogData.filter((post: any) =>
        post.blog_heading?.toLowerCase().includes(query.toLowerCase())
    );

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

                <div className="w-full max-w-2xl mx-auto my-16 px-4">
                    <form action="/blog" method="GET" className="relative flex items-center w-full h-14 rounded-full border border-gray-200 bg-white overflow-hidden shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                        <div className="pl-6 text-gray-400">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="query"
                            placeholder="Search for articles, topics..."
                            className="w-full h-full pl-4 pr-6 bg-transparent text-gray-900 border-none outline-none placeholder:text-gray-400"
                            defaultValue={query}
                        />
                        <div className="pr-2">
                            <button type="submit" className="h-10 px-5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium text-sm transition-colors">
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {blogData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 -mt-4">
                        {blogData.map((post: any) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 my-16">
                        No articles found matching "{query}".
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
