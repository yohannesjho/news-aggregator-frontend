const { SearchIcon } = require("lucide-react")

const Header = () => {
    return (

    <header className="bg-gradient-to-r from-blue-200 to-silver-100 px-8 py-8 h-32 flex justify-between">
         <nav>
            <ul className="flex space-x-6">
                <li><a>All news</a></li>
                <li><a>Top headlines</a></li>
                <li><a>Business</a></li>
                <li><a>Politics</a></li>
                <li><a>Sport</a></li>
                <li><a>Entertainment</a></li>
                <li><a>Science</a></li>    
            </ul>
         </nav>
         <div className="flex space-x-4">
            <div className="flex space-x-1 items-center">
            <input className="border-2 rounded-md outline-none px-2" placeholder="search for news"/>
            <SearchIcon/>
            </div>
            <button>Signin</button>
         </div>
         
    </header>
    )
}

module.exports = Header