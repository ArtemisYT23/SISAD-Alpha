import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  ItemContainer,
  Header,
  TitleList,
  Nuevo,
} from "../../../../Styles/Managment/Modern/ListManagment";
import { getListDataConfig } from "../../../../Store/ConfigDocumentary";
import { setOpenModalListDataCreated, setOpenModalListElementCreated } from "../../../../Store/ModalConfig"; 
import "../../../../Styles/Documentary/ModalStyle/modal.css";
import ElementList from "../ElementList";
import axios from "axios";

const useStyless = makeStyles((theme) => ({
    ListDataCreated: {
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
  
const ListManagment = () => {

  const dispatch = useDispatch();
  const styless = useStyless();
  const { configDocument, modalConfig } = useSelector((store) => store);
  const { ListData } = configDocument;
  const { ListDataCreated } = modalConfig;

  useEffect(() => {
    dispatch(getListDataConfig());
  }, []);

  const [listas, setListas] = useState({
    id: uuidv4(),
    name: "",
    listId: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListas({ ...listas, [name]: value });
  };

  const handleSubmit = async (e) => {
    OpenModalListDataCreated();
    axios({
      url: `http://localhost:9090/api/list`,
      method: "PUT",
      data: listas,
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setListas({
      id: uuidv4(),
      name: "",
      listId: null,
    });
    dispatch(setOpenModalListElementCreated());
  };

  const bodyList = (
    <div className={styless.ListDataCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Crear Nueva Lista</h2>
        </div>
        <br />
        <TextField
          value={listas.name}
          name="name"
          onChange={handleChange}
          required={true}
          label="Nombre"
          className={styless.textfield}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button className="btn-cancelar" onClick={() => OpenModalListDataCreated()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalListDataCreated = () => {
    dispatch(setOpenModalListDataCreated());
  };

  return (
    <ItemContainer>
      <Header>
        <TitleList>Listado de datos</TitleList>
        <Nuevo onClick={() => OpenModalListDataCreated()}>Nuevo</Nuevo>
      </Header>

      <div className={styless.container}>
        <Modal open={ListDataCreated} onClose={OpenModalListDataCreated}>
          {bodyList}
        </Modal>
      </div>

      {ListData.map((ListData, index) => (
        <ElementList
          key={index}
          con={index + 1}
          id={ListData.id}
          name={ListData.name}
          listId={listas.id}
        />
      ))}
    </ItemContainer>
  );
};

export default ListManagment;
