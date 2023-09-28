module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      sm: '576px',
      md: '768px',
      md: '960px',
      lg: '1024px',
      xl: '1440px',
      xl: '1280px',
      
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./img/1.png')",
      },
    },
  },
  plugins: [],
};
