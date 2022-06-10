import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalUploadFile } from "../../../../../Store/ModalDocumentary";
import { getTypeFileConfig } from "../../../../../Store/ConfigDocumentary";
import { StyleDragArea } from "../../../../../Styles/Documentary/DragAreaFile";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";
import "../../../../../Styles/Documentary/DragAreaFile/ModalUpload.css";
import {
  setGetNameFileDocu,
  setGetDescriptionFileDocu,
  setGetFileFileDocu,
  sendFileDocumentaryDocu,
  setGetFileTypeFileDocu
} from "../../../../../Store/Upload";
import { useState ,useEffect } from "react";

const useStyless = makeStyles((theme) => ({
  FileUpload: {
    position: "absolute",
    width: "500px",
    height: "75%",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    alignItems: "center",
    justifyContent: "center",
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

const FileUploaderCreated = ({DocumentId}) => {

  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalDocumentary, uploader, configDocument } = useSelector((store) => store);
  const { FileUpload } = modalDocumentary;
  const { TypeFile } = configDocument;

  const [docu, setDocu] = useState({
    DocumentId,
  });

  useEffect(()=> {
    TypeFile.length == 0 && dispatch(getTypeFileConfig());
  },[])

  const setFile = (e) => {
    const file = e.target.files[0];
    dispatch(setGetFileFileDocu(file));
  };

  const handleChange = (e) => {
    const FileType = e.target.value;
    dispatch(setGetFileTypeFileDocu(FileType));
  };


  const SaveFileDocumentary = (e) => {
    e.preventDefault();
    const formFile = new FormData();
    uploader.id && formFile.append("Id", uploader.id);
    uploader.Name && formFile.append("Name", uploader.Name);
    uploader.Description && formFile.append("Description", uploader.Description);
    uploader.File && formFile.append("File", uploader.File);
    uploader.FileTypeId && formFile.append("FileTypeId", uploader.FileTypeId);
    docu.DocumentId && formFile.append("DocumentId", docu.DocumentId);
    dispatch(sendFileDocumentaryDocu(formFile));
    OpenModalUploaderDocu();
  }


  const Uploader = (
    <div className={styless.FileUpload}>
      <form onSubmit={SaveFileDocumentary}>
      <h1 className="titles">Subir Archivos</h1>
      <TextField
        type="text"
        className={styless.textfield}
        required={true}
        label="Nombre"
        onBlur={(e) => dispatch(setGetNameFileDocu(e.target.value))}
      />

      <br />

      <TextField
        type="text"
        className={styless.textfield}
        required={true}
        label="Descripcion"
        onBlur={(e) => dispatch(setGetDescriptionFileDocu(e.target.value))}
      />
      <br />
      <br />
      <StyleDragArea>
        <div className="image-upload-wrap">
          <input
            type="file"
            className="file-upload-input"
            accept=".pdf, .doc, .rar, .txt"
            onInput={(e) => setFile(e)}
          />
        </div>
      </StyleDragArea>
     <div className="ContentFile">
       <label>Tipo de Archivo: </label>
      <select onChange={(e) => handleChange(e)}>
        <option className="defaultOption" value={null} selected="selected">Seleccione Un Tipo</option>
        {TypeFile ? (
          TypeFile.map(({id, name}) => (
            <option key={id} value={id}>{name}</option>
          ))
        ) : (
          <></>
        )}
      </select>
      </div>
      <div className="Container">
        <button className="can" onClick={() => OpenModalUploaderDocu()}>
          CANCEL
        </button>
        <button className="enviar">EMPEZAR A CARGAR</button>
      </div>
      </form>
    </div>
  );

  const OpenModalUploaderDocu = () => {
    dispatch(setOpenModalUploadFile());
  };

  return (
    <Modal open={FileUpload} onClose={OpenModalUploaderDocu}>
      {Uploader}
    </Modal>
  );
};

export default FileUploaderCreated;
