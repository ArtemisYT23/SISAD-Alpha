import { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { CreateDocumentNew } from "../../../../../Store/Documentary";
import { setOpenModalDocumentCreated } from "../../../../../Store/ModalDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";
import MetadataCreated from "../MetadataCreated";
import { setOpenModalMetadataCreated } from "../../../../../Store/ModalDocumentary";
import { getIndexAllCabinetConfigNotSelect } from "../../../../../Store/Core";


const useStyless = makeStyles((theme) => ({
  DocumentCreated: {
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

const DocumentCreated = ({ folderId }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalDocumentary, core } = useSelector((store) => store);
  const { DocumentCreated } = modalDocumentary;
  const { SelectedCabinet } = core; 

  const [newDoc, setNewDoc] = useState({
    id: uuidv4(),
    folderId,
  });

  const handleSubmit = async (e) => {
    OpenModalDocumentCreated();
    dispatch(CreateDocumentNew(newDoc));
     dispatch(setOpenModalMetadataCreated());
     dispatch(getIndexAllCabinetConfigNotSelect(SelectedCabinet.id));
  };

  const documentNew = (
    <div className={styless.DocumentCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Crear Nuevo Documento</h2>
        </div>
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalDocumentCreated()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalDocumentCreated = () => {
    dispatch(setOpenModalDocumentCreated());
  };

  return (
    <div className={styless.container}>
      <Modal open={DocumentCreated} onClose={OpenModalDocumentCreated}>
        {documentNew}
      </Modal>
      <MetadataCreated documentId={newDoc.id} />
    </div>
  );
};

export default DocumentCreated;
