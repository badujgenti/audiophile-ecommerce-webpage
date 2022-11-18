import React from "react";
import { useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function Cart({ cart, setCart, navbarOpen }) {
  const RemoveAll = () => {
    setCart([]);
  };

  const handleClick = (id) => {
    const filteredArr = [...cart];
    const index = filteredArr.findIndex((item) => {
      return item.id === id;
    });

    if (filteredArr[index].count > 0) {
      filteredArr[index].count = filteredArr[index].count - 1;
      if (filteredArr[index].count === 0) {
        filteredArr.splice(index, 1);
      }
      setCart(filteredArr);
      console.log(filteredArr);
    }
  };

  const handleClick2 = (id) => {
    const filteredArr = [...cart];
    const index = filteredArr.findIndex((item) => {
      return item.id === id;
    });

    filteredArr[index].count = filteredArr[index].count + 1;
    if (filteredArr[index].count === 0) {
      filteredArr.splice(index, 1);
    }
    setCart(filteredArr);
    console.log(filteredArr);
  };

  const [modal, setModal] = useState(true);
  const toggle = () => {
    setModal(!modal);
  };

  console.log(navbarOpen);
  return (
    <div>
      {modal && <BlackBgd />}
      {modal && (
        <CartDiv>
          <div>
            <Header>
              <CartText>CART ({cart.length}) </CartText>
              <Remove onClick={RemoveAll}>Remove All</Remove>
            </Header>
            {cart.map((oneThing) => {
              return (
                <OneDiv>
                  <Img src={oneThing.img} alt="" />

                  <PriceDiv>
                    <Name> {oneThing.slug}</Name>

                    <Price> $ {oneThing.price * oneThing.count}</Price>
                  </PriceDiv>

                  <ItemCount>
                    <p onClick={() => handleClick(oneThing.id)}> - </p>
                    {oneThing.count}

                    <p onClick={() => handleClick2(oneThing.id)}> + </p>
                  </ItemCount>
                </OneDiv>
              );
            })}
          </div>
          <Header>
            <p>TOTAL</p>
            <p>
              {cart.reduce((total, num) => {
                return total + num.price * num.count;
              }, 0)}
            </p>
          </Header>
          <Link to="/category/:category/:slug/:checkout">
            <Checkout onClick={toggle}>Checkout</Checkout>
          </Link>
        </CartDiv>
      )}
    </div>
  );
}

const CartDiv = styled.div`
  height: 488px;
  width: 327px;
  border-radius: 8px;
  padding: 28px 31px;
  background-color: white;
  margin-left: 24px;
  margin-top: 24px;
  z-index: 4;
  position: fixed;
`;

const Img = styled.img`
  height: 64px;
  width: 64px;
  left: 28px;
  top: 88px;
  border-radius: 8px;
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

const ItemCount = styled.div`
  height: 32px;
  width: 96px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #f1f1f1;
`;

const OneDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: #000000;
`;

const Remove = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  text-decoration-line: underline;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const PriceDiv = styled.div`
  width: 87px;
`;

const Checkout = styled.div`
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

  color: #ffffff;
`;

const BlackBgd = styled.div`
  height: 100vh;
  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 100vw;
`;
