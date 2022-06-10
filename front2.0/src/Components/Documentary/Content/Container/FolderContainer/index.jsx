import { useState } from "react";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import Gridfolder from "../../../Modern/GridsContent/Gridfolder";
import { useSelector } from "react-redux";
import GridDefaultDocument from "../../../Modern/GridsContent/GridDefaultDocument";
import DocumentMenu from "../../MenuContext/DocumentMenu";

const FolderContainer = () => {

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

    const { core, documentary } = useSelector((store) => store);
    const { DocumentFolder } = documentary;
    const { SelectedCabinet, SelectedFolder, selected } = core;

    return(
        <DocumentContainer onContextMenu={(e) => {
            contextMenuRightClick(e), handleClick(e);
          }}>

            {showMenu ? <DocumentMenu x={x} y={y} folderId={SelectedFolder.id} /> : <></>}

            {selected === "folder" ? ( DocumentFolder.map(({ id, folderId}, index) => (
                <Gridfolder key={index} id={id} folderId={folderId} element="document" />
            ))
            ) : (
                <></>
            )}

            {DocumentFolder == "" && (
                <GridDefaultDocument id={SelectedFolder.id} cabinetId={SelectedCabinet.id}/>
            )}

        </DocumentContainer>
    );
}

export default FolderContainer;