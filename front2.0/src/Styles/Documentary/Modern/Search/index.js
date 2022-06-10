import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    height: 100%; 
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 5.5%;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--lineColor);
  font-size: 1rem;
  text-align: center-start;
  background-color: var(--white);
  color: var(--black);
  &:placeholder {
    color: var(--lineColor);
  }
`;

export const List = styled.li`
  text-decoration: none;
  list-style:none;
`;

export const Titulo = styled.span`
  font-weight: 600;
  text-align: center left;
  text-decoration: none;
  font-size: 1.1rem;
  line-height: 2.2;
  position: flex;
  padding: 0.5rem;
  color: var(--primaryColor);
  `;

export const Items = styled.div`
  color: var(--lineColor);
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  cursor: pointer;
  padding: 0.3rem 0;
  align-items: center;
  &:hover{
    width: 100%;
    background-color: #F1F1F1;
    color: var(--primaryColor);
  }
  `;

export const Icons = styled.div`
  display: flex;
  margin: 0 0.3rem 0 0.8rem;
  `;

export const Docum = styled.div`
  display: flex;
  margin: 0 0.5rem 0 1.5rem;
`;

export const Name = styled.span`
    font-size: 0.83rem;
  `;

export const Rec = styled.div`
  padding: 0;
  `;