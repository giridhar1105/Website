"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Homee() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/items'); // Update with your backend URL
                setItems(response.data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className="bg-cover bg-center h-screen w-screen flex flex-col justify-center items-start relative"
            style={{
                backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/020/328/715/original/abstract-dark-background-with-wavy-grid-of-dots-futuristic-wavy-background-can-be-applied-for-web-design-website-wallpaper-banner-or-cover-illustration-vector.jpg)',
                fontFamily: 'Roboto, sans-serif',
            }}
        >
            <span 
                className="text-white text-6xl font-bold absolute"
                style={{ right: '280px', top: '220px' }}
            >
                Website Name
            </span>
            <p 
                className="text-white text-xl absolute"
                style={{ right: '280px', top: '350px' }}
            >
                Welcome to our website where you can explore amazing content and connect with our community.
            </p>
            <p 
                className="text-white text-xl absolute" 
                style={{ right: '280px', top: '380px' }}
            >
                Discover new insights and connect with like-minded individuals.
            </p>
            <p 
                className="text-white text-xl absolute" 
                style={{ right: '280px', top: '410px' }}
            >
                Join us today and start your journey!
            </p>

            <div className="bg-black text-white px-5 md:px-12 py-10 absolute" style={{ bottom: '-150px', left: 0, right: 0, opacity: 0.8 }}>
                <p className="font-light text-lg text-center">Know About Something</p>
                <div className="flex flex-col md:flex-row items-stretch justify-center pt-8 gap-8 md:gap-16">
                    {items.map(item => (
                        <div key={item.id} className="flex-1 flex-col h-[200px]">
                            <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">{item.title}</div>
                            <div className="pt-2 font-mono text-[14px] md:text-[15px]">{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
