import React,{ useState} from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalListElementDelete } from "../../../../../Store/ModalConfig";

const useStyless = makeStyles((theme) => ({
    ListElementDelete: {
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

const ElementDelete = ({ id }) => {

    const dispatch = useDispatch();
    const styless = useStyless();
    const { modalConfig } = useSelector((store) => store);
    const { ListElementDelete } = modalConfig;

    const [edit, setEdit] = useState({
        id,
        name: "",
        listId: "",
    });

    const handleSubmit = async (e) => { 
        CloseModalDeleteElement();
        axios({
            url:`http://localhost:9090/api/listelement/${id}`,
            method: "DELETE",
            data: edit,
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

     const bodyNew = (
        <div className={styless.ListElementDelete}>
        <form onSubmit={handleSubmit}>
          <div align="center">
            <h2 className="titulo-modal">Eliminar Elemento del Listado</h2>
          </div>
          <div className="container-d" align="right">
            <button className="btn-eliminar">Eliminar</button>
            <button className="btn-cancel" onClick={() => CloseModalDeleteElement()}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
     );

     const CloseModalDeleteElement = () => {
        dispatch(setOpenModalListElementDelete());
    }

    return(
        <div className={styless.container}>
            <Modal open={ListElementDelete} onClose={CloseModalDeleteElement}>
                {bodyNew}
            </Modal>
        </div>
    );
}

export default ElementDelete;