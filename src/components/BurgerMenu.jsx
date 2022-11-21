import React from "react";
import styled from "styled-components";
import Headphones from "../assets/Headphones.png";
import arrow from "../assets/arrow.svg";
import Speaker from "../assets/Speaker.png";
import BTspeaker from "../assets/Bt-speaker.png";

import { Link } from "react-router-dom";

export default function BurgerMenu({ isAbsolute, toggleMenu }) {
  return (
    <BurgerDiv isAbsolute={isAbsolute}>
      <Box>
        <Image src={Headphones} alt="" />
        <Item>Headphones</Item>

        <Link
          onClick={toggleMenu}
          to="/category/headphones"
          style={{
            textDecoration: "none",
          }}
        >
          <Shop>
            Shop <img src={arrow} alt="" />{" "}
          </Shop>
        </Link>
      </Box>
      <Box>
        <Image src={Speaker} alt="" />
        <Item>Speakers</Item>
        <Link
          onClick={toggleMenu}
          to="/category/speakers"
          style={{
            textDecoration: "none",
          }}
        >
          <Shop>
            Shop <img src={arrow} alt="" />{" "}
          </Shop>
        </Link>
      </Box>
      <Box>
        <Image src={BTspeaker} alt="" />
        <Item>Earphones</Item>
        <Link
          onClick={toggleMenu}
          to="/category/earphones"
          style={{
            textDecoration: "none",
          }}
        >
          <Shop>
            Shop <img src={arrow} alt="" />{" "}
          </Shop>
        </Link>
      </Box>
    </BurgerDiv>
  );
}

const Box = styled.div`
  height: 165px;
  width: 327px;
  background: #f1f1f1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  transform: translate(0px, -40px);
`;

const BurgerDiv = styled.div`
  height: 750px;
  padding-top: 84px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  gap: 68px;
  align-items: center;
  flex-direction: column;
  position: ${(props) => (props.isAbsolute ? "absolute" : "static")};
  background-color: ${(props) => (props.isAbsolute ? "white" : "transparent")};
  z-index: 3;
  width: 100%;
  left: 0;
  top: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 340px;
    gap: 10px;
  }
`;

const Item = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
  text-transform: uppercase;

  color: #000000;
`;

const Shop = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 22px;
  margin-top: 17px;
  text-decoration: none;
`;
