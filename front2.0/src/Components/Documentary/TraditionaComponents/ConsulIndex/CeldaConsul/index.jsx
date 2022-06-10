import { ContainerTitle, TitleCabinet } from "../ConsulIndex";

const CeldaConsul = ({id, folderId}) => {
  return (
    <ContainerTitle>
      <TitleCabinet key={id}>{id}</TitleCabinet>
    </ContainerTitle>
  );
};

export default CeldaConsul;
