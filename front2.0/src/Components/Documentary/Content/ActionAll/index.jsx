import { ActionsGridContainer } from "../../../../Styles/Documentary";
import { 
    FilterContainer,
    ViewsTypeContainerCabinet,
    NameLabel,
 } from "../../../../Styles/Documentary/Actions";
 import { GridView, TraditionalView } from "../Actions/Icons";
 import { getAllViewListAndTraditional, getAllViewGridAndTraditional } from "../../../../Store/Core";
import { useDispatch } from "react-redux";
 

 const ActionsAll = () => {

  const dispatch = useDispatch();

  const ChangeOptionViewList = () => {
    dispatch(getAllViewListAndTraditional());
  }

  const ChangeOptionViewGrid = () => {
    dispatch(getAllViewGridAndTraditional());
  }

    return (
      <ActionsGridContainer>
        <FilterContainer />
        <ViewsTypeContainerCabinet>
          <NameLabel>Vista :</NameLabel>
          <div onClick={() => ChangeOptionViewList()}>
          <TraditionalView />
          </div>
          <div onClick={() => ChangeOptionViewGrid()}>
          <GridView />
          </div>
        </ViewsTypeContainerCabinet>
      </ActionsGridContainer>
    );
  };

  export default ActionsAll;