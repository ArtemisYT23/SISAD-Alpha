import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDocumentDocu,
  getIndexByCabinetConfig,
  getMetadataByDocumentDOCU,
} from "../../../../Store/Documentary";
import { ContainerConsul, TableConsul, TD, TH, Title, TR } from "./ConsulIndex";
import TitleCabinet from "./CeldaConsul";
import ItemTitle from "./ItemTitle";

const ConsulIndex = () => {
  const dispatch = useDispatch();
  const { documentary } = useSelector((store) => store);
  const { documents, IndexCabinetConsul, MetadataIndex } = documentary;

  const data = documents;
  const persons = [];
  data.forEach((i) => persons.push(i.id));
   
  const dataid = MetadataIndex;
  const idDocument = [];
  dataid.forEach((i)=> idDocument.push(i.documentId))

  useEffect(() => {
    
    console.log(persons[0]);

    dispatch(getMetadataByDocumentDOCU(persons[0]));

    documents.length === 0 && dispatch(getAllDocumentDocu());

    dispatch(getIndexByCabinetConfig());
  }, []);

  return (
    <ContainerConsul>
      <TableConsul>
        <TR>
          <TH>
            <Title>COD. DOC.</Title>
          </TH>
          {IndexCabinetConsul ? (
            IndexCabinetConsul.map(({ id, name }) => (
              <ItemTitle id={id} name={name} />
            ))
          ) : (
            <></>
          )}
        </TR>
        <TR>
              <TD>
                <TitleCabinet id={idDocument}/>
              </TD>

        {MetadataIndex ? (
          MetadataIndex.map(({ id, value }) => (
            
              <TD>
                <ItemTitle id={id} name={value} />
              </TD>
           
          ))
        ) : (
          <></>
        )}
         </TR>
      </TableConsul>
    </ContainerConsul>
  );
};

export default ConsulIndex;
