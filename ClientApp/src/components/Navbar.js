import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav className="mainNav">
            <div className="navLogo">
                <Link className="logoLink" to="./">LOGO</Link>
            </div>
            <ul className="navlinks">
                <Link className="link" to="./about">About</Link>
                <Link className="link" to="./shop">Shop</Link>
                <Link className="link" to="./cart">CART</Link>
            </ul>
        </nav>
    )
}

export default Navbar