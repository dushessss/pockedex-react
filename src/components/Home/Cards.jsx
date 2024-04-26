import React from 'react';
import {PokemonArrayCards} from "../../utils/constants.jsx";

const Cards = ({name,handleClick}) => {
    return (
        <li>
            <img src={PokemonArrayCards[name].url} alt={name} className={"max-w-none"} onClick={() => handleClick(name)}></img>
        </li>
    );
};

export default Cards;