import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./features/layout/Layout";
import Home from "./pages/Home";
import { useEffect } from "react";
import getTasks from "./features/api/getTasks";
import { useDispatch } from "react-redux";
import { setTasks } from "./features/app/taskSlice";

const App = () => {
	const dispatch = useDispatch();

	const fetchTasks = async () => {
		try {
			const response = await getTasks();
			dispatch(setTasks(response.data));
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default App;
