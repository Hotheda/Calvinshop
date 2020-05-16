import React, { useContext, useState } from "react"
import {Link} from "react-router-dom"
import { ProductsContext } from "./ProductsContext"

function Navbar(){
    const [/* */,/* */,cartList, /* */] = useContext(ProductsContext)
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [navbarClass, setNavbarClass] = useState("navlinks_close")

    const toggleMenu=()=>{
        if(navbarOpen)
            setNavbarClass("navlinks_close")
        else
            setNavbarClass("navlinks_open")
        setNavbarOpen(!navbarOpen)
    }
    
    // Count number of items in cart
    const itemsInCart = cartList.reduce((number, item)=>{
        return number+item.inCart;
    },0);

    return(
        <nav className="mainNav">
            <div className="navLogo">
                <Link className="logoLink" to="./">LoGO</Link>
            </div>
            <div onClick={toggleMenu} className={navbarClass}>
                <Link className="link" to="./about">About</Link>
                <Link className="link" to="./shop">Shop</Link>
                <Link className="link" to="./cart">Cart <span className="cart_link">{itemsInCart}</span></Link>
            </div>
            <div className="nav_button" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar