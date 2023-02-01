import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
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
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export const selectIsAllDone = state => state.tasks.tasks.every(({ done }) => done === true);
export default tasksSlice.reducer;
