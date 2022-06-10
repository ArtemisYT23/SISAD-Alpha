import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ContainerData = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
`;

export const ContainerName = styled.div`
    display: flex;
    border: 1px solid var(--lineColor);
    width: 80%;
    justify-content: space-between;
    text-align: center;
    overflow: hidden;
    padding: 0.2rem;
`;

export const ContainerIndex = styled.div`
   display: flex;
   width: 10%;
   justify-content: center;
`;

export const ContenTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
`;

export const IconContent = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid var(--lineColor);
    width: 15%;
    align-items: center;
`;

export const EditContent = styled.div`
`;

export const DeleteContent = styled.div`
`;

export const TextTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: 600;
    color: #c4c4c4;
`;