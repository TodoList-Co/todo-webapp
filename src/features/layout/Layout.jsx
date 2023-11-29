import { useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./Layout.styled";
import SearchBar from "../searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { addTask, getTasks } from "../app/taskSlice";
import uuid from "react-uuid";

const Layout = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(getTasks);
	const [search, setSearch] = useState("");

	const handleSubmit = () => {
		if (!search) return;
		if (search.length < 200) {
			dispatch(
				addTask({
					id: uuid(),
					text: search,
					complete: false,
				})
			);
		} else {
			alert("Unable to add task: task must be less than 200 characters");
		}
	};

	return (
		<StyledLayout>
			<div className="row">
				<h1>{`Hello User, You Have ${tasks.length} Tasks!`}</h1>
			</div>
			<hr />
			<SearchBar
				search={search}
				setSearch={setSearch}
				handleSubmit={handleSubmit}
			/>
			<Outlet />
		</StyledLayout>
	);
};

export default Layout;
