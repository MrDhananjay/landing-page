import React, { useEffect, useState } from 'react';

interface TypewriterProps {
    texts: string[];
    speed?: number;
    className?: string;
    pause?: number;
    onNext?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 50, className = '', pause = 2000, onNext }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const currentText = texts[textIndex % texts.length];

    useEffect(() => {
        if (index < currentText.length) {
            const timeoutId = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        } else {
            // Loop functionality
            const resetTimeout = setTimeout(() => {
                setIndex(0);
                setTextIndex((prev) => prev + 1);
                if (onNext) onNext();
            }, pause);
            return () => clearTimeout(resetTimeout);
        }
    }, [index, currentText.length, speed, pause, onNext]);

    return (
        <span className={className}>
            {currentText.split('').map((char, i) => (
                <span
                    key={`${textIndex}-${i}`}
                    className={`transition-all duration-300 ease-out inline-block ${i < index
                        ? 'opacity-100 blur-0 translate-y-0'
                        : 'opacity-0 blur-sm translate-y-1'
                        }`}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
};

export default Typewriter;
