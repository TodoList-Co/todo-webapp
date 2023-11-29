import Task from "../task/Task";
import { StyledTaskList } from "./TaskList.styled";

const TaskList = ({ tasks, onClick }) => {
	return (
		<StyledTaskList>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</StyledTaskList>
	);
};

export default TaskList;
