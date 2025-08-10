import React from 'react';

const HeroSection = () => (
    <section
        className="relative bg-black text-[#D4AF37] min-h-[60vh] md:min-h-screen flex items-center justify-center pt-20 md:pt-32"
    >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-">
            {/* Left: ARSHATH */}
            <div className="flex flex-col items-center text-center flex-1">
                <div className="w-full h-48 md:h-80 lg:h-96 border-4 border-[#D4AF37] shadow-lg mb-2 flex items-center justify-center">
                    <img src="https://ik.imagekit.io/ic3wa6ghc/FOURGREENINDIA/herosectionbg" alt="ARSHATH J" className="w-full h-full object-contain" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#D4AF37]">ARSHATH J</div>
                <div className="text-lg md:text-xl font-bold text-[#D4AF37] mt-1">Managing Director</div>
                <div className="text-lg md:text-xl font-bold text-[#D4AF37] mt-1">Four Green Properties</div>
            </div>
            {/* Center: Title */}
            <div className="flex flex-col items-center text-center flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] drop-shadow-lg mb-2 leading-tight">ECR NO 1 Real Estate Promoters</h1>
                <p className="text-xl md:text-2xl text-[#79FDF9] font-semibold">Luxury Properties &amp; Layouts</p>
            </div>
            {/* Right: ABDUL RAHEEM */}
            <div className="flex flex-col items-center text-center flex-1">
                <div className="w-full h-48 md:h-80 lg:h-96  border-4 border-[#D4AF37] shadow-lg mb-2 flex items-center justify-center">
                    <img src="https://ik.imagekit.io/ic3wa6ghc/FOURGREENINDIA/abdulraheem" alt="ABDUL RAHEEM" className="w-full h-full object-contain" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#D4AF37]">ABDUL RAHEEM</div>
                <div className="text-lg md:text-xl font-bold text-[#D4AF37] mt-1">Managing Partner</div>
                <div className="text-lg md:text-xl font-bold text-[#D4AF37] mt-1">Four Green Properties</div>
            </div>
        </div>
    </section>
);

export default HeroSection;