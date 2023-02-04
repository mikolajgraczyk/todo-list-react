import styled from "styled-components";

export const Container = styled.section`
    margin: 10px 0;
    background-color: white;
`;

export const ContainerTop = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: 1px solid rgb(226, 226, 226);

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Header = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;
`;