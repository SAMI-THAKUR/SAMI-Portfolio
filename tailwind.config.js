/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ['./*'],
  theme: {
    extend: {     
      gap: {
        'l': '200px',
        's': '100px',
        'm': '50px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'background': '#75C2F6',
        'darkbg': '#21262d',
        'secondary': '#AEE2FF',
        'dsecondary': '#212A3E',
        'htext': '#010A43',
        'dhtext':'#00ffff',
        'text': '#333333',
        'dtext':'#d6d6d6',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace'],
        'robo' : ['Roboto Mono','ui-monospace', 'system-ui'],
        'roboto': ['Roboto Slab', 'ui-serif', 'system-ui'],
        'name':['Merienda','ui-cursive','system-ui'],
        'hand':['Patrick Hand','ui-cursive','system-ui'],
        'play':['ADLaM Display', 'cursive','system-ui'],
      },
    },

  

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        
        'md': '950px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1200px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'heading':'70px',
        'mheading':'65px',
        'subheading':'43px',
        'msubheading':'37px',
        'icon':'28px',
        'para':'22px',
        'mpara':'21px',
        'small':'19px',
      },
  plugins: [],
}
}
