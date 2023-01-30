import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { ButtonsSection, Button } from "./styled";

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <ButtonsSection hidden={tasks.length === 0}>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>

            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsSection>
    );
};

export default Buttons;