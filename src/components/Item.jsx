import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import { Link, useNavigate } from "react-router-dom";

export default function Item({ cart, setCart }) {
  const { slug, category } = useParams();
  const navigate = useNavigate();

  const items = data.filter((thing) => thing.slug === slug);

  const [itemCount, setItemCount] = useState(0);

  const Increase = () => {
    setItemCount(itemCount + 1);
  };

  const Decrease = () => {
    setItemCount(itemCount - 1);
  };

  const AddToCart = () => {
    const isAlreadyInCart = cart.find((item) => item.slug === items[0].slug);
    if (isAlreadyInCart) {
      const Info = cart.map((oneItem) => {
        if (oneItem.slug === items[0].slug) {
          oneItem.count += itemCount;
        }
        return oneItem;
      });
      setCart(Info);
    } else {
      const obj = {
        slug: items[0].name,
        count: itemCount,
        img: items[0].image.mobile,
        price: items[0].price,
        id: items[0].id,
      };
      if (itemCount > 0) {
        setCart([...cart, obj]);
      }
    }
    setItemCount(0);
  };

  return (
    <div>
      {items.map((item) => {
        const { first, second, third } = item.gallery;
        const galleryImages = [first, second, third];

        return (
          <FullDiv>
            <GoBack onClick={() => navigate(-1)}>Go back</GoBack>

            <MainImg src={item.image.mobile} alt="" />
            {item.new ? <New> New Product </New> : null}
            <h1>{item.name}</h1>
            <Description>{item.description}</Description>
            <PriceTag>$ {item.price * itemCount}</PriceTag>
            <div style={{ display: "flex", gap: "16px" }}>
              <CountDiv>
                <span onClick={Decrease}>-</span> {itemCount}{" "}
                <span onClick={Increase}>+</span>
              </CountDiv>
              <SeeProduct onClick={AddToCart}>add to cart</SeeProduct>
            </div>
            <Features>FEATURES</Features>
            <Description>{item.features}</Description>
            <Features>IN THE BOX</Features>
            {item.includes.map((one) => (
              <div>
                <Count>{one.quantity}x</Count>
                <CountText>{one.item}</CountText>
              </div>
            ))}
            <MapDiv>
              {galleryImages.map((pic, index, self) => (
                <div>
                  <MapImg src={pic.mobile} alt="" />
                  {/* {(isLast = index === self.length - 1)} */}
                </div>
              ))}
            </MapDiv>
            <Features>YOU MAY ALSO LIKE</Features>
            {item.others.map((other) => (
              <MayLikeDiv>
                <MayLikePic src={other.image.mobile} alt="" />
                <MayLikeText>{other.name}</MayLikeText>
                <Link to={`/category/${other.category}/${other.slug}`}>
                  <SeeProduct>see product </SeeProduct>
                </Link>
              </MayLikeDiv>
            ))}
          </FullDiv>
        );
      })}
    </div>
  );
}

const FullDiv = styled.div`
  padding: 16px 24px;
`;

const GoBack = styled.p`
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

const MainImg = styled.img`
  height: 327px;
  width: 327px;

  border-radius: 8px;
`;

const New = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 24px;

  color: #d87d4a;
`;

const Description = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  margin-top: 24px;
  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Count = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #d87d4a;
`;

const CountText = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */
  margin-left: 24px;
  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const MapImg = styled.img`
  height: 174px;
  width: 327px;

  border-radius: 8px;
`;

const MapDiv = styled.div`
  margin-top: 88px;
`;

const MayLikePic = styled.img`
  height: 120px;
  width: 327px;

  border-radius: 8px;
`;

const MayLikeText = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;

  color: #000000;
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

const MayLikeDiv = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const CountDiv = styled.div`
  height: 48px;
  width: 120px;
  background: #f1f1f1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #000000;

    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const PriceTag = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-top: 24px;
  margin-bottom: 31px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: #000000;
`;

const Features = styled.h1`
  margin-top: 88px;
  margin-bottom: 24px;
`;
