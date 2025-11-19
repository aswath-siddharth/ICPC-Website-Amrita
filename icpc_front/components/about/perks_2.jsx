"use client";

import Image from "next/image";

export default function WebinarSection() {
  return (
    <section className="min-h-screen bg-white flex justify-center items-center py-[5vw]">
      <div className="w-[85vw] flex flex-col max-md:w-[95vw]">
        {/* Title */}
        <div className="mb-[4vw] max-md:px-[2vw]">
          <h1 className="text-[2.5vw] mb-[1vw] max-md:text-[6vw] font-semibold text-[#0C1E46] text-left">
            Past Webinar <span className="text-[#0C1E46]">Sessions</span>
          </h1>
        </div>

        {/* Grid of Webinars */}
        <div className="grid grid-cols-2 gap-[2.5vw] max-md:grid-cols-1 max-md:px-[2vw]">
          {/* Webinar 1 */}
          <div className="flex gap-[2vw] items-start bg-white rounded-xl p-[1.5vw] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 max-md:flex-col max-md:items-center">
            <div className="w-[12vw] h-[12vw] max-md:w-[35vw] max-md:h-[35vw] rounded-full overflow-hidden flex-shrink-0 shadow-md">
              <Image
                src="/vivek_gupta.jpg"
                width={500}
                height={500}
                alt="Vivek Gupta"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center text-left max-md:items-center">
              <h2 className="text-[1.5vw] max-md:text-[4.5vw] font-semibold mb-[0.5vw] text-[#0C1E46] max-md:text-center">
                Roadmap to Reaching WF in ICPC
              </h2>
              <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-center">
                <span className="font-medium text-[#0C1E46]">Vivek Gupta</span> | Algo Zenith
              </p>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-500 mt-[0.5vw] max-md:text-center">
                October 4, 2025 • 8:30 PM IST
              </p>
            </div>
          </div>

          {/* Webinar 2 */}
          <div className="flex gap-[2vw] items-start bg-white rounded-xl p-[1.5vw] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 max-md:flex-col max-md:items-center">
            <div className="w-[12vw] h-[12vw] max-md:w-[35vw] max-md:h-[35vw] rounded-full overflow-hidden flex-shrink-0 shadow-md">
              <Image
                src="/abhijith.jpg"
                width={500}
                height={500}
                alt="Abhijith R Pillai"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center text-left max-md:items-center">
              <h2 className="text-[1.5vw] max-md:text-[4.5vw] font-semibold mb-[0.5vw] text-[#0C1E46] max-md:text-center">
                Introduction to Competitive Programming
              </h2>
              <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-center">
                <span className="font-medium text-[#0C1E46]">Abhijith R Pillai</span> | ICPC@Amrita Club Lead
              </p>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-500 mt-[0.5vw] max-md:text-center">
                October 7, 2025 • 6:30 PM IST
              </p>
            </div>
          </div>

          {/* Webinar 3 (centered) */}
          <div className="col-span-2 flex justify-center">
            <div className="flex gap-[2vw] items-start bg-white rounded-xl p-[1.5vw] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 max-w-[60vw] max-md:max-w-full max-md:flex-col max-md:items-center">
              <div className="w-[12vw] h-[12vw] max-md:w-[35vw] max-md:h-[35vw] rounded-full overflow-hidden flex-shrink-0 shadow-md">
                <Image
                  src="/gayathry.jpeg"
                  width={500}
                  height={500}
                  alt="Gayathry S. Namputhiri"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center text-left max-md:items-center">
                <h2 className="text-[1.5vw] max-md:text-[4.5vw] font-semibold mb-[0.5vw] text-[#0C1E46] max-md:text-center">
                  Live Problem Solving & How to Use CP Platforms
                </h2>
                <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-center">
                  <span className="font-medium text-[#0C1E46]">Gayathry S. Namputhiri</span> | ICPC@Amrita Club Member
                </p>
                <p className="text-[1vw] max-md:text-[3vw] text-gray-500 mt-[0.5vw] max-md:text-center">
                  October 11, 2025 • 6:30 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative line (centered) */}
        <div className="flex justify-center mt-[4vw]">
          <div className="w-40 h-[3px] bg-[#0C1E46] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
