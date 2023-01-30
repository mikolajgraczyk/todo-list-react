import styled from "styled-components";

export const FormSection = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;
    padding: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    transition: 0.5s;

    &:hover{
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);
        cursor: pointer;
    }
`;