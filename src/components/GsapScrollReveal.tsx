import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GsapScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    yOffset?: number;
    duration?: number;
    scale?: number;
    ease?: string;
    triggerStart?: string;
    className?: string; // Allow passing custom classes (like grid positioning)
}

const GsapScrollReveal: React.FC<GsapScrollRevealProps> = ({
    children,
    delay = 0,
    yOffset = 50,
    duration = 2.5,
    scale = 1,
    ease = "power3.out",
    triggerStart = "top 85%",
    className = ""
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: yOffset,
                scale: scale === 1 ? 0.95 : scale, // Optional subtle scale up effect
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: duration,
                delay: delay,
                ease: ease,
                scrollTrigger: {
                    trigger: element,
                    start: triggerStart,
                    toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
                },
            }
        );
    }, { scope: ref });

    return (
        <div ref={ref} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
};

export default GsapScrollReveal;
