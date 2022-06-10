import styled from "styled-components";

export const ContainerTraditional = styled.div`
    width: 100%;
    height: 2.3rem;
    /* background-color: red; */
    overflow: hidden;
    display: flex;
`;

export const ContainerIcon = styled.div`
    width: 6%;
    justify-content: center;
    display: flex;
    align-items: center;
    height: 100%;
    border: 1px solid var(--lineColor);
`;

export const ContainerTitle = styled.div`
    width: 40%;
    display: flex;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    border: 1px solid var(--lineColor);
`;

export const TitleCabinet = styled.h1`
    font-size: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 0 0.5rem;
    color: var(--primaryColor);
`;

export const ContainerDescription = styled.div`
    width: 50%;
    display: flex;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    border: 1px solid var(--lineColor);
`;

export const ContainerOptions = styled.div`
    width: 4%;
    justify-content: center;
    display: flex;
    align-items: center;
    height: 100%;
    border: 1px solid var(--lineColor);
`;

export const Title = styled.h1`
     font-size: 0.9rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 0 0.5rem;
    color: var(--primaryColor);
`;