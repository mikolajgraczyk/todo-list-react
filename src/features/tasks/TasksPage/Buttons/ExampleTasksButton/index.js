import { useDispatch, useSelector } from "react-redux";
import { Button, Wrapper } from "../buttonsStyled";
import { fetchExampleTasks, selectLoadingExampleTasksButton } from "../../../tasksSlice";

const ExampleTasksButton = () => {
    const loadingExampleTasksButton = useSelector(selectLoadingExampleTasksButton);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loadingExampleTasksButton}
            >
                {loadingExampleTasksButton ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </Wrapper>
    );
};

export default ExampleTasksButton;