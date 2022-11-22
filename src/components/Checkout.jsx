import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Modal from "./Modal";

export default function Checkout({ cart, setModal }) {
  const total = cart.reduce((total, num) => {
    return total + num.price * num.count;
  }, 0);

  const [hideModal, setHideModal] = useState(false);

  return (
    <Center>
      <MainDiv>
        <Checkout1>Checkout</Checkout1>
        <OrangeText>billing details</OrangeText>
        <InputName>name</InputName>
        <Input type="text" placeholder="Badu Jgenti" />
        <InputName>Email Address</InputName>
        <Input type="text" placeholder="badu.jgenti@gmail.com" />
        <InputName>Phone Number</InputName>
        <Input type="number" placeholder="+(995)" />
        <OrangeText>Shipping Info</OrangeText>
        <InputName>Your Address</InputName>
        <Input type="text" placeholder="Chavchavadze ave.09" />
        <InputName>ZIP Code</InputName>
        <Input type="text" placeholder="001100" />
        <InputName>City</InputName>
        <Input type="text" placeholder="Tbilisi" />
        <InputName>Country</InputName>
        <Input type="text" placeholder="Georgia" />
        <OrangeText>Payment Details</OrangeText>
        <InputName>Payment Method</InputName>
        <InputDiv>
          <input type="radio" id="huey" value="E-Money" checked />
          <label htmlFor="huey">E-Money</label>
        </InputDiv>

        <InputDiv>
          <input type="radio" id="dewey" value="Cash on Delivery" />
          <label htmlFor="dewey">Cash on Delivery</label>
        </InputDiv>

        <InputName>e-Money Number</InputName>
        <Input type="number" placeholder="123456789" />
        <InputName>e-Money PIN</InputName>
        <Input type="number" placeholder="1234" />
      </MainDiv>
      <Summary>
        <h1>Summary</h1>
        {cart.map((item) => {
          return (
            <OneDiv>
              <FlexDiv>
                <Img src={item.img} alt="" />
                <PriceDiv>
                  <Name>{item.slug}</Name>
                  <Price>{item.price * item.count}</Price>
                </PriceDiv>
              </FlexDiv>
              <Money> x{item.count}</Money>
            </OneDiv>
          );
        })}

        <Header>
          <Money>TOTAL</Money>
          <p>$ {total}</p>
        </Header>
        <Header>
          <Money>SHIPPING</Money>
          <p> $ {total / 100}</p>
        </Header>
        <Header>
          <Money>VAT(INCLUDED)</Money>
          <p> $ {total / 5}</p>
        </Header>
        <Header>
          <Money>GRAND TOTAL</Money>
          <OrangeP>$ {total + total / 100 + total / 5}</OrangeP>
        </Header>
        <Pay
          onClick={() => {
            setModal(true);
            setHideModal(true);
          }}
        >
          <p>Continue & pay</p>
        </Pay>
      </Summary>
      {hideModal ? <Modal cart={cart} setModal={setModal} /> : null}
    </Center>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainDiv = styled.div`
  min-height: 1378px;
  width: 327px;
  left: 24px;
  top: 155px;
  border-radius: 8px;
  margin: 24px;
  padding: 24px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 1084px;
    width: 689px;
    left: 0px;
    top: 49px;
    border-radius: 8px;
  }
`;

const Checkout1 = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;

const OrangeText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  margin-top: 32px;
  /* identical to box height, or 192% */

  letter-spacing: 0.928571px;
  text-transform: uppercase;
  margin-bottom: 16px;

  color: #d87d4a;
`;

const InputName = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  margin-top: 24px;
  color: #000000;
`;

const Input = styled.input`
  height: 56px;
  width: 280px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 24px;
  margin-top: 9px;
  @media screen and (min-width: 768px) {
    height: 56px;
    width: 100%;
    left: 0px;
    top: 25px;
    border-radius: 8px;
  }
`;

const InputDiv = styled.div`
  height: 56px;
  width: 280px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  border: 1px solid black;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  margin-top: 9px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const Summary = styled.div`
  height: 612px;
  width: 327px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  background: #f2f2f2;
  margin: 24px;
  padding: 24px 32px;
  @media screen and (min-width: 768px) {
    height: 612px;
    width: 689px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
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
  margin-top: 28px;
`;

const PriceDiv = styled.div`
  width: 87px;
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

const Header = styled.div`
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

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const OrangeP = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  text-align: right;
  text-transform: uppercase;

  color: #d87d4a;
`;

const Pay = styled.div`
  height: 48px;
  width: 271px;
  background: #d87d4a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
