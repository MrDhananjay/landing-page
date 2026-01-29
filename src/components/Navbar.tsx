import React from 'react';

const logoIcon = "http://localhost:3845/assets/b0ff52d2ab848897def311906f21921e523ac4c3.svg";
const logoText = "http://localhost:3845/assets/7135ea04079f2d31043a325d0992852a87450c41.svg";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 pt-[27px] flex justify-center">
            <div className="w-[980px] backdrop-blur-[5px] bg-[rgba(255,255,255,0.1)] border border-white flex justify-between items-center px-[45px] py-[10px] rounded-[20px] shadow-sm">
                {/* Logo/Horizontal Mark */}
                <div className="relative h-[23px] w-[89px]">
                    <div className="absolute top-0 left-0 w-[23px] h-[23px]">
                        <img src={logoIcon} alt="Logo Icon" className="w-full h-full" />
                    </div>
                    <div className="absolute top-[5px] left-[29px] w-[60px] h-[12px]"> {/* Adjusted based on design percentage inset */}
                        <img src={logoText} alt="Logo Text" className="w-full h-full" />
                    </div>
                </div>

                {/* Links */}
                <div className="hidden md:flex gap-[38px] items-center text-[#2b2e34] text-[12px] font-poppins">
                    <a href="#" className="hover:text-orange-primary transition-colors">Home</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">Features</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">About</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">Pricing</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">Contact</a>
                    <a href="#" className="hover:text-orange-primary transition-colors">Looking for job</a>
                </div>

                {/* Sign In Button */}
                <button className="bg-white px-[40px] py-[10px] rounded-[10px] text-orange-primary font-medium text-[14px] tracking-[0.28px] capitalize shadow-sm hover:shadow-md transition-shadow">
                    Sign In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
