import React from 'react';
import Nav from "./Nav.jsx";

const Header = () => {
    return (
        <header className={"flex bg-[#3f4655] items-center h-[50px] justify-center"}>
            <Nav/>
        </header>
    );
};

export default Header;