import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import CabinetDefault from "../../ContainerTraditional/CabinetDefault";

const CabinetTraditional = () => {

    const { core } = useSelector((store) => store);
    const { cabinets, selected } = core;

  return (
    <ContainerView>

      {selected === "CabinetAll" ? (
        cabinets.map(({ id, name, description }, index) => (
          <CabinetDefault
            key={index}
            id={id}
            name={name}
            description={description}
            element="cabinet"
          />
        ))
      ) : (
        <></>
      )}

    </ContainerView>
  );
};

export default CabinetTraditional;
