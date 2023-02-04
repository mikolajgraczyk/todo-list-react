import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import ExampleTasksButton from "./ExampleTasksButton";

const Tasks = () => {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;