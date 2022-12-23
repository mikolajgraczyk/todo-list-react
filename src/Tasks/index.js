import "./style.css";

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask, }) => {
    return (
        <ul className="list">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className={`${hideDone && task.done ? "hidden" : ""} list__element`}
                >
                    <button
                        className="list__button list__button--done"
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </button>

                    <span
                        className={task.done ? "list__element--done" : ""}
                    >
                        {task.content}
                    </span>

                    <span
                        className="list__time"
                    >
                        Dodano o godzinie {task.time}
                    </span>

                    <button
                        className="list__button list__button--remove"
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Tasks;