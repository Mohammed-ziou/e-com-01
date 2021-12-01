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
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0 0 0;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  margin: 15px 0;
  padding: 15px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #008080ef;
  }
`;
const Link = styled.a`
  margin: 0 0 5px 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <Button>LOGIN</Button>
          <Link>Forgot password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
