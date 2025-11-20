/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#646cff',
                secondary: '#535bf2',
                dark: '#0f172a',
                light: '#e2e8f0',
            },
        },
    },
    plugins: [],
}
