import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch , useSelector } from "react-redux";
import { DeleteCabinetCore } from "../../../../../Store/Core";
import { setOpenModalCabinetDelete } from "../../../../../Store/ModalCore";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";

const useStyless = makeStyles((theme) => ({
    CabinetDelete: {
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

const CabinetDelete = ({id, name}) => {

    const styless = useStyless();
    const dispatch = useDispatch();
    const { modalCore } = useSelector((store) => store);
    const { CabinetDelete } = modalCore;

    const [gabi, setGabi] = useState({
        id,
        name: "",
        description: "",
        path: "../Root",
        onDay: false,
        groupId: null,
      });
    
    const handleSubmit = async (e) => {
     OpenModalDeleteCabinet();
     dispatch(DeleteCabinetCore(gabi, id));
    };

    const deleteGab = (
        <div className={styless.CabinetDelete}>
            <form onSubmit={handleSubmit}>
                <div align="center">
                  <h2 className="titulo-modal">Eliminar el gabinete {name}</h2>
                </div>
                <div className="container-d" align="right">
                <button type="submit" className="btn-eliminar">Eliminar</button>
                <button className="btn-cancel" onClick={() => OpenModalDeleteCabinet()}>Cancelar</button>
                </div>
            </form>
        </div>
    );

    const OpenModalDeleteCabinet = () => {
        dispatch(setOpenModalCabinetDelete());
    };

    return(
        <div className={styless.container}>
        <Modal open={CabinetDelete} onClose={OpenModalDeleteCabinet}>
          {deleteGab}
        </Modal>
      </div>
    );
} 

export default CabinetDelete;