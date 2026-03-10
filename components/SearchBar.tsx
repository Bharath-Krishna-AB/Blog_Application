export default function SearchBar() {
    return (
        <div className="w-full max-w-2xl mx-auto my-16 px-4">
            <div className="relative flex items-center w-full h-14 rounded-full border border-gray-200 bg-white overflow-hidden shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                <div className="pl-6 text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search for articles, topics..."
                    className="w-full h-full pl-4 pr-6 bg-transparent text-gray-900 border-none outline-none placeholder:text-gray-400"
                />
                <div className="pr-2">
                    <button className="h-10 px-5 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium text-sm transition-colors">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
