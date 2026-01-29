import React from 'react';
import Typewriter from './Typewriter';

const COLORS = ['bg-orange-400', 'bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-red-400', 'bg-pink-400', 'bg-indigo-400'];

const Hero: React.FC = () => {
    const [dotColor, setDotColor] = React.useState('bg-orange-400');

    const handleNext = () => {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        setDotColor(randomColor);
    };

    return (

        <div className="relative w-full h-[720px] pt-[80px] flex flex-col items-center justify-center overflow-hidden bg-white">
            {/* Background Gradients (Abstract) */}
            {/* Background Gradients (Group 427320765) */}
            {/* Background Gradients (Group 427320765) */}
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-[606px] pointer-events-none z-0">
               <img className="w-full h-full object-cover no-repeat" src="/gradient.svg" alt="Gradient" />

                {/* Ellipse 2054 (Left - Orange)
                <div className="absolute top-[-166px] left-[-10%] w-[50%] h-[360px] bg-[#F4A940] rounded-full blur-[100px] mix-blend-screen opacity-60" />

              
                <div className="absolute top-[-186px] left-1/2 -translate-x-1/2 w-[50%] h-[389px] bg-[#83FFFF] rounded-full blur-[100px] opacity-60" />

               
                <div className="absolute top-[-180px] right-[-10%] w-[50%] h-[360px] bg-[#0066FF] rounded-full blur-[100px] opacity-60" /> */}
            </div>



            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4 text-center">
                {/* Tag */}
                <div className="flex items-center gap-2 mb-6">
                    <div className={`w-2.5 h-2.5 rounded-full ${dotColor} transition-colors duration-300`} /> {/* Placeholder icon */}
                    <div className="text-[#a4adbf] font-poppins font-normal text-sm tracking-wide pr-2">
                        <Typewriter
                            texts={[
                                "AI-Powered Hiring",
                                "Less Manual Effort",
                                "Faster Time-to-Hire",
                                "Data-Driven Hiring Decisions",
                                "Real-Time Hiring Insights",
                                "Reduced Time-to-Hire",
                                "Scalable Recruitment Process",
                                "Hire the Right Talent",
                                "Faster"
                            ]}
                            speed={50}
                            pause={2000}
                            className="inline-block"
                            onNext={handleNext}
                        />
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-[48px] font-poppins font-normal text-primary-accent leading-tight mb-6">
                    <span>Automation hiring & </span>
                    <span className="text-orange-primary">cut </span>
                    <br />
                    <span className="text-orange-primary">time -to-hire</span>
                    <span> in half</span>
                </h1>

                {/* Subhead */}
                <p className="text-[#adadad] text-[16px] font-[400] max-w-[472px] mb-10 font-poppins">
                    One smart platform that helps recruiters hire faster
                    and job seekers find the right job—without the hassle.
                </p>

                {/* CTA Button */}
                <button className="w-[200px] h-[48px] flex items-center justify-center bg-[#f4a940] rounded-lg text-white font-regular text-[16px] hover:bg-orange-500 transition-colors duration-200">
                    Book Demo
                </button>
            </div>

            {/* Curved Wave Background Shape */}
            <div
                className="absolute bottom-[-1px] left-0 w-full h-auto pointer-events-none z-[1]"
                style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, black 20%, black 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, black 20%, black 100%)'
                }}
            >
                <svg
                    className="w-full h-auto scale-y-[1.2] origin-bottom block"
                    preserveAspectRatio="none"
                    viewBox="0 0 1251 337"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="shadow-up" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="-20" stdDeviation="10" floodColor="rgba(0, 0, 0, 0.1)" />
                        </filter>
                    </defs>
                    <path
                        id="Vector 63"
                        d="M0.25 246.75V6.25C0.25 2.93629 2.93626 0.25 6.24997 0.25H1244.75C1248.06 0.25 1250.75 2.93629 1250.75 6.25V246.75C1250.75 274.364 1228.36 296.75 1200.75 296.75H928.461C915.2 296.75 902.482 302.018 893.105 311.395L882.395 322.105C873.018 331.482 860.3 336.75 847.039 336.75H390.781C375.592 336.75 361.226 329.846 351.738 317.985L349.762 315.515C340.274 303.654 325.908 296.75 310.719 296.75H50.25C22.6358 296.75 0.25 274.364 0.25 246.75Z"
                        fill="url(#paint0_linear_355_3151)"
                        stroke="url(#paint1_linear_355_3151)"
                        strokeWidth="0.5"
                    />
                    <defs>
                        <linearGradient id="paint0_linear_355_3151" x1="793.75" y1="272.25" x2="795.25" y2="680.25" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#2F4477" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_355_3151" x1="553.75" y1="168.75" x2="550.75" y2="370.75" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#A4ADBF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
