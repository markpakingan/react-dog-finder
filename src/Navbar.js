// Navbar.js file

import React from "react";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {

    return (
        <nav>
            <NavLink exact to="/"> Home </NavLink>
            <NavLink exact to="whiskey"> Whiskey </NavLink>
            <NavLink exact to="duke"> Duke </NavLink>
            <NavLink exact to="perry"> Perry </NavLink>
            <NavLink exact to="tubby"> Tubby </NavLink>
        </nav>
    )
}

export default Navbar;