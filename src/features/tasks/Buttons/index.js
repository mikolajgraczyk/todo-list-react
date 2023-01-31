import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, selectIsAllDone } from "../tasksSlice";
import { ButtonsSection, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const isAllDone = useSelector(selectIsAllDone);
    const dispatch = useDispatch();

    console.log(isAllDone);

    return (
        <ButtonsSection hidden={tasks.length === 0}>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>

            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={isAllDone}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsSection>
    );
};

export default Buttons;