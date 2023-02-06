import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TaskDetails } from "./styled";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={<TaskDetails>
          <span>
            <strong>Ukończono: </strong>
            {task.done ? "Tak" : "Nie"}
          </span>
          <span>
            <strong>Dodano: </strong>
            {task.time.day} o godzinie {task.time.hour}
          </span>
        </TaskDetails>}
      />
    </Container>
  );
}

export default TaskPage;