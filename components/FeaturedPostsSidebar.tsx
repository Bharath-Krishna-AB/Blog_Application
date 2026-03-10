import { getBlogData } from '@/lib/api';
import Link from 'next/link';

export default async function FeaturedPostsSidebar() {
    const blogData = await getBlogData();
    return (
        <div className="flex flex-col h-full pl-0 lg:pl-10 mt-12 lg:mt-0">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Other featured posts
            </h3>

            <div className="flex flex-col gap-6 grow">
                {blogData.slice(5,10).map((post: any) => (
                    <Link href={`/post/${post.id}`} key={post.id} className="flex gap-4 items-center group cursor-pointer pb-6 border-b border-gray-100 last:border-0 last:pb-0 focus:outline-none focus:ring-4 focus:ring-blue-500/20 rounded-xl">
                        <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src={post.blog_image}
                                alt={post.blog_heading}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                            {post.blog_heading}
                        </h4>
                    </Link>
                ))}
            </div>
        </div>
    );
}
