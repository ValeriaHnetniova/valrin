import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-title">Help</p>
                    <div>
                        <Link to="/about">About Us</Link>
                        <br /><br />
                        <Link to="/contacts">Contacts</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <a href="https://instagram.com" className="footer-a" target="_blank">
                        INSTAGRAM
                    </a>
                </div>
                <div className="footer-section">
                    <Link to="/login" className="footer-a">Register/ Sign in</Link>
                </div>
                <div className="footer-logo">
                    <p>VALRIN</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;