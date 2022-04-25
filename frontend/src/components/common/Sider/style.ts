import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

export const SiderStyledBox = styled(Sider)`
	background: #fff;
	
	.ant-menu-title-content {
		white-space: pre-wrap;
		line-height: 1.1575;

		user-select: none;
	}
`;
