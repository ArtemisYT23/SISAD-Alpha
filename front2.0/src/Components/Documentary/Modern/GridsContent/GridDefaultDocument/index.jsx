import { useState } from "react";
import { useDispatch } from "react-redux";
import { ContainerDefault, Title, ContainerContent, ContainerNew, ButtonNew } from "../../../../../Styles/Documentary/Modern/GridDefaultfolder";
import { ElementDefaultDocuments } from "../../../../../Styles/Documentary/Modern/GridDefaultfolder/Icons";
import { setOpenModalDocumentCreated } from "../../../../../Store/ModalDocumentary";
import { setOpenModalFolderCreated } from "../../../../../Store/ModalCore";
import DocumentCreated from "../../ModalesDocumentary/DocumentCreated";
import FolderCreated from "../../ModalesCore/FolderCreated";


const GridDefaultDocument = ({ id, cabinetId }) => {

    const dispatch = useDispatch();

    const OpenModalDocumentCreated = () => {
        dispatch(setOpenModalDocumentCreated());
    };

    const OpenModalFolderCreated = () => {
        dispatch(setOpenModalFolderCreated());
    };

    return(
        <ContainerDefault>
            <ContainerContent>
                <ElementDefaultDocuments />
                <Title>Sin Información</Title>

                <ContainerNew>
                    <ButtonNew onClick={() => OpenModalDocumentCreated()}>Nuevo Documento</ButtonNew>
                </ContainerNew>

                <ContainerNew>
                    <ButtonNew onClick={() => OpenModalFolderCreated()}>Agregar Carpeta</ButtonNew>
                </ContainerNew>

                <DocumentCreated folderId={id}/>

                <FolderCreated cabinetId={cabinetId} folderId={id}/>

            </ContainerContent>
        </ContainerDefault>
    ); 
}

export default GridDefaultDocument;
