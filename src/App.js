import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {

  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([]);

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

  const addZero = (digit) => {
    if (digit < 10) {
      return `0${digit}`;
    };
    return digit;
  };

  const timeTaskAdded = () => {
    const date = new Date();
    const minute = addZero(date.getMinutes());
    const hour = addZero(date.getHours());
    return `${hour}:${minute}`;
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
            timeTaskAdded={timeTaskAdded}
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