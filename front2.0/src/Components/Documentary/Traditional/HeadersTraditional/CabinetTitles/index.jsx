import { ContainerTitle, IconContai, TitleCabi, DescripContai, TitlesHeaders } from "./CabinetTitle";

const CabinetTitles = () => {
    return(
        <ContainerTitle>

            <IconContai />

            <TitleCabi>
             <TitlesHeaders>Nombre</TitlesHeaders>
            </TitleCabi>

            <DescripContai>
             <TitlesHeaders>Descripción</TitlesHeaders>
            </DescripContai>
            
        </ContainerTitle>
    );
}

export default CabinetTitles;