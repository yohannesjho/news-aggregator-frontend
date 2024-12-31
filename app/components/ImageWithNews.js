const { default: Image } = require("next/image")

const ImageWithNews = ({ imageUrls, newsTitles }) => {
    // console.log(imageUrls)
    return (
        <div className="grid grid-cols-4 gap-8 px-8 py-8">
            <div className="col-span-3 relative w-full">
                <Image
                    src={imageUrls}
                    alt="News Image"
                    layout="responsive"
                    width={1200} // The base width of the image
                    height={800} // The base height of the image
                    className="object-cover w-full h-full" // Ensure the image covers the full width and height
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <a
                        href="#"
                        className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded hover:bg-opacity-75"
                    >
                        text
                    </a>
                </div>
            </div>
            <div className="grid-cols-1">
                <Image
                    src={imageUrls}
                    alt="News Image"
                    layout="responsive"
                    width={1200} // The base width of the image
                    height={800} // The base height of the image
                    className="object-cover w-full h-full" // Ensure the image covers the full width and height
                />
                <ul className="space-y-4">
                    {newsTitles.map((title, index) => (
                        <li key={index}><a className="text-xl cursor-pointer hover:text-blue-300 duration-300">{title.title}</a><p>{title.description}</p></li>
                        
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default ImageWithNews;