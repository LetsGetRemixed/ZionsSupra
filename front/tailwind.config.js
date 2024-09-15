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
				logo: ['"Dancing Script"', 'cursive'], // For the logo
				header: ['"Bodoni Moda"', 'serif'], // For the headers
				body: ['"Lora"', 'serif'], // For the body text
			  },
			},
		  },
	  plugins: [],
	};
	


