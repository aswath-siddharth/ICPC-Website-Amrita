'use client';

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import MagnifyingGlass from '../svg/magnifying-glass';
import DownlaodIcon from '../svg/download';
import Link from 'next/link';

export default function SelectedTeams() {
    const [teamsData, setTeamsData] = useState([]);
    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showWomenOnly, setShowWomenOnly] = useState(false);
    const teamsPerPage = 40;
    const [selectedSite, setSelectedSite]=useState("");

    useEffect(() => {
        const fetchCSVData = async () => {
            const response = await fetch('/data/ICPC Selected Teams for Amritapuri Regionals 2024.csv');
            const csvText = await response.text();
            const parsedData = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
            });
            setTeamsData(parsedData.data.map(row => ({
                ...row,
                isWomenOnly: row.isWomenOnly == 'true',// for converting from string true to boolean true
            })));
        };

        fetchCSVData();
    }, []);

    const filteredTeams = teamsData.filter((row) => {
        const matchesSearch =
            !searchedVal.length ||
            row.teamName?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.teamId?.toString().toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.institution?.toLowerCase().includes(searchedVal.toLowerCase()) ||
            row.site?.toLowerCase().includes(searchedVal.toLowerCase());

        const matchesToggle = !showWomenOnly || row.isWomenOnly;
        const matchesSite = !selectedSite || row.site === selectedSite;

        return matchesSearch && matchesToggle && matchesSite;
    });

    // Pagination
    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam);

    const totalPages = Math.ceil(filteredTeams.length / teamsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#92133b] pt-[8vw]">
            <div className="flex-1 flex flex-col min-w-[80vw] max-md:min-w-[95vw] max-md:max-w-[95vw] items-center">
                <div className="text-center mb-[4vw] max-w-[80vw] max-md:min-w-[95vw]">
                    <h1 className="text-[3vw] font-bold mb-[1vw] max-md:text-[8vw] text-white">
                        Selected Teams for
                    </h1>
                    <h1 className="text-[3vw] font-bold mb-[1vw] max-md:text-[8vw] text-white -mt-[2vw]">
                        Amritapuri Multisite Round 2024
                    </h1>
                    <p className="text-[1.2vw] max-md:text-[3.5vw] text-gray-200 mb-[1vw]">
                        Please note that this list is prepared on the basis&nbsp; 
                        <Link href="/team-selection-process"><span className="font-semibold text-blue-500 hover:text-purple-900 underline mt-[1vw]">The Team Selection Criteria</span></Link> 
                        &nbsp;for Amritapuri Multi Site and&nbsp;
                        <Link href="/ranking-process"><span className="font-semibold text-blue-500 hover:text-purple-900 underline mt-[1vw]">The Ranking Process</span></Link>. 
                        To accommodate all teams from R1 and R2, we have increased the intake by <span className="font-semibold">38</span> additional slots than originally published, bringing the total to <span className="font-semibold">268</span> slots (220 + 10(all women) + 38).
                        <span> This team list is <span className="font-semibold">provisional</span> and subject to change. As we continue to check for plagiarism, teams found guilty of plagiarism will be removed, while those cleared may be reinstated.</span>
                    </p>
                    <p className="text-[1.2vw] max-md:text-[3.5vw] text-gray-200">
                        Congratulations to all who have been selected to the ICPC Amritapuri Regionals.
                    </p>
                </div>
                <div className="flex justify-center items-center mb-[2vw] max-md:mb-[5vw]">
                    {/* Search Input */}
                    <div className="flex rounded-full min-h-[3vw] max-md:min-h-[8vw] min-w-[25vw] px-[.5vw] gap-[.5vw] overflow-hidden bg-white items-center">
                        <p className="text-stone-400 size-[2vw]">
                            <MagnifyingGlass />
                        </p>
                        <input
                            type="text"
                            className="text-[1.1vw] max-md:text-[3.5vw] text-black flex-1 min-h-[3vw] outline-none"
                            placeholder="Search ID or team name"
                            onChange={(e) => setSearchedVal(e.target.value)}
                        />
                    </div>
                    {/* <div className="relative bg-white rounded-r-full max-md:text-[3.5vw]">
                        <select
                            onChange={(e) => setShowWomenOnly(e.target.value === 'womenOnly')}
                            value={showWomenOnly ? 'womenOnly' : 'allTeams'}
                            className="px-[1vw] max-md:px-[2.5vw] rounded-full py-[.5vw] min-h-[3vw] max-md:min-h-[8vw] bg-gray-800 border border-solid border-gray-800 text-white cursor-pointer"
                        >
                            <option value="allTeams" className="bg-gray-800 text-white">
                                All Teams
                            </option>
                            <option value="womenOnly" className="bg-gray-800 text-white">
                                Women Only
                            </option>
                        </select>
                    </div> */}
                    <Link href="selected-teams-v1" title='Download the pdf containing selected teams' className='mx-[.5vw] p-[.5vw] hover:bg-gray-800 rounded-full min-h-[3vw] max-md:min-h-[8vw] max-md:min-w-[8vw] min-w-[3vw] flex justify-center items-center'><DownlaodIcon/></Link>
                </div>

                {/* <div className='md:hidden flex min-h-[1vh] justify-center'>
                    <button className={`text-[3.5vw] ${viewSite?"bg-gray-800":""}`} onClick={()=>{setViewSite(!viewSite)}}>{viewSite?"Click to view institute":"Click to view site"}</button>
                </div> */}

                <div className='flex max-md:text-[3.5vw] max-md:my-[5vw] justify-center max-md:gap-[1vw] [&>*]:px-[2vw] [&>*]:max-md:pb-[2vw] [&>*]:rounded-[1vw] text-[1.1vw] [&>*]:pt-[1vw] [&>*]:pb-[1vw] mb-[2vw]'>
                    <button className={`${selectedSite==""?"bg-slate-800":""}`} onClick={()=>{
                        setShowWomenOnly(false);
                        setSelectedSite("");
                        }}
                        >All Sites
                    </button>
                    <button className={`${selectedSite=="Kollam"?"bg-slate-800":""}`} onClick={()=>{
                        setShowWomenOnly(false);
                        setSelectedSite("Kollam");
                        }}
                        >Kollam
                    </button>
                    <button className={`${selectedSite=="Coimbatore"?"bg-slate-800":""}`} onClick={()=>{
                        setShowWomenOnly(false);
                        setSelectedSite("Coimbatore");}}>Coimbatore</button>
                    <button className={`${selectedSite=="Bengaluru"?"bg-slate-800":""}`} onClick={()=>{
                        setShowWomenOnly(false);
                        setSelectedSite("Bengaluru");
                        }}
                        >Bengaluru
                    </button>
                    {/* <div className='min-h-full flex items-center min-w-[1px] -mx-[2vw]'>|</div>&nbsp; */}
                    <button className={`${showWomenOnly?"bg-slate-800":""}`} onClick={()=>{
                        setShowWomenOnly(!showWomenOnly);
                        setSelectedSite("");
                        }}
                        >
                            Women Teams
                    </button>
                </div>

                {/* Table */}
                <div className="flex min-h-[4vw] items-center text-[1.2vw] max-md:text-[3.5vw] font-semibold text-white border-b border-white/30 pb-[1vw] max-md:min-w-[95vw] min-w-[80vw]">
                    <div className="flex-1">Team ID</div>
                    <div className="flex-[2]">Team Name</div>
                    <div className="flex-[2]">Institution</div>
                    {/* <div className={`flex-1 ${viewSite?"":""}`}>Site</div> */}
                </div>

                <div className="mt-[2vw] space-y-[2vw] min-w-[80vw]">
                    {currentTeams.map((entry, index) => (
                        <div
                            key={index}
                            className="flex items-center min-h-[4vw] hover:bg-white/5 rounded-lg transition-all duration-300 p-[1vw] gap-[.5vw]"
                        >
                            <div className="flex-1 text-[1.1vw] max-md:text-[3.5vw] text-gray-300">
                                {entry.teamId}
                            </div>
                            <div className="flex-[2] text-[1.1vw] max-md:text-[3.5vw]">
                                <span className="font-semibold text-white">{entry.teamName}</span>
                            </div>
                            <div className="flex-[2] text-[1.1vw] max-md:text-[3.5vw] text-gray-200">
                                {entry.institution}
                            </div>
                            {/* <div className={`flex-1 text-[1.1vw] max-md:text-[3.5vw] text-gray-300 ${viewSite?"":"hidden"}`}>
                                {entry.site}
                            </div> */}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center my-[2vw] text-white gap-4 text-[1.1vw] max-md:text-[3.5vw]">
                    <button
                        className={`px-[1vw] py-[.5vw] rounded-[.2vw] ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'}`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        className={`px-[1vw] py-[.5vw] rounded-[.2vw] ${currentPage === totalPages ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
