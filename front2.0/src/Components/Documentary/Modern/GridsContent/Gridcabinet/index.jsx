import { useState } from "react";
import { ElementName, GridElemmentContainer, NumberOfElementChild } from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import OptionFolderMenu from "../../../Content/MenuContext/OptionFolderMenu";
import { useDispatch } from "react-redux";
import { setSelectedFolderCore } from "../../../../../Store/Core";
import { setFilterDocumentDocu } from "../../../../../Store/Documentary";

const Gridcabinet = ({ element, name, id, cabinetId }) => {

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

      const entrar = (index) => {
        dispatch(setSelectedFolderCore(index));
        dispatch(setFilterDocumentDocu(index));
      };

    return(
        <GridElemmentContainer onDoubleClick={() => entrar(id)}
        onContextMenu={(e) => {
          contextMenuRightClick(e), handleClick(e);
        }}>

            {showMenu ? <OptionFolderMenu x={x} y={y} id={id} cabinetId={cabinetId}/> : <></>}

                <ElementIcon element={element} />
                <NumberOfElementChild>3 documentos</NumberOfElementChild>
                <ElementName>{name}</ElementName>
          </GridElemmentContainer>
    );
};

export default Gridcabinet;