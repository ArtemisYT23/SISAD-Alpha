import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import GridFiles from "../../../Modern/GridsContent/GridFiles";
import FileMenu from "../../MenuContext/FileMenu";

const FileContainer = () => {
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
  const { selected, files, SelectedFolder } = core;

  return (
    <DocumentContainer
      onContextMenu={(e) => {
        contextMenuRightClick(e), handleClick(e);
      }}
    >
        
      {showMenu ? <FileMenu x={x} y={y} folderId={SelectedFolder.id} /> : <></>}

      {selected === "files" ? (
        files.map(({ id, extension, fileTypeId, documentId }, index) => (
          <GridFiles
            key={index}
            id={id}
            extension={extension}
            fileTypeId={fileTypeId}
            documentId={documentId}
            element="archivos"
          />
        ))
      ) : (
        <></>
      )}
    </DocumentContainer>
  );
};

export default FileContainer;
