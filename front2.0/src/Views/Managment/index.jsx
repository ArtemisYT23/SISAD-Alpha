import React from "react";
import { ManagmentContainer } from "../../Styles/Managment";
import AsideManagment from "../../Components/Managment/AsideManagment";
import ContentManagment from "../../Components/Managment/ContentManagment";

const Managment = () => {
  return (
    <ManagmentContainer>
      <AsideManagment />
      <ContentManagment />
    </ManagmentContainer>
  );
};

export default Managment;
