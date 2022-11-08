import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

export default function Categories() {
  const [type, setType] = useState("");

  const { category } = useParams();

  const dataItem = data.filter((item) => item.category === category);
  console.log(dataItem);

  return (
    <>
      <Header>{category}</Header>
      <PaddingDiv>
        {dataItem.map((item) => (
          <Headphone>
            <Image src={process.env.PUBLIC_URL + item.image.mobile} alt="" />
            {item.new ? <New> New Product </New> : null}
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <SeeProduct>SEE PRODUCT</SeeProduct>
          </Headphone>
        ))}
      </PaddingDiv>
      ;
    </>
  );
}

const Header = styled.div`
  height: 102px;
  background-color: black;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headphone = styled.div`
  height: 724px;
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
`;

const PaddingDiv = styled.div`
  padding: 64px 24px;
`;

const Image = styled.img`
  height: 352px;
  width: 327px;
  left: 24px;
  top: 1100px;
  border-radius: 8px;
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
`;

const New = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;

  color: #d87d4a;
`;