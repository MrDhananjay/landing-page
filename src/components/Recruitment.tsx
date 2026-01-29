import React from 'react';
import {
    ResumeToastSmall,
    AIProcessingBadge,
    CandidateCard,
    NewCandidatesBadge,
} from './FloatingElements';
import vasiRec from '../assets/vasi-rec.svg';
import container from '../assets/container.svg';


const Recruitment: React.FC = () => {
    return (
        <section className="w-full py-20 bg-white relative z-10 overflow-hidden">
            <div className="max-w-[1283px] mx-auto px-4 relative">
                {/* Background Rectangle from Group 427320777 - approximated position */}
                <div className="hidden lg:block absolute bg-[#FFF8EF] rounded-[60px] w-full h-[654px] top-[30px] left-0 -z-10 shadow-[-3px_6px_6px_0px_rgba(0,0,0,0.06)]"></div>

                <div className="flex flex-col lg:flex-row gap-8 relative">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 pt-[90px] pl-[120px]">
                        <div className="mb-[22px]">
                            <span className="text-[#5C77A6] text-[18px] font-poppins">About Vasitum</span>
                        </div>

                        <div className="mb-[38px]">
                            <h2 className="text-[#212D39] text-[42px] font-poppins leading-[68px] tracking-[-1.68px]">
                                <span className="font-regular block">Recruitment Reimagined</span>
                                <span className="font-semibold block">Built by Recruiters, Powered by AI</span>
                            </h2>
                        </div>

                        <p className="text-[#5C77A6] text-[16px] font-poppins leading-normal max-w-[392px] mb-[49px]">
                            Automate your hiring from source to offer. Eliminate manual screening and hire top talent 30% faster with our intelligent AI co-pilot.
                        </p>

                        <div className="flex items-center gap-[14px]">
                            {/* Button: See AI in Action */}
                            <button className="bg-[#F4A940] text-white px-[26px] py-[13px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(57,60,70,0.1),0px_1px_2px_0px_rgba(57,60,70,0.1)] font-poppins font-medium text-[14px] leading-[20px] hover:bg-[#e09b3b] transition-colors">
                                See AI in Action
                            </button>

                            {/* Button: Know More */}
                            <button className="flex items-center gap-2 px-4 py-[13px] rounded-[10px] text-[#335590] font-poppins font-medium text-[14px] leading-[20px] hover:bg-gray-50 transition-colors">
                                Know More
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="flex-1 relative min-h-[713px]">
                        {/* Dark Blue Background Shape */}
                        <div className="absolute right-[-30px] top-0 w-[576px] h-[713px] bg-[#1B2A4E] rounded-tl-[60px] rounded-bl-[60px] shadow-[-7px_0px_24px_0px_rgba(2,14,35,0.12)]"></div>

                        {/* Blur Effect (Lens) */}
                        <div className="absolute right-[-15px] top-[184px] w-[338px] h-[345px] bg-[#1F449D] blur-[64px] rounded-full opacity-60 pointer-events-none"></div>

                        {/* Floating Elements Composition */}

                        {/* 1. Candidate Card (Alice Freeman) - Replaces Michael Foster */}
                        <div className="absolute left-[180px] top-[240px] z-20">
                            <CandidateCard />
                        </div>

                        {/* 2. Resume Parsed Toast (Small) - Replaces previous toast */}
                        <div className="absolute right-[60px] bottom-[90px] z-20">
                            <ResumeToastSmall />
                        </div>

                        {/* 4. AI Processing Badge - New decorative element */}
                        <div className="absolute left-[-30px] bottom-[500px] z-10">
                            <AIProcessingBadge />
                        </div>

                        {/* 5. New Candidates Badge - Floating pill */}
                        <div className="absolute right-[180px] top-[60px] z-30">
                            <NewCandidatesBadge />
                        </div>

                        {/* 6. Floating Icon Button */}
                        <div className="absolute right-[80px] top-[115px] z-20">
                            <img src={vasiRec} alt="Floating Action Button" className="w-[90px] h-[90px]" />
                        </div>

                        {/* 7. Resume Parsed */}
                        <div className="absolute right-[-40px] top-[305px] z-10">
                            <img src={container} alt="Resume Parsed" className="w-[300px] h-[150px]" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recruitment;
