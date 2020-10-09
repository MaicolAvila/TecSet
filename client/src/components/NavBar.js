import React from 'react';
import { Link } from "react-router-dom";


import whatsapp from "../assets/icons/whatsapp.webp";


class NavBar extends React.Component {
    render(){
    return(
        <nav className="navC">
            <ul className="ulC">
                <li><Link to="/" className="titleNav">TecSet</Link></li>
                <li className="contact"><a  href="https://wa.link/9xnvxb" ><span className="number">+57 3193855688</span><img src={whatsapp} className="imgNav" /></a></li>
            </ul>
        </nav>
    )
    }
}

export default NavBar;