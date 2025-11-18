'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AltHero() {
    const IMAGE_PATH = '/coursel_images/';
    const IMAGE_COUNT = 5;
    const IMAGE_EXTENSION = '.jpg';
    
    // Generate images array dynamically
    const images = Array.from({ length: IMAGE_COUNT }, (_, index) => ({
        id: String(index + 1),
        src: `${IMAGE_PATH}${index + 1}${IMAGE_EXTENSION}`,
        alt: `ICPC 2025 Regionals - Image ${index + 1}`
    }));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-change images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative w-full min-h-[85vh] lg:min-h-[80vh] overflow-hidden -mt-[5vw] md:-mt-[5vw] max-md:-mt-[15vw]">
            {/* Background Image Carousel with Auto-Change */}
            <div className="absolute inset-0 w-full h-full">
                {images.length > 0 ? (
                    <>
                        {/* Image Container */}
                        <div className="relative w-full h-full">
                            {images.map((image, index) => (
                                <div
                                    key={image.id}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Navigation Dots - positioned above content with better spacing */}
                        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                            {images.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => goToImage(index)}
                                    className={`w-5 h-1 rounded-full transition-all duration-300 shadow-lg border-2 border-white/20
                                        ${index === currentImageIndex 
                                            ? 'bg-white/70 scale-110' 
                                            : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                        <p className="text-gray-500">Loading images...</p>
                    </div>
                )}
            </div>

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-5"></div>
            
            {/* Main Content Container with improved padding */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full h-full min-h-[85vh] lg:min-h-[80vh] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-20 sm:pt-24 md:pt-28 lg:pt-20 pb-24 sm:pb-28 md:pb-32 lg:pb-36">
                
                {/* Text Content */}
                <div className="flex flex-col justify-center items-center text-center max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tighter">
                        ICPC 2025 Regionals
                    </h1>
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium mb-2 sm:mb-2 md:mb-3">
                        <Link href={'/reach-us/bengaluru'} className="hover:text-blue-300 transition-colors duration-300">
                            Bengaluru
                        </Link> | <Link href={'/reach-us/coimbatore'} className="hover:text-blue-300 transition-colors duration-300">
                            Coimbatore
                        </Link> | <Link href={'/reach-us/amritapuri'} className="hover:text-blue-300 transition-colors duration-300">
                            Kollam
                        </Link> | <span className="hover:text-blue-300 transition-colors duration-300">
                            Mysuru
                        </span>
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white pb-3">
                        ~350+ Onsite Slots Available 
                    </p>
                    
                    <Link
                        href="https://icpc.global/regionals/finder/Asia-Amritapuri-First-Round-2026"
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base md:text-lg lg:text-xl py-2 sm:py-3 md:py-4 lg:py-5 px-5 sm:px-6 md:px-8 lg:px-10 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Registration Open
                    </Link>
                    
                    {/* Timeline */}
                    <div className="mt-6 flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-3 text-center">
                        <div className="px-3 py-2 rounded-xl text-white text-sm sm:text-base md:text-lg font-semibold">
                            <span className="block text-white">8 OCT</span>
                            <span>Registration Ends</span>
                        </div> 
                        <div className="px-3 py-2 rounded-xl text-white text-sm sm:text-base md:text-lg font-semibold">
                            <span className="block text-white">11 OCT</span>
                            <span>Online Prelims</span>
                        </div>
                        <div className="px-3 py-2 rounded-xl text-white text-sm sm:text-base md:text-lg font-semibold">
                            <span className="block text-white">2–3 JAN</span>
                            <span>Onsite Regionals</span>
                        </div>
                    </div>

                    {/* Sponsored by section with improved spacing */}
                    <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center">
                        <p className="text-white/80 text-xs sm:text-sm font-medium mb-4 uppercase tracking-wider">
                            Sponsored by
                        </p>
                        <div className="flex items-start gap-6 sm:gap-8">
                            <div className="flex flex-col items-center">
                                <div className="h-10 sm:h-8 md:h-14 flex items-center justify-center mb-2">
                                    <Image
                                        src="/janestreet_white2.png"
                                        alt="Jane Street"
                                        width={100}
                                        height={40}
                                        className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <p className="text-white text-xs sm:text-xs md:text-sm text-center font-light">
                                    ICPC Titanium Multi-Regional Sponsor
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="h-10 sm:h-8 md:h-14 flex items-center justify-center mb-2">
                                    <Image
                                        src="/JetBrains_white_logo.svg"
                                        alt="JetBrains"
                                        width={60}
                                        height={30}
                                        className="h-3/4 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <p className="text-white text-xs sm:text-xs md:text-sm text-center font-light">
                                    ICPC Global Sponsor Programming Tools
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}