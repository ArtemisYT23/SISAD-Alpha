import { useSelector } from "react-redux";
import { DocumentaryContentContainer, InfoContainer } from "../../../Styles/Documentary";
import ActionAll from "./ActionAll";
import Header from "./Header";
import GroupContainer from "./Container/GroupContainer";
import CabinetContainer from "./Container/CabinetContainer";
import FolderContainer from "./Container/FolderContainer";
import FileContainer from "./Container/FileContainer";
import ConfigCabinet from "./Container/ConfigCabinet";
import AllContainerCabinet from "./Container/AllContainerCabinet";

const DocumentaryContent = () => {
    const { core, modalConfig } = useSelector((store) => store);
    const { selected } = core;
    const { selectedConfig } = modalConfig;


    return(
        <DocumentaryContentContainer>
            <InfoContainer>
                <Header />
                <ActionAll />
            </InfoContainer>

            {selected === "" || selected === "group" ? <GroupContainer /> : <></>}

            {selected === "CabinetAll" ? <AllContainerCabinet /> : <></> }

            {selected === "cabinet" ? <CabinetContainer /> : <></>}

            {selected === "folder" ? <FolderContainer /> : <></>}   
            
            {selected === "files" ? <FileContainer /> : <></>}

            {selectedConfig === "ConfigCabinet" ? <ConfigCabinet /> : <></>}

        </DocumentaryContentContainer>
    );
};

export default DocumentaryContent;