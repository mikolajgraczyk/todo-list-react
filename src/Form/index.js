import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setTaskContent] = useState("");

    const onFromSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent);
    };

    const onChange = ({ target }) => {
        setTaskContent(newTaskContent => target.value);
    };

    return (
        <form
            className="form"
            onSubmit={onFromSubmit}
        >
            <input
                className="form__input"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={onChange}
            />
            <button
                className="form__button"
            >
                Dodaj zadanie
            </button>
        </form>
    );
};

export default Form;