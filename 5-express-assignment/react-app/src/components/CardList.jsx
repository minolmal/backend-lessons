import React from "react";
import Card from "./Card";

const CardList = ({ products, showProduct }) => {
  return (
    <div className="ui centered cards">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            showProduct={showProduct}
          />
        );
      })}
    </div>
  );
};

export default CardList;
