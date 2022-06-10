import {
  ActionsContainer,
  ContainerVista,
  ContainerOptions,
  ContainerTitle,
} from "../../../../Styles/Documentary";
import {
  FilterContainer,
  ViewsTypeContainer,
  NameLabel,
} from "../../../../Styles/Documentary/Actions";
import { GridView, TraditionalView } from "../Actions/Icons";
import MetadataHeaders from "../../Traditional/HeadersTraditional/MetadataHeaders";
import { useDispatch } from "react-redux";
import { getAllViewListAndTraditional, getAllViewGridAndTraditional } from "../../../../Store/Core";

const ActionMetadata = () => {

    const dispatch = useDispatch();

  const ChangeOptionViewList = () => {
    dispatch(getAllViewListAndTraditional());
  };

  const ChangeOptionViewGrid = () => {
    dispatch(getAllViewGridAndTraditional());
  };

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
        <MetadataHeaders />
      </ContainerOptions>
    </ActionsContainer>
  );
};

export default ActionMetadata;
