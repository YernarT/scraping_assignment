import type { LazyExoticComponent } from 'react';

export type allowdRole = 'guest';

export interface RouteProps {
	path: string | string[];
	component: LazyExoticComponent<() => JSX.Element>;
	fallback: JSX.Element;
	auth: boolean;
	role: allowdRole[];
	title?: string;
}
