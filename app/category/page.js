'use client'
import { useSearchParams } from "next/navigation";

import { useState, useEffect, Suspense } from 'react'

const CategoryPage = () => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        keyword: "",
        language: "",
        country: "",
    });



    const fetchNews = async (filters = {}) => {
        setLoading(true);
        try {
            
            let endpoint = `${apiBaseUrl}/api/news/topheadlines/${type}?`;

            // Apply the filters to the endpoint

            if (filters.keyword) endpoint += `&keyword=${filters.keyword}`;
            if (filters.language) endpoint += `&language=${filters.language}`;
            if (filters.country) endpoint += `&country=${filters.country}`;


            const response = await fetch(endpoint);

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



    useEffect(() => {
        fetchNews(filters);
    }, [filters, type]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;


        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    if (!type) return <div>No category selected.</div>;

    if (loading) return <div>Loading news...</div>;

    if (error) return <div>Error: {error}</div>;

    return (


        <div className="p-8">

            {/* Filter Controls */}
            <div className="space-x-4 mb-4">
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
                    {/* Add more countries */}
                </select>

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
                    {/* Add more languages */}
                </select>

                <select
                    name="keyword"
                    value={filters.keyword}
                    onChange={handleFilterChange}
                    className="p-2 border rounded"
                >
                    <option value="">Select Keyword</option>
                    <option value="bitcoin">bitcoin</option>
                    <option value="machine-learning">machinelearning</option>
                    <option value="quantum-computing">quantum computing</option>
                    <option value="stock-market">stock market</option>
                    <option value="investments">investments</option>
                    <option value="startups">startups</option>
                    <option value="Olympics">Olympics</option>
                    <option value="World Cup">World Cup</option>
                    <option value="NBA">NBA</option>
                    <option value="tennis">tennis</option>
                    <option value="crickets">cricket</option>
                    <option value="elections">election</option>
                    <option value="policy">policy</option>
                    <option value="parliaments">parliament</option>
                    <option value="laws">laws</option>
                    <option value="vaccine">vaccine</option>
                    <option value="vaccine">vaccine</option>
                    <option value="fitness">fitness</option>
                    {/* Add more sources */}
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

export function Category() {
    return (
       
      <Suspense>
        <CategoryPage />
      </Suspense>
    )
  }

export default Category;
