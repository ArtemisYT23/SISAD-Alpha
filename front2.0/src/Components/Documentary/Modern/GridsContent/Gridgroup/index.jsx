import { useState } from "react";
import {
  ElementName,
  GridElemmentContainer,
  NumberOfElementChild,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import { useDispatch, useSelector } from "react-redux";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { setSelectedCabinetCore, setFilterFoldersCore } from "../../../../../Store/Core";
import CabinetMenu from "../../../Content/MenuContext/CabinetMenu";

const Gridgroup = ({ element, name, id }) => {
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e) => {
    showMenu && setShowMenu(false);
  };

  const contextMenuRightClick = (e) => {
    e.preventDefault();
    setX(e.clientX - 50);
    setY(e.clientY - 50);
    setShowMenu(true);
  };

  const envio = (index) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
  };

  return (
    <GridElemmentContainer
      onDoubleClick={() => envio(id)}
      onContextMenu={(e) => {
        contextMenuRightClick(e), handleClick(e);
      }}
    >
      {showMenu ? <CabinetMenu x={x} y={y} id={id} /> : <></>}

      <ElementIcon element={element} />
      <NumberOfElementChild>3 documentos</NumberOfElementChild>
      <ElementName>{name}</ElementName>
    </GridElemmentContainer>
  );
};

export default Gridgroup;
