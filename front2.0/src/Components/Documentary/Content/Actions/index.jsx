import { ActionsContainer, ContainerVista, ContainerOptions, ContainerTitle } from "../../../../Styles/Documentary";
import {
  FilterContainer,
  ViewsTypeContainer,
  NameLabel,
} from "../../../../Styles/Documentary/Actions";
import { GridView, TraditionalView } from "./Icons";
import CabinetHeaders from "../../Traditional/HeadersTraditional/CabinetHeaders";
import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";
import { useDispatch } from "react-redux";
import { getAllViewListAndTraditional, getAllViewGridAndTraditional } from "../../../../Store/Core";

const ActionsCabinet = () => {

  const dispatch = useDispatch();

  const ChangeOptionViewList = () => {
    dispatch(getAllViewListAndTraditional());
  }

  const ChangeOptionViewGrid = () => {
    dispatch(getAllViewGridAndTraditional());
  }

  return (
    <ActionsContainer>

      <ContainerVista>

      <FilterContainer />

      <ViewsTypeContainer>
        <NameLabel>Vista :</NameLabel>
        <div onClick={() => ChangeOptionViewList()}>
        <TraditionalView />
        </div>
        <div onClick={() => ChangeOptionViewGrid()}>
        <GridView />
        </div>
      </ViewsTypeContainer>
      </ContainerVista>

      <ContainerOptions>
        <CabinetHeaders />
      </ContainerOptions>

      <ContainerTitle>
       <CabinetTitles />
      </ContainerTitle>

    </ActionsContainer>
  );
};

export default ActionsCabinet;
