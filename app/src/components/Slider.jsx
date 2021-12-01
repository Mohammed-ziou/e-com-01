import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f0f0f0d1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImgCont = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoCont = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 55px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid grey;
  &:hover {
    background-color: teal;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex);
    }
    if (dir === "right") {
      setSlideIndex(
        slideIndex < sliderItems.length - 1 ? slideIndex + 1 : slideIndex
      );
      console.log(slideIndex);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgCont>
              <Image src={item.img} />
            </ImgCont>
            <InfoCont>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>BUY NOW</Button>
            </InfoCont>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
