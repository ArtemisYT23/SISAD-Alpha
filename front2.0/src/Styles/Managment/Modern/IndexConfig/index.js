import styled from "styled-components";

export const ContainerIndex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 1rem 0 0 0;
`;

export const HeadersContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`; 

export const ContainerButton = styled.div`
    width: 65%;
    display: flex;
    justify-content: flex-start;
`;

export const ContainerSelect = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;
    border: 1px solid var(--lineColor);
`;

export const NewIndex = styled.button`
    border: none;
    padding: 0.5rem;
    width: 20%;
    color: var(--white);
    background-color: var(--primaryColor);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 0.5rem 0.5rem;
    cursor: pointer;
`;

export const NewCabinet = styled.button`
    border: none;
    width: 40%;
    color: var(--white);
    background-color: var(--primaryColor);
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem 0.5rem;
`;

export const TableContainer = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid var(--lineColor);
    overflow: x;
`;

export const TableRaid = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    `;

export const TH = styled.th`
    border: 1px solid var(--whiteTrans);
    padding: 8px;
    background-color: var(--primaryColor);
    color: var(--white);
`;


export const TD1 = styled.td`
    display: flex;
    width: 100%;
    text-align: center;
    border: 1px solid var(--whiteTrans);
    padding: 8px;
    flex-direction: column;
    color: var(--lineColor);
    & :hover{
        color: var(--primaryColor);
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 1rem;
    font-weight: 100;
`;
