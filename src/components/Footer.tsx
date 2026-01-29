import React from 'react';
import whiteIcon from "../../public/white-logo.svg";
import vasitumBottom from "../../public/vasi.svg"

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
                            <img src={whiteIcon} alt="Logo Icon" className="w-full h-full" />
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
            <div className="w-full mb-[-1px] relative z-0">
                <img src={vasitumBottom} alt="Vasitum Watermark" className="w-full h-auto" />
            </div>
        </footer>
    );
};

export default Footer;
