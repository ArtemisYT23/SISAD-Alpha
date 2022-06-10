import { SearchContainer } from "../../../../Styles/Documentary/Modern/Search";
import {
  ContainerList,
  UL,
  LI,
} from "../../../../Styles/Documentary/Modern/SearchTree";
import ItemTree from "./ItemTree";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCabinetsCore, getAllFoldersCore } from "../../../../Store/Core";
import PrimaryItem from "./PrimaryItem";

const SearchTree = () => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { cabinets, foldersCore, groups } = core;

  useEffect(() => {

      cabinets.length == 0 && dispatch(getAllCabinetsCore());

      foldersCore.length === 0 && dispatch(getAllFoldersCore());

      groups.length === 0 && dispatch(getAllGroupsCore());
  })

  return (
    <SearchContainer>
        <ContainerList>
          <UL>
            <LI>Grupos</LI>
            <>
            {groups ? (
              groups.map(({id, name}) =>
             <PrimaryItem id={id}  name={name}/>
             )
            ) : (
              <></>
            )}
            </>
  

          </UL>
          <UL>
          <> 
           <LI>Gabinetes</LI>
            {cabinets ? (
              cabinets.map(({id, name}) =>
              <ItemTree id={id} key={id} name={name}/>
              )
            ) : (
              <></>
            )}
            </>
          </UL>
        </ContainerList>

    </SearchContainer>
  );
};

export default SearchTree;
