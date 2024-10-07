export default function Homee() {
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
                    <div className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">Something 1</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">Talking about something 1</div>
                    </div>
                    <div className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">Something 2</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">Talking about something 2</div>
                    </div>
                    <div className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">Something 3</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">Talking about something 3</div>
                    </div>
                    <div className="flex-1 flex-col h-[200px]">
                        <div className="text-[18px] md:text-[20px] underline decoration-dashed underline-offset-4">Something 4</div>
                        <div className="pt-2 font-mono text-[14px] md:text-[15px]">Talking about something 4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
