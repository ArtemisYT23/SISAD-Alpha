import styled from "styled-components";

export const ContainerDefault = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ContainerNew = styled.div`
    width: 100%;
    padding: 0.7rem;
`;

export const ButtonNew = styled.button`
    border: 1px solid var(--lineColor);
    width: 65%;
    padding: 0.4rem;
    color: var(--lineColor);
    background: none;
    border-radius: 2rem 2rem 2rem 2rem;
    &:hover {
        color: white;
        background-color: var(--primaryColor);
        border: none;
    }
`; 

export const Title = styled.h1`
    font-size: 2rem;
    justify-content: center;
    text-align: center;
    color: var(--lineColor);
    
`;