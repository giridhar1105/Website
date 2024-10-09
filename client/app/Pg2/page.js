import React from 'react';

export default function Pg2() {
    return (
        <div style={{ paddingTop: '500px' }} className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-white text-4xl mb-4">Build Your Own Website</h1>
            <div className="flex space-x-8 w-full max-w-5xl">
                <div className="flex flex-col space-y-4 w-full">
                    <input
                        type="text"
                        placeholder="websiteName"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="description2"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="title"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="description"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="description"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="description"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="description"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                </div>
                <div className="flex flex-col space-y-4 w-full">
                    <input
                        type="text"
                        placeholder="description1"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="description3"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="title"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="title"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="title"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="title"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                    <input
                        type="text"
                        placeholder="title"
                        className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="mt-8 p-4 bg-white text-black text-xl rounded hover:bg-blue transition duration-300"
            >
                Submit
            </button>
        </div>
    );
}
