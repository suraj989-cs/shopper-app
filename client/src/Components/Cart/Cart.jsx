import { DeleteOutlineOutlined } from "@mui/icons-material";
import React from "react";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 23,
      price: 200,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "T-shirt",
      desc: "T-shirt",
      oldPrice: 23,
      price: 200,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {[
        data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="details" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlineOutlined className="delete" />
          </div>
        )),
      ]}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
