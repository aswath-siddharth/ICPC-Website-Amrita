'use client'
import { useEffect, useState, useRef } from "react";
// import Terminal from "@/app-components/components/ui_elems/terminal/terminal_2";
import Terminal from "@/app/archive/components/ui_elems/terminal/terminal_2";
import Navbar from "@/app/archive/components/navbar/navbar";
import Script from "next/script";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(true);
    const [darkSection, setDarkSection] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const checkDarkSections = () => {
            // Get all potential dark sections
            const registerSection = document.getElementById('register');
            const amritaSection = document.getElementById('about_amrita');
            const why_participateSection = document.getElementById('why_participate');
            //const heroSection = document.querySelector('video');  // Assuming hero has a video element
            
            // Get the current scroll position
            const scrollPosition = window.scrollY;
            const navbarPosition = 50; // Approximate navbar height

            // Check if navbar overlaps with any dark section
            const isDark = [registerSection, amritaSection, why_participateSection].some(section => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= navbarPosition && rect.bottom >= navbarPosition;
            });

            setDarkSection(isDark);
        };

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Check dark sections
            checkDarkSections();

            // Hero section check
            if (scrollY > windowHeight || (window.innerWidth < 680 && scrollY > window.innerWidth)) {
                setHero(false);
            } else {
                setHero(true);
            }

            // Navbar hide/show logic
            if (scrollY < lastScrollY) {
                setOpen(true);
            }
            else if (scrollY > lastScrollY && scrollY > windowHeight) {
                setOpen(false);
            }

            scrollDir.current = scrollY > lastScrollY ? "scrolling down" : "scrolling up";
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateScrollDir();
                    checkDarkSections(); // Check on every scroll
                });
                ticking = true;
            }
        };

        // Initial check
        checkDarkSections();

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="w-full">
            
           {/* Google Tag Manager */}
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MGVBWT6D');
                `}
            </Script>
            
            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe 
                    src="https://www.googletagmanager.com/ns.html?id=GTM-MGVBWT6D"
                    height="0" 
                    width="0" 
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
            <Navbar open={open} hero={hero} darkSection={darkSection} />
            <div className="max-w-screen md:-mt-[6vw] max-md:-mt-[-9vw] bg-stone-30 bg-white">
                {children}
                <Terminal/>
            </div>
        </div>
    );
}
