import { takeEvery, takeLatest, call, put, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setExampleTasks, selectTasks, toggleLoadingExampleTasksButton } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
        try {
            yield put(toggleLoadingExampleTasksButton());
            yield delay(1000);
            const exampleTasks = yield call(getExampleTasks);
            yield put(setExampleTasks(exampleTasks));
            yield put(toggleLoadingExampleTasksButton());
        } catch (error) {
            yield call(alert, "Coś poszło nie tak");
            yield put(toggleLoadingExampleTasksButton());
        }
    };

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};