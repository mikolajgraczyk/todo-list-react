import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    margin: 0;
    display: flex;
    gap: 20px;
    justify-content: flex-end;

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    @media(max-width: 767px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    border: none;
    background: none;
    color: teal;
    transition: 0.5s;

    &:hover {
        color: hsl(180, 100%, 35%);
        cursor: pointer;
    }

    &:disabled {
        color: gray;
    }
`;