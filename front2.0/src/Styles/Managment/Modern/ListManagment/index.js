import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleList = styled.div`
  font-size: 1.4rem;
  padding: 0.4rem;
  color: var(--primaryColor);
  font-weight: 600;
  font-weight: bold;
`;

export const Nuevo = styled.button`
  font-size: 1rem;
  border: none;
  text-decoration: none;
  font-weight: 600;
  padding: 0.4rem;
  width: 5.5rem;
  height: 2.1rem;
  border-radius: 10%;
  color: var(--white);
  background-color: var(--transparent);
  &:hover{
    background-color: var(--primaryColor);
  }
`;