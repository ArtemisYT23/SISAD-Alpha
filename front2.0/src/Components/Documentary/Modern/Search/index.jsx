import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCabinetsCore, getAllGroupsCore, setSelectedCabinetCore, setFilterFoldersCore, getAllFoldersCore, setFilterGroupsCore, setSelectedFolderCore, setSelectedGroupCore } from "../../../../Store/Core";

import { getAllDocumentDocu, setFilterDocumentDocu } from "../../../../Store/Documentary";

import {
  SearchContainer,
  SearchInput,
  Titulo,
  Items,
  Icons,
  List,
  Name,
  Rec,
} from "../../../../Styles/Documentary/Modern/Search";

import { GroupIcon, GabiIcons, CarpIcons } from "../../Modern/Search/Item/Icon";

const Search = () => {
  const dispatch = useDispatch();
  const { core, documentary } = useSelector((store) => store);
  const { cabinets, groups, foldersCore, FoldersCabinet } = core;

  const { documents } = documentary;

  useEffect(() => {
    cabinets.length === 0 && dispatch(getAllCabinetsCore());

    groups.length === 0 && dispatch(getAllGroupsCore());

    foldersCore.length === 0 && dispatch(getAllFoldersCore());

    documents.length === 0 && dispatch(getAllDocumentDocu());

  }, []);

  const selectGroup = (index) => {
    dispatch(setSelectedGroupCore(index));
    dispatch(setFilterGroupsCore(index));
  }

  const selectGab = (index) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
  };

  const selectFol = (index) => {
    dispatch(setSelectedFolderCore(index));
    dispatch(setFilterDocumentDocu(index))
  };

  

  return (
    <SearchContainer>
      <SearchInput placeholder="Buscar" />
      <ul>
        <List>
          <Titulo>Grupos</Titulo>
          {groups ? (
            groups.map(({ id, name }) => (
              <Items onClick={() => selectGroup(id)}>
                <Icons>
                  <GroupIcon />
                </Icons>
                <Name key={id}>{name}</Name>
              </Items>
            ))
          ) : (
            <></>
          )}
        </List>
        <List>
          <Rec />
        </List>
        <List>
          <Titulo>Gabinetes</Titulo>
          {cabinets ? (
            cabinets.map(({ id, name }) => (
              <Items onClick={() => selectGab(id)}>
                <Icons>
                  <GabiIcons />
                </Icons>
                <Name key={id}>{name}</Name>
              </Items>
            ))
          ) : (
            <></>
          )}
        </List>
        <List>
          <Rec />
        </List>
        <List>
          <Titulo>Carpetas</Titulo>
          {FoldersCabinet ? (
            FoldersCabinet.map(({ id, name }) => (
              <Items onClick={() => selectFol(id)}>
                <Icons>
                  <CarpIcons x={24} y={24}/>
                </Icons>
                <Name key={id}>{name}</Name>
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

export default Search;