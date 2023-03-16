import { React, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Search } from "@mui/icons-material";
import { PersonOutlineOutlined } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/india.png" alt="india" width={25} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>Rupees</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            <h2 className="logo">Indian Store</h2>
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link">About</Link>
          </div>
          <div className="item">
            <Link className="link">Contact</Link>
          </div>
          <div className="item">
            <Link className="link">Stores</Link>
          </div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
