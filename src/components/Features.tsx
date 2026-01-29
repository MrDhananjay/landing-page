import React from 'react';
import chatIcon from '../assets/chat-icon.svg';
import vasitumAiAvatarComplete from '../assets/vasitum-ai-avatar-complete.png';
import topCandidatesIcon from '../assets/top-candidates-icon.svg';
import automatedScreeningIcon from '../assets/automated-screening-icon.svg';



const Features: React.FC = () => {
    return (
        <section className="w-full py-20 bg-white relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-[40px] font-poppins text-[#2B2E34] leading-normal mb-4">
                            <span className="font-[300]">Everything you need to hire </span>
                            <span className="font-medium">faster and smarter.</span>
                        </h2>
                        <p className="text-[#ADADAD] text-[16px] font-poppins">
                            Replace manual tasks with intelligent automation. Vasitum <br /> handles the busy work so you can focus on building your team.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-[#e5e7eb] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(57,60,70,0.1),0px_1px_2px_-1px_rgba(57,60,70,0.1)] text-[#364153] text-[14px] font-semibold font-['Inter'] hover:bg-gray-50 transition-colors">
                        See all
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Automated Screening (Tall) */}
                    <div className="bg-gradient-to-b from-[rgba(238,242,255,0.5)] to-white rounded-3xl p-8 col-span-1 lg:row-span-2 transition-transform hover:scale-[1.01] duration-300 border border-transparent hover:border-gray-100 relative overflow-hidden">
                        {/* Blur circle background */}
                        <div className="absolute bg-[rgba(198,210,255,0.3)] blur-[52px] left-[157px] rounded-full w-[206px] h-[206px] top-[-52px]"></div>

                        <div className="h-full flex flex-col justify-between relative z-10">
                            {/* Header - Absolutely positioned */}
                            <div className="absolute flex h-[13px] items-center justify-between left-0 top-[13px] right-0">
                                <span className="text-[#99a1af] text-[10px] font-semibold tracking-[0.5px] uppercase font-poppins">Top Candidates</span>
                                <img src={topCandidatesIcon} alt="" className="w-[13px] h-[13px]" />
                            </div>

                            {/* Mock UI */}
                            <div className="space-y-3 mb-8 mt-[38px]">

                                {/* Candidate 1: Sarah Miller */}
                                <div className="bg-white p-[10px] rounded-[11px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex items-center gap-[10px]">
                                    <div className="w-8 h-8 rounded-full bg-[#4EBEF4] flex items-center justify-center text-white font-bold text-sm shrink-0">S</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[#191e25] text-[10px] font-semibold leading-tight font-poppins">Sarah Miller</div>
                                        <div className="text-[#6a7282] text-[8px] leading-tight font-poppins">Product Designer</div>
                                    </div>
                                    <div className="text-[#00a63e] text-[10px] font-bold shrink-0 font-poppins">88%</div>
                                </div>

                                {/* Candidate 2: Alex Chen */}
                                <div className="bg-white p-[10px] rounded-[11px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex items-center gap-[10px]">
                                    <div className="w-8 h-8 rounded-full bg-[#F49F4E] flex items-center justify-center text-white font-bold text-sm shrink-0">A</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[#191e25] text-[10px] font-semibold leading-tight font-poppins">Alex Chen</div>
                                        <div className="text-[#6a7282] text-[8px] leading-tight font-poppins">UX Researcher</div>
                                    </div>
                                    <div className="text-[#00a63e] text-[10px] font-bold shrink-0 font-poppins">94%</div>
                                </div>

                                {/* Candidate 3: Jordan Smith */}
                                <div className="bg-white p-[10px] rounded-[11px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex items-center gap-[10px]">
                                    <div className="w-8 h-8 rounded-full bg-[#E64EF4] flex items-center justify-center text-white font-bold text-sm shrink-0">J</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[#191e25] text-[10px] font-semibold leading-tight font-poppins">Jordan Smith</div>
                                        <div className="text-[#6a7282] text-[8px] leading-tight font-poppins">UI Developer</div>
                                    </div>
                                    <div className="text-[#00a63e] text-[10px] font-bold shrink-0 font-poppins">89%</div>
                                </div>

                                {/* Candidate 4: Mike Ross (blurred) */}
                                <div className="bg-white p-[10px] rounded-[11px] border border-[#f3f4f6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex items-center gap-[10px] opacity-50 blur-[0.8px]">
                                    <div className="w-8 h-8 rounded-full bg-[#90a1b9] flex items-center justify-center text-white font-bold text-sm shrink-0">M</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-[#191e25] text-[10px] font-semibold leading-tight font-poppins">Mike Ross</div>
                                        <div className="text-[#6a7282] text-[8px] leading-tight font-poppins">Frontend Dev</div>
                                    </div>
                                    <div className="text-[#5eb489] text-[10px] font-bold shrink-0 font-poppins">76%</div>
                                </div>
                            </div>

                            <div>
                                <div className="bg-[#e0e7ff] rounded-[11px] w-[32px] h-[32px] flex items-center justify-center mb-4">
                                    <img src={automatedScreeningIcon} alt="" className="w-[16px] h-[16px]" />
                                </div>
                                <h3 className="text-[17px] font-semibold text-[#101828] mb-2 font-poppins">Automated Screening</h3>
                                <p className="text-[#6A7282] text-[12px]">Instant filtering using custom logic to identify the best candidates.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Agile Workflow AI */}
                    <div className="bg-[#FFF8F4] rounded-3xl p-8 col-span-1 transition-transform hover:scale-[1.01] duration-300">
                        <div className="flex flex-col h-full justify-between">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                    <span className="text-xs text-orange-500 font-medium uppercase tracking-wider">Productivity</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#141414] mb-2 font-poppins">Agile Workflow AI</h3>
                                <p className="text-[#a4adbf] text-sm">Streamline candidate flow with automated stages.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: New Feature */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 col-span-1 shadow-sm transition-transform hover:scale-[1.01] duration-300">
                        <div className="flex flex-col h-full justify-between">
                            {/* Mock Graph */}
                            <div className="flex items-end gap-1 h-20 mb-6">
                                <div className="w-1/5 bg-blue-100 h-[40%] rounded-t"></div>
                                <div className="w-1/5 bg-blue-200 h-[60%] rounded-t"></div>
                                <div className="w-1/5 bg-blue-300 h-[30%] rounded-t"></div>
                                <div className="w-1/5 bg-blue-400 h-[80%] rounded-t"></div>
                                <div className="w-1/5 bg-blue-500 h-[50%] rounded-t"></div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#141414] mb-2 font-poppins">Data Insights</h3>
                                <p className="text-[#a4adbf] text-sm">Real-time analytics to track your hiring pipeline.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Ask Vasitum AI (Wide) */}
                    <div className="bg-white rounded-3xl p-5 col-span-1 lg:col-span-2 flex flex-col md:flex-row items-center gap-8 transition-transform hover:scale-[1.01] duration-300 border-t border-r border-b border-t-[#FAD7A6] border-r-[#F4A940] border-b-[#F4A940] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.08)] relative overflow-hidden">
                        <div className="flex-1 z-10">
                            <div className="bg-[#fff3e2] rounded-[11px] flex items-center justify-center mb-6" style={{ width: '32.27px', height: '32.27px' }}>
                                <img src={chatIcon} alt="Chat" className="w-[16px] h-[16px]" />
                            </div>
                            <h3 className="text-[16px] font-semibold text-[#101828] mb-3 font-poppins">Ask Vasitum AI</h3>
                            <div className="text-[#667085] text-[12px] mb-6 font-poppins space-y-2">
                                <p className="italic">"Find me candidates with React experience in New York."</p>
                                <p>Interact with your talent pool using natural language.</p>
                            </div>
                            <button className="bg-[#101828] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1D2939] transition-colors shadow-lg shadow-gray-200">
                                Try Demo
                            </button>
                        </div>

                        {/* Mock Chat UI */}
                        <div className="bg-white p-[7px] rounded-[13px] shadow-[0px_16px_20px_-4px_rgba(57,60,70,0.1),0px_6px_8px_-4px_rgba(57,60,70,0.1)] w-full max-w-[320px] relative border border-[#f3f4f6] flex flex-col font-poppins">
                            {/* Header */}
                            <div className="flex items-center gap-[15px] h-[46px] border-b border-[#f9fafb] pl-[10px] mb-4 w-full">
                                <div className="relative shrink-0">
                                    <img src={vasitumAiAvatarComplete} alt="AI" className="w-[40px] h-[40px] rounded-full" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-[14px] font-semibold text-[#101828] leading-tight">Vasitum AI</div>
                                    <div className="text-[10px] text-[#43A047] flex items-center gap-1 leading-tight font-medium">
                                        <span className="w-1 h-1 rounded-full bg-[#43A047]"></span>
                                        Online
                                    </div>
                                </div>
                            </div>

                            {/* Chat Content */}
                            <div className="px-[13px] pb-[13px] relative mb-[13px]">
                                <div className="bg-[#eef2ff] text-[#312c85] text-[12px] p-[10px] rounded-tr-[13px] rounded-br-[13px] rounded-bl-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[200px] mb-[15px] leading-normal">
                                    Found <span className="font-semibold">5 candidates</span><br />matching <span className="whitespace-nowrap">"Senior Designer"</span>
                                </div>
                                <div className="flex gap-[6px] w-[135px]">
                                    <div className="h-[19px] w-[51px] bg-[#f3f4f6] rounded-full animate-pulse"></div>
                                    <div className="h-[19px] flex-1 bg-[#f3f4f6] rounded-full animate-pulse delay-75"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
