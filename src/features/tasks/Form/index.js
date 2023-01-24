import React, { useState, useRef } from "react";
import { FormSection, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setTaskContent] = useState("");

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFromSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim()
        if (!trimmedNewTaskContent) {
            return;
        };
        addNewTask(trimmedNewTaskContent);
        setTaskContent("");
        focusInput();
    };

    const onChange = ({ target }) => {
        setTaskContent(newTaskContent => target.value);
    };

    return (
        <FormSection onSubmit={onFromSubmit}>
            <Input
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={onChange}
                ref={inputRef}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormSection>
    );
};

export default Form;