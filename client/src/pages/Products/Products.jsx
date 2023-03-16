import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">

      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
          <div className="inputItem">
            <input type="checkbox" value={1} id="1" />
            <label htmlFor="1">Shoes</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" value={2} id="2" />
            <label htmlFor="2">Shirts</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" value={3} id="3" />
            <label htmlFor="3">Coats</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" value={4} id="4" />
            <label htmlFor="4">Shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>

          <div className="inputItem">
            <input type="radio" id="asc" name="price" value="asc" onChange={e=> setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="des" name="price" value="des" onChange={e=> setSort("des")}/>
            <label htmlFor="des">Price (Higest first)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img src="/images/banner.png" className="catImg" alt="catImage"/>
        <List catId={catId} maxPrice={maxPrice} sort={sort} className="listImg"/>
      </div> 
      
    </div>
  );
};

export default Products;
