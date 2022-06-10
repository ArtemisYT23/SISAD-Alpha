import styled from "styled-components";

export const DocumentaryContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const DocumentaryAsideContainer = styled.div`
  width: 15rem;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: -0.5rem 0 1.5rem -0.5rem rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  overflow-y: scroll;
`;

export const DocumentaryContentContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export const InfoContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--white);
`;

export const HeaderContainer = styled.div`
  height: 6rem;
  border-bottom: 1px solid var(--lineColor);
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionsGridContainer = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const ContainerVista = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerOptions = styled.div`
   align-items: center;
   height: 3.4rem;
   display: flex;
   margin: 0 0 0 1rem;
   align-items: center;
`;

export const ContainerTitle = styled.div`
   align-items: center;
   height: 3.4rem;
   display: flex;
   margin: 0 0 0 1rem;
   align-items: center;
`;

export const DocumentContainer = styled.div`
  padding-bottom: 2rem; 
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

