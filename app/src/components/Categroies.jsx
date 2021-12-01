import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategroyItem from "./CategroyItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "5px", flexDirection: "column" })}
`;

const Categroies = () => {
  return (
    <Container>
      {categories.map((cat) => (
        <CategroyItem item={cat} key={cat.id}></CategroyItem>
      ))}
    </Container>
  );
};

export default Categroies;
