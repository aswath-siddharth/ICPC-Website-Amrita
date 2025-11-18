'use client'
import Image from "next/image";
import Link from "next/link";

export default function AltHero(){
    return(
        <>
            <div className="rounded-bg-full max-md:-mt-[24vw]">
                <Image 
                    src="/amrita_hq.jpg" 
                    className="md:min-h-screen max-md:min-h-[90vw] max-md:w-auto md:min-w-full  max-h-[100vh]" 
                    width={1} 
                    height={1} 
                    unoptimized
                    alt="Amrita Campus"
                />
            </div>
            <div className="md:min-h-screen min-w-full max-md:min-h-[90vw] bg-black opacity-50 absolute z-[5] top-0 mix-blend-multiply"></div>
            <div className="md:min-h-screen flex flex-col justify-center items-center w-full max-md:min-h-[100vw] absolute z-10 top-0">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center text-[5vw] max-md:text-[9vw] max-md:leading-[12vw] tracking-tighter max-w-[80vw] max-md:max-w-[90vw] text-white mb-[1vw] font-semibold">
                        Welcome to<br/> ICPC 2024 Regionals
                    </h1>
                    <p className="text-[1.4vw] -mt-[1vw] max-md:text-[4vw] max-w-[40vw] max-md:max-w-[90vw] text-center text-white font-medium mb-[2vw] [&>*]:duration-300">
                        <Link href={'/reach-us/bengaluru'} className="hover:text-blue-400">Bengaluru</Link> | <Link href={'/reach-us/coimbatore'} className="hover:text-blue-400">Coimbatore</Link> | <Link href={'/reach-us/amritapuri'} className="hover:text-blue-400">Kollam</Link>
                    </p>
                    <div className="gap-x-[1vw] flex max-md:flex-col max-md:justify-center max-md:items-center">
                        <Link
                            href="/final-rank-list"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Final Rank List
                        </Link>
                        <p className="md:hidden mt-[1vw]"></p>
                        <Link
                            href="/problem-set"
                            rel="noopener noreferrer"
                            className="bg-blue-500 ml-[1vw] hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Problem Set
                        </Link>
                        <p className="md:hidden mt-[1vw]"></p>
                        <Link
                            href="/directors-report"
                            rel="noopener noreferrer"
                            className="bg-blue-500 ml-[1vw] hover:bg-blue-600 text-white text-[1.2vw] max-md:text-[4vw] py-[1vw] px-[3vw] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Director&apos;s Report
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}