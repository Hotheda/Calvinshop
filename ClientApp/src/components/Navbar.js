import React, { useContext } from "react"
import {Link} from "react-router-dom"
import { ProductsContext } from "./ProductsContext"

function Navbar(){
    const [/* */,/* */,cartList, /* */] = useContext(ProductsContext)
    
    // Count number of items in cart
    const itemsInCart = cartList.reduce((number, item)=>{
        return number+item.inCart;
    },0);

    return(
        <nav className="mainNav">
            <div className="navLogo">
                <Link className="logoLink" to="./">LoGO</Link>
            </div>
            <div className="navlinks">
                <Link className="link" to="./about">About</Link>
                <Link className="link" to="./shop">Shop</Link>
                <Link className="cart_link" to="./cart">Cart: <span>{itemsInCart}</span></Link>
            </div>
        </nav>
    )
}

export default Navbar