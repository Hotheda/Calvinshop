import React, { useContext, useState } from "react"
import { ProductsContext } from "./ProductsContext"
import PayPalCheckout from "./PayPalCheckout"
//import ReactDomServer from "react-dom/server"


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

    let userCartMail = orderItems.map((item)=>{
        return(
            "<li key="+item.id+">"+
                "<p>product id: " + item.id +" - " + item.price +"$</p>"+
                "<p>"+item.inCart+" item of "+item.name+" size: "+item.size+"</p>"+
            "</li>"
        )
    })


    const handleClick = (e)=>{
        setOrderConfirmed(!orderConfirmed)

        // If payment success then delete shoppingcart items
        setCart([]);

        /* Send mail to user and company */
        sendMail()
        //payPalCheckout()
    }

    
    
    const calculateTotal = () =>{
        totalPrice = cart.reduce((total, item)=>{
            return total + (item.price*item.inCart );
        },0)
        totalPrice=totalPrice+shippingPrice;
        return totalPrice;
    }
    
    
    calculateTotal()
    
    
    const sendMail = ()=>{
        const YOUR_SERVICE_ID = "sendgrid_calvin";
        const YOUR_TEMPLATE_ID = "calvin_shop";
        const mailMessageCredentials = "<div> <p>" + userData.firstname + " " + userData.lastname + "</p>"+
                                    "<p>" + userData.adress + "</p> <p>" + userData.zipcode + "</p> <p>" + userData.city + "</p>"+
                                    "<p>" + userData.email + "</p> <hr/>"
    
        const mailMessageProducts ="<ul>" + userCartMail + "</ul> <p>Shipping: " + shippingPrice + "</p> <hr/> <p>Total: " +
                                    totalPrice + "</p> </div>"
        
        const MY_VARS = {
            /*from_name: "Calvin shop",*/
            mail_to: userData.email,
            message_html: mailMessageCredentials+mailMessageProducts
        }
        
        console.log(YOUR_SERVICE_ID,YOUR_TEMPLATE_ID, MY_VARS.message_html)
        
        //Code to send E-mail from EmailJS API
        /*
        window.emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, MY_VARS)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
                console.log(error.text);
            }
        );*/
    }

    return(
        <div>
            {orderConfirmed ? <h1>Confirmed!</h1> : <p>Check your credentials and confirm order!</p>}
            <p>{userData.firstname} {userData.lastname}</p>
            <p>{userData.adress}</p>
            <p>{userData.zipcode}</p>
            <p>{userData.city}</p>
            <p>{userData.email}</p>
            <hr/>
            <ul>
                {userCart}
            </ul>
            <p>Shipping: {shippingPrice}$</p>
            <hr/>
            <p>Total: {totalPrice}$</p>
            {!orderConfirmed && <button onClick={handleClick}>Confirm order</button> }
            <PayPalCheckout userData={userData}
                                                orderItems={orderItems}
                                                totalPrice={totalPrice}
                                                orderConfirmed={orderConfirmed}
                                                setOrderConfirmed={setOrderConfirmed.bind(this)}/>
        </div>
    )
}
