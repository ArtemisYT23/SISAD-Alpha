import { ActionsContainer, ContainerVista, ContainerOptions, ContainerTitle } from "../../../../Styles/Documentary";
import { FilterContainer, ViewsTypeContainer, NameLabel } from "../../../../Styles/Documentary/Actions";
import { GridView, TraditionalView } from "../Actions/Icons";
import FolderHeaders from "../../Traditional/HeadersTraditional/FolderHeaders";
import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";
import { useDispatch, useSelector } from "react-redux";
import { getAllViewListAndTraditional, getAllViewGridAndTraditional } from "../../../../Store/Core";

const ActionsFolder = () => {

    const dispatch = useDispatch();
    const { core } = useSelector((store) => store);
    const { selected, FoldersCabinet } = core;

    const ChangeOptionViewlist = () => {
        dispatch(getAllViewListAndTraditional());
    };

    const ChangeOptionsViewGrid = () => {
        dispatch(getAllViewGridAndTraditional());
    };

    return(
        <ActionsContainer>

            <ContainerVista>
                
                <FilterContainer />

                <ViewsTypeContainer>
                    <NameLabel>Vista :</NameLabel>
                    <div onClick={() => ChangeOptionViewlist()}>
                        <TraditionalView />
                    </div>
                    <div onClick={() => ChangeOptionsViewGrid()}>
                        <GridView />
                    </div>
                </ViewsTypeContainer>
            </ContainerVista>

            
            <ContainerOptions>
              <FolderHeaders />
            </ContainerOptions>

        {FoldersCabinet != "" && (  
            <ContainerTitle>
             <CabinetTitles />
            </ContainerTitle>
            )}
            

        </ActionsContainer>
    );
}

export default ActionsFolder;