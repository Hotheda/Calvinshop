import React,{ useContext } from "react"
import { ProductsContext } from "./ProductsContext"


function Checkout(){
    const [cartItems, setCartItems] = useContext(ProductsContext);

    const cartList = cartItems.map((item)=>{
        if(item.inCart){
            return <li>{item.name}</li>
        }
    })

    console.log(cartList)
    return(
        <div>
            <h1>Checkout</h1>
            <ul>
                {cartList}
            </ul>
        </div>
    )
}

export default Checkout