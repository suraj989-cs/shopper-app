import React from 'react';
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus dolorum vel numquam eveniet asperiores libero? Et natus ex totam?voluptatibus dolorum vel numquam eveniet asperiores libero? Et natus ex totam?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae voluptatibus dolorum vel numquam eveniet asperiores libero? Et natus ex totam? voluptatibus dolorum vel numquam eveniet asperiores libero? Et natus ex totam?
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className='logo'>Indian Store</span>
        </div>
        <div className="center">
          <span className='copyright'>&copy; All Copyrights are reservered by Indian Store</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="payment" height={50} />
        </div>
      </div>
    </div>
  )
}

export default Footer