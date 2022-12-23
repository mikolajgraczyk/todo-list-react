import "./style.css";

const Buttons = ({ tasks, hideDone, hideDoneTasks, doneAllTasks}) => {
    return (
        <div className="buttons">
            <button
                className={`buttons__button ${tasks.length === 0 ? "hidden" : ""}`}
                onClick={hideDoneTasks}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button >

            <button
                className={`buttons__button ${tasks.length === 0 ? "hidden" : ""}`}
                onClick={doneAllTasks}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button >
        </div>
    );
};

export default Buttons;