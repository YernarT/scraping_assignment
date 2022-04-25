import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { sleep } from '@/utils';

import { CommonLoading } from '@/loading';

const commonRoutes: RouteProps[] = [
	{
		path: ['/', '/apidoc'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/common/APIDocPage');
		}),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest'],
		title: 'API Doc | Scraping',
	},
	{
		path: '/feedback',
		component: lazy(() => import('@/pages/common/FeedbackPage')),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest'],
		title: 'Обратная связь | Scraping',
	},
];

export default commonRoutes;
