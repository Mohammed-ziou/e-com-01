import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageCont = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: "40vh" })}
`;

const InfoCont = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "0 20px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Decs = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FliterCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const AmountCont = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid teal;
  padding: 5px 10px 7px;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #00808020;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <ImageCont>
          <Image src="https://i.ibb.co/cXFnLLV/3.png" />
        </ImageCont>
        <InfoCont>
          <Title>PINK DRESS</Title>
          <Decs>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            est molestias unde, quia perferendis pariatur eligendi minus totam
            voluptatibus velit dicta facere laborum. Iste corporis, nam a
            aspernatur ipsam reprehenderit ea laboriosam, numquam pariatur
            mollitia hic, amet cupiditate. Quo ea deserunt vitae. Distinctio
            eveniet neque, facere aperiam nemo voluptas voluptatum?
          </Decs>
          <Price>$40</Price>
          <FliterCont>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="pink"></FilterColor>
              <FilterColor color="blueviolet"></FilterColor>
              <FilterColor color="green"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FliterCont>
          <AddContainer>
            <AmountCont>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountCont>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoCont>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
