import React from "react"

export default function Confirm(props){
    console.log(props)
    return(
        <div>
            <p>Confirmed</p>
            {props.location.state.firstname}
        </div>
    )
}