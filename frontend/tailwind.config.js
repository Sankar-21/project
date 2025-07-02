module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enables dark theme with 'dark' class
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        background: '#1F2937', // dark gray
        surface: '#111827', // darker surface
      },
    },
  },
  plugins: [],
};
