import {  TH, Title } from "../ConsulIndex";

const ItemTitle = ({ name }) => {
  return (
    <TH>
      <Title>{ name }</Title>
    </TH>
  );
};

export default ItemTitle;
