import React, { useContext } from "react"
import { ProductsContext } from "./ProductsContext"

export default function Confirm(props){
const [ /* */ , /* */, cart, /**/] = useContext(ProductsContext)

    console.log(props)
    const userData = props.location.state
    const userCart = cart.map((item)=>{
        return(
            <div key={item.id}>
                <p>product id: {item.id}</p>
                <p>{item.inCart} item of {item.name} size: {item.size}</p>
                <br/>
            </div>
        )        
    })
    return(
        <div>
            <p>Confirmed</p>
            <p>{userData.firstname} {userData.lastname}</p>
            <p>{userData.adress}</p>
            <p>{userData.email}</p>
            <br/>
            {userCart}
        </div>
    )
}