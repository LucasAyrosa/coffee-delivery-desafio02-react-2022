import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    /* position: absolute; */
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    width: 256px;
    padding: 0 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        /* position: absolute;
        top: -20px; */
    }
`;

export const CoffeeTags = styled.div`
    display: flex;
    gap: 0.25rem;

    margin-top: 7rem;
    margin-bottom: 1rem;
`;

export const CoffeeTag = styled.span`
    padding: 4px 8px;

    background: ${props => props.theme["yellow-light"]};
    border-radius: 100px;

    color: ${props => props.theme["yellow-dark"]};
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
`;

export const CoffeeName = styled.span`
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 26px;
    text-align: center;

    margin-bottom: 0.5rem;
`;

export const CoffeeDescription = styled.span`
    text-align: center;
    font-size: 0.875rem;
    line-height: 18.2px;
    color: ${props => props.theme["base-label"]};
`;

export const CoffeeBuy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.8125rem;

    margin-top: 2rem;
    margin-bottom: 1.25rem;

    span{
        font-size: 0.875rem;
        line-height: 1.95rem;
        text-align: right;
    
        strong {
            font-family: 'Baloo 2', cursive;
            font-size: 1.5rem;
            font-weight: 800;
            text-align: right;
        }
    }
`;

export const BuyActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;

    `;

export const ButtonCart = styled.button`
    height: 40px;
    border-radius: 8px;
    background: ${props => props.theme["purple-dark"]};
    color: ${props => props.theme.white};
    padding: 0.5rem;
    cursor: pointer;
`;

export const CoffeeCounter = styled.div`
    display:flex;
    align-items: center;
    padding: .5rem;
    gap: .25rem;

    background: ${props => props.theme["base-button"]};
    border-radius: 6px;
    
    span {
        line-height: 1.3rem;
        text-align: center;
        color: ${props => props.theme["base-title"]};
    }

    button {
        border: none;
        background: transparent;

        color: ${props => props.theme.purple};
        padding: 0.25rem;

        font-weight: bold;
    }
`;