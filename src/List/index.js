import "./style.css";

const List = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li
            className={`${props.hideDone && task.done ? "hidden" : ""} list__element`}
            >
                <button className="list__button list__button--done">{task.done ? "✔" : ""}</button>
                <span className={task.done ? "list__element--done" : ""}>
                    {task.content}</span>
                <button className="list__button list__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default List;