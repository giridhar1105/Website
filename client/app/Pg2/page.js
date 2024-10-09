"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Pg2() {
const [inputs, setInputs] = useState({
websiteName: '',
description1: '',
description2: '',
title1: '',
title2: '',
title3: '',
title4: '',
description3: '',
description4: '',
description5: '',
description6: '',
description7: '',
});

const [status, setStatus] = useState(null); // null, 'success', 'error', 'serverError'

const handleChange = (e) => {
const { name, value } = e.target;
setInputs({
...inputs,
[name]: value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await axios.post('http://localhost:4000/api/store-inputs', inputs);
console.log(response.data);
setStatus('success');
setInputs({
websiteName: '',
description1: '',
description2: '',
title1: '',
title2: '',
title3: '',
title4: '',
description3: '',
description4: '',
description5: '',
description6: '',
description7: '',
});
} catch (error) {
if (error.response) {
setStatus('error'); // Error from server (e.g., 4xx or 5xx)
} else {
setStatus('serverError'); // No response from server
}
console.error('Error storing inputs:', error);
}
};

return (
<div
style={{ paddingTop: '502px', paddingBottom: '10px' }}
className="flex flex-col items-center justify-center h-screen text-white"
>
<h1 className="text-white text-4xl mb-4">Build Your Own Website</h1>
<form onSubmit={handleSubmit} className="flex space-x-8 w-full max-w-5xl">
<div className="flex flex-col space-y-4 w-full">
<input
type="text"
name="websiteName"
placeholder="websiteName"
value={inputs.websiteName}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="description2"
placeholder="description2"
value={inputs.description2}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="title1"
placeholder="title"
value={inputs.title1}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="description3"
placeholder="description"
value={inputs.description3}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="description4"
placeholder="description"
value={inputs.description4}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="description5"
placeholder="description"
value={inputs.description5}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="description6"
placeholder="description"
value={inputs.description6}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
</div>
<div className="flex flex-col space-y-4 w-full">
<input
type="text"
name="description1"
placeholder="description1"
value={inputs.description1}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="description3"
placeholder="description3"
value={inputs.description3}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="title2"
placeholder="title"
value={inputs.title2}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="title3"
placeholder="title"
value={inputs.title3}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="title4"
placeholder="title"
value={inputs.title4}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="title5"
placeholder="title"
value={inputs.title5}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
<input
type="text"
name="title6"
placeholder="title"
value={inputs.title6}
onChange={handleChange}
className="w-full p-6 text-xl rounded bg-gray-700 text-white min-h-[64px]"
/>
</div>
</form>
<button
type="submit"
onClick={handleSubmit}
className="mt-8 p-4 bg-white text-black text-xl rounded-full hover:bg-blue-300 transition duration-300"
>
Submit
</button>
{status === 'success' && (
<div className="mt-4 text-green-500 flex items-center">
<FaCheckCircle className="mr-2" /> Stored successfully !!!
</div>
)}
{status === 'error' && (
<div className="mt-4 text-red-500 flex items-center">
<FaTimesCircle className="mr-2" /> Failed to store data !!!
</div>
)}
{status === 'serverError' && (
<div className="mt-4 text-red-500 flex items-center">
<FaTimesCircle className="mr-2" /> Server is not running !!!
</div>
)}
</div>
);
}