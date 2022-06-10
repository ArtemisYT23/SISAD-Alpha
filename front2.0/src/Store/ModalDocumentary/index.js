//estado iniciales
const initialState = {
    DocumentCreated: false,
    DocumentDelete: false,
    FileUpload: false,
    MetadataCreated: false,
};

//tag de acciones
const OPEN_MODAL_CREATED_DOCUMENT_DOCU = "OPEN_MODAL_CREATED_DOCUMENT_DOCU";
const OPEN_MODAL_DELETE_DOCUMENT_DOCU = "OPEN_MODAL_DELETE_DOCUMENT_DOCU";
const OPEN_MODAL_UPLOAD_FILE_DOCU = "OPEN_MODAL_UPLOAD_FILE_DOCU";
const OPEN_MODAL_METADATA_CREATED_DOCU = 
"OPEN_MODAL_METADATA_CREATED_DOCU";


//payload de tag de acciones 
export default function ModalDocumentaryReducer(state = initialState, action) {
    switch (action.type){
        //Document
        case OPEN_MODAL_CREATED_DOCUMENT_DOCU:
        case OPEN_MODAL_DELETE_DOCUMENT_DOCU:
        case OPEN_MODAL_UPLOAD_FILE_DOCU:
        case OPEN_MODAL_METADATA_CREATED_DOCU:
            return action.payload;
        default:
            return state;
    }
};

//acciones 
/*<-------------Documentos--------------->*/

//Modal crear nuevo Documento
export const setOpenModalDocumentCreated = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_CREATED_DOCUMENT_DOCU,
        payload: { ...modalDocumentary, DocumentCreated:!modalDocumentary.DocumentCreated }
    });
};

//Eliminar Documento (alerta solo se puede borrar si el documento esta vacio )
export const setOpenModalDocumentDelete = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_DELETE_DOCUMENT_DOCU,
        payload: { ...modalDocumentary, DocumentDelete:!modalDocumentary.DocumentDelete }
    });
};

/*<-------------------Files-------------------->*/
//Modal subir Archivo
export const setOpenModalUploadFile = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_UPLOAD_FILE_DOCU,
        payload: { ...modalDocumentary, FileUpload:!modalDocumentary.FileUpload }
    });
};

/*<-------------------METADATA--------------------->*/
//Modal Crear Nueva Metadata
export const setOpenModalMetadataCreated = () => async(dispatch, getState) => {
    const { modalDocumentary } = getState();
    dispatch({
        type: OPEN_MODAL_METADATA_CREATED_DOCU,
        payload: { ...modalDocumentary, MetadataCreated:!modalDocumentary.MetadataCreated }
    });
};