import React from "react";
import styled from "styled-components";
import Man from "../assets/shared/mobile/image-best-gear.jpg";

export default function Person() {
  return (
    <div>
      <PersonImg src={Man} alt="" />
      <PersonH1>
        Bringing you the <span>best </span> audio gear
      </PersonH1>
      <PersonP>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </PersonP>
    </div>
  );
}

const PersonImg = styled.img`
  height: 300px;
  width: 327px;
  border-radius: 8px;
`;

const PersonH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
  margin-top: 40px;
  span {
    color: #d87d4a;
  }
`;

const PersonP = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  text-align: center;

  color: #000000;
  margin-top: 32px;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
