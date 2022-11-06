import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Facebook from "../assets/Colaborations.svg";
import Twitter from "../assets/twitter.svg";
import Insta from "../assets/insta.svg";

export default function Footer() {
  return (
    <FullDiv>
      <img src={logo} alt="" />
      <FooterH1> Home </FooterH1>
      <FooterH1> Headphones </FooterH1>
      <FooterH1> speakers </FooterH1>
      <FooterH1> earphones </FooterH1>
      <FooterP>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </FooterP>
      <h1> Copyright 2021. All Rights Reserved</h1>
      <Icons>
        <img src={Facebook} alt="" />
        <img src={Twitter} alt="" />
        <img src={Insta} alt="" />
      </Icons>
    </FullDiv>
  );
}

const FullDiv = styled.div`
  height: 654px;
  padding-top: 52px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 38px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height, or 167% */

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const FooterH1 = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;

  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffffff;
`;

const FooterP = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  text-align: center;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const FB = styled.img`
  height: 24px;
  width: 24px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  width: 104px;
  left: 136px;
  top: 592px;
  border-radius: 0px;
`;
