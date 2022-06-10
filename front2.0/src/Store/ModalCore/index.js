//estado inicial
const initialState = {
    CabinetCreated: false,
    CabinetUpdate: false,
    CabinetDelete: false,
    FolderCreated: false,
    FolderUpdate: false,
    FolderDelete: false,
};

// tag de acciones
const OPEN_MODAL_CREATE_CABINET_CORE = "OPEN_MODAL_CREATE_CABINET_CORE";
const OPEN_MODAL_UPDATE_CABINET_CORE = "OPEN_MODAL_UPDATE_CABINET_CORE";
const OPEN_MODAL_DELETE_CABINET_CORE = "OPEN_MODAL_DELETE_CABINET_CORE";
const OPEN_MODAL_CREATE_FOLDER_CORE = "OPEN_MODAL_CREATE_FOLDER_CORE";
const OPEN_MODAL_UPDATE_FOLDER_CORE = "OPEN_MODAL_UPDATE_FOLDER_CORE";
const OPEN_MODAL_DELETE_FOLDER_CORE = "OPEN_MODAL_DELETE_FOLDER_CORE";


//payload de tag de acciones
export default function ModalCoreReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL_CREATE_CABINET_CORE:
        case OPEN_MODAL_UPDATE_CABINET_CORE:
        case OPEN_MODAL_DELETE_CABINET_CORE:
        case OPEN_MODAL_CREATE_FOLDER_CORE:
        case OPEN_MODAL_UPDATE_FOLDER_CORE:
        case OPEN_MODAL_DELETE_FOLDER_CORE:
            return action.payload;
        default:
            return state;
    }
};

//acciones

/*<-----------GABINETES-------------->*/
//Modal para guardar nuevo Gabinete 
export const setOpenModalCabinetCreated = () => async (dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_CREATE_CABINET_CORE,
        payload: {
            ...modalCore, CabinetCreated:!modalCore.CabinetCreated
        }
    });
};

//Modal para actualizar Gabinete
export const setOpenModalCabinetUpdate = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_CABINET_CORE,
        payload: {
            ...modalCore, CabinetUpdate:!modalCore.CabinetUpdate
        }
    });
};

//Modal para Eliminar Gabinete
export const setOpenModalCabinetDelete = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_CABINET_CORE,
        payload: {
            ...modalCore, CabinetDelete:!modalCore.CabinetDelete 
        }
    });
};


/*<--------------FOLDER------------------>*/
//Modal para guardar nueva carpeta
export const setOpenModalFolderCreated = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_CREATE_FOLDER_CORE,
        payload: {
            ...modalCore, FolderCreated:!modalCore.FolderCreated 
        }
    });
};

//Modal para actualizar nueva carpeta
export const setOpenModalFolderUpdate = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_FOLDER_CORE,
        payload: {
            ...modalCore, FolderUpdate:!modalCore.FolderUpdate 
        }
    });
};

//Modal para Borrar Carpeta
export const setOpenModalFolderDelete = () => async(dispatch, getState) => {
    const { modalCore } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_FOLDER_CORE,
        payload: {
            ...modalCore, FolderDelete:!modalCore.FolderDelete 
        }
    });
};
