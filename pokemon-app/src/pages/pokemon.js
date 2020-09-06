import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Pokemon() {
  const { id } = useParams();
  const API_URL = "https://pokeapi.co/api/v2/pokemon/" + id;
  const [pokemonData, setPokemonData] = useState(null);

  console.log("Pokemon Data: ", pokemonData);

  useEffect(
    function LoadPokemonData() {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setPokemonData(data));
    },
    [API_URL]
  );

  if (pokemonData === null) {
    return <p>Loading...</p>;
  }

  const pokemonAbilities = pokemonData.abilities.map((item) => (
    <li key={item.ability.name}>{item.ability.name.toUpperCase()}</li>
  ));

  const pokemonStats = pokemonData.stats.map((item) => (
    <li key={item.stat.name}>
      {item.stat.name.toUpperCase()}: {item.base_stat}
    </li>
  ));

  const pokemonTypes = pokemonData.types.map((item) => (
    <li key={item.type.name}>{item.type.name.toUpperCase()}</li>
  ));

  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>{pokemonData.name.toUpperCase()}</h1>
          </Col>

          <Col>
            <img
              src={pokemonData.sprites.front_default}
              alt={`${pokemonData.name} Front`}
            />
          </Col>

          <Col>
            <img
              src={pokemonData.sprites.back_default}
              alt={`${pokemonData.name} Back`}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Abilities</h4>
            <br />
            <ul>{pokemonAbilities}</ul>
          </Col>

          <Col>
            <h4>Stats</h4>
            <br />
            <ul>{pokemonStats}</ul>
          </Col>

          <Col>
            <h4>Types</h4>
            <br />
            <ul>{pokemonTypes}</ul>
          </Col>
        </Row>

        <Row>
          <div className="p-2 button-container">
            <Link to="/">Go Back</Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Pokemon;
