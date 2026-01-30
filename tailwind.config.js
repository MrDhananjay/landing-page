/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-accent': '#212D39',
                'orange-primary': '#f4a940',
                'text-dark': '#2b2e34',
                'text-light': '#a4adbf',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
            keyframes: {
                typing: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
                blink: {
                    '50%': { borderColor: 'transparent' },
                },
                vibrate: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '25%': { transform: 'translateX(-2px)' },
                    '50%': { transform: 'translateX(2px)' },
                    '75%': { transform: 'translateX(-2px)' },
                    '50%': { transform: 'translateX(2px)' },
                    '75%': { transform: 'translateX(-2px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                typing: 'typing 2s steps(40, end) infinite alternate, blink .75s step-end infinite, merlin 2s ease-in-out infinite alternate',
                merlin: {
                    '0%': { filter: 'blur(3px)', opacity: '0.5' },
                    '100%': { filter: 'blur(0px)', opacity: '1' },
                },
                vibrate: 'vibrate 0.3s linear infinite both',
                fadeInUp: 'fadeInUp 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
}
