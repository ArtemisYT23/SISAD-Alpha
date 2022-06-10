import React,{ useState} from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalListDataUpdate } from "../../../../../Store/ModalConfig";

const useStyless = makeStyles((theme) => ({
    ListDataUpdate: {
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

const ListUpdate = ({ id, name, listId}) => {

    const dispatch = useDispatch();
    const styless = useStyless();
    const { modalConfig } = useSelector((store) => store);
    const { ListDataUpdate } = modalConfig;

    const [edit, setEdit] = useState({
        id,
        name: "",
        listId,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value });
    };

    const handleSubmit = async (e) => { 
        OpenModalUpdateList();
        axios({
            url:`http://localhost:9090/api/list/${id}`,
            method: "PUT",
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

     const body = (
        <div className={styless.ListDataUpdate}>
            <form onSubmit={handleSubmit}>
                <div align="center">
                    <h2 className="titulo-modal">Editar Lista</h2>
                </div>
                <br />
                <TextField
                value={edit.name}
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
                    <button className="btn-cancelar" onClick={() => OpenModalUpdateList()}>Cancelar</button>
                </div>
            </form>
        </div>
    );

    const OpenModalUpdateList = () => {
        dispatch(setOpenModalListDataUpdate());
    };

    return(
        <div className={styless.container}>
            <Modal open={ListDataUpdate} onClose={OpenModalUpdateList}>
                {body}
            </Modal>
        </div>
    );
}

export default ListUpdate;
