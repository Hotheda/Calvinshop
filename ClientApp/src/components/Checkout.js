import React, { useState, useEffect } from "react"

export default function Checkout(props){
    const [validated, setValidated] = useState(false)
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
    }

    const validateForm = ()=>{
        setValidated(false)
        if(customerData.firstname.length<2 ||
            customerData.lastname.length<2 ||
                customerData.adress.length<2 ||
                    customerData.city<2)
            return;
        if(customerData.email.length<5)
            return;
        setValidated(true)
    }
    
    useEffect(()=>{
        validateForm()
    })

    return(
        <div className="order_form">
            <h3>Input delivery adress</h3>
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
                <input id="zipCode" placeholder="Zip code" onChange={handleChange} value={customerData.zipcode} />
                <p>City</p>
                <input id="city" placeholder="City" onChange={handleChange} value={customerData.city}/>
                <p>E-mail</p>
                <input id="eMail" type="email" placeholder="E-mail" onChange={handleChange} value={customerData.email}/>
                <br/>
                {validated ? <button onClick={handleSubmit}>Next</button> : <p>input all your information</p>}
            </form>
        </div>
    )
}