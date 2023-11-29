import styled from "styled-components";

export const StyledTask = styled.div`
	border: 1px solid var(--light-gray);
	border-radius: 5px;
	padding: 1rem;
	transition: all 0.2s ease-in-out;
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: space-between;

	svg {
		width: 32px;
		height: 32px;
		cursor: pointer;
		color: var(--gray);
		transition: all 0.2s ease-in-out;

		&.complete {
			color: var(--primary);
		}

		&.deleteIcon {
			&:hover {
				color: var(--primary);
			}
		}
	}
`;
