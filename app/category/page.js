'use client'
import { useSearchParams } from "next/navigation";

import { useState, useEffect } from 'react'

const CategoryPage = () => {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (type) {
            const fetchNews = async () => {
                try {
                    const response = await fetch(
                        `http://localhost:5000/api/news/topheadlines/${type}`
                    );
                    console.log(response)
                    if (!response.ok) throw new Error("Failed to fetch news data");
                    const data = await response.json();
                    // console.log(data.data.articles)
                    setNews(data.data.articles); // Assuming `articles` contains the news data
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchNews();
        }
    }, [type])
    console.log(news)

    if (!type) return <div>No category selected.</div>;

    if (loading) return <div>Loading news...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">{type.toUpperCase()} News</h1>
            <div className="space-y-4 lg:w-1/2">
                {news.map((item, index) => (
                    <div key={index} className="p-4 border rounded-md shadow-sm bg-white">
                        {item.urlToImage && (
                            <img
                                src={item.urlToImage}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />
                        )}
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline mt-2 block"
                        >
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
