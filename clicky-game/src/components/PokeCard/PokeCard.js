import React from 'react';
import "./PokeCard.css";

const PokeCard = props => (
    <div className="card" onClick={props.pokeClick}>
    <div className="img-container">
        <img alt={props.image.replace(".png", "")} src={require("../../images" + props.image)}/>
    </div>
    </div>
);

export default PokeCard;