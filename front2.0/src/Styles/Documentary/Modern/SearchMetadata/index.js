import styled from "styled-components";

export const ContainerTitle = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--lineColor);
`;

export const ContainerList = styled.div`
    list-style: none;
    padding: 0.8rem 0 0 0;
`;

export const TituloSelect = styled.select`
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--primaryColor);
    text-decoration: none;
    text-align: center;
    border: none;
    width: 100%;
    height: 100%;
    -webkit-appearance: none; -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;

export const OptionsSelect = styled.option`
    font-weight: bold;
    color:var(--primaryColor);
`; 

