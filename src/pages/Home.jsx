import TaskList from "../features/tasks/taskList/TaskList";
import { getTasks } from "../features/app/taskSlice";
import { useSelector } from "react-redux";

const Home = () => {
	const tasks = useSelector(getTasks);

	return (
		<>
			<TaskList
				tasks={[
					...tasks.filter((task) => task.complete === false),
					...tasks.filter((task) => task.complete === true),
				]}
			/>
		</>
	);
};

export default Home;
