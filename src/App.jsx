import React, {useState} from "react";
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {UserContext} from "./utils/useContext.jsx";

const App = () => {
    const [pokemons, setPokemons] = useState({});
    return (
        <div className={"flex flex-col h-screen bg-[#23272f]"}>
            <UserContext.Provider value={
                {
                    pokemons,
                    setPokemons
                }
            }>
                <Header/>
                <Main/>
            </UserContext.Provider>
            <Footer/>
        </div>
    )
}

export default App
