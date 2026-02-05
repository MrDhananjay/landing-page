import React from 'react';
import {
    ResumeToastSmall,
    AIProcessingBadge,
    CandidateCard,
    NewCandidatesBadge,
} from './FloatingElements';
import vasiRec from '../assets/vasi-rec.svg';
import container from '../assets/Container.svg';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';
import GsapFloat from './GsapFloat';
import line from '../assets/line.svg';
import parsed from '../assets/parsed.svg';


const Recruitment: React.FC = () => {
    return (
        <section className="w-full py-10 md:py-16 lg:py-20 bg-white relative z-10 overflow-hidden">
            <div className="max-w-[1283px] mx-auto px-4 relative">
                {/* Background Rectangle from Group 427320777 - approximated position */}
                <div className="hidden md:block absolute bg-[#FFF8EF] rounded-[60px] w-full h-[654px] top-[30px] left-0 -z-10 shadow-[-3px_6px_6px_0px_rgba(0,0,0,0.06)]"></div>

                <div className="flex flex-col md:flex-row gap-8 relative">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 pt-8 md:pt-[60px] lg:pt-[90px] px-4 md:px-6 lg:pl-[120px] lg:pr-0">
                        <GsapScrollReveal delay={0.1}>
                            <div className="mb-[22px] relative w-fit">
                                <span className="text-[#5C77A6] text-[18px] font-poppins relative z-10">About Vasitum</span>
                                <img
                                    src={line}
                                    alt=""
                                    className="absolute max-w-none z-0 pointer-events-none"
                                    style={{
                                        left: '-135px',
                                        bottom: '-520px',
                                        width: '720px',
                                        opacity: 0.5
                                    }}
                                />
                            </div>
                        </GsapScrollReveal>

                        <GsapScrollReveal delay={0.2}>
                            <div className="mb-6 md:mb-[38px]">
                                <h2 className="text-[#212D39] text-[28px] md:text-[36px] lg:text-[42px] font-poppins leading-tight md:leading-[68px] tracking-[-1.68px]">
                                    <span className="font-regular block">Recruitment</span>
                                    <span className="font-regular block">Reimagined</span>
                                    <GsapTextReveal className="font-semibold block">Built by Recruiters,</GsapTextReveal>
                                    <GsapTextReveal className="font-semibold block">Powered by AI</GsapTextReveal>
                                </h2>
                            </div>
                        </GsapScrollReveal>

                        <GsapScrollReveal delay={0.3}>
                            <p className="text-[#5C77A6] text-[14px] md:text-[16px] font-poppins leading-normal max-w-[392px] mb-6 md:mb-[49px]">
                                Automate your hiring from source to offer. Eliminate manual screening and hire top talent 30% faster with our intelligent AI co-pilot.
                            </p>
                        </GsapScrollReveal>

                        <GsapScrollReveal delay={0.4}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-[14px]">
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
                        </GsapScrollReveal>
                    </div>

                    {/* Right Column: Visuals - Hidden on mobile, shown on md+ */}
                    <div className="hidden md:block flex-1 relative min-h-[500px] lg:min-h-[713px] z-10">
                        <GsapScrollReveal delay={0.3}>
                            {/* Dark Blue Background Shape */}
                            <div className="absolute right-[-30px] top-0 w-[350px] md:w-[400px] lg:w-[576px] h-[850px] lg:h-[713px] bg-[#1B2A4E] rounded-tl-[40px] lg:rounded-tl-[60px] rounded-bl-[40px] lg:rounded-bl-[60px] shadow-[-7px_0px_24px_0px_rgba(2,14,35,0.12)]"></div>

                            {/* Blur Effect (Lens) */}
                            <div className="absolute right-[-15px] top-[100px] lg:top-[184px] w-[200px] lg:w-[338px] h-[200px] lg:h-[345px] bg-[#1F449D] blur-[64px] rounded-full opacity-60 pointer-events-none"></div>
                        </GsapScrollReveal>

                        {/* Floating Elements Composition */}

                        {/* 1. Candidate Card (Alice Freeman) - Replaces Michael Foster */}
                        <GsapScrollReveal delay={0.4} className="absolute left-[20px] lg:left-[180px] top-[140px] lg:top-[240px] z-20 scale-[0.7] lg:scale-100 origin-top-left">
                            <GsapFloat amplitude={8} duration={4} delay={0}>
                                <CandidateCard />
                            </GsapFloat>
                        </GsapScrollReveal>

                        {/* 2. Resume Parsed Toast (Small) - Replaces previous toast */}
                        <GsapScrollReveal delay={0.5} className="absolute right-[20px] lg:right-[60px] bottom-[40px] lg:bottom-[90px] z-20 scale-[0.7] lg:scale-100 origin-bottom-right">
                            <GsapFloat amplitude={6} duration={3.5} delay={0.5}>
                                <ResumeToastSmall />
                            </GsapFloat>
                        </GsapScrollReveal>

                        {/* 4. AI Processing Badge - New decorative element */}
                        <GsapScrollReveal delay={0.6} className="absolute left-[-20px] lg:left-[-30px] bottom-[280px] lg:bottom-[500px] z-10 scale-[0.7] lg:scale-100 origin-left">
                            <GsapFloat amplitude={10} duration={4.5} delay={0.2}>
                                <AIProcessingBadge />
                            </GsapFloat>
                        </GsapScrollReveal>

                        {/* 5. New Candidates Badge - Floating pill */}
                        <GsapScrollReveal delay={0.7} className="absolute right-[60px] lg:right-[180px] top-[30px] lg:top-[60px] z-30 scale-[0.7] lg:scale-100 origin-top-right">
                            <GsapFloat amplitude={7} duration={3} delay={0.8}>
                                <NewCandidatesBadge />
                            </GsapFloat>
                        </GsapScrollReveal>

                        {/* 6. Floating Icon Button */}
                        <GsapScrollReveal delay={0.8} className="absolute right-[30px] lg:right-[80px] top-[70px] lg:top-[115px] z-20">
                            <GsapFloat amplitude={12} duration={5} delay={0.3}>
                                <img src={vasiRec} alt="Floating Action Button" className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]" />
                            </GsapFloat>
                        </GsapScrollReveal>

                        {/* 7. Resume Parsed */}
                        <GsapScrollReveal delay={0.5} className="absolute right-[-20px] lg:right-[-40px] top-[180px] lg:top-[305px] z-10">
                            <GsapFloat amplitude={5} duration={3.8} delay={0.6}>
                                <img src={container} alt="Resume Parsed" className="w-[180px] lg:w-[300px] h-auto" />
                            </GsapFloat>
                        </GsapScrollReveal>

                        {/* 8. Parsed Resume */}
                        <GsapScrollReveal delay={0.6} className="absolute left-[-30px] lg:left-[-50px] top-[320px] lg:top-[500px] z-10">
                            <GsapFloat amplitude={9} duration={4.2} delay={0.4}>
                                <img src={parsed} alt="Parsed Resume" className="w-[140px] lg:w-[212px] h-auto" />
                            </GsapFloat>
                        </GsapScrollReveal>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recruitment;
