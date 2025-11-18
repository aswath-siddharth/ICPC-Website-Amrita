'use client'

import Image from "next/image"

export default function Promote() {
    return (
        <div className="bg-white text-black mt-[5vw] flex justify-center pb-[10vw] min-h-screen">
            <div className="min-w-[80vw] max-md:min-w-[90vw]">
                <p className="text-[2vw] text-center max-md:text-[6vw]">Promote ICPC Regionals 2024, Amritapuri</p>
                <div className="mt-[3vw] flex flex-col max-md:items-center">
                    <div className="max-md:w-[90vw]">
                        <p className="font-semibold text-[3vw] max-md:text-[6vw]">Posters</p>
                        <p className="text-[1.2vw] -mt-[0.5vw] max-md:text-[4vw]">Click on the posters to download them.</p>
                    </div>
                    <div className="flex pt-[1vw] flex-wrap max-w-[83vw] max-md:max-w-[90vw] max-md:justify-center max-md:w-[90vw]">
                        <a href="/poster_1.jpg" download className="hover:opacity-50">
                            <Image
                                src="/poster_1.jpg"
                                className="rounded-[1vw] min-w-[20vw] h-auto bg-stone-600 max-md:min-w-[43vw]"
                                width={1}
                                height={1}
                                unoptimized
                                alt="Poster 1"
                            />
                        </a>
                        <a href="/poster_2.jpg" download className="ml-[1vw] hover:opacity-50">
                            <Image
                                src="/poster_2.jpg"
                                className="rounded-[1vw] min-w-[20vw] h-auto bg-stone-600 max-md:min-w-[43vw]"
                                width={1}
                                height={1}
                                unoptimized
                                alt="Poster 2"
                            />
                        </a>
                    </div>
                </div>
                <div className="max-md:flex max-md:flex-col max-md:items-center">
                    <div className="mt-[3vw] max-md:w-[90vw]">
                        <p className="font-semibold text-[3vw] max-md:text-[6vw]">Promotional Video</p>
                        <p className="text-[1.2vw] -mt-[0.5vw] max-md:text-[4vw]">Click on the videos to download them.</p>
                    </div>
                    <div className="flex pt-[1vw]">
                        <div className="rounded-[1vw] min-w-[40vw] min-h-[25vw] bg-stone-600 max-md:min-w-[90vw] max-md:min-h-[50vw]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
