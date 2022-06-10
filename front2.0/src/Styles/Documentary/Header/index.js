import styled from "styled-components";

export const HeaderUP = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderDOWN = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0.5rem 0;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextName = styled.h2`
  font-size: 1.9rem;
  margin-right: 1rem;
  color: var(--primaryColor);
  line-height: 0.9;
`;

export const InputName = styled.input`
  font-size: 1.9rem;
  margin-right: 1rem;
  color: var(--primaryColor);
  line-height: 0.9;
  outline: none;
  border: none;
  background-color: var(--white);
  font-weight: 700;
`;

export const Perfiles = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Avatar = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transform: translateX(21%);
  &:last-child{
    transform: translateX(0);
  }
`;




export const AvatarPlus = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: red;
`;

// export const Route = styled.span`
//   color: var(--lineColor);
//   font-size: 1rem;
// `;
export const Route = styled.input`
  border: none;
  font-size: 1.2rem;
  background: noe;
  overflow: hidden;
  &:focus{
    outline: none;
  }
`;


export const Log = styled.span`
  color: var(--lineColor);
  font-size: 1rem;
`;
