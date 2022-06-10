import { useDispatch, useSelector } from "react-redux";
import { ContainerDefault, Title, ContainerContent, ContainerNew, ButtonNew } from "../../../../../Styles/Documentary/Modern/GridDefaultfolder";
import { ElementDefaultFolders }  from "../../../../../Styles/Documentary/Modern/GridDefaultfolder/Icons";

const GridDefaultFolder = () => {
    return(
        <ContainerDefault>
            <ContainerContent>
                <ElementDefaultFolders x={150} y={150}/>
                <Title>Sin Carpetas Existentes</Title>
            </ContainerContent>
        </ContainerDefault>
    );
}

export default GridDefaultFolder;