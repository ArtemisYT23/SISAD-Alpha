import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentaryAside from "../../Components/Documentary/Aside";
import DocumentaryContent from "../../Components/Documentary/Content";
import DocumentaryTraditional from "../../Components/Documentary/Traditional";
import { DocumentaryContainer } from "../../Styles/Documentary";

const Documentary = () => {
  const { core } = useSelector((store) => store);
  const { selectedView } = core;

  return (
    <DocumentaryContainer>
      <DocumentaryAside />

      {selectedView === "" || selectedView === "grid" ? (
        <DocumentaryContent />
      ) : (
        <></>
      )}

      {selectedView == "list" ? <DocumentaryTraditional /> : <></>}

    </DocumentaryContainer>
  );
};

export default Documentary;
