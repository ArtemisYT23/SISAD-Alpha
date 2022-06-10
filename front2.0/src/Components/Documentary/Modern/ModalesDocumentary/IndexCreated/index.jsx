import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig";
import { getTypeDataConfig } from "../../../../../Store/ConfigDocumentary";
import { setIndexCabinetCreatedConfig, getListDataConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modalIndex.css";

const useStyless = makeStyles((theme) => ({
    IndexCreated: {
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
  },
}));

const IndexCreated = ({ nameCabinet, cabinetId}) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig, configDocument } = useSelector((store) => store);
  const { IndexCreated } = modalConfig;
  const { TypeData, ListData } = configDocument;

  useEffect(() => {
    TypeData.length === 0 && dispatch(getTypeDataConfig());
    ListData.length === 0 && dispatch(getListDataConfig());
  }, []);

  const [newConfig, setNewConfig] = useState({
    id: uuidv4(),
    name: "",
    description: "",
    cabinetId,
    dataTypeId: "",
    listId: null,
    required: false,
    unique: false,
    minValue: 0,
    maxValue: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConfig({ ...newConfig, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newConfig);
    dispatch(setIndexCabinetCreatedConfig(newConfig));
    OpenModalIndexCreated();
    setNewConfig({
      id: uuidv4(),
      name: "",
      description: "",
      cabinetId,
      dataTypeId: "",
      listId: null,
      required: false,
      unique: false,
      minValue: 0,
      maxValue: 0
    })
  };

  const bodyIndex = (
    <div className={styless.IndexCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-Modal">GABINETE {nameCabinet}</h2>
        </div>
        <br />

        <TextField
          value={newConfig.name}
          name="name"
          onChange={handleChange}
          required={true}
          label="nombre del índice"
          className={styless.textfield}
        />
        <br />

        <TextField
          value={newConfig.description}
          name="description"
          onChange={handleChange}
          required={true}
          label="Descripción"
          className={styless.textfield}
        />
        <br />
        <br />
        <label className="Name">Tipo de Dato: </label>

        <select
          className="Selected"
          name="dataTypeId"
          label="Tipo de dato"
          onChange={(e) => handleChange(e)}
        >
          <option value="null" selected>Seleccione un Tipo</option>
          {TypeData ? (
            TypeData.map(({ id, name }, index) => (
              <option className="Options" value={id} >
                {name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
        <br />
        {newConfig.dataTypeId == "6009c757-6c0b-4f5d-96e5-44af7382de6d" && (
          
          <select
          className="Selected"
          name="listId"
          onChange={(e) => handleChange(e)}
          >
            {ListData ? (
            ListData.map(({ id, name }, index) => (
              <option className="Options" value={id}>
                {name}
              </option>
            ))
          ) : (
            <></>
          )}
          </select>
        )}

        <TextField
          value={newConfig.minValue}
          name="minValue"
          onChange={handleChange}
          required={true}
          type="Number"
          InputProps={{ inputProps: { min: 1, max: 100 } }}
          label="Minimo"
          className={styless.textfield}
        />

        <TextField
          value={newConfig.maxValue}
          name="maxValue"
          onChange={handleChange}
          required={true}
          type="Number"
          InputProps={{ inputProps: { min: 1, max: 100 } }}
          label="Maximo"
          className={styless.textfield}
        />

        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalIndexCreated()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalIndexCreated = () => {
    dispatch(setOpenModalConfigCreated());
  };

  return (
    <div className={styless.container}>
      <Modal open={IndexCreated} onClose={OpenModalIndexCreated}>
        {bodyIndex}
      </Modal>
    </div>
  );
};

export default IndexCreated;
