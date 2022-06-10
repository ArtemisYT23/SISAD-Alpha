import { CoreInstance, FileInstance } from "../../config/axios";
import axios from "axios";

//estados iniciales
const initialState = {
    groups:[],
    cabinets:[],
    foldersCore:[],
    files: [],
    IndexAllCabinet: [],
    //Traer Folder por gabinete
    foldersAllCabinet: [],

    //Filtro 1 a muchos
    GroupsCabinet:[],
    FoldersCabinet: [],

    //Filtro 1 a 1
    SelectedGroup: null,
    SelectedCabinet: null,
    SelectedFolder: null,
    SelectedTraditional: null,
    SelectedFolderTraditional: null,
    //Elemento Seleccionado
    selected: "",
    selectedView: "",
    selectedSearch: "",

    //Error
    elementError: null,
};

//tags de identificacion
//gabinetes
const GET_ALL_CABINETS_CORE = "GET_ALL_CABINETS_CORE";
const SELECTED_CABINET_CORE = "SELECTED_CABINET_CORE";
const SELECTED_ERRORS_CABINET_CORE = "SELECTED_ERRORS_CABINET_CORE";
const SELECTED_CABINET_TRADITIONAL_CORE = "SELECTED_CABINET_TRADITIONAL_CORE";
const SELECTED_ERRORS_CABINET_TRADITIONAL_CORE = "SELECTED_ERRORS_CABINET_TRADITIONAL_CORE";
//grupos
const GET_ALL_GROUPS_CORE = "GET_ALL_GROUPS_CORE";
const SET_FILTER_GROUPS_CORE = "SET_FILTER_GROUPS_CORE";
//Carpetas
const GET_ALL_FOLDERS_CORE = "GET_ALL_FOLDERS_CORE";
const SET_FILTER_FOLDERS_CORE = "SET_FILTER_FOLDERS_CORE";
const SELECTED_FOLDER_CORE = "SELECTED_FOLDER_CORE";
const SELECTED_ERRORS_FOLDER_CORE = "SELECTED_ERRORS_FOLDER_CORE";
const SELECTED_GROUP_CORE = "SELECTED_GROUP_CORE";
const SELECTED_ERRORS_GROUP_CORE = "SELECTED_ERRORS_FOLDER_CORE";
const GET_ALL_FOLDERS_ALL_CABINET_CORE = "GET_ALL_FOLDERS_ALL_CABINET_CORE";
const GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE = "GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE";
const SELECTED_FOLDERS_TRADITIONAL_CORE = "SELECTED_FOLDERS_TRADITIONAL_CORE";
const SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE = "SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE";

//indices
const GET_INDEX_BY_CABINET_CONFIG = "GET_INDEX_BY_CABINET_CONFIG";
const GET_INDEX_BY_CABINET_FAILED_CONFIG =
"GET_INDEX_BY_CABINET_FAILED_CONFIG";

//actualizacion de estado y guardado
const CREATED_CABINETS_CORE = "CREATED_CABINETS_CORE";
const UPDATE_CABINETS_CORE = "UPDATE_CABINETS_CORE";
const CREATED_FOLDER_CORE = "CREATED_FOLDER_CORE";
const UPDATE_FOLDER_CORE = "UPDATE_FOLDER_CORE";
const DELETE_FOLDER_CORE = "DELETE_FOLDER_CORE";

const GET_FILES_DOCU = "GET_FILES_DOCU";
const VIEW_GRID_TRADITIONAL = "VIEW_GRID_TRADITIONAL";
const VIEW_LIST_TRADITIONAL = "VIEW_LIST_TRADITIONAL";
const VIEW_SEARCH_TRADITIONAL = "VIEW_SEARCH_TRADITIONAL";

//lanzamiento de payload de casos
export default function CoreReducer(state = initialState, action) {
    switch (action.type){
        //gabinetes
        case GET_ALL_CABINETS_CORE:
        case SELECTED_CABINET_CORE:
        case SELECTED_ERRORS_CABINET_CORE:
        case SELECTED_CABINET_TRADITIONAL_CORE:
        case SELECTED_ERRORS_CABINET_TRADITIONAL_CORE:
        //grupos
        case GET_ALL_GROUPS_CORE:
        case SET_FILTER_GROUPS_CORE:
        case SELECTED_GROUP_CORE:
        case SELECTED_ERRORS_GROUP_CORE:
        //folders
        case GET_ALL_FOLDERS_CORE:
        case SET_FILTER_FOLDERS_CORE:
        case SELECTED_FOLDER_CORE:
        case SELECTED_ERRORS_FOLDER_CORE:
        case GET_ALL_FOLDERS_ALL_CABINET_CORE:
        case GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE:
        case SELECTED_FOLDERS_TRADITIONAL_CORE:
        case SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE:
        
        //Actualizacion y guardado
        case CREATED_CABINETS_CORE:
        case UPDATE_CABINETS_CORE:
        case CREATED_FOLDER_CORE:
        case UPDATE_FOLDER_CORE:
        case DELETE_FOLDER_CORE:
        //indices
        case GET_INDEX_BY_CABINET_CONFIG:
        case GET_INDEX_BY_CABINET_FAILED_CONFIG:

        case GET_FILES_DOCU:
        case VIEW_GRID_TRADITIONAL:
        case VIEW_LIST_TRADITIONAL:
        case VIEW_SEARCH_TRADITIONAL:
            return action.payload;
        default:
            return state;
    }
};

//acciones 

//Cambiar estado para vista de grid a lista con Search Metadata
export const getAllViewListAndTraditional = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
      type: VIEW_GRID_TRADITIONAL,
      payload: { ...core, selectedView: "list" },
  });
};

//Cambiar estado de vista lista a grid
export const getAllViewGridAndTraditional = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: VIEW_LIST_TRADITIONAL,
    payload: { ...core, selectedView: "grid"},
  });
};

//Cambiar estado para vista tradicional con searh normal y visualizacion de gabinetes por defecto
export const ChangeCabinetGetAll = () => async (dispatch, getState) => {
  const { core } = getState();
  dispatch({
    type: VIEW_SEARCH_TRADITIONAL,
    payload: { ...core, selectedSearch: "TraditionalTree", selected: "CabinetAll" },
  });
};


//Traer todos los gabinetes
export const getAllCabinetsCore = () => async(dispatch, getState) => {
    const res = await CoreInstance.get("cabinet");
    const { core }= getState();
    dispatch({
        type: GET_ALL_CABINETS_CORE,
        payload: { ...core, cabinets: res.data},
    });
};

//Filtrar Gabinete Seleccionado
export const setSelectedCabinetCore = id => async (dispatch, getState) => {
    const { core } = getState();
    const { cabinets } = core;
    const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);

    if (SelectedCabinet == undefined){
        dispatch({
            type: SELECTED_ERRORS_CABINET_CORE,
            payload: { ...core, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_CABINET_CORE,
        payload: { ...core, SelectedCabinet, selected: "cabinet" },
      });
};


//Filtro de gabinete seleccionado vista tradicional
export const setSelectedCabinetCoreNotTraditional = id => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  const SelectedTraditional = cabinets.find(cabinets => cabinets.id == id);

  if (SelectedTraditional == undefined){
      dispatch({
          type: SELECTED_ERRORS_CABINET_TRADITIONAL_CORE,
          payload: { ...core, elementError: "El Id no existe" },
      });
      return;
  }

  dispatch({
      type: SELECTED_CABINET_TRADITIONAL_CORE,
      payload: { ...core, SelectedTraditional },
    });
};


//Filtrar Gabinete Seleccionado
export const setSelectedCabinetCoreNotSelected = id => async (dispatch, getState) => {
  const { core } = getState();
  const { cabinets } = core;
  const SelectedCabinet = cabinets.find(cabinets => cabinets.id == id);

  if (SelectedCabinet == undefined){
      dispatch({
          type: SELECTED_ERRORS_CABINET_CORE,
          payload: { ...core, elementError: "El Id no existe" },
      });
      return;
  }

  dispatch({
      type: SELECTED_CABINET_CORE,
      payload: { ...core, SelectedCabinet, selected: "ConfigIndex" },
    });
};

//Filtrar indices por cada gabinete
export const getIndexAllCabinetConfig = (id) => async(dispatch, getState) => {
  const { core } = getState();
  try {
      const response = await axios({
          url:`https://localhost:7188/api/indexesbycabinet/${id}`,
      });
      console.log(response.status);
      if(response.status == 200){
          dispatch({
              type: GET_INDEX_BY_CABINET_CONFIG,
              payload: { ...core, IndexAllCabinet: response.data, selected: "ConfigIndex"}
          });
      }
  } catch (error) {
      dispatch({
          type: GET_INDEX_BY_CABINET_FAILED_CONFIG,
          payload: { ...core, IndexAllCabinet: [] },
      });
  }
};

export const getIndexAllCabinetConfigNotSelect = (id) => async(dispatch, getState) => {
  const { core } = getState();
  try {
      const response = await axios({
          url:`https://localhost:7188/api/indexesbycabinet/${id}`,
      });
      console.log(response.status);
      if(response.status == 200){
          dispatch({
              type: GET_INDEX_BY_CABINET_CONFIG,
              payload: { ...core, IndexAllCabinet: response.data }
          });
      }
  } catch (error) {
      dispatch({
          type: GET_INDEX_BY_CABINET_FAILED_CONFIG,
          payload: { ...core, IndexAllCabinet: [] },
      });
  }
};


//traer todos los grupos 
export const getAllGroupsCore = () => async(dispatch, getState) => {
    const res = await CoreInstance.get("group");
    const { core } = getState();
    dispatch({
        type: GET_ALL_GROUPS_CORE,
        payload: { ...core, groups: res.data},
    });
};

//Filtrar gabinetes por grupo
export const setFilterGroupsCore = id => async (dispatch, getState) => {
    const { core } = getState();
    const { cabinets } = core;
    dispatch({
        type: SET_FILTER_GROUPS_CORE,
        payload: { ...core, GroupsCabinet: cabinets.filter(cabinets => cabinets.groupId == id)
        },
    });
};

//Filtrar Grupo seleccionado
export const setSelectedGroupCore = id => async (dispatch, getState) => {
    const { core } = getState();
    const { groups } = core;
    const SelectedGroup = groups.find(groups => groups.id == id);

    if (SelectedGroup == undefined){
        dispatch({
            type: SELECTED_ERRORS_GROUP_CORE,
            payload: { ...core, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_GROUP_CORE,
        payload: { ...core, SelectedGroup, selected: "group" },
      });
};


//traer todas las carpetas
export const getAllFoldersCore = () => async(dispatch, getState) => {
    const res = await CoreInstance.get("folder");
    const { core } = getState();
    dispatch({
        type: GET_ALL_FOLDERS_CORE,
        payload: { ...core, foldersCore: res.data},
    });
};

//Filtrar Carpetas por gabinetes
export const setFilterFoldersCore = (cabinetId) => async (dispatch, getState) => {
    const { core } = getState();
    const { foldersCore } = core;
    dispatch({
        type: SET_FILTER_FOLDERS_CORE,
        payload: {
            ...core, FoldersCabinet: foldersCore.filter(foldersCore => foldersCore.cabinetId == cabinetId)
        },
    });
};

//Filtrar carpeta seleccionada desde vista tradicional
export const setSelectedFolderTraditionalCore = id => async (dispatch, getState) => {
  const { core } = getState();
  const { foldersCore } = core;
  const SelectedFolderTraditional = foldersCore.find(foldersCore => foldersCore.id == id);

  if (SelectedFolderTraditional == undefined){
      dispatch({
          type: SELECTED_ERRORS_FOLDERS_TRADITIONAL_CORE,
          payload: { ...core, elementError: "El Id no existe" },
      });
      return;
  }

  dispatch({
      type: SELECTED_FOLDERS_TRADITIONAL_CORE,
      payload: { ...core, SelectedFolderTraditional, },
    });
};

//Filtrar Carpeta Seleccionada
export const setSelectedFolderCore = id => async (dispatch, getState) => {
    const { core } = getState();
    const { foldersCore } = core;
    const SelectedFolder = foldersCore.find(foldersCore => foldersCore.id == id);

    if (SelectedFolder == undefined){
        dispatch({
            type: SELECTED_ERRORS_FOLDER_CORE,
            payload: { ...core, elementError: "El Id no existe" },
        });
        return;
    }

    dispatch({
        type: SELECTED_FOLDER_CORE,
        payload: { ...core, SelectedFolder, selected: "folder" },
      });
};

//traer Carpetas desde endpoint por gabinete
export const geFoldersAllCabinet = (id) => async (dispatch, getState) => {
  const { core } = getState();
  try {
    const response = await axios({
      url: `https://localhost:7188/api/foldersbycabinet/${id}`,
    });
    
    console.log(response.status);
    if (response.status == 200) {
      dispatch({
        type: GET_ALL_FOLDERS_ALL_CABINET_CORE,
        payload: { ...core, foldersAllCabinet: response.data},
      });
    }
    } catch (error) {
      dispatch({
        type: GET_ALL_FOLDERS_ALL_CABINET_FAILED_CORE,
        payload: { ...core, foldersAllCabinet: [] },
      });
  }
};





/*<------------------------------------------------------------------>*/
//GUARDADO Y ACTUALIZACION DE ESTADOS

/*<------------GABINETES--------------->*/
//Guardar nuevo Gabinete y actualizar estado
export const CreateCabinetNew = (newCabinet) => 
(dispatch, getState) => {
    console.log(newCabinet);
    const { core } = getState();
    const { cabinets } = core;
    axios ({
        url:`https://localhost:7188/api/Cabinet`,
        method: "PUT",
        data: newCabinet,
        headers: {
          "Content-Type": "Application/json",
          
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            dispatch({
                type: CREATED_CABINETS_CORE,
                payload: { ...core, cabinets: [...cabinets, newCabinet] }
            })
        }
      }).catch(function(error){
        console.log(error);
      })
    };

//Actualizar Gabinete y Actualizar estado inicial
    export const UpdateCabinetCore = (newGabi, id) => (dispatch, getState) => {
        console.log(newGabi);
        const { core } = getState();
        const { cabinets } = core;
          axios({
            url: `https://localhost:7188/api/Cabinet/${id}`,
            method: "PUT",
            data: newGabi,
            headers: {
              "Content-Type": "Application/json",
            },
          })
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                dispatch({
                    type: UPDATE_CABINETS_CORE,
                    payload: { ...core, cabinets: [...cabinets, newGabi] }
                })
            }
          }).catch(function(error){
            console.log(error);
          })
        };

//Eliminar Gabinete y Actualizar estado inicial
export const DeleteCabinetCore = (newGabi, id) => (dispatch, getState) => {
    console.log(newGabi);
    console.log(id);
    const { core } = getState();
    const { cabinets } = core;
      axios({
        url: `https://localhost:7188/api/Cabinet/${id}`,
        method: "DELETE",
        data: newGabi,
        headers: {
          "Content-Type": "Application/json",
        },
      })
      .then(function (response) {
        console.log(response);
    }).catch(function(error){
        console.log(error);
      })
    };


/*<------------FOLDER---------------->*/
//Guardar nueva carpeta y actualizar estado inicial
export const CreateFolderNew = (newFolder) => async (dispatch, getState) => {
    console.log(newFolder);
    const { core } = getState();
    const { foldersCore } = core;
      axios({
        url:`https://localhost:7188/api/folder`,
        method: "PUT",
        data: newFolder,
        headers: { 'Content-Type': "Application/json", 
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            dispatch({
                type: CREATED_FOLDER_CORE,
                payload: { ...core, foldersCore: [...foldersCore, newFolder], }
            })
        }
      }).catch(function(error){
        console.log(error);
      })
    };

//Actualizar Carpeta y actualizar estado inicial
export const UpdateFolderCore = (newFolder, id) => async (dispatch, getState) => {
    console.log(newFolder);
    console.log(id);
    const { core } = getState();
    const { foldersCore } = core;
      axios({
        url:`https://localhost:7188/api/folder/${id}`,
        method: "PUT",
        data: newFolder,
        headers: { 'Content-Type': "Application/json", 
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            dispatch({
                type: UPDATE_FOLDER_CORE,
                payload: { ...core, foldersCore: [...foldersCore, newFolder], }
            })
        }
      }).catch(function(error){
        console.log(error);
      })
    };

//Eliminar Carpeta y actualizar estado inicial
export const DeleteFolderCore = (newFolder, id) => async(dispatch, getState) => {
    console.log(newFolder);
    console.log(id);
    const { core } = getState();
      axios({
        url:`https://localhost:7188/api/folder/${id}`,
        method: "DELETE",
        data: newFolder,
        headers: { 'Content-Type': "Application/json", 
        },
      })
      .then(function (response) {
        console.log(response);
      }).catch(function(error){
        console.log(error);
      })
    };

/*<-------------------FILE-----------------> */
//Traer todo los Archivos
export const getFileAllDocument = (id) => async (dispatch, getState) => {
  const res = await FileInstance.get(`
  ${id}`);
  const { core } = getState();
  dispatch({
    type: GET_FILES_DOCU,
    payload: { ...core, files: res.data, selected: "files" },
  });
};