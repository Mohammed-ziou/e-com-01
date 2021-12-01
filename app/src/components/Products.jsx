import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "./../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} img={item.img}></Product>
      ))}
    </Container>
  );
};

export default Products;
