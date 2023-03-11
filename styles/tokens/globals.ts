import { config } from 'process'

const globals = {
	global: {
		'html, body': {
			lineHeight: '1.4',
			backgroundColor: 'white',
			color: 'black',
			fontFamily: 'sans-serif',
			fontSize: '16px',
			fontWeight: '700',
		},
		svg: {
			display: 'block',
		},
		p: {
			marginBottom: 4,
		},
		'ol, ul': {
			marginLeft: 4,
			marginBottom: 4,
		},
	},
}

export default globals
