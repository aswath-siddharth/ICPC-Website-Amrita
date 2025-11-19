"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

export default function PartnerSupport() {
  return (
    <section
      id="why-sponsor"
      className="bg-white py-[5vw] flex justify-center items-center"
    >
      <div className="w-[85vw] flex flex-col max-md:w-[95vw]">
        {/* Section Header */}
        <div className="mb-[4vw] max-md:px-[2vw]">
          <h1 className="text-[2.5vw] max-md:text-[6vw] font-semibold text-[#0C1E46] text-left mb-[1vw] leading-snug">
            Why Sponsor ICPC Amritapuri 2025
          </h1>
          <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-w-[60vw] max-md:max-w-full text-left">
            Sponsoring ICPC Amritapuri connects your brand with India’s top student
            programmers, providing deep visibility among future tech leaders and innovators.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-2 gap-[2.5vw] max-md:grid-cols-1 max-md:px-[2vw]">
          {[
            {
              title: "Access to Top Talent",
              desc: "Engage early with exceptional programmers who shape the tech future.",
            },
            {
              title: "Unmatched Visibility",
              desc: "Your brand is showcased to 50,000+ tech enthusiasts across India.",
            },
            {
              title: "Recruitment Edge",
              desc: "Gain a direct hiring pipeline to India's most elite coding minds.",
            },
            {
              title: "Prestige & Association",
              desc: "Associate your brand with innovation, excellence, and global competitiveness.",
            },
            {
              title: "Onsite & Digital Branding",
              desc: "Presence in event banners, booths, T-shirts, and across social platforms.",
            },
            {
              title: "Community Impact",
              desc: "Support the ecosystem that nurtures the next generation of innovators.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-[1.5vw] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-[1vw] mb-[0.5vw]">
                <div className="bg-[#0C1E46]/10 p-2 rounded-full">
                  <CheckCircle className="w-[1.5vw] h-[1.5vw] max-md:w-[4vw] max-md:h-[4vw] text-[#0C1E46]" />
                </div>
                <h4 className="text-[1.3vw] max-md:text-[4vw] font-semibold text-[#0C1E46] group-hover:text-[#12295a] transition-colors duration-300">
                  {benefit.title}
                </h4>
              </div>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600 leading-snug">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Line
        <div className="w-40 h-[3px] bg-[#0C1E46] mt-[4vw] rounded-full"></div> */}
      </div>
    </section>
  );
}
