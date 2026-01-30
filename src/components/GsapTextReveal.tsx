import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GsapTextRevealProps {
    children: React.ReactNode;
    className?: string; // For font styles
}

const GsapTextReveal: React.FC<GsapTextRevealProps> = ({
    children,
    className = ""
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        // Animate color from grey to black as it enters the viewport
        gsap.fromTo(
            element,
            { color: "#ADADAD" },
            {
                color: "#101828", // Dark text color
                duration: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true, // Link animation progress to scroll position
                },
            }
        );
    }, { scope: ref });

    return (
        <span ref={ref} className={`${className} inline-block transition-colors`}>
            {children}
        </span>
    );
};

export default GsapTextReveal;
