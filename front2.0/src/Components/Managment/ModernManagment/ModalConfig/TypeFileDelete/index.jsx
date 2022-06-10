import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalTypeFileDelete } from "../../../../../Store/ModalConfig";
import { DeleteTypeFileConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";

const useStyless = makeStyles((theme) => ({
  TypeFileDelete: {
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

const TypeFileDelete = ({id}) => {

  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig } = useSelector((store) => store);
  const { TypeFileDelete } = modalConfig;

  const [update, setUpdate] = useState({
    id,
    name: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    OpenModalTypeFileDelete();
    dispatch(DeleteTypeFileConfig(update, id));
  };

  const bodyUpdate = (
    <div className={styless.TypeFileDelete}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Eliminar Tipo de Archivo</h2>
        </div>
        <div className="container-d" align="right">
          <button className="btn-eliminar">Eliminar</button>
          <button className="btn-cancel" onClick={() => OpenModalTypeFileDelete()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalTypeFileDelete = () => {
    dispatch(setOpenModalTypeFileDelete());
  };

  return (
    <div>
    <div className={styless.container}>
      <Modal open={TypeFileDelete} onClose={OpenModalTypeFileDelete}>
        {bodyUpdate}
      </Modal>
    </div>
  </div>
  );
};

export default TypeFileDelete;
