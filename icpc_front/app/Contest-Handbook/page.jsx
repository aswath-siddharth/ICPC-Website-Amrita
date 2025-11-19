"use client";

import { useState } from "react";

// ICPC Theme Colors
const icpcBlue = "#3A84C3";
const icpcYellow = "#F7C948";
const icpcRed = "#C04A42";
const icpcDark = "#0C1E46";

export default function SummaryPage() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const sections = [
  {
    title: "1. ICPC Contest Guidelines (Summary)",
    color: icpcBlue,
    points: [
      "The contest adheres to <strong>ICPC global rules</strong>, with region-specific adjustments.",
      "Each team consists of <strong>3 students + 1 certified coach</strong> from the same institution.",
      "Scoring follows the ICPC system: <strong>penalty time</strong> = wrong submissions penalty + time of accepted solutions.",
      "Participants must strictly maintain <strong>academic integrity</strong> and <strong>fair-play</strong> throughout the contest.",
      "Use of <strong>AI tools</strong>, external communication, IDEs, or internet searches is <strong>strictly prohibited</strong>.",
      "Eligibility is confirmed only after <strong>coach verification</strong> and institution approval."
    ],
    link: "/data/ICPC_Contest_Guidelines_V2.0.pdf",
    linkText: "Download Contest Guidelines",
  },

  {
    title: "2. FAQ — Policies & Registration (Summary)",
    color: icpcYellow,
    points: [
      "Teams are accepted in the ICPC portal <strong>the same day payment is verified</strong>.",
      "Payment can be made by <strong>any team member or coach</strong>.",
      "Final payment deadline: <strong>October 31, 2025</strong>.",
      "Cancellation to join another regional site must be done before <strong>October 8, 2025</strong>.",
      "Teams promoted from prelims <strong>do not need to register again</strong> for the regional round.",
      "Registration fee is <strong>₹1100 per team</strong> (not per person).",
      "If multiple members pay accidentally, a refund is provided upon <strong>verification</strong>."
    ],
    link: "/data/FAQ ICPC_V2.0.pdf",
    linkText: "Download FAQ Document",
  },

  {
    title: "3. Onsite Selection Process (Summary)",
    color: icpcRed,
    points: [
      "Total onsite slots: <strong>320</strong> (310 general + <strong>10 women-only</strong> slots).",
      "Top <strong>25 teams</strong> qualify directly (max <strong>5 teams</strong> per college).",
      "Teams ranked 26+ are selected using a formula that prevents <strong>over-representation</strong> from any college.",
      "A <strong>minimum problem threshold</strong> for qualification is announced after prelims.",
      "<strong>All-women teams</strong> receive priority consideration for reserved slots.",
      "If teams tie, <strong>penalty time</strong> and <strong>submission timestamps</strong> determine the ranking."
    ],
    link: "/data/Onsite selction Process 2025_V 2.1.pdf",
    linkText: "Download Selection Process Document",
  },

  {
    title: "4. Contest-Day Requirements",
    color: icpcBlue,
    points: [
      "Teams must log in <strong>at least 15 minutes early</strong>.",
      "Screen, webcam, and microphone recording must be <strong>enabled and verified</strong>.",
      "All participants must attend the <strong>mandatory practice contest</strong>.",
      "All work must be done <strong>inside the contest interface</strong>.",
      "Recording must include <strong>desktop + webcam + audio</strong> at all times."
    ],
    link: "/data/OBS Setup Guide for ICPC Proctoring - V2.pdf",
    linkText: "Download OBS Setup Guide",
  },

  {
    title: "5. Allowed & Not Allowed",
    color: icpcDark,
    points: [
      "<strong>Allowed:</strong> handwritten/typed notes, personal laptop (coach-approved).",
      "<strong>Not allowed:</strong> AI tools, external IDEs, multiple devices.",
      "Any form of plagiarism can lead to <strong>disqualification or lifetime ban</strong>.",
      "Only <strong>one login per team</strong> allowed; identity must match registered details."
    ],
    link: "/data/ICPC_Contest_Guidelines_V2.0.pdf",
    linkText: "View Full Rulebook",
  },
];


  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* <img 
          src="/icpc_logo.png"
          alt="ICPC Logo"
          className="mx-auto w-28 mb-4"
        /> */}
        <h1 className="text-4xl font-bold text-[#0C1E46]">
          ICPC Amritapuri 2025
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Summary of All Important Documents
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto space-y-4">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md border border-gray-200"
          >
            {/* Header */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
              style={{ borderLeft: `6px solid ${sec.color}` }}
            >
              <h2 className="text-xl font-semibold text-[#0C1E46]">
                {sec.title}
              </h2>
              <span className="text-2xl text-gray-500">
                {open === i ? "−" : "+"}
              </span>
            </button>

            {/* Content */}
            {open === i && (
              <div className="px-8 pb-6">
                <ul className="list-disc text-gray-700 space-y-2 ml-5">
                  {sec.points.map((p, j) => (
                    <li key={j}>
                      <span dangerouslySetInnerHTML={{ __html: p }} />
                    </li>
                  ))}
                </ul>

                {/* Document Link */}
                {sec.link && (
                  <div className="mt-4">
                    <a
                      href={sec.link}
                      download
                      className="text-blue-600 font-semibold hover:underline flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                      </svg>
                      {sec.linkText}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <p className="text-sm text-gray-500">
          For complete information, refer to the official ICPC Amritapuri PDFs.
        </p>
      </div>
    </div>
  );
}
