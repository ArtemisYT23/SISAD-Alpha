import React, { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalListElementUpdate } from "../../../../../Store/ModalConfig";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
    ListElementUpdate: {
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

const ElementUpdate = ({ id, name, listId }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig } = useSelector((store) => store);
  const { ListElementUpdate } = modalConfig;

  const [editar, setEditar] = useState({
    id,
    name: "",
    listId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditar({ ...editar, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(editar);
    CloseModalEditElement();
    axios({
      url: `http://localhost:9090/api/listelement/${id}`,
      method: "PUT",
      data: editar,
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const body = (
    <div className={styless.ListElementUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Editar Elemento</h2>
        </div>
        <br />
        <TextField
          value={editar.name}
          name="name"
          onChange={handleChange}
          placeholder={name}
          label="Nombre"
          className={styless.textfield}
          autoComplete="off"
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Guardar</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalEditElementConfig()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalEditElementConfig = () => {
    dispatch(setOpenModalListElementUpdate());
  };

  return (
    <div className={styless.container}>
      <Modal open={ListElementUpdate} onClose={OpenModalEditElementConfig}>
        {body}
      </Modal>
    </div>
  );
};


export default ElementUpdate;