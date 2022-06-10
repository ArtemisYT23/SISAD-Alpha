import styled from "styled-components";

export const ManagmentContainer = styled.div`
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: center;
`;

export const ManagmentAsideContainer = styled.div`
  width: 14rem;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: -0.5rem 0 1.5rem -0.5rem rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  overflow-y: scroll;
`;

export const TypeContainerManagment = styled.div`
  width: 18rem;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 0.3rem;
  /* overflow-y: scroll; */
`;

export const ContainerAsideTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #c4c4c4;
`;

export const TitleAsi = styled.h1`
  font-size: 1.5rem;
  padding: 0.5rem;
  color: #F68A20;
`;

export const IconsContainer = styled.div`
  background-color: none;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ManagmentContentContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export const ContainerContentTypeFile = styled.div`
  width: 100%;
  padding: 0.3rem;
`;

export const TitleTypeFile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #c4c4c4;
`;

export const TitleFyle = styled.h1`
  margin: 0 0 0 1rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: #F68A20;
`;

export const InfoContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--white);
`;

export const Contentline = styled.div`
  position: sticky;
`;

export const HeaderContainer = styled.div`
  height: 8rem;
  border-bottom: 1px solid var(--lineColor);
`;

export const ActionsContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ManagContainer = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  z-index: -1;
`;

export const ManagTypeContainer = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  z-index: -1;
`;


export const Listado = styled.div`
  width: 100%;
  height: 100%;
`;
