import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContainer, List, Titulo, Items, Icons, Name } from "../../../../Styles/Managment/Modern/MenuManagment";  
import { ListIcon } from "../../ModernManagment/MenuManagment/Item/Icon";
import { getAllOptionsConfig, setSelectedOptionsConfig } from "../../../../Store/ConfigDocumentary";

const MenuManagment = () => {
    const dispatch = useDispatch();
    const { configDocument } = useSelector((store) => store);
    const { options } = configDocument;

    useEffect(() => {
        dispatch(getAllOptionsConfig());
    }, []);

    const selectOptions = (index) => {
        dispatch(setSelectedOptionsConfig(index));
      };

    return(
        <SearchContainer>
      <ul>
        <List>
          <Titulo>Gabinetes</Titulo>
          {options ? (
            options.map(({ id, name }, index) => (
          <Items onClick={() => 
            selectOptions(id)
          }>
            <Icons>
              <ListIcon />
            </Icons>
            <Name key={index}>{name}</Name>
          </Items>
           ))
           ) : (
             <></>
           )}
        </List>
        </ul>
        </SearchContainer>
    );
};

export default MenuManagment;