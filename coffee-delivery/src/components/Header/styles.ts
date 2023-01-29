import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 0.75rem
    }

    a {
        height: 40px;
    }
`;

export const Location = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme.purple};
    
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;

    span {
        color: ${props => props.theme["purple-dark"]};
    }
`;

export const Cart = styled.span`
    a {
        display: flex;

        padding: 0.5rem;
        background: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        border-radius: 6px;
    }
`;