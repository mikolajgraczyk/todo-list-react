import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: id }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: id }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks.splice(index, 1);
        },
        setAllDone: state => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
        fetchExampleTasks: () => { },
        setExampleTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setExampleTasks } = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsAllDone = state => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;
