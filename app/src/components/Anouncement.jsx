import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-size: 14px;
  font-weight: 500;
  background-color: teal;
  color: #ddd;
`;

const Anouncement = () => {
  return <Container>Lorem ipsum dolor sit amet consectetur.</Container>;
};

export default Anouncement;
