import { useSelector } from "react-redux";
import {
  ManagmentContentContainer,
  InfoContainer,
} from "../../../Styles/Managment";
import HeaderManagment from "../ContentManagment/HeaderManagment";
import ActionsManagment from "../ContentManagment/ActionsManagment";
import ListConfig from "../ContentManagment/OptionMenu/ListConfig";
import TypeDataConfig from "../ContentManagment/OptionMenu/TypeDataConfig";
import TypeFileConfig from "../ContentManagment/OptionMenu/TypeFileConfig";
import IndexConfig from "../ContentManagment/OptionMenu/IndexConfig";

const ContentManagment = () => {
  const { configDocument } = useSelector((store) => store);
  const { SelectedOption } = configDocument;

  return (
    <ManagmentContentContainer>
      <InfoContainer>
        <HeaderManagment />
        <ActionsManagment />
      </InfoContainer>

      {SelectedOption?.name == "Lista de datos" || SelectedOption == "" ? (<ListConfig />) : (<></>)}

      {SelectedOption.name == "Tipos de Archivos" ? <TypeFileConfig /> : <></>}

      {SelectedOption.name == "Indices" ? <IndexConfig /> : <></>}

      {SelectedOption.name == "Tipos de datos" ? <TypeDataConfig /> : <></>}
    </ManagmentContentContainer>
  );
};

export default ContentManagment;
