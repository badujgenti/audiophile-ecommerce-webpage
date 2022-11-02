import React from "react";
import styled from "styled-components";
import Headphones from "../assets/cart/image-xx99-mark-one-headphones.jpg";

export default function BurgerMenu() {
  return (
    <Box>
      <img src={Headphones} alt="" />
      BurgerMenu
    </Box>
  );
}

const Box = styled.div`
  height: 165px;
  width: 327px;
  background: #f1f1f1;
  border-radius: 8px;
`;
