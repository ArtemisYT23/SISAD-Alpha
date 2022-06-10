import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalTypeFileUpdate } from "../../../../../Store/ModalConfig";
import { UpdateTypeFileConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
    TypeFileUpdate: {
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

const TypeFileUpdate = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig } = useSelector((store) => store);
  const { TypeFileUpdate } = modalConfig;

  const [update, setUpdate] = useState({
    id,
    name: "",
    description: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleSubmit = async (e) => {
    OpenModalTypeFileUpdate();
    dispatch(UpdateTypeFileConfig(update, id));
  };

  const bodyUpdate = (
    <div className={styless.TypeFileUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Crear Nuevo Elemento</h2>
        </div>
        <br />
        <TextField
          value={update.name}
          name="name"
          onChange={handleChange}
          required={true}
          label="Nombre"
          placeholder={name}
          className={styless.textfield}
        />
        <br />
        <TextField
          value={update.description}
          name="description"
          onChange={handleChange}
          required={true}
          label="Descripcion"
          placeholder={description}
          className={styless.textfield}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalTypeFileUpdate()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalTypeFileUpdate = () => {
    dispatch(setOpenModalTypeFileUpdate());
  };

  return (
    <div>
      <div className={styless.container}>
        <Modal open={TypeFileUpdate} onClose={OpenModalTypeFileUpdate}>
          {bodyUpdate}
        </Modal>
      </div>
    </div>
  );
};

export default TypeFileUpdate;
