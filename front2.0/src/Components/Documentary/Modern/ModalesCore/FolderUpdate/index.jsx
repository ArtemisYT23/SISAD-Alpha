import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch , useSelector } from "react-redux";
import { UpdateFolderCore } from "../../../../../Store/Core";
import { setOpenModalFolderUpdate } from "../../../../../Store/ModalCore";
import "../../../../../Styles/Documentary/ModalStyle/modal.css"


const useStyless = makeStyles((theme) => ({
    FolderUpdate: {
      position: "absolute",
      with: "400px",
      backgroundColor: "white",
      border: "2px solid white",
      boxShadow: theme.shadows[2],
      padding: "16px 32px 24px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    textfield: {
      width: "100%",
    },
    container: {
      textAlign: "center",
    }
  }));

const FolderUpdate = ({ id, name, description, cabinetId }) => {

    const styless = useStyless();
    const dispatch = useDispatch();
    const { modalCore } = useSelector((store) => store);
    const { FolderUpdate } = modalCore;

    const [folde, setFolder] = useState({
        id,
        name: "",
        description: "",
        path: "../Root",
        cabinetId,
        folderId: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFolder({ ...folde, [name]: value });
        console.log(folde);
      };
    
      const handleSubmit = async (e) => {
        AbrirModalUpdateFolder();
        dispatch(UpdateFolderCore(folde, id));
      };

      const UpdateFolder = (
        <div className={styless.FolderUpdate}>
          <form onSubmit={handleSubmit}>
            <div align="center">
              <h2 className="titulo-modal">Actualizar {name}</h2>
            </div>
    
            <TextField
              value={folde.name}
              name="name"
              onChange={handleChange}
              placeholder={name}
              required={true}
              label="nombre de la carpeta"
              className={styless.textfield}
            />
            <br />
            <TextField
              value={folde.description}
              name="description"
              onChange={handleChange}
              placeholder={description}
              autoComplete={false}
              required={true}
              label="descripcion"
              className={styless.textfield}
            />
            <br />
            <div align="right">
              <button className="btn-enviar">Actualizar</button>
              <button className="btn-cancelar" onClick={() => AbrirModalUpdateFolder()}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      );

      const AbrirModalUpdateFolder = () => {
        dispatch(setOpenModalFolderUpdate());
      };

    return(
        <div className={styless.container}>
        <Modal open={FolderUpdate} onClose={AbrirModalUpdateFolder}>
          {UpdateFolder}
        </Modal>
      </div>
    );
}

export default FolderUpdate;