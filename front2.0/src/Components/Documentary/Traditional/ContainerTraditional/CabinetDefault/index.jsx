import { ContainerDescription, ContainerIcon, ContainerOptions, ContainerTitle, ContainerTraditional, Title, TitleCabinet } from "../../../../../Styles/Traditional/CabinetTraditional";
import { CabinetTraditional, OptionsTraditional } from "../../../../../Styles/Traditional/CabinetTraditional/Icon";
import { useDispatch } from "react-redux";
import { setSelectedCabinetCoreNotTraditional } from "../../../../../Store/Core";

const CabinetDefault = ({ id, name, description }) => {
    
    const dispatch = useDispatch();

    const SelectedCabinet = (index) => {
        dispatch(setSelectedCabinetCoreNotTraditional(index));
    };

    return(
        <ContainerTraditional onClick={() => SelectedCabinet(id)}>

            <ContainerIcon>
            <CabinetTraditional w={24} h={24}/>
            </ContainerIcon>

            <ContainerTitle>
                <TitleCabinet>{name}</TitleCabinet>
            </ContainerTitle>

            <ContainerDescription>
                <Title>{description}</Title>
            </ContainerDescription>

            <ContainerOptions>
                <OptionsTraditional w={20} h={20}/>
            </ContainerOptions>

        </ContainerTraditional>
    );
}

export default CabinetDefault;