import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialCont = styled.div`
  display: flex;

  ${mobile({ justifyContent: "center" })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 13px;
  color: #${(props) => props.bgc};
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    color: white;
    background-color: #${(props) => props.bgc};
  }
  @media only screen and (max-width: 380px) {
    color: white;
    background-color: #${(props) => props.bgc};
    margin-right: 13px;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f1f1f1" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAME.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem nobis amet quos illum, soluta iusto tempora, dolorum,
          optio veniam molestias culpa natus odit asperiores sit.
        </Desc>
        <SocialCont>
          <SocialIcon bgc="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bgc="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon bgc="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon bgc="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialCont>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
          <ListItem>Hello There</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact info.</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> somewhere between the stars?
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +218 91 018 6959
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> madiziou@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
