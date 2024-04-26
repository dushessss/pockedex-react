import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <nav className={"flex"}>
            <div className={"flex w-auto order-1"}>
                <ul className={"flex gap-8 items-center"}>
                    <li>
                        <Link to={`/pockedex-react/home`} className={"block py-3 px-3 text-white bg-transparent hover:text-blue-400 hover:border-b-blue-500 hover:border-b-2 "}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/pockedex-react/poke`} className={"block py-3 px-3 text-white bg-transparent hover:text-blue-400 hover:border-b-blue-500 hover:border-b-2 "}>About Pokemon</Link>
                    </li>
                </ul>
            </div>
        </nav>
);
};

export default Nav;