import styled from "styled-components";

export const ContainerItemType = styled.div`
    width: 100%;
    display: flex;
`;

export const CeldaContainer = styled.div` 
  border: 1px solid var(--lineColor);
  background: none;
  justify-content: center;
  padding: 0.1rem;
  `;

export const TitleType = styled.h1`
  color: var(--lineColor);
  padding: 0.1rem;
  margin: 0 0 0 0.7rem;
  height: 1.8rem;
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;