/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040508',
          900: '#07090e',
          850: '#0c0f18',
          800: '#0f131d',
          700: '#161b29',
          600: '#1e2436',
        },
        brand: {
          cyan: '#00f2fe',
          electric: '#4facfe',
          emerald: '#10b981',
          gold: '#f59e0b',
          whatsapp: '#25d366',
          whatsappDark: '#128c7e',
        },
      },
      fontFamily: {
        heading: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(0, 242, 254, 0.18)',
        'glow-lg': '0 0 40px rgba(0, 242, 254, 0.3)',
        'glow-emerald': '0 0 25px rgba(16, 185, 129, 0.25)',
        'glow-whatsapp': '0 4px 20px rgba(37, 211, 102, 0.35)',
      },
    },
  },
  plugins: [],
};
