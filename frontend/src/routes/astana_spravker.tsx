import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { sleep } from '@/utils';

import { CommonLoading } from '@/loading';

const astanaSpravker: RouteProps[] = [
	{
		path: ['/astana_spravker/kovorking'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/astana_spravker/Kovorking');
		}),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest'],
		title: 'Коворкинги | Scraping',
	},
	{
		path: ['/astana_spravker/shop'],
		component: lazy(() => import('@/pages/astana_spravker/Shop')),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest'],
		title: 'Магазины | Scraping',
	},
	{
		path: ['/astana_spravker/restaurant'],
		component: lazy(() => import('@/pages/astana_spravker/Restaurant')),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest'],
		title: 'Рестораны | Scraping',
	},
];

export default astanaSpravker;
