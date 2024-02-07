/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			honk: ['Honk', 'sans-serif'],
		},
		extend: {
			colors: {
				'text': 'hsl(325, 94%, 6%)',
				'background': 'hsl(330, 100%, 98%)',
				'primary': 'hsl(332, 95%, 51%)',
				'secondary': 'hsl(23, 95%, 71%)',
				'accent': 'hsl(40, 96%, 65%)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
