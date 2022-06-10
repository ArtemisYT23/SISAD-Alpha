import { useDispatch,useSelector } from "react-redux";

import {
  ContainerData,
  ContainerIndex,
  ContainerName,
  ContentContainer,
  TextTitle,
  IconContent,
  ContenTitle,
  EditContent,
  DeleteContent
} from "../../../../../Styles/Managment/Modern/CeldaTypeData";

import { EditElement, DeleteElement } from "../../../../../Styles/Managment/ManagmentConfig/ConfigElementList/Icons";
import { setSelectedTypeDataConfig } from "../../../../../Store/ConfigDocumentary";
import { setOpenModalTypeDataUpdate, setOpenTypeDataDelete } from "../../../../../Store/ModalConfig";
import TypeDataUpdate from "../../ModalConfig/TypeDataUpdate";
import TypeDataDelete from "../../ModalConfig/TypeDataDelete";

const CeldaTypeData = ({ id, name, index }) => {

    const dispatch = useDispatch();
    const { configDocument } = useSelector((store) => store);
    const { SelectedTypeData } = configDocument;

    const SelectedTypeDataConfig = (id) => {
        dispatch(setSelectedTypeDataConfig(id));
    };

    const OpenModalTypeDataEditar = () => {
        dispatch(setOpenModalTypeDataUpdate());
    };

    const OpenModalTypeDataDelete = () => {
        dispatch(setOpenTypeDataDelete());
    };

    return(
        <ContentContainer>
      <ContainerData>
      <ContainerName>
        <ContainerIndex>
          <TextTitle>{index}</TextTitle>
        </ContainerIndex>
        <ContenTitle>
          <TextTitle>{name}</TextTitle>
        </ContenTitle>
        </ContainerName>
        <IconContent>

            <EditContent onClick={() =>{OpenModalTypeDataEditar(), SelectedTypeDataConfig(id)}}>
          <EditElement />
          </EditContent>

          <DeleteContent onClick={() =>{OpenModalTypeDataDelete(), SelectedTypeDataConfig(id)}}>
          <DeleteElement />
          </DeleteContent>

        </IconContent>

        {SelectedTypeData?.id == id && (
        <TypeDataUpdate id={SelectedTypeData.id} name={SelectedTypeData.name}/>
        )}
        
        {SelectedTypeData?.id == id && (
        <TypeDataDelete id={SelectedTypeData.id}/>
        )}
      </ContainerData>
    </ContentContainer>
    );
}

export default CeldaTypeData;