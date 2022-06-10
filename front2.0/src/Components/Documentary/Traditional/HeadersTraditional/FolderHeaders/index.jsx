import {
  ContainerIcons,
  CabinetIcons,
  EditContainer,
  DeleteContainer,
} from "../CabinetHeaders/StyleIcons";
import NewCabi from "../../../../../../assets/images/Nuevo.png";
import EditCabi from "../../../../../../assets/images/Editar.png";
import Delete from "../../../../../../assets/images/Delete.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenModalFolderCreated,
  setOpenModalFolderUpdate,
  setOpenModalFolderDelete,
} from "../../../../../Store/ModalCore";
import FolderCreated from "../../../Modern/ModalesCore/FolderCreated";
import FolderUpdate from "../../../Modern/ModalesCore/FolderUpdate";
import FolderDelete from "../../../Modern/ModalesCore/FolderDelete";

const FolderHeaders = () => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { SelectedCabinet, SelectedFolderTraditional } = core;

  const OpenFolderCreated = () => {
    dispatch(setOpenModalFolderCreated());
  };

  const OpenFolderUpdate = () => {
    dispatch(setOpenModalFolderUpdate());
  };

  const OpenFolderDelete = () => {
    dispatch(setOpenModalFolderDelete());
  };

  return (
    <ContainerIcons>
      <CabinetIcons onClick={() => OpenFolderCreated()}>
        <img src={NewCabi} alt="cargando" />
      </CabinetIcons>

      <EditContainer onClick={() => OpenFolderUpdate()}>
        <img src={EditCabi} alt="cargando" />
      </EditContainer>

      <DeleteContainer onClick={() => OpenFolderDelete()}>
        <img src={Delete} alt="cargando" />
      </DeleteContainer>

      {SelectedCabinet && <FolderCreated cabinetId={SelectedCabinet.id} />}

      {SelectedFolderTraditional && (
        <FolderUpdate
          id={SelectedFolderTraditional.id}
          name={SelectedFolderTraditional.name}
          description={SelectedFolderTraditional.description}
          cabinetId={SelectedFolderTraditional.cabinetId}
        />
      )}

      {SelectedFolderTraditional && (
       <FolderDelete id={SelectedFolderTraditional.id} name={SelectedFolderTraditional.name} />
       )}
    </ContainerIcons>
  );
};

export default FolderHeaders;
