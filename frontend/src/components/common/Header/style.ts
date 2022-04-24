import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderStyledBox = styled(Header)`
	.title {
		${({ theme }) => theme.typography.title.apply()}
		color: #fff;

		margin: 0;
	}
`;
