import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0.2)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ fontSize: "20px" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  border: 1px solid #ccc;
  ${mobile({ margin: "10px 0 0 0" })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  /* width: 40%; */
  flex: 1;
  padding: 15px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #008080ef;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <Agreement>
            by creating an account i consent to the processing of my personal
            data in accordance with <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
