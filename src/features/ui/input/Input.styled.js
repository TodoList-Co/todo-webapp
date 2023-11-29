import styled from "styled-components";

export const StyledInput = styled.input`
	font-size: 1rem;
	padding: 0.75rem 1rem;
	border-radius: 5px;
	outline: none;
	border: 1px solid var(--gray);
	transition: 0.25s all ease-in-out;

	&:active,
	&:focus {
		border-color: var(--light-primary);
	}
`;
