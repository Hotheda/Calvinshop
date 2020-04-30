import React, { useContext, useState } from "react"
import { ProductsContext } from "./ProductsContext"


/*
    TODO:
    Add confirm look to page and clear shopping cart (or not succeded and dont clear cart)
    Send mail to user and site owner with usr details and order
    Paypal integration
*/

export default function Confirm(props){
const [ /* */ , /* */, cart, setCart] = useContext(ProductsContext)

    const [orderConfirmed,setOrderConfirmed] = useState(false);
    const [orderItems, /*setOrderItems*/] = useState(cart)
    let totalPrice = 0;
    let shippingPrice = 15;

    const userData = props.location.state

    let userCart = orderItems.map((item)=>{
        return(
            <li key={item.id}>
                <p>product id: {item.id} - {item.price}$</p>
                <p>{item.inCart} item of {item.name} size: {item.size}</p>
            </li>
        )
    })


    const handleClick = (e)=>{
        setOrderConfirmed(!orderConfirmed)

        // If payment success then delete shoppingcart items
        //render products before deleting
        setCart([]);
    }

    const calculateTotal = () =>{
        totalPrice = cart.reduce((total, item)=>{
            return total + item.price;
        },0)
        totalPrice=totalPrice+shippingPrice;
        return totalPrice;
    }

    
    calculateTotal()
    return(
        <div>
            {orderConfirmed ? <h1>Confirmed</h1> : <p>Check your credentials and confirm order</p>}
            <p>{userData.firstname} {userData.lastname}</p>
            <p>{userData.adress}</p>
            <p>{userData.zipcode}</p>
            <p>{userData.city}</p>
            <p>{userData.email}</p>
            <hr/>
            <ol>
                {userCart}
            </ol>
            <p>Shipping: {shippingPrice}$</p>
            <hr/>
            <p>Total: {totalPrice}$</p>
            {!orderConfirmed && <button onClick={handleClick}>Confirm order</button>}
        </div>
    )
}