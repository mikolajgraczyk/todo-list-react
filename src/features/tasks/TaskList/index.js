import { List, Item, Content, Time, Button } from "./styled";


const TaskList = ({ tasks, hideDone, toggleTaskDone, removeTask }) => {
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button done onClick={() => toggleTaskDone(task.id)}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Time>
                        Dodano o godzinie {task.time}
                    </Time>
                    <Button remove onClick={() => removeTask(task.id)}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;