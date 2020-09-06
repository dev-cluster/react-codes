import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PokemonCard({ name, pokemonId }) {
  return (
    <Card style={{ width: "18rem" }} className="m-2" key={name}>
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Link to={`/${pokemonId}`}>View Details</Link>
      </Card.Body>
    </Card>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  pokemonId: PropTypes.string.isRequired,
};

PokemonCard.defaultProps = {
  name: "Default Pokemon Name",
  pokemonId: 1,
};

export default PokemonCard;
