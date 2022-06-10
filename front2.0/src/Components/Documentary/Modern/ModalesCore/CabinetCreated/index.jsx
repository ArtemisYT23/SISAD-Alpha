import  { useEffect, useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { setOpenModalCabinetCreated } from "../../../../../Store/ModalCore";
import { useDispatch , useSelector } from "react-redux";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";
import { CreateCabinetNew, getAllGroupsCore } from "../../../../../Store/Core";

const useStyless = makeStyles((theme) => ({
    CabinetCreated: {
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

  const CabinetCreatedModal = () => {

    const dispatch = useDispatch();
    const styless = useStyless();

    const { modalCore, core } = useSelector((store) => store);
    const { CabinetCreated } = modalCore;
    const { groups } = core;

    useEffect(() => {
        groups.length == 0 && dispatch(getAllGroupsCore());
    },[]);

    const [gabinetes, setGabinetes] = useState({
        id: uuidv4(),
        name: "",
        description: "",
        path: "../Root",
        groupId: null,
      });
    
    const handleChange = (e) => {
     const { name, value } = e.target;
     setGabinetes({ ...gabinetes, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
        abrirCerrarModal();
        console.log(gabinetes);
        dispatch(CreateCabinetNew(gabinetes));
      };
    
      const cabinet = (
        <div className={styless.CabinetCreated}>
          <form onSubmit={handleSubmit}>
            <div align="center">
              <h2 className="titulo-modal">Crear gabinete</h2>
            </div>
            <br />
            <TextField
              value={gabinetes.name}
              name="name"
              onChange={handleChange}
              required={true}
              label="nombre del gabinete"
              className={styless.textfield}
            />
            <br />
            <TextField
              value={gabinetes.description}
              name="description"
              onChange={handleChange}
              required={true}
              label="descripción"
              className={styless.textfield}
            />
            <br />
            <br />
            <label className="NameLabel">Grupos: </label>
            <select name="groupId" className="Selected" onChange={(e) => handleChange(e)}>
              <option className="defaultOption" value="null">Ninguno</option>
            {groups ? (
            groups.map(({ id, name }, index) => (
              <option key={id} value={id}>{name}</option>
              ))
              ) : (
                <></>
              )}
            </select>
        
            <div align="right">
              <button className="btn-enviar">Crear</button>
              <button className="btn-cancelar" onClick={() => abrirCerrarModal()}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      );

      const abrirCerrarModal = () => {
        dispatch(setOpenModalCabinetCreated());
      };

      return(
        <div className={styless.container}>
        <Modal open={CabinetCreated} onClose={abrirCerrarModal}>
          {cabinet}
        </Modal>
      </div>
      );
  }

  export default CabinetCreatedModal;