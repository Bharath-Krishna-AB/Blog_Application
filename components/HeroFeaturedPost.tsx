import Link from 'next/link';

export default function HeroFeaturedPost({ blogData }: { blogData?: any }) {
    console.log(blogData)
    return (
        <Link href={`/post/${blogData.id}`} className="block relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/20">
            <img
                src={blogData.blog_image}
                alt={blogData.blog_heading}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-10 lg:p-12 w-full max-w-2xl">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    {blogData.topic}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                    {blogData.blog_heading}
                </h2>
            </div>
        </Link>
    );
}
