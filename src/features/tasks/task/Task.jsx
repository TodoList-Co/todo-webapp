import { useDispatch } from "react-redux";
import { StyledTask } from "./Task.styled";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import { deleteTodo, toggleComplete } from "../../app/taskSlice";

const Task = ({ task }) => {
	const dispatch = useDispatch();

	const handleToggleComplete = () => {
		dispatch(toggleComplete(task.id));
	};
	const handleDeleteTodo = () => {
		dispatch(deleteTodo(task.id));
	};

	return (
		<StyledTask>
			<div className="row">
				{task.complete ? (
					<MdCheckBox
						className="complete"
						onClick={handleToggleComplete}
					/>
				) : (
					<MdCheckBoxOutlineBlank onClick={handleToggleComplete} />
				)}
				{task?.text}
			</div>
			<MdDelete onClick={handleDeleteTodo} className="deleteIcon" />
		</StyledTask>
	);
};

export default Task;
