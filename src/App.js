import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
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