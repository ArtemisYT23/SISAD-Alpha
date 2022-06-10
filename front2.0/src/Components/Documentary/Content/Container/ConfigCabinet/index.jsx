import { useDispatch, useSelector } from "react-redux";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import IndexDefault from "../../../Modern/ConfigIndex/IndexDefault";
import IndexContainer from "../../../Modern/ConfigIndex/IndexContainer";

const ConfigCabinet = () => {

    const { core } = useSelector((store) => store);
    const { IndexAllCabinet, selected } = core;

    return (
        <>
        {selected === "ConfigIndex" && IndexAllCabinet != "" ? 
          <IndexContainer /> : <></>
        }
          
        {IndexAllCabinet == "" && selected === "ConfigIndex"  ?
          <IndexDefault /> : <></>
        }
          
        </>
      );
};

export default ConfigCabinet;