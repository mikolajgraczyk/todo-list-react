import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {

  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  const hideDoneTasks = () => {
    setHideDone(hideDone => !hideDone);
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      };
      return task;
    }));
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const doneAllTasks = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const timeTaskAdded = () => {
    const date = new Date();
    const time = date.toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"});
    return `${time}`;
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
        time: timeTaskAdded(),
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]
    );
  };

  // JSON.parse(localStorage.getItem("tasks"))

  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj zadanie"
        body={<Form
          addNewTask={addNewTask}
        />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            hideDoneTasks={hideDoneTasks}
            doneAllTasks={doneAllTasks}
          />}
      />
    </Container>
  );
}

export default App;