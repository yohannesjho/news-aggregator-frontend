import { Instagram, Twitter, Facebook } from 'lucide-react';
const Footer = () => {
    return (
        <footer>
            <div className="px-8 py-8 flex  justify-between items-center text-sm lg:text-lg">
                <div>
                    <div>News</div>
                    <div className='flex space-x-2'>
                        <Instagram />
                        <Twitter />
                        <Facebook />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl mb-4">Company</h2>
                    <ul>
                        <li className="cursor-pointer"><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li className="cursor-pointer"><a>Our staff</a></li>
                        <li className="cursor-pointer"><a>Advertise</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl mb-4">News</h2>
                    <ul>
                        <li className="cursor-pointer"><a>Business</a></li>
                        <li className="cursor-pointer"><a>Politics</a></li>
                        <li className="cursor-pointer"><a>Sport</a></li>
                        <li className="cursor-pointer"><a>Sience</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl mb-4">Legal</h2>
                    <ul>
                        <li className="cursor-pointer"><a>Privacy polcy</a></li>
                        <li className="cursor-pointer"><a>Terms of service</a></li>
                        <li className="cursor-pointer"><a>Extra crunch terms</a></li>
                        <li className="cursor-pointer"><a>Code of conduct</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                Copyright&copy;2024 News
            </div>
        </footer>
    )
}

module.exports = Footer