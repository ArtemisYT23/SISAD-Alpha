import { ContainerIcons, CabinetIcons, EditContainer, DeleteContainer } from "./StyleIcons";
import NewCabi from "../../../../../../assets/images/Nuevo.png";
import EditCabi from "../../../../../../assets/images/Editar.png";
import DeleteCabi from "../../../../../../assets/images/Delete.png";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalCabinetCreated, setOpenModalCabinetUpdate, setOpenModalCabinetDelete } from "../../../../../Store/ModalCore";
import CabinetCreated from "../../../Modern/ModalesCore/CabinetCreated";
import CabinetUpdate from "../../../Modern/ModalesCore/CabinetUpdate";
import CabinetDelete from "../../../Modern/ModalesCore/CabinetDelete";

const CabinetHeaders = () => {


    const dispatch = useDispatch();
    const { core } = useSelector((store) => store);
    const { SelectedTraditional } = core;

    const OpenCabinetCreated = () => {
      dispatch(setOpenModalCabinetCreated());
    }

    const OpenCabinetUpdate = () => {
      console.log(SelectedTraditional.id);
      dispatch(setOpenModalCabinetUpdate());
    }

    const OpenCabinetDelete = () => {
      dispatch(setOpenModalCabinetDelete());
    }

    return(
        <ContainerIcons>

          <CabinetIcons onClick={() => OpenCabinetCreated()}>
         <img src={NewCabi} alt="cargando" />
          </CabinetIcons>

          <EditContainer onClick={() => OpenCabinetUpdate()}>
            <img src={EditCabi} alt="cargando" />
          </EditContainer>

          <DeleteContainer onClick={() => OpenCabinetDelete()}>
            <img src={DeleteCabi} alt="cargando" />
          </DeleteContainer>


          <CabinetCreated />

        {SelectedTraditional &&(
          <CabinetUpdate id={SelectedTraditional.id} name={SelectedTraditional.name} description={SelectedTraditional.description} />
          )}
        
        {SelectedTraditional &&(
          <CabinetDelete id={SelectedTraditional.id} name={SelectedTraditional.name}/>
        )}
          
        </ContainerIcons>
    );
}

export default CabinetHeaders;