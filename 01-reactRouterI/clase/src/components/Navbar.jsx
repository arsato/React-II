import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div>Dog pets</div>
            <div className="places">
                <p><Link to="/">Home</Link></p>
                <p><Link to="service">Servicios</Link></p>
                <p><NavLink className={({isActive}) => isActive ? "active" : ""} to="contact">Contacto</NavLink></p>
            </div>
        </div>
    );
}

export default Navbar;