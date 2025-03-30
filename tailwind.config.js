/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/views/**/*.vue',
        './src/views/*.vue',
        './src/components/*.vue',
        './src/components/**/*.vue',
        './src/views/*.vue',
        './src/views/**/*.vue',
        './src/layouts/*.vue',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ], 
    plugins: [],
    theme: {
        extend:{
            colors: {
                primary: {
                    50: '#f3faf6',
                    100: '#e2f6eb',
                    200: '#c7ebd7',
                    300: '#9adbb8',
                    400: '#67c191',
                    500: '#42a570',
                    600: '#31885a',
                    700: '#2a6b48',
                    800: '#25563d',
                    900: '#204734',
                    950: '#123524'
                },
            }
        }
    }
};