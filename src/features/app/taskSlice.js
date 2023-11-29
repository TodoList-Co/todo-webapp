import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setTasks(state, action) {
			state.tasks = action.payload;
		},
		addTask(state, action) {
			state.tasks = [action.payload, ...state.tasks];
		},
		toggleComplete(state, action) {
			const targetTodo = state.tasks.find(
				(task) => task.id === action.payload
			);
			const otherTodos = state.tasks.filter(
				(task) => task.id !== action.payload
			);
			targetTodo.complete = !targetTodo.complete;
			state.tasks = [targetTodo, ...otherTodos];
		},
		deleteTodo(state, action) {
			const filteredTodos = state.tasks.filter(
				(task) => task.id !== action.payload
			);
			state.tasks = filteredTodos;
		},
	},
});

export const { setTasks, addTask, toggleComplete, deleteTodo } =
	tasksSlice.actions;
export const getTasks = (state) => state.tasks.tasks;
export default tasksSlice.reducer;
