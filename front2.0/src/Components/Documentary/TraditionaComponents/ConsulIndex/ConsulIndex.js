import styled from "styled-components";

export const ContainerConsul = styled.div`
    width: 155vh;
    height: 60vh;
    overflow-x: scroll;
    background-color: aqua;
`;



/*<-----------Tabla--------------->*/

export const Content = styled.div`
    width: 10%;
    background-color: yellow;
    overflow: hidden;
    
`;

export const TableConsul = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

export const TD = styled.td`
    height: 2.5rem;
    word-wrap: break-word;
`;

export const ContainerTitle = styled.div`
    display: flex;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    border: 1px solid var(--lineColor);
`;


export const TH = styled.td`
  border: 1px solid #dddddd;
  width: 26vh;
  height: 2.5rem;
  word-wrap: break-word;
`;

export const TR = styled.tr`
    & :nth-child(){
        background-color: #dddddd;
    }
`;

export const Title = styled.h1`
     font-weight: bold;
     font-size: 0.8rem;
     display: flex;
     justify-content: center;
`;

export const TitleCabinet = styled.h1`
    font-size: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 0 0.5rem;
    font-weight: 100;
`;