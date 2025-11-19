"use client";

import Image from "next/image";

export default function WebinarSection() {
  return (
    <section
      id="webinars"
      className="py-[5vw] px-6 bg-white flex justify-center items-center"
    >
      <div className="w-[85vw] flex flex-col items-center max-md:w-[90vw]">
        {/* Title */}
        <h1 className="text-[2.5vw] max-md:text-[6vw] font-semibold text-[#1E355E] mb-12 text-center">
          Past Webinar <span className="text-[#4C9ED9]">Sessions</span>
        </h1>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5vw] w-full justify-items-center">
          {/* Webinar 1 */}
          <div className="flex gap-[1.8vw] items-center bg-white border border-gray-200 rounded-2xl p-[1.5vw] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer max-w-[600px]">
            <div className="w-[12vw] h-[12vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full overflow-hidden flex-shrink-0 shadow-md">
              <Image
                src="/vivek_gupta.jpg"
                width={500}
                height={500}
                alt="Vivek Gupta"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-left">
              <h2 className="text-[1.3vw] max-md:text-[4vw] font-semibold mb-[0.4vw] text-[#1E355E] group-hover:text-[#4C9ED9] transition-colors">
                Roadmap to Reaching WF in ICPC
              </h2>
              <p className="text-gray-700 font-medium text-[1vw] max-md:text-[3vw]">
                Vivek Gupta | Algo Zenith
              </p>
              <p className="text-gray-500 text-[0.95vw] max-md:text-[3vw] mt-1">
                October 4, 2025 • 8:30 PM IST
              </p>
            </div>
          </div>

          {/* Webinar 2 */}
          <div className="flex gap-[1.8vw] items-center bg-white border border-gray-200 rounded-2xl p-[1.5vw] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer max-w-[600px]">
            <div className="w-[12vw] h-[12vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full overflow-hidden flex-shrink-0 shadow-md">
              <Image
                src="/abhijith.jpg"
                width={500}
                height={500}
                alt="Abhijith R Pillai"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-left">
              <h2 className="text-[1.3vw] max-md:text-[4vw] font-semibold mb-[0.4vw] text-[#1E355E] group-hover:text-[#4C9ED9] transition-colors">
                Introduction to Competitive Programming
              </h2>
              <p className="text-gray-700 font-medium text-[1vw] max-md:text-[3vw]">
                Abhijith R Pillai | ICPC@Amrita Club Lead
              </p>
              <p className="text-gray-500 text-[0.95vw] max-md:text-[3vw] mt-1">
                October 7, 2025 • 6:30 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Centered Webinar */}
        <div className="mt-[4vw] flex justify-center w-full">
          <div className="flex gap-[1.8vw] items-center bg-white border border-gray-200 rounded-2xl p-[1.5vw] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer max-w-[600px]">
            <div className="w-[12vw] h-[12vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full overflow-hidden flex-shrink-0 shadow-md">
              <Image
                src="/gayathry.jpeg"
                width={500}
                height={500}
                alt="Gayathry S. Namputhiri"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-left">
              <h2 className="text-[1.3vw] max-md:text-[4vw] font-semibold mb-[0.4vw] text-[#1E355E] group-hover:text-[#4C9ED9] transition-colors">
                Live Problem Solving & How to Use CP Platforms
              </h2>
              <p className="text-gray-700 font-medium text-[1vw] max-md:text-[3vw]">
                Gayathry S. Namputhiri | ICPC@Amrita Club Member
              </p>
              <p className="text-gray-500 text-[0.95vw] max-md:text-[3vw] mt-1">
                October 11, 2025 • 6:30 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center mt-[4vw]">
          <div className="w-40 h-[3px] bg-gradient-to-r from-[#4C9ED9] via-[#D4A017] to-[#C54C35] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
