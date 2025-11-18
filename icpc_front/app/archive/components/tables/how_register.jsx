import Link from "next/link";

export default function HowToRegister() {
  return (
    <>
      <div className="absolute text-white min-h-[10vw] flex justify-center items-center w-full h-full -z-10 bg-[url('/temp_bg.jpeg')]"></div>
      <div className="absolute bg-blue-950 opacity-50 min-h-[10vw] flex justify-center items-center w-full h-full -z-[5]"></div>
      <div
        id="register"
        className="min-w-screen min-h-screen flex justify-center items-center bg-blue-950 py-[5vw] max-md:py-[8vw]"
      >
        <div className="w-[85vw] max-md:w-[90vw] flex flex-col">
          {/* How to Register Section */}
          <div className="mb-[4vw] max-md:mb-[6vw]">
            <p className="text-[2.5vw] mb-[2vw] max-md:text-[5vw] max-md:mb-[3vw] font-semibold text-white">
              <span className="line-through">How to Register?</span> <span className="font-light">(closed)</span>
            </p>
            <div className="grid grid-cols-2 gap-x-[5vw] gap-y-[2vw] max-md:grid-cols-1 max-md:gap-y-[3vw]">
              <div className="group">
                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">
                  1. Form a team
                </p>
                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">
                  Create a team of three eligible students from your
                  institution.
                </p>
              </div>
              <div className="group">
                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">
                  2. Create an ICPC Account
                </p>
                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">
                  Visit the{" "}
                  <Link
                    href="https://icpc.global/"
                    className="underline hover:text-blue-300"
                  >
                    official ICPC website
                  </Link>{" "}
                  and create individual accounts
                </p>
              </div>
              <div className="group">
                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">
                  3. Register for the Contest
                </p>
                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">
                  Ask Coach to register by selecting Amritapuri as your
                  preferred region
                </p>
              </div>
              <div className="group">
                <p className="text-[1.8vw] mb-[0.5vw] max-md:text-[4vw] max-md:mb-[1vw] text-white">
                  4. Pay Registration Fee
                </p>
                <p className="text-[1vw] max-md:text-[3vw] text-wrap max-w-[40vw] max-md:max-w-[90vw] text-gray-300">
                  Complete the&nbsp;
                  <span
                    // href={
                    //   "https://aoap.amrita.edu/gateway/index/index?ekey=ICPC24"
                    // }
                    className="underline hover:text-blue-300"
                  >
                    payment process
                  </span>
                </p>
              </div>
            </div>
            {/* Please Note Section */}
            <p className="text-[1vw] text-white mt-[2vw] max-md:mt-[4vw] font-semibold bg-[#a4123f] shadow-[_10px_10px_5px_rgba(20,_18,_59,_1)] p-[1.5vw] max-md:p-[4vw] rounded-[1vw] max-md:text-[3vw]">
              <span className="font-bold">Please note:</span> There will be a single Preliminary Online Contest for all three Regional Sites in India (i.e., Kanpur, Amritapuri, and Chennai). Each regional site will prepare its own rank list based on the teams registered for that site from the Preliminary Online Contest rankings. Teams participating in multiple regional sites are requested to keep the same team members for each Regional Site.
            </p>
          </div>

          {/* Important Dates Section */}
          <div id="important_dates">
            <p className="text-[2.5vw] mb-[4vw] max-md:text-[5vw] max-md:mb-[4vw] font-semibold text-white">
              Important Dates
            </p>
            <div className="flex justify-center gap-[3vw] px-[5vw] max-md:flex-col max-md:items-center max-md:gap-[4vw] max-md:px-0">
              {/* Registration Opens */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                  <div className="text-white text-center">
                    <div className="text-[3vw] max-md:text-[7vw] font-bold leading-none">
                      08
                    </div>
                    <div className="text-[1vw] max-md:text-[2.5vw] mt-[0.2vw]">
                      OCT 2024
                    </div>
                  </div>
                </div>
                <p className="text-[1.2vw] max-md:text-[3.5vw] text-white text-center">
                  Registration Opens
                </p>
              </div>

              {/* Registration Deadline */}
              <div className="flex flex-col items-center">
                <div className="bg-yellow-500 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                  <div className="text-white text-center">
                    <div className="text-[3vw] max-md:text-[7vw] font-bold leading-none">
                      12
                    </div>
                    <div className="text-[1vw] max-md:text-[2.5vw] mt-[0.2vw]">
                      NOV 2024
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[1.2vw] max-md:text-[3.5vw] text-white">
                    Registration Deadline
                  </p>
                  <p className="text-[1vw] max-md:text-[2.5vw] text-gray-300">
                    8:00 PM
                  </p>
                </div>
              </div>

              {/* Online Round */}
              <div className="flex flex-col items-center">
                <div className="bg-red-700 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                  <div className="text-white text-center">
                    <div className="text-[3vw] max-md:text-[7vw] font-bold leading-none">
                      23
                    </div>
                    <div className="text-[1vw] max-md:text-[2.5vw] mt-[0.2vw]">
                      NOV 2024
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[1.2vw] max-md:text-[3.5vw] text-white">
                    Online Round
                  </p>
                  <p className="text-[1vw] max-md:text-[2.5vw] text-gray-300">
                    9:00 PM - 11:30 PM
                  </p>
                </div>
              </div>

              {/* Onsite Round */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 rounded-full h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw] flex justify-center items-center mb-[1vw] max-md:mb-[1.5vw]">
                  <div className="text-white text-center">
                    <div className="text-[3vw] max-md:text-[7vw] font-bold leading-none">
                      28
                    </div>
                    <div className="text-[1vw] max-md:text-[2.5vw] mt-[0.2vw]">
                      DEC 2024
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[1.2vw] max-md:text-[3.5vw] text-white">
                    Onsite Round
                  </p>
                  <p className="text-[1vw] max-md:text-[2.5vw] text-gray-300">
                    Till <span className="font-bold">29th</span> Dec
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
