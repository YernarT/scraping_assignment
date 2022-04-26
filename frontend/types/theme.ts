import type {
	FlattenInterpolation,
	ThemeProps,
	DefaultTheme,
} from 'styled-components';

import 'styled-components';

type apply = () => FlattenInterpolation<ThemeProps<DefaultTheme>>;

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			mode: 'light' | 'dark';
			primary: string;
			secondary: string;
			error: string;
			warning: string;
			success: string;
			disabled: string;
		};

		shape: {
			borderRadius: string;
			borderColor: string;

			iconAppearance: {
				color: string;
				fontSize: string;

				apply: apply;
			};
		};

		zIndex: {
			sider: number;
		};

		typography: {
			title: {
				fontWeight: number;
				fontSize: string;
				color: string;

				whiteSpace: string;

				apply: apply;
			};

			text: {
				fontWeight: number;
				fontSize: string;
				color: string;

				apply: apply;
			};
		};
	}
}
