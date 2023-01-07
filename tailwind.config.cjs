/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	    "./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateAreas: {
				layout: [
					"img quote",
					"author quote"
				]
			},
			gridTemplateColumns: {
				layout: "1fr 40ch"
			},
			gridTemplateRows: {
				layout: "min-content 1.5rem"
			}
		},
  	},
  	plugins: [
		require('@savvywombat/tailwindcss-grid-areas')
	],
}
