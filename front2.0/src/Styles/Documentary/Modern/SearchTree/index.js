import styled from "styled-components";

export const ContainerTree = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
`;

export const ContainerList = styled.div`
    list-style: none;
`;

export const UL = styled.ul`
    list-style: none;
`;

export const LI = styled.li`
    color: var(--primaryColor);
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0 0 0.2rem 0.2rem;
`;


export const ContainerItemTree = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 0.3rem;
`;

export const ContentItem = styled.div`
    display: flex;
    width: 100%;
    color: var(--lineColor);
    &:hover{
        background-color: #F1F1F1;
        color: var(--primaryColor);
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    width: 80%;
`;

export const TitleCap = styled.h1`
    font-size: 0.8rem;
    margin: 0.2rem;
    font-weight: 600;
`;

export const ContainerFolders = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem 0 0 2rem;
`; 