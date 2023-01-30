import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    max-width: 1136px;
    padding: 0.5rem;

    height: calc(100vh - 10rem);
    margin: 0 auto;
    margin-top: 6.5rem;

    background: ${props => props.theme.background};

    display: flex;
    flex-direction: column;
`;