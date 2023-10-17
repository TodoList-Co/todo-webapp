import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { StyledSearchBar } from "./SearchBar.styled";

const SearchBar = ({ search, setSearch, handleSubmit }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit();
	};

	return (
		<StyledSearchBar onSubmit={onSubmit}>
			<Input
				id="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Create a new task..."
			/>
			<Button>Add Task</Button>
		</StyledSearchBar>
	);
};

export default SearchBar;
