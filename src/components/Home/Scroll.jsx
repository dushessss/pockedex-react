import React from 'react';
import {PokemonArrayCards} from "../../utils/constants.jsx";
import Cards from "./Cards.jsx";
import {useNavigate} from "react-router-dom";


const Scroll = () => {
    const navigate = useNavigate();
    const handleClick = (name) =>{
        navigate(`/poke/${name}`);
    }
    return (
        <div
            className={'w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] group'}>
            <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll group-hover:paused"}>
                {Object.keys(PokemonArrayCards).map((name, index) => <Cards key={index} name={name} handleClick={handleClick}/>)}
            </ul>
            <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll group-hover:paused"}
                aria-hidden={"true"}>
                {Object.keys(PokemonArrayCards).map((name, index) => <Cards key={index} name={name} handleClick={handleClick}/>)}
            </ul>
        </div>
    );
};

export default Scroll;