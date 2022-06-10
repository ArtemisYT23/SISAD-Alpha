import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ElementContainerList,
  Celda,
  Secuencial,
  ListTitle,
  IconList,
  ContainerElementSecond,
  Cabecera,
  SecondTitle,
  IconAdd,
  IconAdd2,
  CeldaContainer,
  TitleContainer,
} from "../../../../Styles/Managment/Modern/ElementList";
import {
  ElementDefault,
  AddElement,
  EditElement,
  DeleteElement,
} from "../../../../Styles/Managment/Modern/ElementList/Icons";
import { getAllElementListConfig, SelectedListConfig, setElementListFilterConfig } from "../../../../Store/ConfigDocumentary";
import { setOpenModalListElementCreated, setOpenModalListDataUpdate } from "../../../../Store/ModalConfig";
import ItemElement from "../ItemElement";
import ListUpdate from "../ModalConfig/ListUpdate";
import ElementCreated from "../ModalConfig/ElementCreated";

const ElementList = ({ key, con, id, name, listId }) => {

  const dispatch = useDispatch();


  const { configDocument } = useSelector((store) => store);
  const { ElementFilterList, SelectedList } = configDocument;

  useEffect(() => {
    dispatch(getAllElementListConfig());
  }, []);

  const selectElement = (id) => {
    dispatch(setElementListFilterConfig(id));
    dispatch(SelectedListConfig(id));
  };

  const OpenModalListElementCreated = () => {
    dispatch(setOpenModalListElementCreated());
  };

  const OpenModalListUpdate = () => {
    dispatch(setOpenModalListDataUpdate());
  };

  return (
    <ElementContainerList>
      <Celda>
        <CeldaContainer>
          <Secuencial>{con}</Secuencial>
        </CeldaContainer>
        <TitleContainer onClick={(e) => {
          selectElement(id);
        }}>
        <ListTitle>{name}</ListTitle>
        </TitleContainer>
        <IconList>
          <IconAdd onClick={() => {OpenModalListElementCreated(), selectElement(id)}}>
            <AddElement />
          </IconAdd>
          <IconAdd2 onClick={() => {OpenModalListUpdate(), selectElement(id)}}>
            <EditElement />
          </IconAdd2>
          <IconAdd>
            <DeleteElement />
          </IconAdd>
          <ElementDefault />
        </IconList>
      </Celda>
      <ElementCreated listId={listId}/>


      {SelectedList?.id === id && (
        <ContainerElementSecond>
          <Cabecera>
            <SecondTitle>Elementos de la lista</SecondTitle>
          </Cabecera>

            {ElementFilterList.map((ElementList, index) => 
              <ItemElement
                key={index}
                con={index+1}
                id={ElementList.id}
                nombre={ElementList.name}
                listId={SelectedList.id}
              />
          )}
           <ListUpdate id={SelectedList?.id} name={SelectedList.name} listId={SelectedList.listId}/>

        </ContainerElementSecond>
      )}
    </ElementContainerList>
  );
};

export default ElementList;
