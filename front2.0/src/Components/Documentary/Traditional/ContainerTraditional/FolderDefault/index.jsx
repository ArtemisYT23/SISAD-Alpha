import { useDispatch } from "react-redux";
import { ContainerDescription, ContainerIcon, ContainerOptions, ContainerTitle, ContainerTraditional, Title, TitleCabinet } from "../../../../../Styles/Traditional/CabinetTraditional";
import { FolderTraditional, OptionsTraditional } from "../../../../../Styles/Traditional/CabinetTraditional/Icon";
import { setSelectedFolderTraditionalCore } from "../../../../../Store/Core"; 

const FolderDefault = ({ id, name, description }) => {

    const dispatch = useDispatch();

    const SelectedFolderTraditional = (index) => {
        dispatch(setSelectedFolderTraditionalCore(index));
    }

    return(
        <ContainerTraditional onClick={() => SelectedFolderTraditional(id)}>
            <ContainerIcon>
                <FolderTraditional w={24} h={24} /> 
            </ContainerIcon>

            <ContainerTitle>
                <TitleCabinet>{name}</TitleCabinet>
            </ContainerTitle>

            <ContainerDescription>
                <Title>{description}</Title>
            </ContainerDescription>

            <ContainerOptions>
                <OptionsTraditional w={20} h={20} />
            </ContainerOptions>

        </ContainerTraditional>
    );
}

export default FolderDefault;