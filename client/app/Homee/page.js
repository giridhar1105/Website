export default function Homee() {
    return (
        <div
            className="bg-cover bg-center h-screen w-screen flex flex-col justify-center items-start relative"
            style={{
                backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/020/328/715/original/abstract-dark-background-with-wavy-grid-of-dots-futuristic-wavy-background-can-be-applied-for-web-design-website-wallpaper-banner-or-cover-illustration-vector.jpg)',
            }}
        >
            <span 
                className="text-white text-6xl font-bold absolute"
                style={{ right: '280px', top: '220px' }}
            >
                Website Name
            </span>
            <p 
                className="text-white text-1xl absolute"
                style={{ right: '280px', top: '350px' }}
            >
                Welcome to our website where you can explore amazing content and connect with our community.
            </p>
            <p 
                className="text-white text-1xl absolute"
                style={{ right: '280px', top: '380px' }}
            >
                Welcome to our website where you can explore amazing content and connect with our community.
            </p>
            <p 
                className="text-white text-1xl absolute"
                style={{ right: '280px', top: '410px' }}
            >
                Welcome to our website where you can explore amazing content and connect with our community.
            </p>
        </div>
    );
}
