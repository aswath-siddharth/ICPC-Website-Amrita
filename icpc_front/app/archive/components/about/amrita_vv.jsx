import Link from "next/link"

export default function AboutAmrita(){
    return(
        <div id="about_amrita" className="min-h-screen flex flex-col">
            {/* About Amrita Section - 70% height */}
            <div className="flex-[7] max-md:flex-[6] max-md:py-[5vw] bg-[#92133b] flex justify-center items-center">
                <div className="max-w-[85vw] max-md:max-w-[90vw]">
                    <h1 className="text-[2.5vw] max-md:text-[6vw] font-semibold text-white mb-[2vw]">
                        About Amrita Vishwa Vidyapeetham
                    </h1>
                    <div className="text-[1.1vw] max-md:text-[3vw] text-gray-100 space-y-[1vw]">
                        <p>
                            Amrita Vishwa Vidyapeetham is a multi-disciplinary, research-intensive, private university, 
                            educating a vibrant student population of over 24,000 by 1700+ strong faculty. 
                            Accredited with the highest possible &apos;A++&apos; grade by NAAC, Amrita offers more than 250 UG, PG, 
                            and Ph.D. programs in Engineering, Management, Medical Sciences including Ayurveda, Life Sciences, 
                            Physical Sciences, Agriculture Sciences, Arts & Humanities, and Social & Behavioral Sciences.
                        </p>
                        <p>
                            With its extensive network of nine campuses spread across Amaravati, Amritapuri, Bengaluru, 
                            Chennai, Coimbatore, Kochi, Mysuru, Nagercoil(*) and NCR Delhi (Faridabad), Amrita University 
                            stands as one of India&apos;s preeminent private educational institutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Us Section - 30% height */}
            <div className="flex-[3] max-md:flex-[4] bg-blue-950 text-white max-md:pt-[5vw] flex justify-center items-center">
                <div className="h-full flex min-w-[90vw] md:min-w-[80vw]">
                    {/* Contact Content */}
                    <div className="flex-1 flex max-md:flex-col gap-[2vw]  py-[2vw] min-w-[85vw] max-md:min-w-[90vw]">
                        {/* Contact Info */}
                        <div className="flex-1">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Contact Us</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300">
                                <p>Amrita School of Engineering</p>
                                <p>Amritapuri, Kollam</p>
                                <p>Kerala, India - 690525</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex-1">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Quick Links</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300 space-y-[0.5vw]">
                                <Link href={'https://icpc.global/'} className="hover:text-blue-300 cursor-pointer">ICPC Global</Link>
                                <p className="hover:text-blue-300 cursor-pointer">Registration</p>
                                <Link href={'/#important_dates'} className="hover:text-blue-300 cursor-pointer">Important Dates</Link>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="flex-1">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Get in Touch</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300">
                                <p>Email: icpc@am.amrita.edu</p>
                                <p>Phone: +91 476 280 1111</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center py-[1vw] text-[0.9vw] max-md:text-[2.5vw] bg-blue-950 text-gray-300">
                &copy; 2024 ICPC Asia Amritapuri Regional Contest. All rights reserved.
            </div>
        </div>
    )
}