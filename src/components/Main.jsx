import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Poke from "../pages/Poke.jsx";

const Main = () => {
    return (
        <Routes>
            {[`/pockedex-react/`,`/pockedex-react/home`].map(p=>
                <Route key={p} path={p} element={<Home/>}></Route>
            )}
            {[`/pockedex-react/poke/`, `/pockedex-react/poke/:pokemonsId`].map(p =>
                <Route key={p} path={p} element={<Poke/>}></Route>
            )}
        </Routes>
    );
};

export default Main;