import React from "react";
import styled from "styled-components";
import burger from "../assets/Hamburger.svg";
import logo from "../assets/logo.png";
import cart1 from "../assets/cart.png";
import BurgerMenu from "./BurgerMenu";
import Cart from "./Cart";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({
  setNavbarOpen,
  navbarOpen,
  menu,
  setMenu,
  cart,
  setCart,
}) {
  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  const openCart = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <HeaderDiv>
        <img onClick={toggleMenu} src={burger} alt="" />
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <img onClick={openCart} src={cart1} alt="" />
        {navbarOpen && <BurgerMenu isAbsolute toggleMenu={toggleMenu} />}
      </HeaderDiv>
      {menu && (
        <Cart
          cart={cart}
          setCart={setCart}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
      )}
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
