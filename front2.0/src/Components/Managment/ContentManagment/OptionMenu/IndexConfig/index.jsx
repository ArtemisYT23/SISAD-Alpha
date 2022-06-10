import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCabinetsCore, setSelectedCabinetCore, getIndexAllCabinetConfig } from "../../../../../Store/Core";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig";
import {
    ContainerIndex,
    TableRaid,
    TH,
    TD1,
    Title,
    HeadersContainer,
    TableContainer,
    NewIndex,
    ContainerButton,
    ContainerSelect,
} from "../../../../../Styles/Managment/Modern/IndexConfig";
import { TituloSelect,
         OptionsSelect } from "../../../../../Styles/Documentary/Modern/SearchMetadata";
import IndexCreated from "../../../../../Components/Documentary/Modern/ModalesDocumentary/IndexCreated";


const IndexConfig = () => {

  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { cabinets, SelectedCabinet, IndexAllCabinet } = core;

  useEffect(() => {
    cabinets.length == 0 && dispatch(getAllCabinetsCore());
  },[])

  const [cabin, setCabin] = useState({
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCabin({ ...cabin, [name]: value });
    handleSubmit(value);
  };

  const handleSubmit = (id) => {
    dispatch(getIndexAllCabinetConfig(id));
    dispatch(setSelectedCabinetCore(id));
  };

  const OpenModalIndexCreatedConfig = (e) => {
    dispatch(setOpenModalConfigCreated());
  };


    return(
        <ContainerIndex>

      <HeadersContainer>
        <ContainerButton>
          <NewIndex onClick={(e) => OpenModalIndexCreatedConfig()}>Nuevo</NewIndex>
        </ContainerButton>


        <ContainerSelect>
          <TituloSelect name="id" onChange={(e) => handleChange(e)}>
            <option>Seleccion un Gabinete</option>
          {cabinets ? (
            cabinets.map(({ id, name }, index) => (
              <OptionsSelect key={id} value={id}>{name}</OptionsSelect>
            ))
          ) : (
            <></>
          )}
          </TituloSelect>
        </ContainerSelect>

      </HeadersContainer>
      <br />
      <TableContainer>
        <TableRaid>
          <tr>
            <TH>Nombre</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({ name }) => (
              <tr>
                <TD1>
                  <Title>{name}</Title>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>

        <TableRaid>
          <tr>
            <TH>Descripcion</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({ description }) => (
              <tr>
                <TD1>
                  <Title>{description}</Title>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>

        <TableRaid>
          <tr>
            <TH>Tipo de dato</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({dataTypeId}) => (
              <tr>
                <TD1>
                  <Title>{dataTypeId}</Title>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>

        <TableRaid>
          <tr>
            <TH>Lista</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({listId}) => (
              <tr>
                <TD1>
                  <Title>{listId}</Title>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>
      </TableContainer>

      {SelectedCabinet?.id === cabin.id &&(
      <IndexCreated nameCabinet={SelectedCabinet.name} cabinetId={cabin.id} />
      )}

    </ContainerIndex>
    );
}

export default IndexConfig;