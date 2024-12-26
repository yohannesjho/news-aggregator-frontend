import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className="px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3">
                    <div className="flex justify-between items-center my-8">
                        <h2 className="md:text-2xl ">Tech News</h2>
                        <a className="flex space-x-1 cursor-pointer hover:text-blue-400 duration-200">More in tech <ArrowBigRight /></a>
                    </div>
                    <div className="space-y-4">
                        {tech.map((item, index) => (
                            <div key={index} className="flex space-x-12">
                                {/* Image container */}
                                <div className="flex-1">
                                    <Image
                                        src={item.imgUrl}
                                        alt={item.title}
                                        width={1200}
                                        height={800}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Text container */}
                                <div className="flex-1 p-4">
                                    <a className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-400"><h2>{item.title}</h2><p className="text-gray-600 mt-2 hover:text-blue-400">{item.description}</p></a>

                                </div>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="col-span-1">
                    <Image
                        src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-promo-potrait-banner-img.jpg"
                        alt="News Image"
                        layout="responsive"
                        width={1200} // The base width of the image
                        height={400} // The base height of the image
                        className="object-cover" // Ensure the image covers the full width and height
                    />
                </div>

            </div>
        </div>
    )
}

export default page