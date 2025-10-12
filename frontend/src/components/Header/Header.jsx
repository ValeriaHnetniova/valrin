import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header(){
    return(
        <header className="header">
            <div className="logo">VALRIN</div>
            <div className="nav-icons">
                <Link to="/">HOME</Link>
                <Link to="/login">LOG IN</Link>
                <Link to="/about">ABOUT</Link>
            </div>
        </header>
    )
}

export default Header;