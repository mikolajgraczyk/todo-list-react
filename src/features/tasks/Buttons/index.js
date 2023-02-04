import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, selectIsAllDone, selectAreTasksEmpty, fetchExampleTasks } from "../tasksSlice";
import { ButtonsSection, Button } from "./styled";

const Buttons = () => {
    const { hideDone } = useSelector(selectTasksState);
    const isAllDone = useSelector(selectIsAllDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    return (
        <ButtonsSection>
            {!areTasksEmpty &&
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Button>

                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isAllDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            }
        </ButtonsSection>
    );
};

export default Buttons;