import Link from 'next/link';

const featuredPosts = [
    {
        id: 1,
        title: "Revolutionizing industries through SaaS implementation",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 2,
        title: "Synergizing saas and UX design for elevating digital experiences",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 3,
        title: "Navigating saas waters with intuitive UI and UX",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 4,
        title: "Sculpting saas success - the art of UI and UX design",
        image: "https://images.unsplash.com/photo-1628177142898-93e46e46248d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 5,
        title: "Transforming saas platforms - a UI/UX design odyssey",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    }
];

export default function FeaturedPostsSidebar() {
    return (
        <div className="flex flex-col h-full pl-0 lg:pl-10 mt-12 lg:mt-0">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Other featured posts
            </h3>

            <div className="flex flex-col gap-6 grow">
                {featuredPosts.map((post) => (
                    <Link href="/post" key={post.id} className="flex gap-4 items-center group cursor-pointer pb-6 border-b border-gray-100 last:border-0 last:pb-0 focus:outline-none focus:ring-4 focus:ring-blue-500/20 rounded-xl">
                        <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                            {post.title}
                        </h4>
                    </Link>
                ))}
            </div>
        </div>
    );
}
