import React, { useContext } from "react"
import {Link} from "react-router-dom"
import { ProductsContext } from "./ProductsContext"

function Navbar(){
    const [/* */,/* */,cartList, /* */] = useContext(ProductsContext)
    console.log("cartlist.length: ",cartList.length)
    return(
        <nav className="mainNav">
            <div className="navLogo">
                <Link className="logoLink" to="./">LOGO</Link>
            </div>
            <div className="navlinks">
                <Link className="link" to="./about">About</Link>
                <Link className="link" to="./shop">Shop</Link>
                <Link className="cart_link" to="./cart">CART : {cartList.length}</Link>
            </div>
        </nav>
    )
}

export default Navbar