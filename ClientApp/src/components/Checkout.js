import React, { useState } from "react"

export default function Checkout(props){
    const [customerData, setCustomerData] = useState({
        firstname: "",
        lastname: "",
        adress: "",
        zipcode: "",
        city: "",
        email: ""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.history.push("/confirm", customerData)
    }

    const handleChange = (e)=>{
        if(e.target.id==="firstName"){
            setCustomerData({...customerData, firstname: e.target.value})
        }else if(e.target.id==="lastName"){
            setCustomerData({...customerData, lastname: e.target.value})
        }else if(e.target.id==="customerAdress"){
            setCustomerData({...customerData, adress: e.target.value})
        }else if(e.target.id==="zipCode"){
            setCustomerData({...customerData, zipcode: e.target.value})
        }else if(e.target.id==="city"){
            setCustomerData({...customerData, city: e.target.value})
        }else if(e.target.id==="eMail"){
            setCustomerData({...customerData, email: e.target.value})
        }

        //console.log(customerData.firstname)
    }

    return(
        <div>
            <p>Orderform</p>
            <form>
                <div>
                    <p>Name</p>
                    <input id="firstName" placeholder="First name" onChange={handleChange} value={customerData.firstname}/>
                    <input id="lastName" placeholder="Last name" onChange={handleChange} value={customerData.lastname}/>
                    <br/>
                </div>
                <p>Adress</p>
                <input id="customerAdress" placeholder="Street adress" onChange={handleChange} value={customerData.adress}/>
                <p>Zip code</p>
                <input id="zipCode" placeholder="Zip code" onChange={handleChange} value={customerData.zipcode}/>
                <p>City</p>
                <input id="city" placeholder="City" onChange={handleChange} value={customerData.city}/>
                <p>E-mail</p>
                <input id="eMail" placeholder="E-mail" onChange={handleChange} value={customerData.email}/>
                <br/>
                <button onClick={handleSubmit}>Comfirm order</button>
            </form>
        </div>
    )
}