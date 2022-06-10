import axios from "axios";
import { CoreInstance, DocumentInstance, OptionConfig } from "../../config/axios";

//estados iniciales
const initialState = {
    options:[],
    ListData:[],
    TypeData:[],
    ElementList: [],
    TypeFile: [],
    
    //filtro de 1 a 1
    SelectedOption:"",
    SelectedTypeData: null,
    SelectedList: null,
    selectedElement: [],
    SelectedTypeFile:null,
    //filtro 1 a muchos
    ElementFilterList: [],
    ItemListMetadata: [],
    
    //elemento seleccionado 
    elementError: "",
    selected: "",

};

//tag de acciones
//Menu de opciones
const GET_ALL_OPTIONS_CONFIG = "GET_ALL_OPTIONS_CONFIG";
//Menu filtro de 1 elemento
const SELECTED_OPTIONS_CONFIG = "SELECTED_OPTIONS_CONFIG";
const OPTIONS_ERRORS_CONFIG = "OPTIONS_ERRORS_CONFIG";
//filtro 1 a 1 
const SELECTED_TYPEDATA_CONFIG = "SELECTED_TYPEDATA_CONFIG";
const SELECTED_ERRORS_TYPEDATA_CONFIG = "SELECTED_ERRORS_TYPEDATA_CONFIG";
//filtro 1 a muchos
const FILTER_ELEMENTLIST_CONFIG = "FILTER_ELEMENTLIST_CONFIG";


// datos
const GET_ALL_TYPEDATA_CONFIG = "GET_ALL_TYPEDATA_CONFIG";

//guardado de datos
//tipo de datos
const DATATYPE_CREATED_CONFIG = "DATATYPE_CREATED_CONFIG";
const UPDATE_TYPEDATA_CONFIG = "UPDATE_TYPEDATA_CONFIG";
const DELETE_TYPEDATA_CONFIG = "DELETE_TYPEDATA_CONFIG";
//lista de datos
const GET_ALL_LISTDATA_CONFIG = "GET_ALL_LISTDATA_CONFIG";
const SELECTED_ERRORS_LIST_CONFIG = "SELECTED_ERRORS_LIST_CONFIG";
const SELECTED_LIST_CONFIG = "SELECTED_LIST_CONFIG";
//elementos de una lista
const GET_ALL_ELEMENTLIST_CONFIG = "GET_ALL_ELEMENTLIST_CONFIG";
const SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS = "SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS";
const SET_SELECTED_ELEMENT_LIST_ITEM = "SET_SELECTED_ELEMENT_LIST_ITEM";
const GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU = "GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU";
const GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU = "GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU";

//tipo de archivo
const GET_ALL_TYPE_FILE_CONFIG = "GET_ALL_TYPE_FILE_CONFIG";
const SELECTED_ERRORS_TYPE_FILE_CONFIG = "SELECTED_ERRORS_TYPE_FILE_CONFIG";
const SELECTED_TYPEFILE_CONFIG = "SELECTED_TYPEFILE_CONFIG";
const FILE_TYPE_UPDATED_CONFIG = "FILE_TYPE_UPDATED_CONFIG";
const TYPE_FILE_DELETE_CONFIG = "TYPE_FILE_DELETE_CONFIG";
const TYPE_FILE_CREATED_CONFIG = "TYPE_FILE_CREATED_CONFIG";

//indice

const INDEXCABINET_CREATED_CONFIG = "INDEXCABINET_CREATED_CONFIG";




//payload de tag de acciones
export default function ConfigDocumentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TYPEDATA_CONFIG:
        case GET_ALL_OPTIONS_CONFIG:
        case SELECTED_OPTIONS_CONFIG:
        case SELECTED_TYPEDATA_CONFIG:
        case SELECTED_ERRORS_TYPEDATA_CONFIG:
        //typeData crud
        case DATATYPE_CREATED_CONFIG:
        case UPDATE_TYPEDATA_CONFIG:
        case DELETE_TYPEDATA_CONFIG:
        //Lista de datos
        case GET_ALL_LISTDATA_CONFIG:
        case SELECTED_ERRORS_LIST_CONFIG:
        case SELECTED_LIST_CONFIG:
        //elemento de listas
        case GET_ALL_ELEMENTLIST_CONFIG:
        case FILTER_ELEMENTLIST_CONFIG:
        case SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS:
        case SET_SELECTED_ELEMENT_LIST_ITEM:
        case GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU:
        case GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU:
        //tipo de archivo
        case GET_ALL_TYPE_FILE_CONFIG:
        case SELECTED_ERRORS_TYPE_FILE_CONFIG:
        case SELECTED_TYPEFILE_CONFIG:
        case TYPE_FILE_CREATED_CONFIG:
        case FILE_TYPE_UPDATED_CONFIG:
        case TYPE_FILE_DELETE_CONFIG:
        //indices
        case INDEXCABINET_CREATED_CONFIG:
        
            return action.payload;
        default:
            return state;
    }
};

//acciones

//traer todos las opciones de menu de managment
export const getAllOptionsConfig = () => async (dispatch, getState) => {
    const res = await OptionConfig.get("config");
    const { configDocument } = getState();
    dispatch({
        type: GET_ALL_OPTIONS_CONFIG,
        payload: { ...configDocument, options: res.data },
    });
};

//Filtrar y guardar el dato seleccionado
export const setSelectedOptionsConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { options } = configDocument;
    const SelectedOption = options.find(option => option.id == id);

    if (SelectedOption == undefined) {
        dispatch({
            type: OPTIONS_ERRORS_CONFIG,
            payload: { ...configDocument, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_OPTIONS_CONFIG,
        payload: { ...configDocument, SelectedOption, selected: "opciones" },
    });
};

//Traer todos los tipos de datos
export const getTypeDataConfig = () => async(dispatch, getState) => {
    const res = await CoreInstance.get("datatype");
    const { configDocument } = getState();
    dispatch({
        type: GET_ALL_TYPEDATA_CONFIG,
        payload: { ...configDocument, TypeData: res.data},
    });
};

//Guardar dato seleccionado filtro 1 a mucho
export const setSelectedTypeDataConfig = (id) => async(dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeData } = configDocument;
    const SelectedTypeData = TypeData.find(TypeData => TypeData.id == id);

    if(SelectedTypeData == undefined ) {
        dispatch({
            type: SELECTED_ERRORS_TYPEDATA_CONFIG,
            payload: { ...configDocument, elementError:"El id no existe"},
        });
        return;
    }
    dispatch({
        type: SELECTED_TYPEDATA_CONFIG,
        payload: { ...configDocument, SelectedTypeData, selected:"typeData"}
    });
};

//traer todas las listas de datos
export const getListDataConfig = () => async(dispatch, getState) => {
    const res = await CoreInstance.get("list");
    const { configDocument } = getState();
    dispatch({
        type: GET_ALL_LISTDATA_CONFIG,
        payload: { ...configDocument, ListData: res.data},
    });
};

// filtrar lista seleccionada 
export const SelectedListConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { ListData } = configDocument;
    const SelectedList = ListData.find(ListData => ListData.id == id);

    if (SelectedList == undefined) {
        dispatch({
            type: SELECTED_ERRORS_LIST_CONFIG,
            payload: { ...configDocument, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SELECTED_LIST_CONFIG,
        payload: { ...configDocument, SelectedList, selected: "list" },
    })
};


//traer todos los elementos de un lista
export const getAllElementListConfig = () => async (dispatch, getState) => {
    const res = await CoreInstance.get("listelement");
    const { configDocument } = getState();
    dispatch({
        type: GET_ALL_ELEMENTLIST_CONFIG,
        payload: { ...configDocument, ElementList: res.data },
    });
};

//filtrar elementos de una lista
export const setElementListFilterConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { ElementList } = configDocument;
    dispatch({
        type: FILTER_ELEMENTLIST_CONFIG,
        payload: {
            ...configDocument, ElementFilterList: ElementList.filter(
                ElementList => ElementList.listId == id)
        },
    });
};


//filtrar elementos mediante el id de la lista
export const getItemElementByIdList = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    try {
        const response = await axios({
          url: `https://localhost:7188/api/listelementbylist/${id}`,
        });
        
        console.log(response.status);
        if (response.status == 200) {
          dispatch({
            type: GET_ALL_ELEMENTLIST_ALL_METADATA_DOCU,
            payload: { ...configDocument, ItemListMetadata: response.data},
          });
        }
        } catch (error) {
          dispatch({
            type: GET_ALL_ELEMENTLIST_ALL_METADATA_FAILED_DOCU,
            payload: { ...configDocument, ItemListMetadata: [] },
          });
      }
};


//filtro para guardar elemento seleccionado
export const setSelectedElementConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { ElementList } = configDocument;
    const selectedElement = ElementList.find(ElementList => ElementList.id == id);

    if (selectedElement == undefined) {
        dispatch({
            type: SET_SELECTED_ELEMENT_LIST_ITEM_ERRORS,
            payload: { ...configDocument, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SET_SELECTED_ELEMENT_LIST_ITEM,
        payload: { ...configDocument, selectedElement, selected: "Element" },
    });
};

//Traer todos los tipos de archivos
export const getTypeFileConfig = () => async (dispatch, getState) => {
    const res = await CoreInstance.get("filetype");
    const { configDocument } = getState();
    dispatch({
        type: GET_ALL_TYPE_FILE_CONFIG,
        payload: { ...configDocument, TypeFile: res.data },
    });
};

//Filtrar Tipo de archivo seleccionado 
export const setSelectedTypeFileConfig = (id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeFile } = configDocument;
    const SelectedTypeFile = TypeFile.find(TypeFile => TypeFile.id == id);

    if (SelectedTypeFile == undefined) {
        dispatch({
            type: SELECTED_ERRORS_TYPE_FILE_CONFIG,
            payload: { ...configDocument, elementError: "El id no existe" },
        });
        return;
    }
    dispatch({
        type: SELECTED_TYPEFILE_CONFIG,
        payload: { ...configDocument, SelectedTypeFile, selected: "TypeFile"}
    });
}



/*<---------------Guardado de datos Managment crud----------------------->*/

//Guardar nuevo tipo de dato y actualizar el estado global
export const CreatedTypeDataConfig = (newData) => async(dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeData } = configDocument;
    axios({
        url: `https://localhost:7188/api/datatype`,
        method: "PUT",
        data: newData,
        headers: {
            "Content-Type": "Application/json",
        },
    })
    .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            dispatch({
                type: DATATYPE_CREATED_CONFIG,
                payload: { ...configDocument,
                    TypeData: [...TypeData, newData] }
            })
        }
    }).catch(function (error) {
        console.log(error);
    });
};

//Editar tipo de dato y estado global
export const UpdateTypeDataConfig = (UpdateData, id) => async(dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeData } = configDocument;
    axios({
        url: `https://localhost:7188/api/datatype/${id}`,
        method: "PUT",
        data: UpdateData,
        headers: {
            "Content-Type": "Application/json",
        },
    })
    .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            dispatch({
                type: UPDATE_TYPEDATA_CONFIG,
                payload: { ...configDocument,
                    TypeData: [...TypeData, UpdateData] }
            })
        }
    }).catch(function (error) {
        console.log(error);
    });
};

//Eliminar tipo de dato y actualizar estado 
export const DeleteTypeDataConfig = (DeleteData, id) => async(dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeData } = configDocument;
    axios({
        url: `https://localhost:7188/api/datatype/${id}`,
        method: "DELETE",
        data: DeleteData,
        headers: {
            "Content-Type": "Application/json",
        },
    })
    .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            dispatch({
                type: DELETE_TYPEDATA_CONFIG,
                payload: { ...configDocument,
                    TypeData: [...TypeData, DeleteData] }
            })
        }
    }).catch(function (error) {
        console.log(error);
    });
};

//Crear nuevo tipo de archivo
export const CreatedTypeFileConfig = (newFile) => async(dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeFile } = configDocument;
    axios({
        url: `https://localhost:7188/api/filetype`,
        method: "PUT",
        data: newFile,
        headers: {
            "Content-Type": "Application/json",
        },
    })
        .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                dispatch({
                    type: TYPE_FILE_CREATED_CONFIG,
                    payload: { ...configDocument, TypeFile: [...TypeFile, newFile] }
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};


//Editar tipo de archivo y actualizar estado global 
export const UpdateTypeFileConfig = (update, id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeFile } = configDocument;
    axios({
        url: `https://localhost:7188/api/filetype/${id}`,
        method: "PUT",
        data: update,
        headers: {
            "Content-Type": "Application/json",
        },
    })
        .then(function (response) {
            console.log(response)
            if (response.status == 200) {
                dispatch({
                    type: FILE_TYPE_UPDATED_CONFIG,
                    payload: { ...configDocument, TypeFile: [...TypeFile, update] }
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};

//eliminar tipo de archivo y actualizar estado global
export const DeleteTypeFileConfig = (update, id) => async (dispatch, getState) => {
    const { configDocument } = getState();
    const { TypeFile } = configDocument;
    axios({
        url: `https://localhost:7188/api/filetype/${id}`,
        method: "DELETE",
        data: update,
        headers: {
            "Content-Type": "Application/json",
        },
    })
        .then(function (response) {
            console.log(response)
            if (response.status == 200) {
                dispatch({
                    type: TYPE_FILE_DELETE_CONFIG,
                    payload: { ...configDocument, TypeFile: [...TypeFile, update] }
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};


//Crear indice de gabinete y actualizar estado
export const setIndexCabinetCreatedConfig = (newIndex) => async(dispatch, getState) => {
    axios({
        url:`https://localhost:7188/api/index`,
        method: "PUT",
        data: newIndex,
        headers: {
            "Content-Type": "Application/json",
        },
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    });
};