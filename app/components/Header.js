const { SearchIcon, Menu } = require("lucide-react")

const Header = () => {
    return (

        <header className="bg-gradient-to-r from-blue-200 to-silver-100 px-8 py-8 h-32 flex justify-between items-center">
            <nav className="hidden md:block text-sm lg:text-lg">
                <ul className="flex space-x-6">
                    <li><a className="cursor-pointer">All news</a></li>
                    <li><a className="cursor-pointer">Top headlines</a></li>
                    <li><a className="cursor-pointer">Business</a></li>
                    <li><a className="cursor-pointer">Politics</a></li>
                    <li><a className="cursor-pointer">Sport</a></li>
                    <li><a className="cursor-pointer">Entertainment</a></li>
                    <li><a className="cursor-pointer">Science</a></li>
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