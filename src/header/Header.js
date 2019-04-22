import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header>
            <div className="logo">sur<span className="special_letter">v</span>e<span className="special_letter">y</span>s</div>
            <nav>
                <ul>
                    <li><Link className="link" to="/"> Home</Link></li>
                    <li><Link className="link" to="/suv">Surveys</Link></li>
                    <li><Link className="link" to="/create">Create</Link></li>

                </ul>
                <div className="btns">
                    <button className="btn btn_login btns_children">Log in</button>
                    <Link className="link" to="/register"><button className="btn btn_register btns_children">Register</button></Link>
                </div>

            </nav>
        </header>
    );
}

export default Header;