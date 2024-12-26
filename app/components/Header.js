const { SearchIcon, Menu } = require("lucide-react")
const { default: Link } = require("next/link")

const Header = () => {
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
                <div className="flex space-x-1 items-center">
                    <input className="w-24 md:w-40 border-2 rounded-md outline-none px-2 text-sm md:text-base" placeholder="search for news" />
                    <SearchIcon />
                </div>
                <button className="text-sm">Signin</button>
            </div>

        </header>
    )
}

module.exports = Header