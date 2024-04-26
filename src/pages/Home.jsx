import React from 'react';
import Scroll from "../components/Home/Scroll.jsx";
import pokedex from '../img/pokedex.png'

const Home = () => {

    return (
        <>
            <div className={'flex justify-center mt-20 mb-20'}>
                <img src={pokedex} alt="" className={''}/>
            </div>
            <div>
                <Scroll/>
            </div>

        </>
    );
};

export default Home;