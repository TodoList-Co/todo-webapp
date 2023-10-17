import styled from "styled-components";

export const StyledButton = styled.button`
	white-space: nowrap;
	font-size: 1rem;
	padding: 0.75rem 1.5rem;
	border-radius: 5px;
	outline: none;
	border: none;
	background: var(--light-primary);
	color: white;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		background: var(--primary);
	}

	&:focus {
		box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.15);
	}
`;
