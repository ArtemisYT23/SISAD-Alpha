import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalTypeDataUpdate } from "../../../../../Store/ModalConfig";
import { UpdateTypeDataConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
    TypeDataUpdate: {
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

const TypeDataUpdate = ({ id  , name }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig } = useSelector((store) => store);
  const { TypeDataUpdate } = modalConfig;

  const [UpdateData, setUpdateData] = useState({
    id,
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...UpdateData, [name]: value });
    console.log(UpdateData);
  };

  const handleSubmit = async (e) => {
    OpenModalDataTypeUpdateConfig();
    dispatch(UpdateTypeDataConfig(UpdateData, id));
  };

  const typeDataEdit = (
    <div className={styless.TypeDataUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Editar Tipo de Dato</h2>
        </div>
        <br />
        <TextField
          value={UpdateData.name}
          name="name"
          onChange={handleChange}
          label="Nombre"
          required={true}
          placeholder={name}
          className={styless.textfield}
        />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalDataTypeUpdateConfig()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalDataTypeUpdateConfig = () => {
    dispatch(setOpenModalTypeDataUpdate());
  };

  return (
    <div className={styless.container}>
      <Modal open={TypeDataUpdate} onClose={OpenModalDataTypeUpdateConfig}>
        {typeDataEdit}
      </Modal>
    </div>
  );
};

export default TypeDataUpdate;
