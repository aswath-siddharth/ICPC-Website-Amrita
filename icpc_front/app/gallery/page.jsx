"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, ChevronDown } from "lucide-react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// 🖼️ Import Images
const images = {
  Day_1: Array.from({ length: 42 }, (_, i) => ({
    src: `/ICPC_Photos/Day_1/${i + 1}.jpg`,
    title: `Day 1 • Moment ${i + 1}`,
  })),
  Day_2: Array.from({ length: 16 }, (_, i) => ({
    src: `/ICPC_Photos/Day_2/${i + 1}.jpg`,
    title: `Day 2 • Moment ${i + 1}`,
  })),
  Latest: [
    ...Array.from({ length: 146 }, (_, i) => ({
      src: `/ICPC_Photos/Latest_pic/${i + 1}.JPG`,
      title: `Highlight ${i + 1}`,
    })),
    ...Array.from({ length: 7 }, (_, i) => ({
      src: `/ICPC_Photos/Latest_pic/ed/${i + 1}.jpg`,
      title: `Editorial Highlight ${i + 1}`,
    })),
  ],
};

export default function GalleryPage() {
  const [selectedDay, setSelectedDay] = useState("Latest");
  const dayOptions = ["Latest", "Day_1", "Day_2"];

  return (
    <div className="bg-gradient-to-b from-[#F8FBFF] via-white to-[#F8FBFF] text-[#1E355E] min-h-screen pt-[6vw] pb-16">
      {/* Header Section */}
      <motion.div
        className="text-center mb-[4vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-center gap-3">
          <Camera className="w-8 h-8 text-[#4C9ED9]" />
          <h1 className="text-4xl font-semibold max-md:text-3xl text-[#1E355E]">
            ICPC Amritapuri 2025{" "}
            <span className="text-[#4C9ED9]">Gallery</span>
          </h1>
        </div>
        <p className="text-[#4B5563] mt-3 text-lg max-w-2xl mx-auto">
          Relive the excitement, teamwork, and passion from India’s premier programming event.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex justify-center gap-4 mb-10 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {dayOptions.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium border transition-all duration-300 ${
              selectedDay === day
                ? "bg-[#4C9ED9] text-white border-[#4C9ED9] shadow-lg scale-105"
                : "border-[#D0E5F7] text-[#1E355E] hover:bg-[#E8F4FC] hover:text-[#4C9ED9]"
            }`}
          >
            {day.replace("_", " ")}
          </button>
        ))}
      </motion.div>

      {/* Gallery Section */}
      <div className="px-[6vw]">
        <PhotoProvider maskOpacity={0.8} bannerVisible={false}>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {images[selectedDay].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl group cursor-pointer bg-white border border-[#E1EAF5]"
              >
                <PhotoView src={img.src}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </PhotoView>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E355E]/80 via-[#4C9ED9]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-semibold">{img.title}</p>
                    <p className="text-xs text-[#F8C22E]">
                      ICPC Amritapuri 2024
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </PhotoProvider>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="flex justify-center items-center text-[#4C9ED9] mt-10 text-sm gap-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-4 h-4" />
        <span>Scroll to explore more photos</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>

      {/* Footer Line */}
      <div className="flex justify-center mt-[4vw]">
        <div className="w-40 h-[3px] bg-gradient-to-r from-[#4C9ED9] via-[#F8C22E] to-[#C54C35] rounded-full"></div>
      </div>
    </div>
  );
}
