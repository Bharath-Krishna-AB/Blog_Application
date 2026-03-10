import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getBlogData } from "@/lib/api";

export default async function BlogPostPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const blogData = await getBlogData();
    const postData = blogData[id]
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
            <Navbar />

            <main className="w-full max-w-4xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-24">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">{postData.topic}</span>
                </nav>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full">
                            {postData.topic}
                        </span>
                        <span className="text-gray-500 text-sm">{postData.month} 2025</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                        {postData.blog_heading}
                    </h1>

                    <div className="flex items-center justify-between py-6 border-y border-gray-100">
                        <div className="flex items-center gap-4">
                            <img
                                src={postData.avatar}
                                alt={postData.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-900">{postData.name}</h3>
                                <p className="text-sm text-gray-500">{postData.job_roles}</p>
                            </div>
                        </div>

                        <div className="hidden sm:flex items-center gap-4">
                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                <span className="sr-only">Share on Twitter</span>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </button>
                            <button className="text-gray-400 hover:text-blue-800 transition-colors">
                                <span className="sr-only">Share on LinkedIn</span>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 bg-gray-100">
                    <img
                        src={postData.blog_image}
                        alt="Designers working around a laptop"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl">
                    <p className="text-xl leading-relaxed mb-8">
                        {postData.blogtext}
                    </p>

                    <h2>Understanding the Basics</h2>
                    <p>
                        {postData.para}
                    </p>

                    <p>
                        {postData.blogtext}
                    </p>

                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-800 my-8 py-2 bg-blue-50/50 rounded-r-xl">
                        "{postData.quotes}"
                    </blockquote>

                    <h2>{postData.blog_heading}</h2>
                    <p>
                        {postData.blogtext}
                    </p>

                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        {postData.para}
                    </ul>

                    <h2>{postData.blog_heading}</h2>
                    <p>
                        {postData.blogtext}
                    </p>

                    <div className="bg-gray-50 p-8 rounded-2xl my-10 border border-gray-100">
                        <h3 className="mt-0 text-xl font-bold">Key Takeaways</h3>
                        <ol className="mb-0">
                            <li>{postData.para}</li>
                        </ol>
                    </div>

                    <p>
                        {postData.blogtext}
                    </p>
                </article>

            </main>

            <Footer />
        </div>
    );
}
