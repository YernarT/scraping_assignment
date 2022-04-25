import styled, { css } from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

const siderMenuStyle = css`
	.ant-menu-title-content {
		white-space: pre-wrap;
		line-height: 1.1575;

		user-select: none;
	}
`;

export const SiderStyledBox = styled(Sider)`
	background: #fff;

	@media screen and (max-width: 992px) {
		display: none;
	}

	${siderMenuStyle}
`;

export const MiniSiderStylexBox = styled.aside<{ siderCollapsed: boolean }>`
	display: none;
	width: calc(100% - 4px);

	position: absolute;
	top: 64px;
	left: 0;

	/* 此处使用 transform属性 会影响 trigger button 的定位 */

	@media screen and (max-width: 992px) {
		display: flex;
	}

	.sider-menu-trigger {
		position: fixed;
		right: 24px;
		bottom: 36px;
	}

	.sider-menu {
		${siderMenuStyle}

		transform: scaleY(${({ siderCollapsed }) => (siderCollapsed ? '100%' : 0)});
		transform-origin: 0 0;

		box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
			0 9px 28px 0px rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03);

		transition: transform 0.4s ease;
	}
`;
