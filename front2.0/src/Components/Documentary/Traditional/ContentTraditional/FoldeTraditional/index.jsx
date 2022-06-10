import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import FolderDefault from "../../../Traditional/ContainerTraditional/FolderDefault";
import GridDefaultFolder from "../../../../Documentary/Modern/GridsContent/GridDefaultFolder";

const FoldeTraditional = () => {
  const { core } = useSelector((store) => store);
  const { FoldersCabinet, selected } = core;

  return (
    <ContainerView>

      {selected === "cabinet" ? (
        FoldersCabinet.map(({ id, name, description, cabinetId }, index) => (
          <FolderDefault key={index} id={id} name={name} description={description} cabinetId={cabinetId}  element="folder" />
        ))
      ) : (
        <></>
      )}

      {FoldersCabinet == ""  &&(
          <GridDefaultFolder />
      )}

    </ContainerView>
  );
};

export default FoldeTraditional;
