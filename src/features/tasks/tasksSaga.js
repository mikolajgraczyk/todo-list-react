import { takeEvery, call, put, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setExampleTasks, selectTasks } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
        try {
            const exampleTasks = yield call(getExampleTasks);
            yield put(setExampleTasks(exampleTasks));
        } catch (error) {
            yield call(alert, "Coś poszło nie tak");
        }
    };

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};