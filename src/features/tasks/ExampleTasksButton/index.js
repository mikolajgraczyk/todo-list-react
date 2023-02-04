import { useDispatch } from "react-redux";
import { Button, ButtonSection } from "./styled";
import { fetchExampleTasks } from "../tasksSlice";

const ExampleTasksButton = () => {

    const dispatch = useDispatch();

    return (
        <ButtonSection>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </ButtonSection>
    );
};

export default ExampleTasksButton;