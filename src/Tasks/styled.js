import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 2fr 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ccc;

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    @media(max-width: 564px) {
        grid-template-columns: auto 5fr 7fr auto;
    }
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Time = styled.span`
    font-size: 11px;
    text-align: center;
    border: 1px solid #ccc;
    max-width: 140px;
    border-radius: 15px;
    padding: 5px;

    @media(max-width: 564px) {
        font-size: 9px;
    }
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;

    ${({ done }) => done && css`
        background-color: green;
        transition: 0.5s;

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: rgb(168, 0, 0);
        transition: 0.5s;

        $:hover {
            background-color: hsl(0, 100%, 60%);
        }
    `}
`;