import styled from "styled-components";

export const StyledLayout = styled.main`
	padding: 4rem 6rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	hr {
		border: none;
		height: 1px;
		background-color: var(--light-gray);
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
