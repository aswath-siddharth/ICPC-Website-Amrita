'use client'

import React, { useState } from 'react';
import hallOfFameData from '../json/hall_of_fame.json';

export default function HallOfFame() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-[#92133b] pt-[8vw] pb-[4vw]">
            <div className='flex-1 flex flex-col min-w-[80vw] max-md:min-w-[95=vw] max-md:max-w-[95vw]'>
                {/* Title Section */}
                <div className="text-center mb-[4vw]">
                    <h1 className="text-[4vw] font-bold mb-[1vw] max-md:text-[8vw] text-white">
                        Hall of Fame
                    </h1>
                    <p className='text-[1.2vw] max-md:text-[3.5vw] text-gray-200'>
                        Celebrating the champions who have made their mark at the ICPC Amritapuri Regionals
                    </p>
                </div>

                {/* Table Header */}
                <div className="flex min-h-[4vw] items-center text-[1.2vw] max-md:text-[3vw] font-semibold text-white border-b border-white/30 pb-[1vw]">
                    <div className="flex-1">Year</div>
                    <div className="flex-[2]">Team Name</div>
                    <div className="flex-[2]">College</div>
                </div>
                
                {/* Table Content */}
                <div className="mt-[2vw] space-y-[2vw]">
                    {hallOfFameData
                        .map((entry, index) => (
                        <div 
                            key={index}
                            className="flex items-center min-h-[4vw] hover:bg-white/5 rounded-lg transition-all duration-300 p-[1vw]"
                        >
                            <div className="flex-1 text-[1.1vw] max-md:text-[3vw] text-gray-300">
                                {entry.year}
                            </div>
                            <div className="flex-[2] text-[1.1vw] max-md:text-[3vw]">
                                <span className="font-semibold text-white">{entry.team}</span>
                            </div>
                            <div className="flex-[2] text-[1.1vw] max-md:text-[3vw] text-gray-200">
                                {entry.college}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
