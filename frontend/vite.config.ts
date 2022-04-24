import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { resolve } from 'path';

function pathResolve(dir: string): string {
	return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: '@',
				replacement: pathResolve('src') + '/',
			},
			{
				find: '#',
				replacement: pathResolve('types') + '/',
			},
		],
	},
	plugins: [
		react(),
		vitePluginImp({
			optimize: true,
			libList: [
				{
					libName: 'antd',
					libDirectory: 'es',
					style: name => `antd/es/${name}/style`,
				},
			],
		}),
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: {
					'@text-color': 'rgba(0, 0, 0, 0.85)', // major text color
					'@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
					'@border-radius-base': '0px', // major border radius
					'@border-color-base': '#1890ff', // major border color
				},
			},
		},
	},
	server: {
		host: '0.0.0.0',
		port: 3030,
	},
});
