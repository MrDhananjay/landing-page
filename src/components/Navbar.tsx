import React, { useState } from 'react';

const BrandIcon = "/brand_Icon.svg";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 pt-4 md:pt-[27px] flex justify-center px-4">
            <div className="w-full max-w-[980px] backdrop-blur-[5px] bg-[rgba(255,255,255,0.9)] md:bg-[rgba(255,255,255,0.1)] border border-white flex justify-between items-center px-4 md:px-[45px] py-[10px] rounded-[16px] md:rounded-[20px] shadow-sm">
                {/* Logo/Horizontal Mark */}
                <div className="relative h-[23px] w-[89px]">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <img src={BrandIcon} alt="Logo Icon" className="w-full h-full" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#2b2e34] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-[#2b2e34] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-[#2b2e34] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Links - Desktop */}
                <div className="hidden md:flex gap-4 lg:gap-[38px] items-center text-[#2b2e34] text-[12px] font-poppins">
                    <a href="#" className="hover:text-orange-primary transition-colors">Home</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">Features</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">About</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">Pricing</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">Contact</a>
                    <a href="#" className="hover:text-orange-primary transition-colors whitespace-nowrap">Looking for job</a>
                </div>

                {/* Sign In Button - Desktop */}
                <button className="hidden md:block bg-white px-4 lg:px-[40px] py-[10px] rounded-[10px] text-orange-primary font-medium text-[14px] tracking-[0.28px] capitalize shadow-sm hover:shadow-md transition-shadow">
                    Sign In
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden fixed top-[72px] left-4 right-4 bg-white rounded-[16px] shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-4 gap-4">
                    <a href="#" className="text-[#2b2e34] text-[14px] font-poppins py-2 hover:text-orange-primary transition-colors">Home</a>
                    <a href="#" className="text-[#2b2e34] text-[14px] font-poppins py-2 hover:text-orange-primary transition-colors">Features</a>
                    <a href="#" className="text-[#2b2e34] text-[14px] font-poppins py-2 hover:text-orange-primary transition-colors">About</a>
                    <a href="#" className="text-[#2b2e34] text-[14px] font-poppins py-2 hover:text-orange-primary transition-colors">Pricing</a>
                    <a href="#" className="text-[#2b2e34] text-[14px] font-poppins py-2 hover:text-orange-primary transition-colors">Contact</a>
                    <a href="#" className="text-[#2b2e34] text-[14px] font-poppins py-2 hover:text-orange-primary transition-colors">Looking for job</a>
                    <button className="w-full bg-[#f4a940] py-3 rounded-[10px] text-white font-medium text-[14px] mt-2 hover:bg-orange-500 transition-colors">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
