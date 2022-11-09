import React from "react";
import styled from "styled-components";
import burger from "../assets/Hamburger.svg";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import BurgerMenu from "./BurgerMenu";

export default function Header({ setNavbarOpen, navbarOpen }) {
  const openMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <HeaderDiv>
      <img onClick={openMenu} src={burger} alt="" />
      <img src={logo} alt="" />
      <img src={cart} alt="" />
      {navbarOpen && <BurgerMenu isAbsolute />}
    </HeaderDiv>
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
