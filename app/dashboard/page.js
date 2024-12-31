'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('user');
            console.log(token)

            if (!token) {
                router.push('/signin'); // Redirect if no token
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/auth/profile', {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log(response)

                if (!response.ok) throw new Error('Unauthorized');

                const userData = await response.json();

                console.log(userData)
                setUser(userData);
            } catch (err) {
                console.error(err.message);
                router.push('/signin'); // Redirect if token is invalid
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [router]);

    if (loading) return <div>Loading...</div>;
    console.log(user)

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Welcome, {user[0].username || 'User'}!</h1>
            <p className="mt-4">Here is your personalized dashboard content.</p>
            <div className="mt-6">
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800"
                    onClick={() => {
                        localStorage.removeItem('user');
                        router.push('/');
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
