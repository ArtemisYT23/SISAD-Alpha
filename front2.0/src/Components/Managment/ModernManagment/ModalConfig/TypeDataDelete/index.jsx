import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenTypeDataDelete } from "../../../../../Store/ModalConfig";
import { DeleteTypeDataConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";

const useStyless = makeStyles((theme) => ({
  TypeDataDelete: {
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

const TypeDataDelete = ({ id }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig } = useSelector((store) => store);
  const { TypeDataDelete } = modalConfig;

  const [DeleteData, setDeleteData] = useState({
    id,
    name: "",
  });

  const handleSubmit = async (e) => {
    OpenModalDataTypeDelete();
    dispatch(DeleteTypeDataConfig(DeleteData, id));
  };

  const typeDelete = (
    <div className={styless.TypeDataDelete}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Eliminar Tipo de dato</h2>
        </div>
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalDataTypeDelete()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalDataTypeDelete = () => {
    dispatch(setOpenTypeDataDelete());
  };

  return (
    <div className={styless.container}>
      <Modal open={TypeDataDelete} onClose={OpenModalDataTypeDelete}>
        {typeDelete}
      </Modal>
    </div>
  );
};

export default TypeDataDelete;
