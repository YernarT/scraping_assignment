import type { RouteProps } from '#/routes';

import commonRoutes from './common-routes';
import astanaSpravker from './astana_spravker';

const routes: RouteProps[] = [...commonRoutes, ...astanaSpravker];

export default routes;
