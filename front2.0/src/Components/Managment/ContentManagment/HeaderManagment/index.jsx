import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderContainer } from "../../../../Styles/Documentary";
import {
  Avatar,
  HeaderUP,
  NameContainer,
  OptionContainer,
  TextName,
  InputName,
  Perfiles,
} from "../../../../Styles/Documentary/Header";
import { EditIcon, OptionsIcon } from "./Icons";
import avatar from "./avatar.png";
import logo from "./descarga.png";

const Header = () => {
  const [isEditable, setIsEditable] = useState(false);

  const [parentName, setParentName] = useState("Lista de datos");

  const { configDocument } = useSelector((store) => store);
  const { SelectedOption } = configDocument;

  useEffect(() => {
    if(SelectedOption != null){
      setParentName(SelectedOption.name);
    }
  }, [SelectedOption]);
 
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
          <Avatar src={avatar} />
          <Avatar src={logo} />
          </Perfiles>
          <OptionsIcon />
        </OptionContainer>
      </HeaderUP>
      
    </HeaderContainer>
  );
};

export default Header;
