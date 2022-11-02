import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Background from "../assets/home/mobile/image-header.jpg";
import BurgerMenu from "./BurgerMenu";

export default function Home() {
  return (
    <>
      <Header />
      <AfterHeader>
        <NewProduct>New Product</NewProduct>
        <H1>XX99 Mark II HeadphoneS</H1>
        <AfterH1>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </AfterH1>
        <SeeProduct>SEE PRODUCT</SeeProduct>
      </AfterHeader>
      <BurgerMenu />
    </>
  );
}

const AfterHeader = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const NewProduct = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-top: 108px;
`;

const H1 = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;

  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: #ffffff;
  padding-top: 16px;
`;

const AfterH1 = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  padding-top: 24px;
`;

const SeeProduct = styled.button`
  height: 48px;
  width: 160px;
  background: #d87d4a;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 110px;
`;
