import { useSelector } from "react-redux";
import { NotIndexContent } from "../../../../../Styles/Documentary/Modern/IndexDefaultStyles/Icons";
import { DefaultIndex, ContentColumn, TitleIndex, ContainerButton, ButtonNewIndex } from "../../../../../Styles/Documentary/Modern/IndexDefaultStyles";
import { useDispatch } from "react-redux";
import IndexCreated from "../../ModalesDocumentary/IndexCreated";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig"; 

const IndexDefault = () => {

    const dispatch = useDispatch(); 
    const { core } = useSelector((store) => store);
    const { SelectedCabinet } = core; 

    const OpenConfigModalIndex = () => {
        dispatch(setOpenModalConfigCreated());
    }

    return(
        <DefaultIndex>
            <ContentColumn>
            <NotIndexContent />
            <TitleIndex>Sin Índices</TitleIndex>

            <ContainerButton>
                <ButtonNewIndex onClick={() => OpenConfigModalIndex()}>Nuevo Indice</ButtonNewIndex>
            </ContainerButton>
            
          
            <IndexCreated nameCabinet={SelectedCabinet.name} cabinetId={SelectedCabinet.id} />
            

            </ContentColumn>
        </DefaultIndex>
    );
}

export default IndexDefault;