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
		path: '/404',
		component: lazy(() => import('@/pages/common/FeedbackPage')),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest'],
		title: 'Обратная связь | Scraping',
	},
	{
		path: '/404',
		component: lazy(() => import('@/pages/common/PageNotFoundPage')),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest'],
		title: '404 | Scraping',
	},
];

export default commonRoutes;
