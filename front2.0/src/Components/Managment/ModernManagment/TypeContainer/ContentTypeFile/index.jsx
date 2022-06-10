import { useDispatch, useSelector } from "react-redux";
import {
  ContainerContentTypeFile,
  TitleTypeFile,
  TitleFyle,
} from "../../../../../Styles/Managment";
import DescriptionType from "./DescriptionType";

const ContentTypeFile = () => {

  const { configDocument } = useSelector((store) => store);
  const { TypeFile } = configDocument;

  return (
    <ContainerContentTypeFile>
      <TitleTypeFile>
        <TitleFyle>descripcion</TitleFyle>
      </TitleTypeFile>
      {TypeFile ? (
        TypeFile.map(({ id, name, description }, index) => (
          <DescriptionType
            key={index}
            id={id}
            name={name}
            description={description}
          />
        ))
      ) : (
        <></>
      )}
    </ContainerContentTypeFile>
  );
};

export default ContentTypeFile;
