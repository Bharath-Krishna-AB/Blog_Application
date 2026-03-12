import Navbar from "@/components/Navbar";
import HeroFeaturedPost from "@/components/HeroFeaturedPost";
import FeaturedPostsSidebar from "@/components/FeaturedPostsSidebar";
import RecentPostsGrid from "@/components/RecentPostsGrid";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { getBlogData } from "@/lib/api";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our blog application. Discover featured posts, recent articles, and more.",
  openGraph: {
    title: "Home | Blog Application",
    description: "Welcome to our blog application. Discover featured posts, recent articles, and more.",
  },
};

export default async function Home() {

  const blogData = await getBlogData()

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Hero Section takes 2 columns on wide screens */}
          <div className="col-span-1 lg:col-span-2">
            <HeroFeaturedPost blogData={blogData[0]} />
          </div>

          {/* Sidebar takes 1 column */}
          <div className="col-span-1 border-gray-200">
            <FeaturedPostsSidebar />
          </div>
        </div>

        <RecentPostsGrid />

        <SearchBar />
      </main>

      <Footer />
    </div>
  );
}
