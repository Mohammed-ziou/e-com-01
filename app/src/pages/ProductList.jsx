import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;

const Options = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Title>Dresses</Title>
      <FilterCont>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Options disabled>Color</Options>
            <Options>Red</Options>
            <Options>white</Options>
            <Options>black</Options>
            <Options>blue</Options>
            <Options>yellow</Options>
            <Options>green</Options>
          </Select>
          <Select>
            <Options disabled>Size</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
            <Options>XXL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products
            <Select>
              <Options disabled selected={true}>
                Newest
              </Options>
              <Options>Price (asc)</Options>
              <Options>Black (desc)</Options>
            </Select>
          </FilterText>
        </Filter>
      </FilterCont>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
