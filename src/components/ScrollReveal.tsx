import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string; // Additional classes for the wrapper
    threshold?: number; // 0 to 1, how much of item must be visible
    delay?: string; // CSS delay string e.g. "0.2s"
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = "",
    threshold = 0.1,
    delay = "0s"
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`${className} transition-opacity duration-1000 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: delay }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
