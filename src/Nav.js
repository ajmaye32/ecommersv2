import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
// import Products from './Components/Products';

const navStyle = {
    color: 'white'
};

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/home" style={navStyle}>
                    <li >Home</li>
                </Link>
                <Link to="products" style={navStyle}>
                    <li >Products</li>
                </Link>
                <Link to="/contact" style={navStyle}>
                    <li >Contact</li>
                </Link>

            </ul>
        </nav >

    );
}

export default Nav;