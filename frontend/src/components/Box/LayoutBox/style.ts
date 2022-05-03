import styled from 'styled-components';

export const LayoutBoxStyledBox = styled.div`
	height: inherit;
	position: relative;

	.content-wrap {
		height: calc(100% - 64px);
		display: flex;

		.content {
			flex-grow: 1;
			overflow: hidden auto;

			padding: 16px 16px 0 16px;
		}
	}
`;
