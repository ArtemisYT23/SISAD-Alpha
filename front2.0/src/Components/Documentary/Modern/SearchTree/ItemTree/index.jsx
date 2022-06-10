import { useDispatch, useSelector } from "react-redux";
import {
  ContainerItemTree,
  ContainerIcons,
  ContainerTitle,
  TitleCap,
  ContentItem,
} from "../../../../../Styles/Documentary/Modern/SearchTree";
import { GabiIcons } from "../../Search/Item/Icon";
import { setSelectedCabinetCore, setFilterFoldersCore } from "../../../../../Store/Core";
import ItemFolders from "./ItemFolders";

const ItemTree = ({ id, name }) => {

  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { SelectedCabinet, FoldersCabinet } = core;

  const selectGab = (index) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
  };

  return(
    <ContainerItemTree>

      <ContentItem onClick={() => selectGab(id)}>

      <ContainerIcons>
        <GabiIcons x={20} y={20}/>
      </ContainerIcons>
      
      <ContainerTitle>
          <TitleCap>{name}</TitleCap>
      </ContainerTitle>
      </ContentItem>

      {SelectedCabinet?.id === id && (
        <>
        {FoldersCabinet ? (
          FoldersCabinet.map(({ id, name }) => (
             <ItemFolders id={id} name={name} key={id}/>
          ))
        ) : (
          <></>
        )}
        </>
      )}

    </ContainerItemTree>
  );
};

export default ItemTree;