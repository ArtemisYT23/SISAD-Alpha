import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch , useSelector } from "react-redux";
import { UpdateCabinetCore } from "../../../../../Store/Core";
import { setOpenModalCabinetUpdate } from "../../../../../Store/ModalCore";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
    CabinetUpdate: {
      position: "absolute",
      width: "400px",
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

const CabinetUpdate = ({ id, name, description }) => {

    const styless = useStyless();
    const dispatch = useDispatch();
    const { modalCore } = useSelector((store) => store);
    const { CabinetUpdate } = modalCore;

    const [gabi, setGabi] = useState({
        id,
        name: "",
        description: "",
        path: "../Root",
        onDay: false,
        groupId: null,
      });

      const handleChange = async (e) => {
        const { name, value } = e.target;
        setGabi({ ...gabi, [name]: value });
        console.log(gabi);
      };

      const handleSubmit = async (e) => {
        abrirModalUpdateCabinet();
        dispatch(UpdateCabinetCore(gabi, id));
      }    

      const Update = (
        <div className={styless.CabinetUpdate}>
          <form onSubmit={handleSubmit}>
            <div align="center">
              <h2 className="titulo-modal">Gabinete {name}</h2>
            </div>
              
            <TextField
              value={gabi.name}
              name="name"
              onChange={handleChange}
              required={true}
              placeholder={name}
              label="nombre de la carpeta"
              className={styless.textfield}
            />
            <br />
            <TextField
              value={gabi.description}
              name="description"
              onChange={handleChange}
              placeholder={description}
              required={true}
              label="descripcion"
              className={styless.textfield}
            />
            <br />
            <br />
            <div align="right">
              <button className="btn-enviar">Actualizar</button>
              <button className="btn-cancelar" onClick={() => abrirModalUpdateCabinet()}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      );

      const abrirModalUpdateCabinet = () => {
        dispatch(setOpenModalCabinetUpdate());
      };

    return(
      <div className={styless.container}>
        <Modal open={CabinetUpdate} onClose={abrirModalUpdateCabinet}>
          {Update}
        </Modal>
      </div>
    );
};

export default CabinetUpdate;