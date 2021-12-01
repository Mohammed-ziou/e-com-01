import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 55px;
  margin: 20px;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #bbb;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  padding: 20px;
  font-size: 20px;
  border: none;
  flex: 10;
  ${mobile({ padding: "5px", fontSize: "14px" })}
`;

const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  flex: 1;
  ${mobile({ flex: 2 })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing</Desc>
      <InputContainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
