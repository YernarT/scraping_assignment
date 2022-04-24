import type { RouteProps } from '#/routes';

import { memo, Suspense } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { useTitle } from 'ahooks';

export default memo(function RouteGuard({ routes }: { routes: RouteProps[] }) {
	const { pathname } = useLocation();

	const targetConfig = routes.find(routeConfig => {
		if (Array.isArray(routeConfig.path)) {
			return routeConfig.path.includes(pathname);
		}

		return routeConfig.path === pathname;
	});

	// 修改 <title></title>
	const siteTitle = targetConfig?.title || document.title;
	useTitle(siteTitle, { restoreOnUnmount: true });

	// Registered route
	if (targetConfig) {
		// Everything is ok
		return (
			<Suspense fallback={targetConfig.fallback}>
				<Route
					exact
					path={targetConfig.path}
					component={targetConfig.component}
				/>
			</Suspense>
		);
	}

	// Unregistered route
	return <Redirect to="/404" />;
});
