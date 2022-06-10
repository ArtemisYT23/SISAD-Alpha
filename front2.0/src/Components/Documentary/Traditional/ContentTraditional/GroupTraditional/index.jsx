import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import CabinetDefault from "../../ContainerTraditional/CabinetDefault";

const GroupTraditional = () => {
  const { core } = useSelector((store) => store);
  const { selected, GroupsCabinet } = core;

  return (
    <ContainerView>

      {selected === "group" ? (
        GroupsCabinet.map(({ id, name, description }, index) => (
          <CabinetDefault key={index} id={id} name={name} description={description} element="cabinet" />
        ))
      ) : (
        <></>
      )}

    </ContainerView>
  );
};
export default GroupTraditional;
