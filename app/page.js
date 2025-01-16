'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomNews, setRandomNews] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredNews, setFilteredNews] = useState([]); // State for filtered news


  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log(apiBaseUrl)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/news`);

        if (!response.ok) throw new Error("Failed to fetch news");

        const data = await response.json();
        setNews(data.data.articles);
        setFilteredNews(data.data.articles); // Initially, show all news
        setRandomNews(data.data.articles[Math.floor(Math.random() * data.data.articles.length)]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Filter news based on the search query
  useEffect(() => {
    const filtered = news.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchQuery, news]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for news by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      {/* Billboard Section */}
      {randomNews && (
        <div className="mb-8">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={randomNews.urlToImage}
              alt={randomNews.title || "News"}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-3xl font-bold">{randomNews.title}</h1>
              <p className="mt-4 text-lg">{randomNews.description}</p>
              <a
                href={randomNews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      )}

      {/* News Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((item, index) => (
          <div key={index} className="p-4 border rounded-md shadow-sm bg-white">
            <img
              src={item.urlToImage}
              alt={item.title || "News"}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
