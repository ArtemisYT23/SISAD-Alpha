import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalTypeFileCreated } from "../../../../../Store/ModalConfig";
import { CreatedTypeFileConfig } from "../../../../../Store/ConfigDocumentary";

const useStyless = makeStyles((theme) => ({
    TypeFileCreated: {
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

const TypeFileCreated = () => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig } = useSelector((store) => store);
  const { TypeFileCreated } = modalConfig;

  const [newType, setNewType] = useState({
    id: uuidv4(),
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewType({ ...newType, [name]: value });
  };

  const handleSubmit = async (e) => {
    OpenModalTypeFileConfig();
    dispatch(CreatedTypeFileConfig(newType));
  };

  const typefile = (
    <div className={styless.TypeFileCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Nuevo Tipo de Archivo</h2>
        </div>
        <br />
        <TextField
          value={newType.name}
          name="name"
          onChange={handleChange}
          label="Nombre"
          required={true}
          className={styless.textfield}
        />
        <br />
        <TextField
          value={newType.description}
          name="description"
          onChange={handleChange}
          required={true}
          label="Descripcion"
          className={styless.textfield}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button className="btn-cancelar" onClick={() => OpenModalTypeFileConfig()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalTypeFileConfig = () => {
    dispatch(setOpenModalTypeFileCreated());
  };

  return (
    <div className={styless.container}>
      <Modal open={TypeFileCreated} onClose={OpenModalTypeFileConfig}>
        {typefile}
      </Modal>
    </div>
  );
};

export default TypeFileCreated;