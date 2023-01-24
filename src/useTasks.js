import { useEffect, useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const doneAllTasks = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
    };

    const addNewTask = (content) => {
        if (content === "") {
            return;
        };

        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                time: getTimeTaskAdded(),
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);

    };

    const getTimeTaskAdded = () => {
        const date = new Date();
        const time = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
        
        return `${time} `;
    };


    return {
        tasks,
        toggleTaskDone,
        removeTask,
        doneAllTasks,
        addNewTask,
    };
};