import React, { useState } from "react";
import logo from "../../assets/pokemon_logo.png";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import axios from "../../utils/api";
import { toast } from "react-toastify";
import "./styles.css";

export default function Index() {
  const [pokemon, setPokemon] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const pokeName = document.getElementsByClassName("search-txt")[0].value;
    try {
      const searchedPokemon = await axios.get(`/pokemon/name/${pokeName}`);
      const {
        data: { Count },
      } = searchedPokemon;
      if (Count === 1) {
        setPokemon(searchedPokemon.data);
        toast.success("Pokémon encontrado na Pokedéx!");
      } else {
        toast.error("Nenhum Pokémon com esse nome foi encontrado na Pokédex.");
      }
    } catch (e) {
      toast.error("Ocorreu um erro desconhecido.");
      console.error(e.message);
    }
  };

  return (
    <div>
      <img src={logo} alt="Logo Pokémon" className="logo" />
      <SearchBar />
      <Button onClick={(event) => onSubmit(event)} />
      {pokemon === null ? (
        ""
      ) : (
        <Card
          title={pokemon.Items[0].pokeName}
          pathImg={pokemon.Items[0].front_default}
        >
          <p>{"Número: " + pokemon.Items[0].id} </p>
          <p>
            {pokemon.Items[0].types.length > 1
              ? "Tipos: " +
                pokemon.Items[0].types[0].type.name +
                "/" +
                pokemon.Items[0].types[1].type.name
              : "Tipo: " + pokemon.Items[0].types[0].type.name}{" "}
          </p>
        </Card>
      )}
    </div>
  );
}
