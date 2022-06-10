import { useState } from "react";
import { Modal} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch , useSelector } from "react-redux";
import { DeleteFolderCore } from "../../../../../Store/Core";
import { setOpenModalFolderDelete } from "../../../../../Store/ModalCore"; 
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";

const useStyless = makeStyles((theme) => ({
    FolderDelete: {
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

const FolderDelete = ({ id, name, cabinetId }) => {

    const styless = useStyless();
    const dispatch = useDispatch();
    const { modalCore } = useSelector((store) => store);
    const { FolderDelete } = modalCore;

    const [folde, setFolder] = useState({
        id,
        name: "",
        description: "",
        path: "../Root",
        cabinetId,
        folderId: null,
      });

      const handleSubmit = async (e) => {
        OpenModalDeleteFolder();
        dispatch(DeleteFolderCore(folde, id));
      };

      const deleteFolder = (
        <div className={styless.FolderDelete}>
            <form onSubmit={handleSubmit}>
                <div align="center">
                  <h2 className="titulo-modal">Eliminar la carpeta {name}</h2>
                </div>
                <div className="container-d" align="right">
                <button className="btn-eliminar">Eliminar</button>
                <button className="btn-cancel" onClick={() => OpenModalDeleteFolder()}>Cancelar</button>
                </div>
            </form>
        </div>
    );

    const OpenModalDeleteFolder = () => {
        dispatch(setOpenModalFolderDelete());
    };

    return(
        <div className={styless.container}>
        <Modal open={FolderDelete} onClose={OpenModalDeleteFolder}>
          {deleteFolder}
        </Modal>
      </div>
    );
}

export default FolderDelete;