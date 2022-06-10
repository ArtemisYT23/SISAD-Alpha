import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CreatedTypeDataConfig } from "../../../../../Store/ConfigDocumentary";
import { setOpenModalTypeDataCreated } from "../../../../../Store/ModalConfig";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
    TypeDataCreated: {
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

const TypeDataCreated = () => {

    const dispatch = useDispatch();
    const styless = useStyless();
    const { modalConfig } = useSelector((store) => store);
    const { TypeDataCreated } = modalConfig;

    
    const [ newData, setNewData ] = useState({
        id: uuidv4(),
        name:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData({ ...newData, [name]: value});
    };

    const handleSubmit = async (e) => {
        OpenModalDataTypeCreated();
        dispatch(CreatedTypeDataConfig(newData));
    };

    const typeData = (
        <div className={styless.TypeDataCreated}>
          <form onSubmit={handleSubmit}>
            <div align="center">
              <h2 className="titulo-modal">Nuevo Tipo de Dato</h2>
            </div>
            <br />
            <TextField
              value={newData.name}
              name="name"
              onChange={handleChange}
              label="Nombre"
              required={true}
              className={styless.textfield}
            />
            <br />
            <div align="right">
              <button className="btn-enviar">Crear</button>
              <button className="btn-cancelar" onClick={() => OpenModalDataTypeCreated()}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      );
    
      const OpenModalDataTypeCreated = () => {
        dispatch(setOpenModalTypeDataCreated());
      };

    return(
        <div className={styless.container}>
        <Modal open={TypeDataCreated} onClose={OpenModalDataTypeCreated}>
          {typeData}
        </Modal>
      </div>
    );
}

export default TypeDataCreated;