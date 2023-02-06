import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import { List, Item, Content, Time, Button, StyledLink } from "./styled";
import searchQueryParamName from "../queryParameters/searchQueryParamName";
import { useQueryParameter } from "../queryParameters/useQueryParameter";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button done onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>
                            {task.content}
                        </StyledLink>
                    </Content>
                    <Time>
                        Dodano o godzinie {task.time.hour}
                    </Time>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;