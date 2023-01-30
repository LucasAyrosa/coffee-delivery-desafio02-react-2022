import styled from "styled-components";

export const CoffeeListContainer = styled.div`
    margin-bottom: 10vh;

      h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};

        margin-bottom: 3.375rem;
    }
`;

export const ListCoffee = styled.div`
    /* margin-bottom: 9.8125rem; */
    display: flex;
    column-gap: 1.9rem;
    row-gap: 2.5rem;
    flex-direction: row;
    flex-wrap: wrap;
`;