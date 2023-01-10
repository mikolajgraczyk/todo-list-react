import { ButtonsSection, Button } from "./styled";

const Buttons = ({ tasks, hideDone, hideDoneTasks, doneAllTasks }) => {
    return (
        <ButtonsSection hidden={tasks.length === 0}>
            <Button onClick={hideDoneTasks}>
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>

            <Button
                onClick={doneAllTasks}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsSection>
    );
};

export default Buttons;