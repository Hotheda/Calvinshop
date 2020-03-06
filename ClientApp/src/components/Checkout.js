import React,{ useContext } from "react"
import { ProductsContext } from "./ProductsContext"


function Checkout(){
    const [/*productList*/, /*setproductList*/, cartList, setCartList] = useContext(ProductsContext);

    let cartItems = null
    let total=0

    if(cartList.length!=0){        
        cartItems = cartList.map((item)=>{
            total+=item.price
            return (<li key={item.id}>{item.name} Size:{item.size} Price:{item.price}$</li>)
        })
    }

    return(
        <div>
            <h1>Checkout</h1>
            <ul>
                {!cartItems ? <h3>No products</h3> : cartItems}
                {/*cartItems*/}
            </ul>
            <h2>{total} $</h2>
        </div>
    )
}

export default Checkout