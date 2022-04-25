import styled from 'styled-components';

export const LayoutBoxStyledBox = styled.div`
	height: inherit;

	.content-wrap {
		height: calc(100% - 64px);
		display: flex;

		.content {
			flex-grow: 1;
			overflow: hidden auto;

			padding: 20px;
			padding-bottom: 0;
		}
	}
`;
