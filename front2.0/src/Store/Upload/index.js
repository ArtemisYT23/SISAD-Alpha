import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const initialState = {
    id: uuidv4(),
    Name: "",
    Description: "",
    File: null,
    FileTypeId: "",
    DocumentId: "",
};

const GET_NAME_FILE_DOCU =  "GET_NAME_FILE_DOCU";
const GET_DESCRIPTION_FILE_DOCU = "GET_DESCRIPTION_FILE_DOCU";
const GET_FILE_FILE_DOCU = "GET_FILE_FILE_DOCU";
const GET_FILETYPE_FILE_DOCU = "GET_FILETYPE_FILE_DOCU";
const GET_DOCUMENT_FILE_DOCU = "GET_DOCUMENT_FILE_DOCU"; 

export default function FileReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NAME_FILE_DOCU:
        case GET_DESCRIPTION_FILE_DOCU:
        case GET_FILE_FILE_DOCU:
        case GET_FILETYPE_FILE_DOCU:
        case GET_DOCUMENT_FILE_DOCU:
            return action.payload;
        default:
            return state;
    }
}


// Cambiar Estado Nombre por valor del input
export const setGetNameFileDocu = (Name) => async(dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_NAME_FILE_DOCU,
        payload:{ ...uploader, Name:Name }
    })
};

//cambiar estado descripcion por valor del input
export const setGetDescriptionFileDocu = (Description) => async(dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_DESCRIPTION_FILE_DOCU,
        payload:{ ...uploader, Description:Description }
    })
};

//cambiar estado por archivo subido del input file
export const setGetFileFileDocu = (File) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_FILE_FILE_DOCU,
        payload: { ...uploader, File: File}
    })
}

//cambiar estado de id del tipo de archivo 
export const setGetFileTypeFileDocu = (FileTypeId) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_FILETYPE_FILE_DOCU,
        payload: { ...uploader, FileTypeId: FileTypeId}
    })
}

//cambiar estado de documentoId
export const setDocumentFileDocu = (DocumentId) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: GET_DOCUMENT_FILE_DOCU,
        payload: { ...uploader, DocumentId: DocumentId}
    })
}


//enviar formulario multipart/formdata de subida de archivo
export const sendFileDocumentaryDocu = (formFile) => async (dispatch, getState) => {
    console.log(formFile.get("Id"));
    console.log(formFile.get("Name"));
    console.log(formFile.get("Description"));
    console.log(formFile.get("File"));
    console.log(formFile.get("FileTypeId"));
    console.log(formFile.get("DocumentId"));
    axios({
        url:'https://localhost:7012/api/file',
        method: "PUT",
        data: formFile,
        headers: {
            Accept: 'application/json',
            'Content-Type': "multipart/form-data",
        },
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    })
}