import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Menu = styled.ul`
    background: teal;
    padding: 10px;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 50px;
`;

export const MenuElement = styled.li`
    color: white;
`;

export const StyledNavLink = styled(NavLink)`

&.active, &:link, &:visited {
text-decoration: none;
color: inherit;
}

&.active {
font-weight: 600;
}
`;