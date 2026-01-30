import React, { useRef, useEffect, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface GsapFloatProps {
    children: ReactNode;
    className?: string;
    /** Amplitude of the float in pixels (default: 10) */
    amplitude?: number;
    /** Duration of one float cycle in seconds (default: 3) */
    duration?: number;
    /** Delay before animation starts in seconds (default: 0) */
    delay?: number;
}

const GsapFloat: React.FC<GsapFloatProps> = ({
    children,
    className = '',
    amplitude = 10,
    duration = 3,
    delay = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Create the floating animation
        const tl = gsap.timeline({ repeat: -1, yoyo: true, delay });

        tl.to(element, {
            y: amplitude,
            duration: duration / 2,
            ease: 'sine.inOut',
        }).to(element, {
            y: -amplitude,
            duration: duration / 2,
            ease: 'sine.inOut',
        });

        return () => {
            tl.kill();
        };
    }, [amplitude, duration, delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default GsapFloat;
