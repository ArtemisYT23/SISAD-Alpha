import { useState, useEffect } from "react";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import Gridcabinet from "../../../Modern/GridsContent/Gridcabinet";
import GridDefaultFolder from "../../../Modern/GridsContent/GridDefaultFolder";
import { useSelector } from "react-redux";
import FolderMenu from "../../MenuContext/FolderMenu";

const CabinetContainer = () => {
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

    const { core } = useSelector((store) => store);
    const { selected, FoldersCabinet, SelectedCabinet } = core;

    return(
        <DocumentContainer onContextMenu={(e) => {
            contextMenuRightClick(e), handleClick(e);
          }}>

        {showMenu ? <FolderMenu x={x} y={y} cabinetId={SelectedCabinet.id} /> : <></>}

        {selected === "cabinet" ? ( FoldersCabinet.map(({ id, name, cabinetId }, index ) => ( <Gridcabinet key={index} id={id} cabinetId={cabinetId} name={name}
         element="folder" />
         ))
        ) : (
         <></>
         )}

        {FoldersCabinet == "" && (
            <GridDefaultFolder  />
        )}

        </DocumentContainer>
    );
};

export default CabinetContainer;