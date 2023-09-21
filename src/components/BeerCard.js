import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="beercard">
      <img src={beer.image_url} alt={beer.name} />
      <div className="beer-info">
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.abv}% ABV</p>
      </div>
    </div>
  );
};

export default BeerCard;
