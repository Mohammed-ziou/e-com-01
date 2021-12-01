import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    transition: all 0.3s ease;
    background-color: #eeeeee40;

    button {
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h2`
  color: #eee;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #eee;
  cursor: pointer;
  color: gray;
  font-weight: 500;
`;

const CategroyItem = ({ item }) => {
  return (
    <Container key={item.id}>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategroyItem;
