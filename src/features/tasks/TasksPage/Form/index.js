import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { FormSection, Button } from "./styled";
import { Input } from "../Input/styled";

const Form = () => {
    const [newTaskContent, setTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const getTimeTaskAdded = () => {
        const date = new Date();
        const hour = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
        const day = date.toLocaleDateString('pl', { weekday: 'long', month: 'long', day: 'numeric' });
        return {
            hour,
            day,
        };
    };

    const onFromSubmit = (event) => {
        const {
            hour,
            day,
        } = getTimeTaskAdded();

        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim()
        if (!trimmedNewTaskContent) {
            return;
        };

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            time: {
                hour: hour,
                day: day,
            },
            id: nanoid(),
        }));

        setTaskContent("");
        focusInput();
    };


    const onChange = ({ target }) => {
        setTaskContent(target.value);
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