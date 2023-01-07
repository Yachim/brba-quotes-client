/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	    "./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			accent: "hsl(143deg, 100%, 24%)",
			siteBg: "hsl(143deg, 100%, 99.5%)",
			panelBg: "hsl(143deg, 100%, 98%)",
			footerBg: "hsl(143deg, 15%, 90%)",
			text: "hsl(143deg, 100%, 3%)"
		},
		extend: {
			gridTemplateAreas: {
				layout: [
					"img quote",
					"img author"
				],
				layoutMobile: [
					"img",
					"quote",
					"author"
				]
			},
			gridTemplateColumns: {
				layout: "1fr 40ch",
				layoutMobile: "1fr"
			},
			gridTemplateRows: {
				layout: "min-content 3rem",
				layoutMobile: "min-content 1fr 3rem"
			}
		},
  	},
  	plugins: [
		require('@savvywombat/tailwindcss-grid-areas')
	],
}
