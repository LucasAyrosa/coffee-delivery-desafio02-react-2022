import styled from "styled-components";

export const AddressFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    width: 100%;

    h3{
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 23.4px;
        margin-bottom: 1rem;
    }
`;

export const FormAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    width: 100%;

    padding: 2.5rem;
    gap:2rem;

    background: ${props => props.theme["base-card"]};
    border-radius: 6px;

    .title-address-form {
        display: flex;
        gap: .5rem;

        svg {
            color: ${props => props.theme["yellow-dark"]};
        }

        h5 {
            font-weight: 400;
            font-size: 1rem;
            line-height: 20.8px;
            
            color: ${props => props.theme["base-subtitle"]};

        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-text"]};
        }
    }

    input {
        height: 42px;
        width: 200px;
        padding: 0.75rem;
        
        background-color: ${props => props.theme["base-input"]};
        
        border: 1px solid ${props => props.theme["base-button"]};
        border-radius: 4px;

        &.w-full {
            width: 100%;
        }

        &.w-60 {
            width: 60px;
        }
    }

    div.info-1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
    }

    div.info-2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:0.75rem;

        width: 100%;
    }
`;

export const FormPayment = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    width: 100%;

    padding: 2.5rem;
    gap:2rem;

    background: ${props => props.theme["base-card"]};
    border-radius: 6px;

    .title-payment-form {
        display: flex;
        gap: .5rem;

        svg {
            color: ${props => props.theme.purple};
        }

        h5 {
            font-weight: 400;
            font-size: 1rem;
            line-height: 20.8px;
            
            color: ${props => props.theme["base-subtitle"]};

        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-text"]};
        }
    }

    .group-button {
        width: 100%;
    
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        button {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 1rem;
            gap: 0.75rem;

            background: ${props => props.theme["base-button"]};
            border-radius: 6px;
            border-color: transparent;

            cursor: pointer;

            svg {
                color: ${props => props.theme.purple}
            }
        }
    }
`;
