import { useDispatch, useSelector } from "react-redux";
import { CarpIcons } from "../../Search/Item/Icon";
import {
  ContainerItemTree,
  ContentItem,
  ContainerIcons,
  ContainerTitle,
  TitleCap

} from "../../../../../Styles/Documentary/Modern/SearchTree";

const ItemMetadata = ({ id, name, key }) => {
  return (
    <ContainerItemTree>

      <ContentItem>

        <ContainerIcons>
          <CarpIcons x={24} y={24} />
        </ContainerIcons>

        <ContainerTitle>
          <TitleCap>{name}</TitleCap>
        </ContainerTitle>

      </ContentItem>

    </ContainerItemTree>
  );
};

export default ItemMetadata;
