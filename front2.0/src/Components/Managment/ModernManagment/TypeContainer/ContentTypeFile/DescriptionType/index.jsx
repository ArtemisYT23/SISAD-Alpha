import { useDispatch, useSelector } from "react-redux";
import {
  ContainerDescriptionType,
  DescriptionContent,
  TitleContainerDescription,
  IconsContainerType,
  ContainerIcons,
  ContainerIcons2,
} from "../../../../../../Styles/Managment/Modern/TypeFileContent/DescriptionType";
import {
  EditElement,
  DeleteElement,
} from "../../../../../../Styles/Managment/Modern/ElementList/Icons";
import { setSelectedTypeFileConfig } from "../../../../../../Store/ConfigDocumentary";
import { setOpenModalTypeFileUpdate, setOpenModalTypeFileDelete } from "../../../../../../Store/ModalConfig";
import TypeFileUpdate from "../../../ModalConfig/TypeFileUpdate";
import TypeFileDelete from "../../../ModalConfig/TypeFileDelete";


const DescriptionType = ({ id, name, description }) => {

  const dispatch = useDispatch();
  const { configDocument } = useSelector((store) => store);
  const { SelectedTypeFile } = configDocument;

  const selectTypeContent = (index) => {
    dispatch(setSelectedTypeFileConfig(index));
  };

  const OpenUpdateModal = () => {
    dispatch(setOpenModalTypeFileUpdate());
  };

  const CloseModalDeleteType = () => {
    dispatch(setOpenModalTypeFileDelete());
  };

  return (
    <ContainerDescriptionType>
    <TitleContainerDescription>
      <DescriptionContent>{description}</DescriptionContent>
    </TitleContainerDescription>
    <IconsContainerType>
      <ContainerIcons onClick={() => {
            OpenUpdateModal(), selectTypeContent(id);
          }}>
        <EditElement/>
      </ContainerIcons>
      <ContainerIcons2 onClick={() => {
            CloseModalDeleteType(), selectTypeContent(id);
          }}>
        <DeleteElement />
      </ContainerIcons2>
    </IconsContainerType>
    
    {SelectedTypeFile?.id === id && (
    <TypeFileUpdate id={SelectedTypeFile.id} name={SelectedTypeFile?.name} description={SelectedTypeFile?.description} />      
    )}
    {SelectedTypeFile?.id === id && (
    <TypeFileDelete id={SelectedTypeFile.id} />
    )}
  </ContainerDescriptionType>
  );
};

export default DescriptionType;
