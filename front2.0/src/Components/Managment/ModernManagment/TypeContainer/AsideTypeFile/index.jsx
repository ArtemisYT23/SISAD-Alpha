import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TypeContainerManagment,
  ContainerAsideTitle,
  TitleAsi,
  IconsContainer,
} from "../../../../../Styles/Managment";
import { AddElement } from "../../../../../Styles/Managment/ManagmentConfig/ConfigElementList/Icons";
import { getTypeFileConfig } from "../../../../../Store/ConfigDocumentary";
import { setOpenModalTypeFileCreated } from "../../../../../Store/ModalConfig";
import TypeFileArchive from "../../../ModernManagment/TypeContainer/AsideTypeFile/TypeFileArchive";
import TypeFileCreated from "../../ModalConfig/TypeFileCreated";

const AsideTypeFile = () => {
  const dispatch = useDispatch();
  const { configDocument } = useSelector((store) => store);
  const { TypeFile } = configDocument;

  useEffect(() => {
    TypeFile.length === 0 && dispatch(getTypeFileConfig());
  }, []);

  const OpenModalTypeFileCreated = () => {
    dispatch(setOpenModalTypeFileCreated());
  };

  return (
    <TypeContainerManagment>
      <ContainerAsideTitle>
        <TitleAsi>Tipo de Archivos</TitleAsi>
        <IconsContainer onClick={() => OpenModalTypeFileCreated()}>
          <AddElement />
        </IconsContainer>
      </ContainerAsideTitle>
      {TypeFile ? (
        TypeFile.map(({ id, name }, index) => (
          <TypeFileArchive key={index} id={id} name={name} />
        ))
      ) : (
        <></>
      )}

      <TypeFileCreated />

    </TypeContainerManagment>
  );
};

export default AsideTypeFile;
