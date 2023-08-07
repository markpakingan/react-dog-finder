// Navbar.js file

import React from "react";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {

    return (
        <nav>
            <NavLink exact to="/"> Home </NavLink>
            <NavLink exact to="dog/whiskey"> Whiskey </NavLink>
            <NavLink exact to="dog/duke"> Duke </NavLink>
            <NavLink exact to="dog/perry"> Perry </NavLink>
            <NavLink exact to="dog/tubby"> Tubby </NavLink>
        </nav>
    )
}

export default Navbar;