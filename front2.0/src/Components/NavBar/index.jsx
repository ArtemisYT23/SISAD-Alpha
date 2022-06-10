import { useState } from "react";
import {
    NavBarContainer,
    LogoContainer,
    NavLinkContainer,
    NavLinkName,
} from "../../Styles/NavBar";
import NavBarIcon from "./Icons";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const logotipo = "assets/images/CentralFile.png";
    const isotipo = "assets/images/icon.png";

    const [pushed, setPushed] = useState("DashIconInactive");
    const [push, setPush] = useState("DocuIconInactive");
    const [pushs, setPushs] = useState("ManagInactive");

    const ActiveDash = () => {
      pushed ? setPushed("DashIconActive") : setPushed("DashIconActive");
      push ? setPush("") : setPush("DocuIconInactive");
      pushs ? setPushs("") : setPushs("ManagInactive");
    };

    const ActiveManag = () => {
      pushed ? setPushed("") : setPushed("DashIconInactive");
      push ? setPush("") : setPush("DocuIconInactive");
      pushs ? setPushs("ManagIconActive") : setPushs("ManagIconActive");
    };

    const ActiveDocu = () => {
      pushed ? setPushed("") : setPushed("DashIconInactive");
      push ? setPush("DocuIconActive") : setPush("DocuIconActive");
       pushs ? setPushs("") : setPushs("ManagInactive");
    };

   
    return (
        <NavBarContainer isActive={isActive}>
        <LogoContainer
          logo={!isActive ? isotipo : logotipo}
          onClick={() => setIsActive(!isActive)}
        />
        
          <NavLinkContainer to="dashboard" onClick={() => ActiveDash()}>
            <NavBarIcon name={"dashboard"}  pushed={pushed} push={push} pushs={pushs}/>
            {isActive ? <NavLinkName>Dashboard</NavLinkName> : <></>}
          </NavLinkContainer>

          <NavLinkContainer to="managment" onClick={() => ActiveManag()}>
            <NavBarIcon name="managment" push={push} pushs={pushs} pushed={pushed} />
            {isActive ? <NavLinkName>Administración</NavLinkName> : <></>}
          </NavLinkContainer>

          <NavLinkContainer to="documentary" onClick={() => ActiveDocu()}>
            <NavBarIcon name="documentary" pushs={pushs} pushed={pushed} push={push}/>
            {isActive ? <NavLinkName>Gestión Documental</NavLinkName> : <></>}
          </NavLinkContainer>
       
      </NavBarContainer>
    );
};

export default NavBar;
