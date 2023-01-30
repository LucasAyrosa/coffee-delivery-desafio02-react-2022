import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme.background};
    position: fixed;
    top: 0;
    width: calc(100% - 1rem);
    max-width: calc(1136px - 1rem);
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

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
        font-size: 0.875rem;
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