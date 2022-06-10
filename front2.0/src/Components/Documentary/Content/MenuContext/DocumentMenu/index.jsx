import { Line } from "../../../../../Styles/Documentary/MenuContext";
import { useDispatch, useSelector } from "react-redux";
import DocumentCreated from "../../../Modern/ModalesDocumentary/DocumentCreated";
import { setOpenModalDocumentCreated } from "../../../../../Store/ModalDocumentary"; 

const DocumentMenu = ({ x, y, folderId }) => {

    const dispatch = useDispatch();  
    const { core } = useSelector((store) => store);

    const OpenModalDocumentCreate = () =>{
      dispatch(setOpenModalDocumentCreated());
    };

    const style = () => {
        return {
          height: 170,
          width: 160,
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

    return(
        <div style={style()}>
        <div
          onClick={() => OpenModalDocumentCreate()}
          style={{ ...styles.div, ...styles.margin }}
        >
          Crear Documento
        </div>
        <DocumentCreated folderId={folderId}/>
        <Line />
        <div style={styles.div}>Ordenar</div>
        <Line />
        <div style={{ ...styles.div }}>Filtrar</div>
        <Line />
        <div style={styles.div}>Detalles</div>
      </div>
    );
}

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

export default DocumentMenu;