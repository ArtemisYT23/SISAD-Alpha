import SearchMetadata from "../../Modern/SearchMetadata";
import SearchTree from "../../Modern/SearchTree";
import { useDispatch, useSelector } from "react-redux";

const ContainerSearch = () => {

    const { core } = useSelector((store) => store);
    const { selectedSearch } = core;

    return(
        <>
            {selectedSearch === "" ? <SearchMetadata /> : <></>}

            {selectedSearch === "TraditionalTree" ? <SearchTree /> : <></>}

        </>
    );
};

export default ContainerSearch;