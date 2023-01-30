import React, { useState, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { FormSection, Input, Button } from "./styled";

const Form = () => {

    const [newTaskContent, setTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const getTimeTaskAdded = () => {
        const date = new Date();
        const time = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
        
        return `${time} `;
    };

    const onFromSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim()
        if (!trimmedNewTaskContent) {
            return;
        };

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            time: getTimeTaskAdded(),
            id: nanoid(),
        }));

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