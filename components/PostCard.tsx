import Link from 'next/link';

interface PostCardProps {
    post: {
        id: number;
        title: string;
        description: string;
        author: string;
        authorImage: string;
        readTime: string;
        image: string;
    };
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <Link href="/post" className="flex flex-col group cursor-pointer h-full focus:outline-none focus:ring-4 focus:ring-blue-500/20 rounded-[2.5rem] p-2 -m-2">
            <div className="relative w-full aspect-4/3 rounded-4xl overflow-hidden mb-6 bg-gray-100">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col grow px-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-3 grow">
                    {post.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-2">
                    <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        <span>{post.author}</span>
                        <span className="text-gray-400 text-xs">•</span>
                        <span className="text-gray-500">{post.readTime}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
