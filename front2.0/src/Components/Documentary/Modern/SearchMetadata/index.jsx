import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContainer } from "../../../../Styles/Documentary/Modern/Search";
import { getAllCabinetsCore, geFoldersAllCabinet } from "../../../../Store/Core";

import {
  ContainerTitle,
  TituloSelect,
  OptionsSelect,
  ContainerList,
} from "../../../../Styles/Documentary/Modern/SearchMetadata";
import { UL } from "../../../../Styles/Documentary/Modern/SearchTree";
import ItemMetadata from "./ItemMetadata";

const SearchMetadata = () => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { cabinets, foldersAllCabinet } = core;

  useEffect(() => {
    cabinets.length == 0 && dispatch(getAllCabinetsCore());
  }, []);

  const [cabin, setCabin] = useState({
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCabin({ ...cabin, [name]: value });
    handleSubmit(value);
  };

  const handleSubmit = (id) => {
    dispatch(geFoldersAllCabinet(id));
  };

  return (
    <SearchContainer>
      <ContainerTitle>
        
        <TituloSelect name="id" onChange={(e) => handleChange(e)}>
          {cabinets ? (
            cabinets.map(({ id, name }, index) => (
              <OptionsSelect value={id}>{name}</OptionsSelect>
            ))
          ) : (
            <></>
          )}
        </TituloSelect>
      </ContainerTitle>
      <ContainerList>

        {foldersAllCabinet && (
      <UL>
          {foldersAllCabinet ? (
              foldersAllCabinet.map(({id, name}, index) =>
          <>
              <ItemMetadata key={index} id={id} name={name}/>
          </>
            )
            ) : (
              <></>
            )}
      </UL>
      )}


      </ContainerList>
    </SearchContainer>
  );
};

export default SearchMetadata;
