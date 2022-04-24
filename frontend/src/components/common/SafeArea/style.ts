import styled from 'styled-components';

export const SafeAreaContainer = styled.div<{ vh: number | null }>`
	width: 100vw;
	height: ${({ vh }) => {
		if (vh) {
			return `${100 * vh}px`;
		} else {
			return '100vh';
		}
	}};
`;
