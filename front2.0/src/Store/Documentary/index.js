import { DocumentInstance, CoreInstance } from "../../config/axios";
import axios from "axios";

//initial state 
const initialState = {
    //documents
    documents: [],
    IndexCabinetConsul: [],
    //cambiar a metadata por documento(nombre)
    MetadataIndex: [],
    //Filtro 1 a muchos
    DocumentFolder: [],
    //Filtro 1 a 1
    SelectedDocument: null,
    //Elemento Seleccinado
    selected: "",
    //Error
    elementError: null,
};

//tags de identificacion
//documentos 
const GET_ALL_DOCUMENTS_DOCU = "GET_ALL_DOCUMENTS_DOCU"; 
const SET_SELECTED_DOCUMENT_DOCU = "SET_SELECTED_DOCUMENT_DOCU";
const SET_SELECTED_DOCUMENT_ERROR = "SET_SELECTED_DOCUMENT_ERROR";
const SET_FILTER_DOCUMENTS_DOCU = "SET_FILTER_DOCUMENTS_DOCU";

const CREATED_DOCUMENT_DOCU = "CREATED_DOCUMENT_DOCU";
const GET_INDEX_BY_CABINET_DOCU = "GET_INDEX_BY_CABINET_DOCU";
const GET_ALL_METADATA_BY_INDEX_DOCU = "GET_ALL_METADATA_BY_INDEX_DOCU";
const CREATED_METADATA_DOCU = "CREATED_METADATA_DOCU";


//lanzamiento de payload de casos
export default function DocumentaryReducer(state = initialState, action) {
    switch (action.type) {
        //documentos
        case GET_ALL_DOCUMENTS_DOCU:
        case SET_SELECTED_DOCUMENT_DOCU:
        case SET_SELECTED_DOCUMENT_ERROR:
        case SET_FILTER_DOCUMENTS_DOCU:
        case CREATED_DOCUMENT_DOCU:
        case GET_INDEX_BY_CABINET_DOCU:
        case GET_ALL_METADATA_BY_INDEX_DOCU:
        case CREATED_METADATA_DOCU:

            return action.payload;
        default:
            return state;
    }
};

//Acciones

//Traer todos los documentos
export const getAllDocumentDocu = () => async (dispatch, getState) => {
    const res = await DocumentInstance.get("document");
    const { documentary } = getState();
    dispatch({
        type: GET_ALL_DOCUMENTS_DOCU,
        payload: { ...documentary, documents: res.data},
    });
};

 //Filtrar documento Seleccionado
 export const setSelectedDocumentDocu = id => async(dispatch, getState) => {
     const { documentary } = getState();
     const { documents } = documentary;
     const SelectedDocument = documents.find(documents => documents.id == id);

     if ( SelectedDocument == undefined){
         dispatch({
             type: SET_SELECTED_DOCUMENT_ERROR,
             payload: { ...documentary, elementError: "El id no existe"},
         });
         return;
     }
     dispatch({
         type: SET_SELECTED_DOCUMENT_DOCU,
         payload: { ...documentary, SelectedDocument, selectedDocu: "documents" },
     });
 };

 //filtrar documentos por carpeta
 export const setFilterDocumentDocu = FolderId => async(dispatch, getState) => {
     const { documentary } = getState();
     const { documents } = documentary;
     dispatch({
        type: SET_FILTER_DOCUMENTS_DOCU,
        payload: {
            ...documentary, DocumentFolder: documents.filter(documents => documents.folderId == FolderId)
        },
     });
 };

 //Filtrar metadata archivos x carpeta


 //filtrar indice por gabinete
 export const getIndexByCabinetConfig = () => async(dispatch, getState) => {
    const res = await CoreInstance.get(`indexesbycabinet/145dde34-3057-4c87-ad0f-b1c2bba243e5`);
    const { documentary } = getState();
    dispatch({
        type: GET_INDEX_BY_CABINET_DOCU,
        payload: { ...documentary, IndexCabinetConsul: res.data }
    });
};

//cambiar con try catch para validar status
//Filtro de Metadata por documento
export const getMetadataByDocumentDOCU = (id) => async(dispatch, getState) => {
    const res = await DocumentInstance.get(`metadatabydocument/71359d6e-9d6f-4e9b-a9fc-feb618d42697`);
    const { documentary } = getState();
    dispatch({
        type: GET_ALL_METADATA_BY_INDEX_DOCU,
        payload: { ...documentary, MetadataIndex: res.data }
    });
};


 /*<----------- DOCUMENT CRUD ------------->*/

 //Crear nuevo documento 
 export const CreateDocumentNew = (newDoc) => async (dispatch, getState) => {
    console.log(newDoc);
    const { documentary } = getState();
    const { documents } = documentary;
      axios({
        url: `https://localhost:7012/api/document`,
        method: "PUT",
        data: newDoc,
        headers: {
            "Content-Type": "Application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            dispatch({
                type: CREATED_DOCUMENT_DOCU,
                payload: { ...documentary, documents: [...documents, newDoc], }
            })
        }
      }).catch(function(error){
        console.log(error);
      })
 };


 //Crear Metadata 
 export const CreatedMetadataDocu  = (newMeta) => async (dispatch, getState) => {
     console.log(newMeta);
     const { documentary } = getState();
     const { MetadataIndex } = documentary;
     axios({
        url: `https://localhost:7012/api/metadata`,
        method: "PUT",
        data: newMeta,
        headers: {
            "Content-Type": "Application/json",
        }, 
     })
     .then(function (response){
         console.log(response);
         if (response.status == 200) {
             dispatch({
                 type: CREATED_METADATA_DOCU,
                 payload: { ...documentary, MetadataIndex: [...MetadataIndex, newMeta ]}
             })
         }
     }).catch(function(error){
         console.log(error);
     })
 };


