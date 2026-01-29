import React from 'react';

// Icons - Using inline SVGs based on design
const ClockIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 5.5V11L14.5 13M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TrendUpIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7L12.5657 15.4343C12.2533 15.7467 12.097 15.9029 11.9141 15.9608C11.7535 16.0116 11.5815 16.0116 11.4209 15.9608C11.238 15.9029 11.0817 15.7467 10.7693 15.4343L8.0657 12.7307C7.75328 12.4183 7.59707 12.262 7.41414 12.2042C7.25354 12.1534 7.0815 12.1534 6.9209 12.2042C6.73797 12.262 6.58176 12.4183 6.26934 12.7307L1 18M21 7H15M21 7V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L6 12M11 18V10M16 18V14M21 6L13.5657 13.4343C13.2533 13.7467 13.097 13.9029 12.9141 13.9608C12.7535 14.0116 12.5815 14.0116 12.4209 13.9608C12.238 13.9029 12.0817 13.7467 11.7693 13.4343L9.06568 10.7307C8.75326 10.4183 8.59705 10.262 8.41412 10.2042C8.25352 10.1534 8.08148 10.1534 7.92088 10.2042C7.73795 10.262 7.58174 10.4183 7.26932 10.7307L1 17" stroke="#212D39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Brand Components
const BrandReverland = () => <span className="font-['Georgia'] italic text-[24px] text-[#212D39]">reverland</span>;
const BrandLiva = () => (
    <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#212D39] rounded-[4px]" />
        <span className="font-['Inter'] font-medium text-[20px] text-[#212D39]">liva</span>
    </div>
);
const BrandPure = () => <span className="font-['Georgia'] italic text-[24px] text-[#212D39]">pure</span>;
const BrandAven = () => <span className="font-['Inter'] font-bold text-[20px] text-[#212D39]">aven.</span>;
const BrandCopixel = () => (
    <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
            <div className="w-[4px] h-[16px] bg-[#212D39]" />
            <div className="w-[4px] h-[12px] bg-[#212D39] mt-1" />
        </div>
        <span className="font-['Inter'] font-bold text-[16px] text-[#212D39]">copixel</span>
    </div>
);
const BrandFashion = () => (
    <div className="flex flex-col items-center">
        <span className="font-['Georgia'] italic text-[20px] text-[#212D39]">fashion</span>
        <span className="font-['Inter'] text-[10px] tracking-[3px] text-[#212D39] uppercase">LIVE</span>
    </div>
);
const BrandAlpha = () => <span className="font-['Inter'] font-bold text-[16px] text-[#212D39] tracking-[2px]">ALPHA</span>;
const BrandHandCrafted = () => <span className="font-['Georgia'] italic text-[14px] text-[#212D39] border border-[#212D39] px-4 py-1 rounded-full whitespace-nowrap">Hand Crafted</span>;

interface BrandStripProps {
    brands: React.ComponentType[];
    speed?: string;
    reverse?: boolean;
}

const BrandStrip: React.FC<BrandStripProps> = ({ brands, speed = "15s", reverse = false }) => {
    return (
        <div className="h-[242px] overflow-hidden border-r border-[#E5E7EB] last:border-r-0 relative bg-white">
            <div
                className="flex flex-col"
                style={{
                    animation: `vertical-marquee ${speed} linear infinite`,
                    animationDirection: reverse ? 'reverse' : 'normal'
                }}
            >
                {/* Triple the list to ensure seamless looping */}
                {[...brands, ...brands, ...brands].map((Brand, idx) => (
                    <div key={idx} className="h-[121px] flex items-center justify-center px-4 border-b border-[#E5E7EB]">
                        <Brand />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Impact: React.FC = () => {
    return (
        <section className="w-full bg-white relative overflow-hidden">
            <style>
                {`
                @keyframes vertical-marquee {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-33.333%); }
                }
                `}
            </style>
            {/* Stats Section */}
            <div className="relative px-[166px] py-[113px]">
                <div className="relative z-10 w-[980px] mx-auto">
                    {/* Background Watermark Text - positioned relative to content */}
                    <div className="absolute inset-0 pointer-events-none select-none overflow-visible -z-10">
                        <p className="absolute left-[-246px] top-[-113px] font-['Inter'] font-black text-[238px] leading-[239px] text-[rgba(24,24,27,0.04)] whitespace-nowrap">
                            IMPACT
                        </p>
                        <p className="absolute left-[200px] top-[360px] font-['Inter'] font-black text-[238px] leading-[239px] text-[rgba(24,24,27,0.04)] whitespace-nowrap">
                            GROWTH
                        </p>
                    </div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-[63px]">
                        <h2 className="text-[42px] font-poppins text-[#212D39] leading-[48px] tracking-[-3.35px] w-[287px]">
                            Real world<br />impact
                        </h2>
                        <p className="text-[16px] font-poppins text-[#8499BC] w-[336px] leading-normal">
                            Automate your hiring from source to offer. Eliminate manual screening and hire top talent 30% faster with our intelligent AI co-pilot.
                        </p>
                    </div>

                    {/* Stat Cards */}
                    <div className="flex gap-[22px]">
                        {/* Card 1: 30% Faster Time-to-Hire */}
                        <div className="relative w-[310px] h-[288px] bg-[#072251] rounded-[28px] shadow-[0px_17px_35px_-8px_rgba(0,0,0,0.25)] overflow-hidden">
                            {/* Blur effect */}
                            <div className="absolute w-[171px] h-[172px] right-0 top-[-28px] bg-[#a8cbfe] blur-[35px] opacity-20 rounded-full" />

                            <div className="relative z-10 p-[28px]">
                                {/* Icon */}
                                <div className="w-[45px] h-[45px] bg-white/10 rounded-[11px] flex items-center justify-center mb-[22px]">
                                    <ClockIcon />
                                </div>

                                {/* Stat */}
                                <div className="flex items-end mb-2">
                                    <span className="text-[56px] font-poppins font-semibold text-white leading-none">30</span>
                                    <span className="text-[19px] font-poppins font-semibold text-white/60 ml-1 mb-2">%</span>
                                </div>

                                {/* Label */}
                                <p className="text-[11px] font-poppins font-semibold text-[#52C5DA] uppercase tracking-[0.5px] mb-4">
                                    FASTER TIME-TO-HIRE
                                </p>

                                {/* Divider */}
                                <div className="w-[33px] h-[3px] bg-[#52C5DA] rounded-full mb-4" />

                                {/* Description */}
                                <p className="text-[13px] font-poppins text-[#ADBBD3] leading-[20px]">
                                    Reduce the time spent on screening and scheduling.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: 75% Productivity Boost */}
                        <div className="relative w-[310px] h-[288px] bg-[#2764E4] rounded-[28px] shadow-[0px_17px_35px_-8px_rgba(0,0,0,0.25)] overflow-hidden">
                            {/* Blur effect */}
                            <div className="absolute w-[171px] h-[172px] right-0 top-[-28px] bg-[#a8cbfe] blur-[35px] opacity-20 rounded-full" />

                            <div className="relative z-10 p-[28px]">
                                {/* Icon */}
                                <div className="w-[45px] h-[45px] bg-white/10 rounded-[11px] flex items-center justify-center mb-[22px]">
                                    <TrendUpIcon />
                                </div>

                                {/* Stat */}
                                <div className="flex items-end mb-2">
                                    <span className="text-[56px] font-poppins font-semibold text-white leading-none">75</span>
                                    <span className="text-[19px] font-poppins font-semibold text-white/60 ml-1 mb-2">%</span>
                                </div>

                                {/* Label */}
                                <p className="text-[11px] font-poppins font-semibold text-[#52C5DA] uppercase tracking-[0.5px] mb-4">
                                    PRODUCTIVITY BOOST
                                </p>

                                {/* Divider */}
                                <div className="w-[33px] h-[3px] bg-[#52C5DA] rounded-full mb-4" />

                                {/* Description */}
                                <p className="text-[13px] font-poppins text-[#ADBBD3] leading-[20px]">
                                    Empower your recruiters to focus on what matters: people.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: 40% Cost Reduction */}
                        <div className="relative w-[310px] h-[288px] bg-[#EAF0FB] rounded-[28px] shadow-[0px_17px_35px_-8px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Gradient blur effect */}
                            <div className="absolute w-[200px] h-[200px] right-[-50px] top-[-20px] bg-gradient-to-br from-[#EAF0FB] to-[#D0E1FF] blur-[40px] opacity-80 rounded-full" />

                            <div className="relative z-10 p-[28px]">
                                {/* Icon */}
                                <div className="w-[45px] h-[45px] bg-white rounded-[11px] flex items-center justify-center mb-[22px] shadow-sm">
                                    <ChartIcon />
                                </div>

                                {/* Stat */}
                                <div className="flex items-end mb-2">
                                    <span className="text-[56px] font-poppins font-semibold text-[#212D39] leading-none">40</span>
                                    <span className="text-[19px] font-poppins font-semibold text-[#212D39]/60 ml-1 mb-2">%</span>
                                </div>

                                {/* Label */}
                                <p className="text-[11px] font-poppins font-semibold text-[#212D39] uppercase tracking-[0.5px] mb-4">
                                    COST REDUCTION
                                </p>

                                {/* Divider */}
                                <div className="w-[33px] h-[3px] bg-[#52C5DA] rounded-full mb-4" />

                                {/* Description */}
                                <p className="text-[13px] font-poppins text-[#8499BC] leading-[20px]">
                                    Lower your cost-per-hire with automated efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Grid Section */}
            <div className="w-full px-[166px] py-[60px]">
                <div className="w-[980px] mx-auto overflow-hidden rounded-xl border border-[#E5E7EB]">
                    <div className="grid grid-cols-4 bg-white">
                        <BrandStrip
                            brands={[BrandReverland, BrandCopixel, BrandLiva]}
                            speed="12s"
                        />
                        <BrandStrip
                            brands={[BrandLiva, BrandFashion, BrandAlpha]}
                            speed="18s"
                            reverse
                        />
                        <BrandStrip
                            brands={[BrandPure, BrandAlpha, BrandHandCrafted]}
                            speed="15s"
                        />
                        <BrandStrip
                            brands={[BrandAven, BrandHandCrafted, BrandReverland]}
                            speed="20s"
                            reverse
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
