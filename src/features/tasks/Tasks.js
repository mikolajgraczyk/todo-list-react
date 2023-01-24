import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

const Tasks = () => {
  const [hideDone, setHideDone] = useState(false);

  const hideDoneTasks = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    toggleTaskDone,
    removeTask,
    doneAllTasks,
    addNewTask,
  } = useTasks();

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
          <TaskList
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

export default Tasks;