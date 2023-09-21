import React, { useState, useEffect } from "react";
import axios from "axios";
import "./components/style.css";
import BeerCard from "./components/BeerCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      setBeers(response.data);
    };

    fetchBeers();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
