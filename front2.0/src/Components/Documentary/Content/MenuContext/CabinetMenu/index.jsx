import { Line } from "../../../../../Styles/Documentary/MenuContext";
import { useDispatch } from "react-redux";
import { setOpenModalCabinetUpdate, setOpenModalCabinetDelete } from "../../../../../Store/ModalCore";
import CabinetUpdate from "../../../Modern/ModalesCore/CabinetUpdate";
import CabinetDelete from "../../../Modern/ModalesCore/CabinetDelete";
import { SelectedIndexConfig } from "../../../../../Store/ModalConfig";
import { setSelectedCabinetCoreNotSelected, getIndexAllCabinetConfig } from "../../../../../Store/Core";

const CabinetMenu = ({ x, y, id }) => {
    const dispatch = useDispatch();

    const style = () => {
        return {
          height: 170,
          width: 140,
          zIndex: 1,
          borderRadius: 10,
          backgroundColor: "#fffbf8",
          boxShadow: "0 0 1.5px 1px #F68A20",
          color: "#FCD2D1",
          display: "flex",
          flexDirection: "column",
          padding: 8,
          top: y,
          left: x,
          position: "absolute",
        };
      };

      const AbrirModalActualizarCabinet = () => {
        dispatch(setOpenModalCabinetUpdate());
      };

      const AbrirModalEliminarCabinet = () => {
        dispatch(setOpenModalCabinetDelete());
      };

      const AbrilModalIndexCreated = (index) => {
        dispatch(SelectedIndexConfig());
        dispatch(setSelectedCabinetCoreNotSelected(index));
        dispatch(getIndexAllCabinetConfig(index));
      };

      return(
        <div style={style()}>
        <div
          onClick={() => AbrirModalActualizarCabinet()}
          style={{ ...styles.div, ...styles.margin }}
        >
          Renombrar
        </div>
        
        <CabinetUpdate id={id}/>

        <Line />
        <div style={styles.div} onClick={() => AbrilModalIndexCreated(id)}>Configurar</div>
        <Line />
        <div style={{ ...styles.div }}>Copiar</div>
        <Line />
        <div style={styles.div}>Pegar</div>
        <Line />
        <div style={styles.div} onClick={() =>AbrirModalEliminarCabinet()}>Eliminar</div>
        
        <CabinetDelete id={id}/>
      </div>
    );
};

const styles = {
    div: {
      flex: 1,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fffbf8",
      color: "#F68A20",
      fontWeight: "bold",
      cursor: "pointer",
    },
    margin: {
      margin: "5px 0",
    },
  };

export default CabinetMenu;