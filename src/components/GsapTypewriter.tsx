import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GsapTypewriterProps {
    text: string;
    className?: string;
    /** Duration per character in seconds (default: 0.05) */
    charDuration?: number;
    /** Delay before animation starts (default: 0) */
    delay?: number;
    /** ScrollTrigger start position (default: "top 80%") */
    triggerStart?: string;
    /** Show cursor during typing (default: true) */
    showCursor?: boolean;
}

const GsapTypewriter: React.FC<GsapTypewriterProps> = ({
    text,
    className = '',
    charDuration = 0.05,
    delay = 0,
    triggerStart = 'top 80%',
    showCursor = true,
}) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const textElement = textRef.current;
        const cursorElement = cursorRef.current;

        if (!container || !textElement) return;

        // Initially hide text
        textElement.textContent = '';

        // Create ScrollTrigger for the typewriter effect
        const scrollTrigger = ScrollTrigger.create({
            trigger: container,
            start: triggerStart,
            onEnter: () => {
                if (hasAnimated) return;
                setHasAnimated(true);

                // Typewriter animation
                const chars = text.split('');
                let currentText = '';

                const tl = gsap.timeline({ delay });

                // Animate cursor blinking
                if (cursorElement && showCursor) {
                    gsap.to(cursorElement, {
                        opacity: 0,
                        duration: 0.5,
                        repeat: -1,
                        yoyo: true,
                        ease: 'steps(1)',
                    });
                }

                // Type each character
                chars.forEach((char) => {
                    tl.to({}, {
                        duration: charDuration,
                        onComplete: () => {
                            currentText += char;
                            textElement.textContent = currentText;
                        },
                    });
                });

                // Hide cursor after typing is complete
                if (cursorElement && showCursor) {
                    tl.to(cursorElement, {
                        opacity: 0,
                        duration: 0.3,
                        delay: 0.5,
                    });
                }
            },
        });

        return () => {
            scrollTrigger.kill();
        };
    }, [text, charDuration, delay, triggerStart, showCursor, hasAnimated]);

    return (
        <span ref={containerRef} className={className}>
            <span ref={textRef}></span>
            {showCursor && (
                <span
                    ref={cursorRef}
                    className="inline-block w-[0.1em] h-[1em] bg-current ml-[0.05em] align-middle"
                    style={{ verticalAlign: 'baseline' }}
                />
            )}
        </span>
    );
};

export default GsapTypewriter;
