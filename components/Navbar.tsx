'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: 'Homepage', href: '/' },
        { name: 'About us', href: '/about' },
        { name: 'Features', href: '/features' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact us', href: '/contact' },
    ];

    return (
        <nav className="flex items-center justify-between py-6 px-4 md:px-8 lg:px-12 w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-900"
                    >
                        <path
                            d="M16 2L2 9L16 16L30 9L16 2Z"
                            fill="currentColor"
                        />
                        <path
                            d="M2 16L16 23L30 16"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2 23L16 30L30 23"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-xl font-bold tracking-tight text-gray-900">Beyond UI</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 lg:gap-10">
                {links.map((link) => {
                    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium text-sm transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>

            <div className="hidden md:flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors">
                    Demo
                </button>
                <button className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                    Get Started
                </button>
            </div>

            {/* Mobile Menu Button - Visual Only */}
            <button className="md:hidden p-2 text-gray-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </nav>
    );
}
