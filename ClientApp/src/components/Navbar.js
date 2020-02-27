import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav className="mainNav">
            <div className="navLogo">
                <Link className="logoLink" to="./">LOGO</Link>
            </div>
            <div className="navlinks">
                <Link className="link" to="./about">About</Link>
                <Link className="link" to="./shop">Shop</Link>
                <Link className="cart_link" to="./cart">CART</Link>
            </div>
        </nav>
    )
}

export default Navbar