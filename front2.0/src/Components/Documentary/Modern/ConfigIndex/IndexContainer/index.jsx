import { useDispatch, useSelector } from "react-redux";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig";

import {
  ContainerIndex,
  HeadersContainer,
  ContainerButton,
  NewIndex,
  TableContainer,
  TableRaid,
  TH,
  TD1,
  Title,
  ContainerSelect,
} from "../../../../../Styles/Managment/Modern/IndexConfig";

import { TituloSelect,
    OptionsSelect, } from "../../../../../Styles/Documentary/Modern/SearchMetadata";

import IndexCreated from "../../ModalesDocumentary/IndexCreated";

const IndexContainer = () => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { SelectedCabinet, IndexAllCabinet } = core;

  const OpenModalIndexCreatedConfig = () => {
    dispatch(setOpenModalConfigCreated());
  };

  return (
    <ContainerIndex>
      <HeadersContainer>
        <ContainerButton>
          <NewIndex onClick={(e) => OpenModalIndexCreatedConfig()}>
            Nuevo
          </NewIndex>
          {SelectedCabinet && (
              <IndexCreated
                nameCabinet={SelectedCabinet.name}
                cabinetId={SelectedCabinet.id}
              />
              )}
            
        </ContainerButton>
        
        <ContainerSelect>
          <TituloSelect>
              <OptionsSelect>{SelectedCabinet.name}</OptionsSelect>
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
            IndexAllCabinet.map(({ dataTypeId }) => (
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
            IndexAllCabinet.map(({ listId }) => (
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
    </ContainerIndex>
  );
};

export default IndexContainer;
