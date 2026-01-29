import React from 'react';
import vasitumAiAvatar from '../assets/vasitum-ai-avatar-complete.png';

// --- Icons & Assets ---
// Using inline SVGs where possible or placeholders for specific assets

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#43A047" />
        <path d="M11.3333 5.33334L6.66666 10L4.66666 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


// 1. Resume Parsed Toast (Small) - Node 351-928
export const ResumeToastSmall: React.FC = () => {
    return (
        <div className="bg-white flex flex-col gap-[8px] items-start pt-[12px] px-[16px] pb-[12px] relative rounded-[16px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] w-[170px] h-[90px]">
            <div className="flex gap-[12px] h-[24px] items-center relative shrink-0 w-full">
                <div className="bg-[#fef9c2] h-[24px] relative rounded-[4px] shrink-0 flex-1 flex items-center">
                    <p className="font-poppins font-semibold leading-[16px] ml-[8px] text-[#a65f00] text-[12px]">
                        Resume Parsed
                    </p>
                </div>
                <div className="relative shrink-0 w-[16px] h-[16px]">
                    <CheckIcon />
                </div>
            </div>
            <div className="relative shrink-0 w-full">
                <p className="font-poppins font-normal leading-[16px] text-[#62748e] text-[10px]">
                    Extracted 15 skills from uploaded CV.
                </p>
            </div>
        </div>
    );
};

// 2. AI Status Processing Badge - Node 351-855
export const AIProcessingBadge: React.FC = () => {
    return (
        <div className="backdrop-blur-[39.5px] bg-[rgba(255,255,255,0.1)] flex flex-col items-start pt-[18px] pb-[18px] px-[18px] relative rounded-[19px] shadow-[0px_23px_29px_0px_rgba(0,0,0,0.1),0px_9px_11px_0px_rgba(0,0,0,0.1)] w-max">
            <div className="flex gap-[14px] items-center relative shrink-0">
                {/* Avatar Group */}
                <div className="flex -space-x-4 relative">
                    <img className="w-[40px] h-[40px] rounded-full border-2 border-white/20" src={vasitumAiAvatar} alt="Vasitum AI Avatar" />
                </div>

                <div className="flex flex-col">
                    <p className="font-poppins font-bold leading-[17px] text-[12px] text-white tracking-[0.14px] uppercase">
                        AI Status
                    </p>
                    <p className="font-poppins font-semibold leading-[19px] text-[14px] text-white">
                        Processing...
                    </p>
                </div>
            </div>
        </div>
    );
};

// 3. Resume Parsed Toast (Detailed) - Node 351-846
export const ResumeToastDetailed: React.FC = () => {
    return (
        <div className="bg-white flex flex-col gap-[6px] items-start pt-[13px] pb-[13px] px-[13px] relative rounded-[13px] shadow-[0px_16px_20px_0px_rgba(0,0,0,0.1),0px_6px_8px_0px_rgba(0,0,0,0.1)] w-[180px]">
            <div className="flex gap-[9px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 w-[16px] h-[16px]">
                    <CheckIcon />
                </div>
                <div className="relative shrink-0">
                    <p className="font-poppins font-bold leading-[13px] text-[#314158] text-[10px]">
                        Resume Parsed
                    </p>
                </div>
            </div>
            <div className="relative shrink-0 w-full pl-[25px]">
                <p className="font-poppins font-medium leading-[14px] text-[#62748e] text-[10px] tracking-[0.09px]">
                    Extracted 15 core skills from uploaded PDF.
                </p>
            </div>
        </div>
    );
};

// 4. Candidate Profile Card (Alice Freeman) - Node 351-899
export const CandidateCard: React.FC = () => {
    return (
        <div className="bg-[rgba(255,255,255,0.7)] backdrop-blur-[20px] border-[1px] border-[rgba(255,255,255,0.8)] flex flex-col gap-[20px] items-start p-[20px] relative rounded-[20px] shadow-[0px_20px_41px_0px_rgba(0,0,0,0.15)] w-[262px]">
            <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                    <p className="font-poppins font-semibold leading-[23px] text-[#0a337a] text-[15px] tracking-[-0.36px]">
                        Alice Freeman
                    </p>
                    <p className="font-inter font-medium leading-[13px] text-[#62748e] text-[10px] mt-1">
                        Product Designer
                    </p>
                </div>
                <div className="bg-[#ede9fe] rounded-full w-[32px] h-[32px] flex items-center justify-center text-[#7008e7] font-poppins font-semibold text-[11px]">
                    AF
                </div>
            </div>

            {/* Match Score */}
            <div className="w-full bg-[#F0FDF4] p-2 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-poppins font-bold text-[10px] text-[#16a34a]">Match Score</span>
                    <span className="font-poppins font-semibold text-[10px] text-[#16a34a]">98%</span>
                </div>
                <div className="w-full h-[5px] bg-[#e2e8f0] rounded-full overflow-hidden">
                    <div className="h-full bg-[#16a34a] w-[98%] rounded-full" />
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {['Figma', 'React', 'Prototyping', 'User Research'].map((tag) => (
                    <span key={tag} className="font-poppins font-semibold text-[8px] text-[#45556c] bg-[#f1f5f9] px-[8px] py-[4px] rounded-[6px] uppercase tracking-[0.3px]">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Button */}
            <button className="bg-[#2565d5] w-full py-[8px] rounded-[8px] text-white font-poppins font-bold text-[11px] hover:bg-[#1e54b5] transition-colors shadow-[0px_8px_12px_rgba(221,214,255,0.5)]">
                View Full Profile
            </button>
        </div>
    );
};

// 5. New Candidates Badge - Node 351-871
export const NewCandidatesBadge: React.FC = () => {
    return (
        <div className="bg-[#314158] flex flex-col items-start py-[15px] px-[15px] relative rounded-[14px] shadow-[0px_18px_23px_0px_rgba(0,0,0,0.1),0px_7px_9px_0px_rgba(0,0,0,0.1)] w-max">
            <div className="flex gap-[7px] items-center relative shrink-0">
                <div className="bg-[#05df72] rounded-full w-[7px] h-[7px] animate-pulse" />
                <p className="font-poppins font-bold leading-[14px] text-[11px] text-white">
                    12 New Candidates
                </p>
            </div>
        </div>
    );
};

