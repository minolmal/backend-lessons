import React from "react";

const Card = ({id, name, image }) => {
  return (
    <a href="#" className="ui raised card">
      <div className="image">
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
    </a>
  );
};

export default Card;
