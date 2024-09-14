	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./src/**/*.{js,jsx,ts,tsx}",
	  ],
	  theme: {
	    extend: {
			colors: {
			  primaryRed: '#e50914',
			  darkRed: '#b30610',
			  black: '#0b0b0b',
			  darkGray: '#1c1c1e',
			  lightGray: '#d1d1d1',
			  white: '#ffffff',
			},
			fontFamily: {
			  header: ['"Dancing Script"', 'cursive'],
			  body: ['"Roboto"', 'sans-serif'],
			},
		  },
		},
	  plugins: [],
	};
	


