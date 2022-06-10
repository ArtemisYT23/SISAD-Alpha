import {
  CeldaContainer,
  TitleType,
} from "../../../../../../Styles/Managment/Modern/TypeFileContent";

const TypeFileArchive = ({ id, name }) => {
  return (
    <>
      <CeldaContainer>
        <TitleType key={id}>{name}</TitleType>
      </CeldaContainer>
    </>
  );
};

export default TypeFileArchive;
