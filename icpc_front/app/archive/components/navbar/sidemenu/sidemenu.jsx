'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Bars from "../../svg/bars-3"
import Logo from "@/app/_assets/logo2.png"
import X from "@/app/archive/components/svg/x"
import { usePathname } from 'next/navigation';

export default function SideMenu({openMenu, setOpenMenu, locations}){
    const currentPath = usePathname();
    
    const handleLinkClick = (href) => {
        // Close menu for all clicks
        setOpenMenu(false);
        
        // If it's an anchor link (contains #), smooth scroll to section
        if (href.includes('#')) {
            const sectionId = href.split('#')[1];
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100); // Small delay to ensure navigation completes
        }
    };

    return(
        <>
            <div 
                className={`fixed z-[1000] bg-[rgba(20,20,20,0.5)] backdrop-blur-sm h-full w-full left-0 top-0 flex justify-end ${openMenu?'':'hidden'}`}
                onClick={() => setOpenMenu(false)}
            >
                <div 
                    className={`bg-blue-950 w-[70vw] p-4 rounded-l-[2vw]`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {currentPath.startsWith("/archive/icpc_Amritapuri_2024") ? (
                        <>
                            <button className="text-5xl" onClick={() => setOpenMenu(false)}>
                                <p className="text-white"><X/></p>
                            </button>
                            
                            <div className="flex flex-col flex-1 justify-center items-start text-[6vw]">
                                <Link 
                                    href="/archive/icpc_Amritapuri_2024" 
                                    className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400"
                                    onClick={() => handleLinkClick("/archive/icpc_Amritapuri_2024")}
                                >
                                    Home
                                </Link>
                                
                                <Link 
                                    href="/archive/icpc_Amritapuri_2024#perks" 
                                    className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400"
                                    onClick={() => handleLinkClick("/archive/icpc_Amritapuri_2024#perks")}
                                >
                                    Why Amrita
                                </Link>
                                
                                <Link 
                                    href="/archive/icpc_Amritapuri_2024/halloffame" 
                                    className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400"
                                    onClick={() => handleLinkClick("/archive/icpc_Amritapuri_2024/halloffame")}
                                >
                                    Hall of Fame
                                </Link>
                                
                                <div className="group">
                                    <p className="mx-[1vw] transition ease-in duration-300 group">
                                        Reach Us
                                    </p>
                                    <div className="ml-[5vw] flex flex-col gap-y-[1.5vw]">
                                        {locations?.map((location, index) => (
                                            <Link
                                                href={location.href} 
                                                key={index} 
                                                className="hover:text-blue-400"
                                                onClick={() => handleLinkClick(location.href)}
                                            >
                                                {location.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                
                                <Link 
                                    href="/archive/icpc_Amritapuri_2024#ranking-process" 
                                    className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400"
                                    onClick={() => handleLinkClick("/archive/icpc_Amritapuri_2024#ranking-process")}
                                >
                                    Ranking Process
                                </Link>
                                
                                <Link 
                                    href="/archive/icpc_Amritapuri_2024#team-selection-process" 
                                    className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400"
                                    onClick={() => handleLinkClick("/archive/icpc_Amritapuri_2024#team-selection-process")}
                                >
                                    Selection Process
                                </Link>
                                
                                <Link 
                                    href="/archive/icpc_Amritapuri_2024#promote" 
                                    className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400"
                                    onClick={() => handleLinkClick("/archive/icpc_Amritapuri_2024#promote")}
                                >
                                    Promote
                                </Link>
                                
                                <Link 
                                    href="/archive/icpc_Amritapuri_2024#gallery" 
                                    className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400"
                                    onClick={() => handleLinkClick("/archive/icpc_Amritapuri_2024#gallery")}
                                >
                                    Gallery
                                </Link>
                            </div>
                            
                            <ul className="absolute bottom-0 mb-4 flex justify-center w-[60vw]">
                                <li>
                                    <Image src={Logo} className="h-[15vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[1vw]" alt="Logo" />
                                </li>
                            </ul>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-white">
                            <button className="text-5xl mb-4" onClick={() => setOpenMenu(false)}>
                                <X/>
                            </button>
                            <p className="text-center">Menu not available for this page</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}