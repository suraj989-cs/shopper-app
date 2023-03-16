import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss";

const Card = ({item}) => {
  return (
    <Link className='link' to={`/products/${item.id}`}>
      <div className='card'>
        <div className="image">
          {item?.attribute.isNew && <span>New Season</span>}
          <img src={item.img} alt="main" className='mainImg'/>
          <img src={item.img2} alt="second" className='secondImg'/>
        </div>
        <h2>{item.title}</h2>
        <div className='prices'>
          <h3>&#36;<strike>{item.oldPrice}</strike></h3>
          <h3>&#36;{item.Price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card