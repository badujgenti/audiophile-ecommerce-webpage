import React from "react";
import styled from "styled-components";
import Background from "../assets/home/mobile/image-header.jpg";
import BurgerMenu from "./BurgerMenu";
import Speaker from "../assets/speaker-big.png";
import Circles from "../assets/circles.png";
import GrayPic from "../assets/home/mobile/image-speaker-zx7.jpg";
import BlackImg from "../assets/home/mobile/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <AfterHeader>
        <NewProduct>New Product</NewProduct>
        <H1>XX99 Mark II HeadphoneS</H1>
        <AfterH1>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </AfterH1>
        <Link to="/category/headphones/xx99-mark-two-headphones">
          <SeeProduct>SEE PRODUCT</SeeProduct>
        </Link>
      </AfterHeader>
      <BurgerMenu />
      <PaddingDiv>
        <OrangeDiv>
          <img style={{ height: "207px" }} src={Speaker} alt="" />
          <OrangeDivH1>ZX9 SPEAKER</OrangeDivH1>
          <OrangeDivP>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </OrangeDivP>
          <Link to="/category/speakers/zx9-speaker">
            <OrangeDivBtn> see product</OrangeDivBtn>
          </Link>
        </OrangeDiv>
        <GrayDiv>
          <GrayDivH1>ZX7 SPEAKER</GrayDivH1>
          <Link to="/category/speakers/zx7-speaker">
            <GrayDivBtn> see product</GrayDivBtn>
          </Link>
        </GrayDiv>
        <ImgAndText>
          <img
            style={{ width: "327px", height: "200px", borderRadius: "8px" }}
            src={BlackImg}
            alt=""
          />
          <LightGrayDiv>
            <GrayDivH1>YX1 EARPHONES</GrayDivH1>
            <Link to="/category/earphones/yx1-earphones">
              <GrayDivBtn> see product</GrayDivBtn>
            </Link>
          </LightGrayDiv>
        </ImgAndText>
      </PaddingDiv>
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

const OrangeDiv = styled.div`
  height: 600px;

  background: url(${Circles}), #d87d4a;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 23px 65px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrangeDivH1 = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 32px;
`;

const OrangeDivP = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  text-align: center;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.75;
  margin-top: 24px;
`;

const OrangeDivBtn = styled.button`
  height: 48px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Manrope";
  font-style: normal;
  background-color: black;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  margin-top: 24px;
`;

const GrayDiv = styled.div`
  height: 320px;
  width: 327px;
  background-image: url(${GrayPic});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 101px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const GrayDivH1 = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #000000;
`;
const GrayDivBtn = styled.button`
  height: 48px;
  width: 160px;
  border: 1px solid black;
  background-color: transparent;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;

const ImgAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LightGrayDiv = styled.div`
  height: 200px;
  width: 327px;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 41px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const PaddingDiv = styled.div`
  padding: 120px 24px;
`;
