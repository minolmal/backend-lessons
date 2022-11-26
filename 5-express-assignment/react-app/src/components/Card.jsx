import React from "react";
import SingleProduct from "./SingleProduct";

const Card = ({ id, name, image, showProduct }) => {
  return (
    <button
      className="ui link card"
      onClick={() => (showProduct = id)}>
      <div className=" ui image">
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
    </button>
  );
};

export default Card;
