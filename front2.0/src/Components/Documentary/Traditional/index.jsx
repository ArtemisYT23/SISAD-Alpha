import { useSelector } from "react-redux";
import {
  DocumentaryContentContainer,
  InfoContainer,
} from "../../../Styles/Documentary";
import ActionAll from "../Content/ActionAll";
import ActionsCabinet from "../Content/Actions";
import ActionsFolder from "../Content/ActionsFolder";
import ActionMetadata from "../Content/ActionMetadata";
import Header from "../Content/Header";
import GroupTraditional from "./ContentTraditional/GroupTraditional";
import DocumentConsult from "./ContentTraditional/DocumentConsult";
import FolderTraditional from "../Traditional/ContentTraditional/FoldeTraditional";
import CabinetTraditional from "../Traditional/ContentTraditional/CabinetTraditional";

const DocumentaryTraditional = () => {
  const { core} = useSelector((store) => store);
  const { selected, selectedView } = core;

  return (
    <DocumentaryContentContainer>
      <InfoContainer>
        <Header />

        {/* {selected === "" ? <ActionAll /> : <></>} */}

        {selected === "folder"  ? <ActionAll /> : <></>}

        {selected === "" ? <ActionMetadata /> : <></>}

        {selected === "CabinetAll" || selected === "group" ? <ActionsCabinet /> : <></>}

        {selected === "cabinet" ? <ActionsFolder /> : <></>}


      </InfoContainer>

      {selected === "" ? <DocumentConsult /> : <></>}

      {selected === "CabinetAll" ? <CabinetTraditional /> : <></> }

      {selected === "group"  ? <GroupTraditional />: <></>}

      {selected === "cabinet" ? <FolderTraditional /> : <></>}
      

      

    </DocumentaryContentContainer>
  );
};

export default DocumentaryTraditional;
