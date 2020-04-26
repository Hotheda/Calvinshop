import React from "react"

export default function Orderform(){

    const handleclick = (e)=>{
        e.preventDefault()
        console.log("Click event")
    }

    return(
        <div>
            <p>Orderform</p>
            <form>
                <div>
                    <p>Name</p>
                    <input id="firstName" placeholder="First name"/>
                    <input id="lastName" placeholder="Last name"/>
                    <br/>
                </div>
                <p>Adress</p>
                <input id="customerAdress" placeholder="Street adress"/>
                <p>Zip code</p>
                <input id="zipCode" placeholder="Zip code"/>
                <p>City</p>
                <input id="city" placeholder="City"/>
                <p>E-mail</p>
                <input id="eMail" placeholder="E-mail"/>
                <br/>
                <button onClick={handleclick}>Comfirm order</button>
            </form>
        </div>
    )
}