import React, {useContext, useEffect, useRef, useState} from "react";
import {base_url, defaultPokemon, period, PokemonArray, version} from "../utils/constants.jsx";
import {UserContext} from "../utils/useContext.jsx";
import {useNavigate, useParams} from "react-router-dom";

const Poke = () => {
    const {setPokemons: changeMainPoke} = useContext(UserContext);
    const [pokemons, setPokemons] = useState({});
    const {pokemonsId} = useParams();
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const inputReadValue = () => {
        navigate(`/pokedex-react/poke/${inputRef.current.value.toLowerCase()}`)
    }
    const getInfo = async () => {
        const response = await fetch(`${base_url}${version}pokemon/${pokemonsId}`);
        const data = await response.json();
        const pokemons = {
            id: data.id,
            name: data.name,
            weight: data.weight,
            height: data.height,
            type: data.types[0].type.name,
            forms: data.forms[0].url
        }
        const gitResponse = await fetch(`${pokemons.forms}`)
        const gitData = await gitResponse.json();
        pokemons.img = gitData.sprites.front_default;
        setPokemons(pokemons);
        const info = {
            payload: pokemons,
            time: Date.now()
        }
        localStorage.setItem(pokemonsId, JSON.stringify(info));
    }
    useEffect(() => {
        if (!PokemonArray.includes(pokemonsId)) {
            navigate(`/pokedex-react/poke/${defaultPokemon}`)
        } else {
            changeMainPoke(pokemonsId);
            const pokemon = JSON.parse(localStorage.getItem(pokemonsId));
            if (pokemon && ((Date.now() - pokemon.time) < period)) {
                setPokemons(pokemon.payload);
            } else {
                getInfo();
            }
        }

    }, [pokemonsId]);
    return (
        <div className={"m-auto"}>
            <div className={'border-2 border-gray-500 rounded-2xl mb-4 p-2'}>
                <input type="text" ref={inputRef}
                       className={"focus:outline-0 focus:bg-transparent bg-transparent text-white"}
                       placeholder={"Enter pokemon name"}/>
                <button className={"border-2 border-gray-500 rounded-3xl p-1 text-white"} onClick={inputReadValue}>Get
                </button>
            </div>
            <div className={"flex flex-col border-2 border-gray-500 rounded-2xl p-2 bg-gray-900"}>
                <img src={`${pokemons.img}`} alt="pic"
                     className={"border-2 rounded-2xl mb-3 border-gray-500 bg-[3f4655]"}/>
                <div className={"border-2 border-gray-500 rounded-2xl p-2 bg-[3f4655] text-white"}>
                    <p>Pokemon: {pokemons.name}</p>
                    <p>Id: {pokemons.id}</p>
                    <p>Weight: {pokemons.weight/10} kg</p>
                    <p>Height: {pokemons.height/10} meter</p>
                    <p>Type: {pokemons.type}</p>
                </div>
            </div>
        </div>
    )
}

export default Poke
