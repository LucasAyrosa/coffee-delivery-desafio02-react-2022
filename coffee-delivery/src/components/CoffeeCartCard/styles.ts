import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .5rem .25rem;
    gap: 1.25rem;

    background: ${props => props.theme["base-card"]};

    width: 368px; //TODO: tirar
`;

export const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;

    span {
        width: 100%;

        color: ${props => props.theme["base-subtitle"]};

        display: flex;
        justify-content: space-between;

        strong {
            margin-left: auto;
        }
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    gap: .5rem;

    .trash-button {
        display: flex;
        flex-direction:row;
        justify-content:center;
        align-items: center;
        padding: 0 .5rem;
        gap: .25rem;

        border-radius: 6px;
        border: transparent;

        background: ${props => props.theme["base-button"]};
        color: ${props => props.theme["base-text"]};

        svg {
            color: ${props => props.theme.purple}
        }
    }
`;