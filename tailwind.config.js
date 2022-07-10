/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                blink: {
                    "0%, 49%": {
                        opacity: "0"
                    },
                    "50%, 100%": {
                        opacity: "1"
                    }
                },
                scale: {
                    "0%": {
                        transform: "scale(0)"
                    },
                    "100%": {
                        transform: "scale(1)"
                    }
                },
                title: {
                    "0%": {
                        transform: "scale(0,1)"
                    },
                    "75%": {
                        transform: "scale(1.5,1)"
                    },
                    "100%": {
                        transform: "scale(1,1)"
                    }
                }
            }
        }
    },
    plugins: []
}
