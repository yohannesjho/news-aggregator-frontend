'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const CategoryContent = ({ type, fetchNews, filters, handleFilterChange, news, loading, error }) => {
    useEffect(() => {
        fetchNews(filters);
    }, [filters, type]);

    if (!type) return <div>No category selected.</div>;
    if (loading) return <div>Loading news...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-8">
            {/* Filter Controls */}
            <div className="space-x-4 mb-4">
                {/* Country Filter */}
                <select
                    name="country"
                    value={filters.country}
                    onChange={handleFilterChange}
                    className="p-2 border rounded"
                >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="gb">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="cn">China</option>
                    <option value="jp">Japan</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="it">Italy</option>
                    <option value="in">India</option>
                    <option value="za">South Africa</option>
                    <option value="br">Brazil</option>
                    <option value="mx">Mexico</option>
                    <option value="kr">South Korea</option>
                    <option value="ru">Russia</option>
                    
                </select>

                {/* Language Filter */}
                <select
                    name="language"
                    value={filters.language}
                    onChange={handleFilterChange}
                    className="p-2 border rounded"
                >
                    <option value="">Select Language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                    <option value="ja">Japanese</option>
                    <option value="ru">Russian</option>
                    <option value="ar">Arabic</option>
                    <option value="pt">Portuguese</option>
                    <option value="hi">Hindi</option>
                    
                </select>

                {/* Keyword Filter */}
                <select
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleFilterChange}
                    className="p-2 border rounded"
                >
                    <option value="">Select Keyword</option>
                    <option value="technology">Technology</option>
                    <option value="sports">Sports</option>
                    <option value="politics">Politics</option>
                    <option value="health">Health</option>
                    <option value="business">Business</option>
                    <option value="science">Science</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                    <option value="education">Education</option>
                    <option value="environment">Environment</option>
                   
                </select>

            </div>

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

const CategoryPage = () => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        keyword: '',
        language: '',
        country: '',
    });

    const fetchNews = async (filters = {}) => {
        setLoading(true);
        try {
            let endpoint = `${apiBaseUrl}/api/news/topheadlines/${type}?`;
            if (filters.keyword) endpoint += `&keyword=${filters.keyword}`;
            if (filters.language) endpoint += `&language=${filters.language}`;
            if (filters.country) endpoint += `&country=${filters.country}`;
            const response = await fetch(endpoint);
            if (!response.ok) throw new Error('Failed to fetch news data');
            const data = await response.json();
            setNews(data.data.articles);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <Suspense fallback={<div>Loading category data...</div>}>
            <CategoryContent
                type={type}
                fetchNews={fetchNews}
                filters={filters}
                handleFilterChange={handleFilterChange}
                news={news}
                loading={loading}
                error={error}
            />
        </Suspense>
    );
};

export default CategoryPage;
