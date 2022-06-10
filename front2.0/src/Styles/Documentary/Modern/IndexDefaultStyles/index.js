import styled from "styled-components";

export const DefaultIndex = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const TitleIndex = styled.h1`
    font-size: 2rem;
    justify-content: center;
    text-align: center;
    color: #c4c4c4;
`;

export const ContainerButton = styled.div`
    width: 100%;
    padding: 0.7rem;
`;

export const ButtonNewIndex = styled.button`
    border: 1px solid #c4c4c4;
    width: 65%;
    padding: 0.4rem;
    color: #c4c4c4;
    background: none;
    border-radius: 2rem 2rem 2rem 2rem;
    &:hover {
        color: white;
        background-color: #F68A20;
        border: none;
    }
`;