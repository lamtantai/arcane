/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dfdff2',
        secondary: '#000000',
        tertiary: '#f1ff7e',
        background: '#05060f',
      },

      fontFamily: {
        roobert: ['var(--font-roobert)'],
        zentry: ['var(--font-zentry)'],
        manuka: ['var(--font-manuka)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
