import { getBlogData } from '@/lib/api';
import PostCard from './PostCard';

const recentPosts = [
    {
        id: 1,
        title: "Mastering UI Elements: A Practical Guide for Designers",
        description: "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips. Elevate your design skills today.",
        author: "Jennifer Taylor",
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Crafting Seamless Experiences: The Art of Intuitive UI Design",
        description: "Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive journey for every user.",
        author: "Jennifer Taylor",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Beyond Aesthetics: The Power of Emotional UX Design",
        description: "Delve into the realm of emotional design and discover how incorporating empathy and psychology can elevate your user experience.",
        author: "Ryan A.",
        authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        readTime: "2 min read",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export default async function RecentPostsGrid() {

    const blogData = await getBlogData();

    return (
        <div className="w-full mt-24 mb-16">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Recent Posts</h2>
                <button className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors hidden sm:block">
                    All Posts
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.slice(10,13).map((post: any) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Mobile only "All Posts" button placed at the bottom */}
            <div className="mt-8 flex justify-center sm:hidden">
                <button className="px-6 py-3 w-full rounded-full border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors">
                    All Posts
                </button>
            </div>
        </div>
    );
}
