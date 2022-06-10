import styled from "styled-components";

export const GridElemmentContainer = styled.div`
  display: inline-flex;
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  background-color: rgba(254, 206, 100, 0.25);
  margin: 2rem 0 0 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const GridDocContainer = styled.div`
  display: inline-flex;
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  background-color: none;
  margin: 2rem 0 0 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Distintivo = styled.div`
  position: absolute;
  background: #3399BA;
  top: 14rem;
  width: 2.8rem;
  height: 1.5rem;
  border-radius: 0.5rem 0 0.5rem 0;
  display: flex;
  margin: 0 2.2rem 0 0; 
  `;

export const DistintivoPDF = styled.div`
position: absolute;
background: red;
top: 14rem;
width: 2.8rem;
height: 1.5rem;
border-radius: 0.5rem 0 0.5rem 0;
display: flex;
margin: 0 2.2rem 0 0; 
`;

export const TypeFile = styled.span`
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 0.95rem;
    margin: 0 2.1rem 0 0;
    top: 14rem;
`;

export const NumberOfElementChild = styled.span`
  padding: 0.5rem; 
  color: var(--lineColor);
  text-align:center;
`;

export const ElementName = styled.h4`
  color: var(--primaryColor);
  font-size: 0.8rem;
  text-align:center;
  margin: auto;
`;

export const ElementNameDoc = styled.h4`
  color: var(--primaryColor);
  font-size: 1rem;
  text-align:center;
  margin: auto;
`;

