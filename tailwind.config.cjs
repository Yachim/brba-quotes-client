/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	    "./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			accent: "hsl(143deg, 100%, 24%)",
			bg: "hsl(143deg, 100%, 99.5%)",
			text: "hsl(143deg, 100%, 3%)"
		},
		extend: {
			gridTemplateAreas: {
				layout: [
					"img quote",
					"img author"
				]
			},
			gridTemplateColumns: {
				layout: "1fr 40ch"
			},
			gridTemplateRows: {
				layout: "min-content 3rem"
			}
		},
  	},
  	plugins: [
		require('@savvywombat/tailwindcss-grid-areas')
	],
}
