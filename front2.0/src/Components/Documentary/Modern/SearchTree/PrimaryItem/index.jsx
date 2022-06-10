import { useDispatch, useSelector } from "react-redux";
import {
  ContainerItemTree,
  ContainerIcons,
  ContainerTitle,
  TitleCap,
  ContentItem,
} from "../../../../../Styles/Documentary/Modern/SearchTree";
import { GroupIcon } from "../../Search/Item/Icon";
import { setSelectedGroupCore, setFilterGroupsCore } from "../../../../../Store/Core"; 
import ItemGroups from "./ItemGroups";

const PrimaryItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { SelectedGroup, GroupsCabinet } = core;

  const selectGroup = (index) => {
    dispatch(setSelectedGroupCore(index));
    dispatch(setFilterGroupsCore(index));
  };

  return (
    <ContainerItemTree>
      <ContentItem onClick={() => selectGroup(id)}>
        <ContainerIcons>
          <GroupIcon x={20} y={20} />
        </ContainerIcons>

        <ContainerTitle>
          <TitleCap>{name}</TitleCap>
        </ContainerTitle>
      </ContentItem>

      {SelectedGroup?.id === id && (
        <>
          {GroupsCabinet ? (
            GroupsCabinet.map(({ id, name }) => <ItemGroups id={id} name={name} key={id}/>)
          ) : (
            <></>
          )}
        </>
      )}
    </ContainerItemTree>
  );
};

export default PrimaryItem;
