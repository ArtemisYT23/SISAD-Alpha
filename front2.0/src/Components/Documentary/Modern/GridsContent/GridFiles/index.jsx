import { useDispatch, useSelector } from "react-redux";
import {
  ElementNameDoc,
  GridDocContainer,
  NumberOfElementChild,
  DistintivoPDF,
  TypeFile,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";

const GridFiles = ({ element, id, extension, fileTypeId, documentId }) => {
  const dispatch = useDispatch();
  const { documentary } = useSelector((store) => store);

  const EntrarDetalle = () => {
    console.log("Archivo Cargado");
  };

  return (
    <GridDocContainer onClick={() => entrardetalle(documentId)}>
      <ElementIcon element={element} />
      <DistintivoPDF />
      <TypeFile>{extension}</TypeFile>
      <NumberOfElementChild>Hoja De Vida</NumberOfElementChild>
      <ElementNameDoc>Unilever</ElementNameDoc>
    </GridDocContainer>
  );
};

export default GridFiles;
