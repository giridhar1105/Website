import React from 'react';

export default function Pg2() {
    return (
        <div className="flex flex-col items-center justify-center h-screen pt-10 bg-black text-white">
            <h1 className="text-white text-4xl mb-4">Build Your Own Website</h1>
            <div className="flex flex-col space-y-4 w-full max-w-md">
                {/* Initial five inputs */}
                <input
                    type="text"
                    placeholder="Input 1"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Input 2"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Input 3"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Input 4"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Input 5"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                
                {/* Additional five inputs */}
                <input
                    type="text"
                    placeholder="Additional Input 1"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Additional Input 2"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Additional Input 3"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Additional Input 4"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
                <input
                    type="text"
                    placeholder="Additional Input 5"
                    className="w-full p-4 text-lg rounded bg-gray-700 text-white min-h-[56px]"
                />
            </div>
        </div>
    );
}
