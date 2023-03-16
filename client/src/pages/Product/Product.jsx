import {
  AddShoppingCartOutlined,
  BalanceOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">&#8377;199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
          vero dolorem impedit! Amet impedit quod autem! Eum quasi quisquam eos
          mollitia at expedita, rerum, id in asperiores modi cum.
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartOutlined /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderOutlined /> ADD TO WISH
          </div>
          <div className="item">
            <BalanceOutlined /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span> Vendor: Polo</span>
          <span> Product Type: T-shirt</span>
          <span> Tag: T-shirt, Women, Top</span>
        </div>
        <hr />

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
