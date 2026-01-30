import React from 'react';
import GsapScrollReveal from './GsapScrollReveal';

// Placeholder avatars - using UI Faces style
const avatarGuy = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face";
const avatarKarla = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face";
const avatarJane = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face";

const QuoteIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12H9C7.34315 12 6 13.3431 6 15V21C6 22.6569 7.34315 24 9 24H12V27C12 28.6569 10.6569 30 9 30H8C7.44772 30 7 30.4477 7 31V32C7 32.5523 7.44772 33 8 33H9C12.3137 33 15 30.3137 15 27V12Z" fill="#A8CBFE" />
        <path d="M30 12H24C22.3431 12 21 13.3431 21 15V21C21 22.6569 22.3431 24 24 24H27V27C27 28.6569 25.6569 30 24 30H23C22.4477 30 22 30.4477 22 31V32C22 32.5523 22.4477 33 23 33H24C27.3137 33 30 30.3137 30 27V12Z" fill="#A8CBFE" />
    </svg>
);

interface TestimonialCardProps {
    quote: string;
    name: string;
    handle: string;
    avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, handle, avatar }) => (
    <div className="bg-[#F1F2F5] rounded-[30px] pt-[24px] px-[24px] pb-0 w-[305px] h-[243px] flex flex-col relative overflow-hidden">
        <div className="mb-4 opacity-50">
            <QuoteIcon />
        </div>
        <p className="text-[#212D39] font-poppins font-normal text-[18px] leading-[23px] tracking-[0.05px] whitespace-pre-wrap">
            {quote}
        </p>

        {/* Author Box */}
        <div className="absolute bottom-0 left-0 bg-white px-[24px] py-[18px] rounded-tr-[30px] flex items-center gap-[12px] min-w-[180px]">
            <img
                src={avatar}
                alt={name}
                className="w-[36px] h-[36px] rounded-full object-cover bg-[#f1f2f5]"
            />
            <div className="flex flex-col">
                <p className="text-[#212D39] font-poppins font-semibold text-[14px] leading-tight">{name}</p>
                <p className="text-[#8499BC] font-poppins font-medium text-[11px] leading-tight tracking-[-0.1px]">{handle}</p>
            </div>
        </div>
    </div>
);

const Testimonial: React.FC = () => {
    const testimonials = [
        {
            quote: "Impressed by the professionalism and attention to detail.",
            name: "Guy Hawkins",
            handle: "@guyhawkins",
            avatar: avatarGuy
        },
        {
            quote: "A seamless experience\nfrom start to finish.\nHighly recommend!",
            name: "Karla Lynn",
            handle: "@karlalynn98",
            avatar: avatarKarla
        },
        {
            quote: "Reliable and trustworthy. Made my life so much easier!",
            name: "Jane Cooper",
            handle: "@janecooper",
            avatar: avatarJane
        }
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="w-[980px] mx-auto px-4">
                {/* Header */}
                <div className="flex justify-between items-start mb-[46px]">
                    <GsapScrollReveal delay={0.1}>
                        <h2 className="text-[42px] font-poppins text-[#212D39] leading-[48px]">
                            Client<br />Testimonials
                        </h2>
                    </GsapScrollReveal>
                    <GsapScrollReveal delay={0.2}>
                        <p className="text-[16px] font-poppins text-[#8499BC] w-[329px] leading-[24px]">
                            We partner with forward-thinking companies to build products that are not just functional, but
                        </p>
                    </GsapScrollReveal>
                </div>

                {/* Testimonial Cards */}
                <div className="flex gap-[24px] justify-center mb-[48px]">
                    {testimonials.map((testimonial, index) => (
                        <GsapScrollReveal key={index} delay={0.3 + (index * 0.1)}>
                            <TestimonialCard
                                quote={testimonial.quote}
                                name={testimonial.name}
                                handle={testimonial.handle}
                                avatar={testimonial.avatar}
                            />
                        </GsapScrollReveal>
                    ))}
                </div>

                {/* Pagination Dots */}
                <GsapScrollReveal delay={0.6}>
                    <div className="flex justify-center gap-[6px]">
                        <div className="w-[24px] h-[4.5px] bg-[#212D39] rounded-full" />
                        <div className="w-[24px] h-[4.5px] bg-[#F1F2F5] rounded-full" />
                        <div className="w-[24px] h-[4.5px] bg-[#F1F2F5] rounded-full" />
                    </div>
                </GsapScrollReveal>
            </div>
        </section>
    );
};

export default Testimonial;
