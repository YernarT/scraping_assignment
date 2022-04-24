import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider as AntdConfigProvider } from 'antd';
import ru_RU from 'antd/lib/locale/ru_RU';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { RouteGuard, CssBaseLine } from '@/components/common';

import theme from '@/assets/theme';
import routes from '@/routes';

function App() {
	return (
		// styled 主题
		<StyledThemeProvider theme={theme}>
			<AntdConfigProvider locale={ru_RU}>
				<BrowserRouter>
					{/* 全局样式 */}
					<CssBaseLine />
					{/* 路由守卫 */}
					<RouteGuard routes={routes} />
				</BrowserRouter>
			</AntdConfigProvider>
		</StyledThemeProvider>
	);
}

export default App;
