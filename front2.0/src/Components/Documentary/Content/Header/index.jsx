import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderContainer } from "../../../../Styles/Documentary";
import {
  Avatar,
  HeaderDOWN,
  HeaderUP,
  NameContainer,
  OptionContainer,
  Route,
  TextName,
  Log,
  InputName,
  Perfiles,
} from "../../../../Styles/Documentary/Header";
import { EditIcon, OptionsIcon } from "./Icons";
import avatar from "./avatar.png";
import logo from "./descarga.png";

const Header = () => {
  const [isEditable, setIsEditable] = useState(false);

  const [parentName, setParentName] = useState("SISAD CLOUD");

  const { core } = useSelector((store) => store);
  const { SelectedCabinet, SelectedFolder, SelectedGroup } = core;

  //Revisar solo hace un recorrido pero no de abajo para arriba

  useEffect(() => {
    if(SelectedGroup!= null && SelectedGroup.id) {
      setParentName(SelectedGroup.name);
    }if (SelectedCabinet != null && SelectedCabinet.id ) {
      setParentName(SelectedCabinet.name);
    }if ( SelectedFolder != null && SelectedFolder.id) {
      setParentName(SelectedFolder.name);
    }
  }, [SelectedCabinet, SelectedFolder, SelectedGroup]);

  const editParentName = (value) => {
    setParentName(value);
  };
  
  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) =>
        e.target.id !== "inputName" &&
        e.target.id !== "editIcon" &&
        setIsEditable(false)
    );
  }, []);

  
  return (
    <HeaderContainer>
      <HeaderUP>
        <NameContainer>
          {!isEditable ? (
            <TextName>{parentName}</TextName>
          ) : (
            <InputName
              id="inputName"
              value={parentName}
              onChange={(e) => editParentName(e.target.value)}
            />
          )}
          <EditIcon onClick={setIsEditable} />
        </NameContainer>
        <OptionContainer>
          <Perfiles>
          <Avatar src={avatar}/>
          <Avatar src={logo}/>
          </Perfiles>
          <OptionsIcon />
        </OptionContainer>
      </HeaderUP>
      <HeaderDOWN>
        <form>
        <Route placeholder="... / Contratos" label="... / Contratos" />
        </form>
        <Log>Se creó una carpeta: hace 1 hora</Log>
      </HeaderDOWN>
    </HeaderContainer>
  );
};

export default Header;
