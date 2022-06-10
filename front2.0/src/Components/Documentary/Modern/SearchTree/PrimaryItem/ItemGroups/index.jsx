import { useDispatch } from "react-redux";
import {
  ContainerFolders,
  ContentItem,
  ContainerIcons,
  ContainerTitle,
  TitleCap,
} from "../../../../../../Styles/Documentary/Modern/SearchTree";
import { GabiIcons } from "../../../Search/Item/Icon";
import { setSelectedCabinetCore, setFilterFoldersCore } from "../../../../../../Store/Core";

const ItemGroups = ({ id, name }) => {
  const dispatch = useDispatch();

  const SelectedGab = (index) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
  };

  return (
    <ContainerFolders>

      <ContentItem onClick={() => SelectedGab(id)}>

        <ContainerIcons>
          <GabiIcons x={20} y={20} />
        </ContainerIcons>

        <ContainerTitle>
          <TitleCap>{name}</TitleCap>
        </ContainerTitle>

      </ContentItem>
    </ContainerFolders>
  );
};

export default ItemGroups;
