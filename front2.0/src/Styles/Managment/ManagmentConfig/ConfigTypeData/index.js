import styled from "styled-components";

export const ContentType = styled.div`
    width: 100%;
`;
export const HeaderCont = styled.div`
    display: flex;
    padding: 0.1rem;
    margin: 0 0 1rem 0;
`;

export const ContHeader = styled.div`
    display: flex;
    width: 13%;
    border: none;
    border-radius: 2rem 2rem 2rem 2rem;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 0 7rem;
    padding: 0.1rem;
    color: var(--white);
    background-color: var(--primaryColorTransparent);
    &:hover{
        background-color: var(--primaryColor);
        color: white;
        border: none;
    } 
`;

export const ContIconHeader = styled.div`
    justify-content: center;
    margin: 0.2rem 0 0 0.5rem;
`;

export const TitleContHeader = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    overflow: hidden;
`;

export const TitleNew = styled.h1`
    margin: 0 0.5rem 0.3rem 0;
    font-size: 1.2rem;
    font-weight: 600;
`;