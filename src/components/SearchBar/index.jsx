import React from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

export default function index() {

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          name="search"
          className="search-txt"
          placeholder="Informe o Pokémon..."
        />
        <p className="search-btn">
          <FaSearch />
        </p>
      </div>
    </div>
  );
}
