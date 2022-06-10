import {
  ContainerIcons,
  CabinetIcons,
  EditContainer,
  DeleteContainer,
  CabinetContainer,
} from "../CabinetHeaders/StyleIcons";
import NewCabi from "../../../../../../assets/images/Nuevo.png";
import EditCabi from "../../../../../../assets/images/Editar.png";
import DeleteCabi from "../../../../../../assets/images/Delete.png";
import CabinetCabi from "../../../../../../assets/images/Cabinet.png";
import { useDispatch, useSelector } from "react-redux";
import { ChangeCabinetGetAll } from "../../../../../Store/Core";

const MetadataHeaders = () => {
  const dispatch = useDispatch();

  const OpenMetadataCreated = () => {};

  const OpenMetadataUpdate = () => {};

  const OpenMetadataDelete = () => {};

  const OpenCabinetGetAll = () => {
    dispatch(ChangeCabinetGetAll());
  };

  return (
    <ContainerIcons>
      <CabinetIcons onClick={() => OpenMetadataCreated()}>
        <img src={NewCabi} alt="cargando" />
      </CabinetIcons>

      <EditContainer onClick={() => OpenMetadataUpdate()}>
        <img src={EditCabi} alt="cargando" />
      </EditContainer>

      <DeleteContainer onClick={() => OpenMetadataDelete()}>
        <img src={DeleteCabi} alt="cargando" />
      </DeleteContainer>

      <CabinetContainer onClick={() => OpenCabinetGetAll()}>
          <img src={CabinetCabi} alt="cargando" />
      </CabinetContainer>

    </ContainerIcons>
  );
};

export default MetadataHeaders;
