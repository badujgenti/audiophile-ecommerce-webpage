import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function Categories() {
  const { category } = useParams();

  const dataItem = data.filter((item) => item.category === category);

  return (
    <>
      <Header>{category}</Header>
      <PaddingDiv>
        {dataItem.map((item) => {
          return (
            <Headphone key={item.id}>
              <Image src={process.env.PUBLIC_URL + item.image.mobile} alt="" />
              <ImageTab
                src={process.env.PUBLIC_URL + item.image.desktop}
                alt=""
              />
              {item.new ? <New> New Product </New> : null}
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <Link
                to={`/category/${item.category}/${item.slug}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <SeeProduct>see product </SeeProduct>
              </Link>
            </Headphone>
          );
        })}
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
  @media screen and (min-width: 768px) {
    height: 246px;

    font-size: 40px;

    line-height: 44px;
  }
`;

const Headphone = styled.div`
  height: 724px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
  p {
    color: gray;
  }
  @media screen and (min-width: 768px) {
    height: 706px;
    width: 689px;
  }
  h1 {
    width: 375px;
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.4285714626312256px;
    text-align: center;
  }
`;

const PaddingDiv = styled.div`
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 120px 40px;
  }
`;

const Image = styled.img`
  height: 352px;
  width: 327px;
  left: 24px;
  top: 1100px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const ImageTab = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 352px;

    left: 39px;
    top: 456px;
    border-radius: 8px;
  }
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
