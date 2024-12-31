'use client'

const { SearchIcon, Menu } = require("lucide-react")
const { default: Link } = require("next/link");
const { useState, useEffect } = require("react");

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            // Check authentication status  
            const user = localStorage.getItem('user');
            console.log('user', user)
            setIsAuthenticated(user !== null); // Example: if user is found in localStorage, they're authenticated
        };

        checkAuth();
    }, []);
    return (

        <header className="bg-gradient-to-r from-blue-200 to-silver-100 px-8 py-8 h-32 flex justify-between items-center">
            <nav className="hidden md:block text-sm lg:text-lg">
                <ul className="flex space-x-6">
                    <li><Link href='/' className="cursor-pointer">All news</Link></li>
                    <li><Link href={{ pathname: "/topHeadlines" }} className="cursor-pointer">Top headlines</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "business" } }} className="cursor-pointer">Business</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "politics" } }} className="cursor-pointer">Politics</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "sports" } }} className="cursor-pointer">Sports</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "entertainment" } }} className="cursor-pointer">Entertainment</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "health" } }} className="cursor-pointer">Health</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "technology" } }} className="cursor-pointer">Technology</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "science" } }} className="cursor-pointer">Science</Link></li>
                    <li><Link href={{ pathname: "/category", query: { type: "General" } }} className="cursor-pointer">General</Link></li>
                </ul>

            </nav>
            <Menu className="md:hidden" />
            <div className="flex space-x-4 text-sm lg:text-lg">
                

                {/* Conditionally render buttons based on authentication */}
                {isAuthenticated ? (
                    <Link href="/dashboard">
                        <button className="text-sm">Dashboard</button>
                    </Link>
                ) : (
                    <>
                        <Link href="/signin">
                            <button className="text-sm">Signin</button>
                        </Link>
                        <Link href="/signup">
                            <button className="text-sm">Signup</button>
                        </Link>
                    </>
                )}

            </div>



        </header>
    )
}

module.exports = Header