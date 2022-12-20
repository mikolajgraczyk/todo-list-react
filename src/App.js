import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {
    id: 1,
    content: "Przejść na reacta",
    done: false,
  },
  {
    id: 2,
    content: "Zjeść obiad",
    done: true,
  },
];

const hideDone = false;
let sorted = false;

function App() {
  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<List tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} sorted={sorted} />}
      />
    </Container>
  );
}

export default App;