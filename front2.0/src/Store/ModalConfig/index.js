//estados iniciales
const initialState = {
  IndexCreated: false,
  IndexUpdate: false,
  IndexDelete: false,
  TypeDataCreated: false,
  TypeDataUpdate: false,
  TypeDataDelete: false,
  ListDataCreated: false,
  ListDataUpdate: false,
  ListDataDelete: false,
  ListElementCreated: false,
  ListElementUpdate: false,
  ListElementDelete: false,
  TypeFileCreated: false,
  TypeFileUpdate: false,
  TypeFileDelete: false,
  selectedConfig: "",  
};

//tag de acciones
const OPEN_MODAL_CREATED_INDEX_CONFIG = "OPEN_MODAL_CREATED_INDEX_CONFIG";
const OPEN_CONFIG_INDEX = "OPEN_CONFIG_INDEX";
const OPEN_MODAL_CREATED_TYPEDATA_CONFIG = "OPEN_MODAL_CREATED_TYPEDATA_CONFIG";
const OPEN_MODAL_UPDATE_TYPEDATA_CONFIG = "OPEN_MODAL_UPDATE_TYPEDATA_CONFIG";
const OPEN_MODAL_DELETE_TYPEDATA_CONFIG = "OPEN_MODAL_DELETE_TYPEDATA_CONFIG";
const OPEN_MODAL_CREATED_LISTDATA_CONFIG = "OPEN_MODAL_CREATED_LISTDATA_CONFIG";
const OPEN_MODAL_UPDATE_LISTDATA_CONFIG = "OPEN_MODAL_UPDATE_LISTDATA_CONFIG";
const OPEN_MODAL_DELETE_LISTDATA_CONFIG = "OPEN_MODAL_DELETE_LISTDATA_CONFIG";
const OPEN_MODAL_CREATED_LISTELEMENT_CONFIG = "OPEN_MODAL_CREATED_LISTELEMENT_CONFIG";
const OPEN_MODAL_UPDATE_ELEMENT_CONFIG = "OPEN_MODAL_UPDATE_ELEMENT_CONFIG";
const OPEN_MODAL_DELETE_ELEMENT_CONFIG = "OPEN_MODAL_DELETE_ELEMENT_CONFIG";
const OPEN_MODAL_TYPEFILE_CREATED_CONFIG = "OPEN_MODAL_TYPEFILE_CREATED_CONFIG";
const OPEN_MODAL_TYPEFILE_UPDATE_CONFIG = "OPEN_MODAL_TYPEFILE_UPDATE_CONFIG";
const OPEN_MODAL_TYPEFILE_DELETE_CONFIG = "OPEN_MODAL_TYPEFILE_DELETE_CONFIG";
const OPEN_MODAL_INDEX_CREATED_CONFIG = "OPEN_MODAL_INDEX_CREATED_CONFIG";

//payload de tag de acciones 
export default function ModalConfigReducer(state = initialState, action) {
    switch (action.type){
        case OPEN_MODAL_CREATED_INDEX_CONFIG:
        case OPEN_CONFIG_INDEX:
        case OPEN_MODAL_CREATED_TYPEDATA_CONFIG:
        case OPEN_MODAL_UPDATE_TYPEDATA_CONFIG:
        case OPEN_MODAL_DELETE_TYPEDATA_CONFIG:
        case OPEN_MODAL_CREATED_LISTDATA_CONFIG:
        case OPEN_MODAL_UPDATE_LISTDATA_CONFIG:
        case OPEN_MODAL_DELETE_LISTDATA_CONFIG:
        case OPEN_MODAL_CREATED_LISTELEMENT_CONFIG:
        case OPEN_MODAL_UPDATE_ELEMENT_CONFIG:
        case OPEN_MODAL_DELETE_ELEMENT_CONFIG:
        case OPEN_MODAL_TYPEFILE_CREATED_CONFIG:
        case OPEN_MODAL_TYPEFILE_UPDATE_CONFIG:
        case OPEN_MODAL_TYPEFILE_DELETE_CONFIG:
        case OPEN_MODAL_INDEX_CREATED_CONFIG:
            return action.payload;
        default:
            return state;
    }
};

//acciones 

//Activar Pantalla de Configuracion de un gabinete
export const SelectedIndexConfig = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_CONFIG_INDEX,
        payload: { ...modalConfig, selectedConfig: "ConfigCabinet" },
    });
  };

//modal para crear nuevo indice
export const setOpenModalConfigCreated = () => async(dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_CREATED_INDEX_CONFIG,
        payload: { ...modalConfig, IndexCreated:!modalConfig.IndexCreated }
    });
};

/*<---------------------Managment--------------------->*/

//modal para guardado de nuevo tipo de dato 
export const setOpenModalTypeDataCreated = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_CREATED_TYPEDATA_CONFIG,
        payload: { ...modalConfig, TypeDataCreated:!modalConfig.TypeDataCreated }
    });
};

//modal para actualizar un tipo de dato 
export const setOpenModalTypeDataUpdate = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_TYPEDATA_CONFIG,
        payload: { ...modalConfig, TypeDataUpdate:!modalConfig.TypeDataUpdate }
    });
};

//modal para eliminar un tipo de dato
export const setOpenTypeDataDelete = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type:OPEN_MODAL_DELETE_TYPEDATA_CONFIG,
        payload: { ...modalConfig, TypeDataDelete:!modalConfig.TypeDataDelete }
    });
};

//Modal Crear nueva lista de datos
export const setOpenModalListDataCreated = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_CREATED_LISTDATA_CONFIG,
        payload: { ...modalConfig, ListDataCreated:!modalConfig.ListDataCreated }
    });
};

//Modal Editar lista de datos
export const setOpenModalListDataUpdate = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_LISTDATA_CONFIG,
        payload: { ...modalConfig, ListDataUpdate:!modalConfig.ListDataUpdate }
    });
};

//modal para eliminar lista de datos
export const setOpenListDataDelete = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type:OPEN_MODAL_DELETE_LISTDATA_CONFIG,
        payload: { ...modalConfig, ListDataDelete:!modalConfig.ListDataDelete }
    });
};

//modal para crear nuevo elemento de la lista
export const setOpenModalListElementCreated = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_CREATED_LISTELEMENT_CONFIG,
        payload: { ...modalConfig, ListElementCreated:!modalConfig.ListElementCreated }
    });
};

//modal para editar elemento de una lista
export const setOpenModalListElementUpdate = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_UPDATE_ELEMENT_CONFIG,
        payload: { ...modalConfig, ListElementUpdate:!modalConfig.ListElementUpdate }
    });
};

//modal para eliminar elemento de una lista
export const setOpenModalListElementDelete = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_ELEMENT_CONFIG,
        payload: { ...modalConfig, ListElementDelete:!modalConfig.ListElementDelete }
    });
};

//modal para guardar nuevo tipo de archivo
export const setOpenModalTypeFileCreated = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_TYPEFILE_CREATED_CONFIG,
        payload: {
            ...modalConfig, TypeFileCreated: !modalConfig.TypeFileCreated
        }
    });
};

//Modal para Editar tipo de archivo
export const setOpenModalTypeFileUpdate = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_TYPEFILE_UPDATE_CONFIG,
        payload: {
            ...modalConfig, TypeFileUpdate: !modalConfig.TypeFileUpdate
        }
    });
};

//Modal para eliminar tipo de archivo
export const setOpenModalTypeFileDelete = () => async (dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_TYPEFILE_DELETE_CONFIG,
        payload: {
            ...modalConfig, TypeFileDelete:!modalConfig.TypeFileDelete
        }
    });
};


//Modal para Crear nuevo indice
export const setOpenModalIndexCreated = () => async(dispatch, getState) => {
    const { modalConfig } = getState();
    dispatch({
        type: OPEN_MODAL_INDEX_CREATED_CONFIG,
        payload: {
            ...modalConfig, IndexCreated:!modalConfig.IndexCreated
        }
    });
};


