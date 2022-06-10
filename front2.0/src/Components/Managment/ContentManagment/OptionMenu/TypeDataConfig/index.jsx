import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContentType,
  HeaderCont,
  ContHeader,
  ContIconHeader,
  TitleContHeader,
  TitleNew,
} from "../../../../../Styles/Managment/ManagmentConfig/ConfigTypeData";
import { AddElement } from "../../../../../Styles/Managment/ManagmentConfig/ConfigElementList/Icons";
import { getTypeDataConfig } from "../../../../../Store/ConfigDocumentary";
import { setOpenModalTypeDataCreated } from "../../../../../Store/ModalConfig";
import TypeDataCreated from "../../../ModernManagment/ModalConfig/TypeDataCreated";
import CeldaTypeData from "../../../ModernManagment/OptionSubMenu/CeldaTypeData";

const TypeDataConfig = () => {

    const dispatch = useDispatch();
    const { configDocument } = useSelector((store) => store);
    const { TypeData } = configDocument;

    useEffect(() => {
        TypeData.length == 0 && dispatch(getTypeDataConfig());
      }, []);

    const OpenModalTypeDataCreated = () => {
        dispatch(setOpenModalTypeDataCreated());
      };

  return (
    <ContentType>
      <HeaderCont>
        <ContHeader>
          <ContIconHeader>
            <AddElement />
          </ContIconHeader>

          <TitleContHeader onClick={() => OpenModalTypeDataCreated()}>
            <TitleNew>nuevo</TitleNew>
          </TitleContHeader>
        </ContHeader>
        <TypeDataCreated />
      </HeaderCont>
      {TypeData ? (
        TypeData.map(({ id, name }, index) => (
          <CeldaTypeData id={id} name={name} index={index + 1} />
        ))
      ) : (
        <></>
      )}
    </ContentType>
  );
};

export default TypeDataConfig;
