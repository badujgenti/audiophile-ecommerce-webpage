import React from "react";
import styled from "styled-components";
import burger from "../assets/Hamburger.svg";
import logo from "../assets/logo.png";
import cart1 from "../assets/cart.png";
import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";

export default function Header({
  setNavbarOpen,
  navbarOpen,
  menu,
  setMenu,
  cart,
  setCart,
}) {
  const openMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  const openCart = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <HeaderDiv>
        <img onClick={openMenu} src={burger} alt="" />
        <img src={logo} alt="" />
        <img onClick={openCart} src={cart1} alt="" />
        {navbarOpen && <BurgerMenu isAbsolute />}
      </HeaderDiv>
      {menu && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
}

const HeaderDiv = styled.div`
  height: 90px;
  width: 375px;
  background-color: black;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 3;
`;
