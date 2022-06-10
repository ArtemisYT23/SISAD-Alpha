import { useState } from "react";
import { ElementNameDoc, GridDocContainer,NumberOfElementChild, Distintivo, TypeFile } from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { useDispatch } from "react-redux";
import { getFileAllDocument } from "../../../../../Store/Core";

const Gridfolder = ({ element, id, folderId }) => {

    const dispatch = useDispatch();

    const entrarDoc = (id) => {
        dispatch(getFileAllDocument(id));
    }

    return(
        <GridDocContainer onDoubleClick={() => entrarDoc(id)}>
            <ElementIcon element={element} />
            <Distintivo />
            <TypeFile>reg</TypeFile>
            <NumberOfElementChild>2 documentos</NumberOfElementChild>
            <ElementNameDoc>documentos</ElementNameDoc>
        </GridDocContainer>
    );
}

export default Gridfolder;