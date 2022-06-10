import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ItemMetadata from "../ItemMetadata";
import FileUploaderCreated from "../FileUploaderCreated";
import { setOpenModalMetadataCreated } from "../../../../../Store/ModalDocumentary";

const useStyless = makeStyles((theme) => ({
  MetadataCreated: {
    position: "absolute",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const MetadataCreated = ({ documentId }) => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { modalDocumentary, core } = useSelector((store) => store);
  const { MetadataCreated } = modalDocumentary;
  const { IndexAllCabinet } = core;

  const metadataNew = (
    <div className={styless.MetadataCreated}>
      
        <div align="center">
          <h2 className="titulo-modal">Crear Nueva Metadata</h2>
        </div>

        {IndexAllCabinet.map(item => (
          <ItemMetadata name={item.name} dataTypeId={item.dataTypeId} listId={item.listId}/>
        ))}
        
        
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalMetadataCreated()}
          >
            Cancelar
          </button>
        </div>
      
    </div>
  );

  const OpenModalMetadataCreated = () => {
    dispatch(setOpenModalMetadataCreated());
  };

  return (
    <div className={styless.container}>
      <Modal open={MetadataCreated} onClose={OpenModalMetadataCreated}>
        {metadataNew}
      </Modal>

      <FileUploaderCreated DocumentId={documentId} />
    </div>
  );
};

export default MetadataCreated;
