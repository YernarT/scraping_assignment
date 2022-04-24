import { useVh } from '@/hooks';

import { SafeAreaContainer } from './style';

/**
 * 正确 100vw 100vh 的盒子
 * @param {JSX.Element} children 合法 React 组件
 * @returns {JSX.Element} 安全区容器
 */
export default function SafeArea({
	children,
	...props
}: {
	children: JSX.Element;
}) {
	const vh = useVh();

	return (
		<SafeAreaContainer vh={vh} {...props}>
			{children}
		</SafeAreaContainer>
	);
}
