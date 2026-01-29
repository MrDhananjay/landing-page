import React from 'react';

// Using placeholders for avatars as specific assets aren't available locally yet
// In a real scenario we would export these from Figma
const avatarMichael = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";

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
                        <div className="absolute right-0 top-0 w-[576px] h-[713px] bg-[#1B2A4E] rounded-tl-[60px] rounded-bl-[60px] shadow-[-7px_0px_24px_0px_rgba(2,14,35,0.12)]"></div>

                        {/* Blur Effect (Lens) */}
                        <div className="absolute right-[-15px] top-[184px] w-[338px] h-[345px] bg-[#1F449D] blur-[64px] rounded-full opacity-60 pointer-events-none"></div>

                        {/* Floating Card: Michael Foster */}
                        <div className="absolute left-[30px] top-[100px] bg-white p-[13px] rounded-[13px] shadow-[0px_16px_20px_-4px_rgba(57,60,70,0.1),0px_6px_8px_-4px_rgba(57,60,70,0.1)] w-[250px] z-10">
                            {/* Profile Header */}
                            <div className="flex gap-4 mb-3">
                                <img src={avatarMichael} alt="Michael Foster" className="w-[48px] h-[48px] rounded-full object-cover" />
                                <div>
                                    <h3 className="text-[#212D39] text-[14px] font-semibold font-poppins">Michael Foster</h3>
                                    <p className="text-[#5C77A6] text-[10px] font-poppins">Senior Product Designer</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-[#212D39] text-[10px] font-semibold font-poppins">92%</span>
                                        <span className="text-[#5C77A6] text-[10px] font-poppins">Match Score</span>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-[#F5F7FA] text-[#5C77A6] text-[10px] rounded-full font-poppins">Figma</span>
                                <span className="px-2 py-1 bg-[#F5F7FA] text-[#5C77A6] text-[10px] rounded-full font-poppins">React</span>
                                <span className="px-2 py-1 bg-[#F5F7FA] text-[#5C77A6] text-[10px] rounded-full font-poppins">Prototyping</span>
                            </div>

                            <button className="w-full py-2 bg-[#F5F7FA] text-[#335590] text-[10px] font-medium rounded-lg hover:bg-[#ebf0f7] transition-colors font-poppins">
                                View Full Profile
                            </button>
                        </div>

                        {/* Toast: Resume Parsed */}
                        <div className="absolute right-[80px] bottom-[150px] bg-white p-4 rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] z-20 w-[200px]">
                            <div className="flex items-start justify-between mb-2">
                                <div className="text-[#212D39] text-[12px] font-semibold font-poppins">Resume Parsed</div>
                                <div className="text-[#43A047]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3333 4L5.99999 11.3333L2.66666 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-[#5C77A6] text-[10px] font-poppins">Extracted 15 skills from uploaded CV.</p>
                        </div>

                        {/* Additional decorative elements from design could go here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recruitment;
