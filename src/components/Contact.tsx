import React, { useState } from 'react';
import GsapScrollReveal from './GsapScrollReveal';

const SmsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#335590" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#335590" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        email1: '',
        email2: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="w-full relative z-20">
            <div className="w-[1104px] mx-auto">
                {/* Contact Card - positioned to overlap footer */}
                <div className="bg-white rounded-[60px] shadow-[0px_17.589px_35.179px_0px_rgba(19,19,19,0.2)] border-[0.704px] border-white p-[50px] flex gap-[46px] items-center justify-center mb-[-120px]">
                    {/* Left Side */}
                    <GsapScrollReveal delay={0.1}>
                        <div className="flex flex-col gap-[46px] items-start justify-center">
                            <div className="flex flex-col gap-[10px] w-[343px]">
                                <h2 className="text-[42px] font-poppins text-[#212D39] leading-[48px] tracking-[-3.35px] w-[287px]">
                                    Let's talk
                                </h2>
                                <p className="text-[#ADBBD3] font-poppins text-[16px] w-[336px]">
                                    Ask us anything or just say hi........
                                </p>
                            </div>
                            <a
                                href="mailto:meet@vasitum.com"
                                className="flex items-center gap-[9px] text-[#335590] font-poppins text-[16px] hover:text-[#F4A940] transition-colors"
                            >
                                <SmsIcon />
                                meet@vasitum.com
                            </a>
                        </div>
                    </GsapScrollReveal>

                    {/* Right Side - Form */}
                    <GsapScrollReveal delay={0.3}>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-[28px] justify-center">
                            <div className="flex flex-col gap-[23px]">
                                {/* Row 1: Two email fields */}
                                <div className="flex gap-[62px]">
                                    <div className="w-[226px]">
                                        <label className="block text-[#8499BC] font-poppins font-semibold text-[12px] tracking-[1.2px] h-[14px]">
                                            Your Email
                                        </label>
                                        <div className="border-b border-[#ADBBD3] h-[53px] flex items-center py-3">
                                            <input
                                                type="email"
                                                name="email1"
                                                value={formData.email1}
                                                onChange={handleChange}
                                                placeholder="Type here..."
                                                className="w-full font-poppins text-[16px] text-[#212D39] placeholder:text-[#ADBBD3] tracking-[-0.44px] focus:outline-none bg-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[226px]">
                                        <label className="block text-[#8499BC] font-poppins font-semibold text-[12px] tracking-[1.2px] h-[14px]">
                                            Your Email
                                        </label>
                                        <div className="border-b border-[#ADBBD3] h-[53px] flex items-center py-3">
                                            <input
                                                type="email"
                                                name="email2"
                                                value={formData.email2}
                                                onChange={handleChange}
                                                placeholder="Type here..."
                                                className="w-full font-poppins text-[16px] text-[#212D39] placeholder:text-[#ADBBD3] tracking-[-0.44px] focus:outline-none bg-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Message field (full width) */}
                                <div className="w-[514px]">
                                    <label className="block text-[#8499BC] font-poppins font-semibold text-[12px] tracking-[1.2px] h-[14px]">
                                        Your Email
                                    </label>
                                    <div className="border-b border-[#ADBBD3] h-[53px] flex items-center py-3">
                                        <input
                                            type="text"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Type here..."
                                            className="w-full font-poppins text-[16px] text-[#212D39] placeholder:text-[#ADBBD3] tracking-[-0.44px] focus:outline-none bg-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-[134px] bg-[#F4A940] text-white font-poppins font-semibold text-[14px] px-[10px] py-[13px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(57,60,70,0.1),0px_1px_2px_0px_rgba(57,60,70,0.1)] hover:bg-[#E09930] transition-colors tracking-[-0.15px]"
                            >
                                Send
                            </button>
                        </form>
                    </GsapScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
