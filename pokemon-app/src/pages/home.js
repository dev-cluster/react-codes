import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function LoadData() {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/";
    setLoading(true);

    axios
      .get(API_URL)
      .then(({ data }) => {
        console.log(data);
        setPokemons(data.results);
        setNext(data.next);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  function loadMorePokemons() {
    setLoading(true);
    fetch(next)
      .then((response) => response.json())
      .then((data) => {
        setPokemons((prevPokemons) => {
          return [...prevPokemons, ...data.results];
        });
        setNext(data.next);
        setLoading(false);
      });
  }

  const pokemonList = pokemons.map((pokemon) => {
    const pokemonId = pokemon.url.split("https://pokeapi.co/api/v2/pokemon/");

    return (
      <PokemonCard
        name={pokemon.name}
        pokemonId={pokemonId[1]}
        key={pokemon.name}
      />
    );
  });

  return (
    <div>
      <PokemonCard />
      <div id="pokemon-container">{pokemonList}</div>
      {error ? "Something went wrong" : null}
      <div id="button-container">
        <Button variant="primary" onClick={loadMorePokemons} disabled={loading}>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            "Load more"
          )}
        </Button>
      </div>
    </div>
  );
}

export default Home;
