import styled from "styled-components";

export const IntroContainer = styled.div`
    height: 544px;
    padding: 92px 0;
    display: flex;
    gap: 3.5rem;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
    }
`;

export const Title = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        color: ${props => props.theme["base-title"]};
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 800;
        line-height: 130%;
    }

    span {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
    }
`;

export const Items = styled.ul`
    height: 5.25rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    list-style: none;

    margin-top: 4.875rem;
`;

const LIST_ITEM_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    baseText: 'base-text',
    purple: 'purple'
} as const

interface ListItemProps {
    color: keyof typeof LIST_ITEM_COLORS
}

export const ListItem = styled.li<ListItemProps>`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${props => props.theme["base-text"]};

    svg {
        padding: .5rem;
        border-radius: 1000px;
        background: ${props => props.theme[LIST_ITEM_COLORS[props.color]]};
        color: ${props => props.theme.white};
    }
`;
