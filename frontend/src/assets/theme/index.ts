import type { DefaultTheme } from 'styled-components';

import { css } from 'styled-components';

const theme: DefaultTheme = {
	palette: {
		mode: 'light',
		primary: '#1890ff',
		secondary: 'rgba(150, 150, 150, 0.8)',
		error: '#f5222d',
		warning: '#faad14',
		success: '#52c41a',
		disabled: 'rgba(255, 255, 255, 0.35)',
	},
	shape: {
		borderRadius: '0px',
		borderColor: '#1890ff',

		iconAppearance: {
			color: '#1890ff',
			fontSize: '1.4rem',

			apply: () => css`
				color: #1890ff;
				font-size: 1.4rem;
			`,
		},
	},
	typography: {
		title: {
			fontWeight: 600,
			fontSize: '1.15rem',
			color: 'rgba(0, 0, 0, 0.85)',

			whiteSpace: 'nowrap',

			apply: () => css`
				font-weight: 600;
				font-size: 1.15rem;
				color: rgba(0, 0, 0, 0.85);

				white-space: nowrap;
			`,
		},
		text: {
			fontWeight: 400,
			fontSize: '0.98rem',
			color: 'rgba(0, 0, 0, 0.85)',

			apply: () => css`
				font-weight: 400;
				font-size: 0.98rem;
				color: rgba(0, 0, 0, 0.85);
			`,
		},
	},
};

export default theme;
