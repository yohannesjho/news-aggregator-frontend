'use client'
import React, { useState, useEffect } from 'react';

function Page() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const language = 'en';
                const response = await fetch(`${apiBaseUrl}/api/news/topheadlines?language=${language}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch the news');
                }

                const data = await response.json();
                setNews(data.data.articles); // Assuming `articles` is the key for the news array
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Loading news...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Top-Headline News</h1>
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
}

export default Page;
