import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

const FeaturedProducts = ({ type }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} products</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero
          dolores distinctio corrupti animi perspiciatis beatae repudiandae qui
          facere cumque! Iste, neque. Rem consectetur cum totam itaque alias
          expedita dolor!
        </p>
      </div>

      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
