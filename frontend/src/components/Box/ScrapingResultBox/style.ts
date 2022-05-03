import styled from 'styled-components';

export const ScrapingResultBoxStyled = styled.div`
	.toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: 666px) {
			flex-direction: column;
			gap: 20px;
			align-items: flex-start;

			.pagination {
				position: relative;
				right: 14px;
			}
		}

		.filter,
		.pagination {
			flex-grow: 1;
		}

		.filter {
			.ant-typography {
				margin-bottom: 0;
			}
		}

		.pagination {
			justify-content: flex-end;

			.ant-input-number-input {
				width: 80px;
			}
		}
	}

	.data-panel {
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.download-csv {
				line-height: 1.5715;
			}
		}
	}
`;
