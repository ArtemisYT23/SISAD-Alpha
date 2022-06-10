import { getAllElementListConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/Modern/ItemMetadata/Items.css";
import { useDispatch, useSelector } from "react-redux";
import { getItemElementByIdList } from "../../../../../Store/ConfigDocumentary";
import { useEffect } from "react";

const ItemMetadata = ({ name, dataTypeId, listId }) => {

  const dispatch = useDispatch();
  const { configDocument } = useSelector((store) => store);
  const { ItemListMetadata } = configDocument;

  const GetAllItem = () => {
      dispatch(getItemElementByIdList(listId));
  };

  return (
    <div className="ContainerModal">
      <label className="TitleLable">{name}</label>

      {(() => {
        switch (dataTypeId) {
          //MONEY
          case "54847089-8bcd-4bfc-9b82-3c90e0f68f35":
            return (
              <input
                type="number"
                min="0"
                step="0.01"
                className="ItemMetadata"
              />
            );

          //NUMBER
          case "69aa9f19-0506-4e94-ad6f-3d22ee9fd5e5":
            return <input type="number" className="ItemMetadata" />;

          //IMAGE
          case "211f35ac-bb4e-48b2-a22a-602f9982f6cf":
            return <input type="file" className="ItemMetadata" />;

          // DATE
          case "dc4378da-908b-4547-9001-a46b95c3d4b9":
            return <input type="date" className="ItemMetadata" />;

          //TIME
          case "c98d34bd-c017-4785-b151-b1f663c16541":
            return <input type="time" className="ItemMetadata" />;
            
          //DATETIME
          case "909a5f0f-603e-47c9-9216-b5bda78ba927":
            return <input type="datetime" className="ItemMetadata" />;

          //CITIZENSHIPCARD
          case "e3e54061-7a88-4ca7-a5a1-74b335618167":
            return <input type="number" className="ItemMetadata" />;

          //BOOLEAN
          case "c9e97d02-2e80-4401-9b7c-fdfbacad9234":
            return (
              <select className="ItemMetadata">
                <option value="true">Verdadero</option>
                <option false="false">Falso</option>
              </select>
            );
            
          //LIST
          case "6009c757-6c0b-4f5d-96e5-44af7382de6d":
              return (
                <select className="ItemMetadata" onClick={() => GetAllItem()}>
                   <option selected>Seleccionar Elemento</option>
                   {ItemListMetadata ? (
                      ItemListMetadata.map(({ id , name }, index) => (
                        <option key={id} value={id}>{name}</option>
                      ))
                   ) : (
                     <></>
                   )}
                </select>
              );
          default:
            return <input type="text" className="ItemMetadata" />;
        }
      })()}
      
    </div>
  );
};

export default ItemMetadata;
