"use client";
import React from "react";
import hallOfFameData from "../json/hall_of_fame.json";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function HallOfFame() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 pb-16 pt-[10rem] sm:pt-[8rem] md:pt-[9rem] lg:pt-[10rem]">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl text-center mb-10"
      >
        <div className="flex justify-center items-center gap-3 mb-3">
          <Trophy className="w-8 h-8 text-[#D4A017]" />
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1E355E] leading-tight">
            Hall of <span className="text-[#D4A017]">Fame</span>
          </h1>
        </div>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Celebrating the champions who’ve made their mark at the ICPC Amritapuri Regionals.
        </p>
      </motion.div>

      {/* Mobile Card Layout */}
      <motion.div
        className="block md:hidden space-y-4 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {hallOfFameData.map((entry, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-2xl p-4 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-[#1E355E]">{entry.year}</span>
              <span className="text-xs bg-[#D4A017]/15 text-[#1E355E] px-3 py-1 rounded-full font-medium">
                Winner
              </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900">{entry.team}</h3>
            <p className="text-sm text-gray-600 mt-1">{entry.college}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop Table Layout */}
      <motion.div
        className="hidden md:block w-full max-w-6xl mt-6 overflow-hidden rounded-2xl shadow-md bg-white border border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <table className="w-full text-base text-left text-gray-800 border-collapse">
          <thead className="bg-gray-100 text-[#1E355E] uppercase font-semibold tracking-wide">
            <tr>
              <th scope="col" className="px-6 py-4 w-[15%]">Year</th>
              <th scope="col" className="px-6 py-4 w-[35%]">Team Name</th>
              <th scope="col" className="px-6 py-4 w-[50%]">College</th>
            </tr>
          </thead>
          <tbody>
            {hallOfFameData.map((entry, index) => (
              <motion.tr
                key={index}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
                className={`transition-colors ${
                  index % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <td className="px-6 py-4 font-semibold text-[#1E355E]">{entry.year}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{entry.team}</td>
                <td className="px-6 py-4 text-gray-800">{entry.college}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Decorative Gradient Divider
      <div className="w-40 h-[3px] bg-gradient-to-r from-[#4C9ED9] via-[#D4A017] to-[#C54C35] mt-12 rounded-full"></div> */}
    </div>
  );
}
