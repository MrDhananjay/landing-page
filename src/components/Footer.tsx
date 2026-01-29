import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-[#1c3f94] to-[#1b2a4e] rounded-tl-[60px] rounded-tr-[60px] relative overflow-hidden">
            {/* Main Footer Content - pt-[115px] to make room for overlapping Contact card */}
            <div className="w-[1112px] mx-auto pt-[180px] pb-[50px] relative z-10">
                <div className="flex gap-[112px] mb-[18px]">
                    {/* Logo Section */}
                    <div className="w-[169px] flex-shrink-0 relative">
                        <div className="flex items-center gap-2 px-4 py-2">
                            {/* Logo Icon */}
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="8" fill="white" />
                                <path d="M10 10H14V14H10V10Z" fill="#072251" />
                                <path d="M10 18H14V22H10V18Z" fill="#072251" />
                                <path d="M18 10H22V14H18V10Z" fill="#072251" />
                                <path d="M18 18H22V22H18V18Z" fill="#072251" />
                                <path d="M14 14H18V18H14V14Z" fill="#072251" />
                            </svg>
                            <span className="text-white font-poppins font-semibold text-[20px]">Vasitum</span>
                        </div>
                        {/* Vertical separator line */}
                        <div className="absolute right-[-3px] top-0 w-px h-[225px] bg-[#1B4178]" />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-[120px]">
                        {/* Vasitum Column */}
                        <div className="w-[172px]">
                            <h4 className="text-white font-poppins font-semibold text-[16px] leading-[22px] mb-[16px]">Vasitum</h4>
                            <ul className="space-y-[16px]">
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">About us</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Our clients</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Get in touch</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">E-Book</a></li>
                            </ul>
                        </div>

                        {/* Quick links Column */}
                        <div className="w-[172px]">
                            <h4 className="text-white font-poppins font-semibold text-[16px] leading-[22px] mb-[16px]">Quick links</h4>
                            <ul className="space-y-[16px]">
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Blogs</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Solutions</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Privacy policy</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Terms & conditions</a></li>
                            </ul>
                        </div>

                        {/* Jobs by industry Column */}
                        <div className="w-[172px]">
                            <h4 className="text-white font-poppins font-semibold text-[16px] leading-[22px] mb-[16px]">Jobs by industry</h4>
                            <ul className="space-y-[16px]">
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Information Technology</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Marketing</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Sales</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Artificial Intelligence</a></li>
                                <li><a href="#" className="text-[#8499BC] font-poppins text-[14px] leading-[22px] hover:text-white transition-colors">Data Science</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#1B4178] mb-[20px]" />

                {/* Bottom Bar */}
                <div className="flex justify-between items-center">
                    <a href="mailto:meet@vasitum.com" className="text-white font-poppins text-[14px] hover:text-[#F4A940] transition-colors">
                        meet@vasitum.com
                    </a>
                    <p className="text-white font-poppins text-[12px] leading-[1.4]">
                        © Copyright 2024, Vasitum
                    </p>
                </div>
            </div>

            {/* Large Watermark Text - positioned at bottom */}
            <div className="w-[1270px] mx-auto h-[159px] mb-[-50px] relative z-0">
                <svg width="1270" height="159" viewBox="0 0 1270 159" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <text
                        x="635"
                        y="130"
                        textAnchor="middle"
                        fontFamily="Poppins, sans-serif"
                        fontWeight="700"
                        fontSize="160"
                        fill="none"
                        stroke="rgba(27, 65, 120, 0.25)"
                        strokeWidth="1.5"
                        letterSpacing="-4"
                    >
                        Vasitum
                    </text>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
