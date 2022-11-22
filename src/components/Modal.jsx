import React from "react";
import styled from "styled-components";
import check from "../assets/check.png";
import { Link } from "react-router-dom";

export default function Modal({ cart, setModal }) {
  const total = cart.reduce((total, num) => {
    return total + num.price * num.count;
  }, 0);

  if (cart.length === 0) {
    return;
  }

  return (
    <Center>
      <MainDiv>
        <Checkbox>
          <img src={check} alt="" />
        </Checkbox>
        <Thank>THANK YOU FOR YOUR ORDER</Thank>
        <Grand>You will receive an email confirmation shortly.</Grand>

        <GrayBlackDiv>
          <OneDiv>
            <Img src={cart[0].img} alt="" />
            <div>
              <Name> {cart[0].slug}</Name>
              <Price> $ {cart[0].price * cart[0].count}</Price>
            </div>
            <Money> x{cart[0].count}</Money>
          </OneDiv>
          <hr />
          <Money>and {cart.length - 1} other items</Money>
          <BlackDiv>
            <Grand>GRAND TOTAL</Grand>

            <h1>$ {total + total / 100 + total / 5}</h1>
          </BlackDiv>
        </GrayBlackDiv>

        <Link to="/">
          <BackToHome onClick={() => setModal(false)}>Back To Home</BackToHome>
        </Link>
      </MainDiv>
    </Center>
  );
}

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainDiv = styled.div`
  position: absolute;
  padding: 32px;
  height: 600px;
  width: 327px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  background-color: white;
  z-index: 3;
  @media screen and (min-width: 768px) {
    height: 581px;
    width: 540px;
    border-radius: 8px;
    align-items: flex-start;
  }
`;

const Checkbox = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 32px;
  background: #d87d4a;
`;

const Thank = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  margin-top: 23px;
  margin-bottom: 16px;
  /* or 117% */

  letter-spacing: 0.857143px;
  text-transform: uppercase;

  color: #000000;
`;

const GrayBlackDiv = styled.div`
  height: 232px;
  width: 263px;
  left: 32px;
  top: 265px;
  border-radius: 8px;
  background: #f1f1f1;
  padding: 24px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    padding: 0px;
  }
`;
const Img = styled.img`
  height: 64px;
  width: 64px;
  left: 28px;
  top: 88px;
  border-radius: 8px;
`;
const OneDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Money = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */
  text-align: center;
  color: gray;
  @media screen and (min-width: 768px) {
    display: flex;
    align-self: center;
  }
`;
const Price = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  /* identical to box height, or 179% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
const Name = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #000000;
`;

const BlackDiv = styled.div`
  height: 92px;
  width: 263px;
  left: 32px;
  top: 405px;
  background-color: black;
  margin-left: -24px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 20px;
  padding: 15px 24px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  /* identical to box height */

  text-transform: uppercase;

  color: #ffffff;
  h1 {
    margin-top: 8px;
  }
  @media screen and (min-width: 768px) {
    height: 230px;
    width: 288px;
    margin-top: 0;
    margin-left: 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Grand = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */
  text-align: left;
  color: gray;
`;

const BackToHome = styled.div`
  height: 48px;
  width: 271px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background: #d87d4a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 23px;

  color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 440%;
  }
`;
