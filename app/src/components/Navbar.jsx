import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "60px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 1px solid #d6d6d6;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })};
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Language>En</Language>
            <SearchContainer>
              <Input placeholder="search" />
              <Search style={{ color: "grey", fontSize: "16px" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LAME</Logo>
          </Center>
          <Right>
            <MenuItems>Register</MenuItems>
            <MenuItems>Sign In</MenuItems>
            <MenuItems>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </Right>
        </Wrapper>
      </Container>
    );
  }
}

export default Navbar;
