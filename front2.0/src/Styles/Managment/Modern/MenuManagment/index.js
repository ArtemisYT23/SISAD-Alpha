import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const List = styled.li`
  text-decoration: none;
  list-style:none;
`;

export const Titulo = styled.span`
  color: var(--primaryColor);
  font-weight: 600;
  text-align: center left;
  text-decoration: none;
  font-size: 1.1rem;
  line-height: 2.2;
  position: flex;
  padding: 0.5rem;
  `;

export const Items = styled.div`
color: var(--lineColor);
text-decoration: none;
font-size: 1.3rem;
display: flex;
cursor: pointer;
padding: 0.3rem 0;
align-items: center;

`;

export const Icons = styled.div`
display: flex;
margin: 0 0.5rem;
`;

export const Name = styled.span`
    padding: 0.2rem;
    color: var(--lineColor);
    font-size: 1rem;
    &:hover{
      color: var(--primaryColor);
    }
  `;

export const Rec = styled.div`
  padding: 0.2rem;
  `;