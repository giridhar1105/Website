"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pg1() {
    const [websiteName, setWebsiteName] = useState('');
    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');
    const [description3, setDescription3] = useState('');
    const [knowAboutTitle, setKnowAboutTitle] = useState('');
    const [knowAboutItems, setKnowAboutItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data');
                setWebsiteName(response.data.websiteName);
                setDescription1(response.data.description1);
                setDescription2(response.data.description2);
                setDescription3(response.data.description3);
                setKnowAboutTitle(response.data.knowAbout.title);
                setKnowAboutItems(response.data.knowAbout.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const knowAboutItem1 = knowAboutItems[0] || {};
    const knowAboutItem2 = knowAboutItems[1] || {};
    const knowAboutItem3 = knowAboutItems[2] || {};
    const knowAboutItem4 = knowAboutItems[3] || {}; // Added fourth item

    return (
        <>
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
                {websiteName}
            </span>
            <p 
                className="text-white text-xl absolute"
                style={{ right: '280px', top: '350px' }}
            >
                {description1}
            </p>
            <p 
                className="text-white text-xl absolute" 
                style={{ right: '280px', top: '380px' }}
            >
                {description2}
            </p>
            <p 
                className="text-white text-xl absolute" 
                style={{ right: '280px', top: '410px' }}
            >
                {description3}
            </p>

            <div className="bg-black text-white px-5 md:px-12 py-10 absolute" style={{ bottom: '-330px', left: 0, right: 0, opacity: 0.8 }}>
                <p className="font-light text-lg text-center">{knowAboutTitle}</p>
                <div className="flex flex-col md:flex-row items-stretch justify-center pt-8 gap-8 md:gap-16">
                    <div key={knowAboutItem1.id} className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">{knowAboutItem1.title}</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">{knowAboutItem1.description}</div>
                    </div>
                    <div key={knowAboutItem2.id} className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">{knowAboutItem2.title}</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">{knowAboutItem2.description}</div>
                    </div>
                    <div key={knowAboutItem3.id} className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">{knowAboutItem3.title}</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">{knowAboutItem3.description}</div>
                    </div>
                    <div key={knowAboutItem4.id} className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">{knowAboutItem4.title}</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">{knowAboutItem4.description}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
