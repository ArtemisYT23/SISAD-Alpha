import { useState } from "react";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import { useDispatch,useSelector } from "react-redux";
import Gridgroup from "../../../Modern/GridsContent/Gridgroup";
import GroupMenu from "../../MenuContext/GroupMenu";

const GroupContainer = () => {
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const { core } = useSelector((store) => store);
  const { cabinets, selected, GroupsCabinet } = core;

  const handleClick = (e) => {
    showMenu && setShowMenu(false);
  };

  const contextMenuRightClick = (e) => {
    e.preventDefault();
    setX(e.clientX - 50);
    setY(e.clientY - 50);
    setShowMenu(true);
  };

  return (
    <DocumentContainer
      onContextMenu={(e) => {
        contextMenuRightClick(e), handleClick(e);
      }}
    >

      {showMenu ? <GroupMenu x={x} y={y} /> : <></>}

      {selected === "group" ? ( GroupsCabinet.map(({ id, name }, index) => (
          <Gridgroup key={index} id={id} name={name} element="cabinet" />
        ))
      ) : (
        <></>
      )}

      {selected === "" ? ( cabinets.map(({ id, name }, index) => (
          <Gridgroup key={index} id={id} name={name} element="cabinet" />
        ))
      ) : (
        <></>
      )}
    </DocumentContainer>
  );
};

export default GroupContainer;
