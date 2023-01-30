import styled from "styled-components";

export const CheckOutContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
`;

export const SelectedCoffees = styled.div`
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    h3 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        line-height: 23.4px;

        margin-bottom: 1rem;
    }
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 1.5rem;

    background: ${props => props.theme["base-card"]};
    border-radius: 6px 44px;

    .confirm-button {
        padding: .75rem .5rem;

        width: 100%;

        color: ${props => props.theme.white};
        font-size: .875rem;
        line-height: 160%;
        font-weight: 700;
        text-transform: uppercase;

        background: ${props => props.theme.yellow};
        border-radius: 6px;
        border: transparent;
    }
`;

export const TotalCalc = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    span {
        display:flex;

        font-size: .875rem;
        color: ${props => props.theme["base-text"]};

        span {
            margin-left: auto;
        }

        &.total-span {
            font-size:1.25rem;
            font-weight: 700;
            color: ${props => props.theme["base-subtitle"]};

            strong {
                margin-left: auto;
            }
        }
    }
`;
